<img src="https://r2cdn.perplexity.ai/pplx-full-logo-primary-dark%402x.png" class="logo" width="120"/>

# Can you adopt your instructions for a windows build?

Yes, you can **adapt the GitHub Actions CI/CD workflow for a Hugo site to build on Windows**. GitHub Actions supports Windows runners (`runs-on: windows-latest`), and the popular [peaceiris/actions-hugo](https://github.com/marketplace/actions/hugo-setup) action works on Windows, Linux, and macOS[^1][^4].

Below is a **Windows-adapted workflow** for deploying a Hugo site to GitHub Pages:

---

## **1. Create the Workflow File**

In your Hugo site repo, create `.github/workflows/gh-pages.yml`.

---

## **2. Example Windows Workflow for Hugo + GitHub Pages**

```yaml
name: Hugo Build and Deploy (Windows)

on:
  push:
    branches:
      - main
  workflow_dispatch:

jobs:
  build-deploy:
    runs-on: windows-latest

    steps:
      - name: Checkout repository
        uses: actions/checkout@v4

      - name: Setup Hugo
        uses: peaceiris/actions-hugo@v3
        with:
          hugo-version: '0.119.0'    # Use your preferred Hugo version
          extended: true

      - name: Build
        run: hugo --minify

      - name: Deploy
        uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./public
```


---

## **3. Key Points**

- **`runs-on: windows-latest`** ensures the build runs on a Windows VM[^1][^4][^7].
- The [peaceiris/actions-hugo](https://github.com/marketplace/actions/hugo-setup) action supports Windows, so no changes are needed in how you set up Hugo[^1][^4].
- The deploy step uses the same popular action for GitHub Pages deployment.
- This workflow triggers on every push to `main` and can also be run manually.

---

## **4. Additional Notes**

- If you use Hugo Modules or need caching, you may need to adjust cache paths for Windows (e.g., `C:\Users\runneradmin\.cache\hugo_cache`).
- If you use SSH deploy keys or custom scripts, ensure your Windows paths and commands are correct[^5][^7].
- For most Hugo sites, the above workflow will work out of the box on Windows runners.

---

## **References**

- [peaceiris/actions-hugo supports Windows runners][^1][^4]
- [Example Windows SSH key setup][^5][^7]

---

**In summary:**
Just set `runs-on: windows-latest` in your workflow YAML. All major Hugo GitHub Actions (including build and deploy) work on Windows, and the rest of the workflow remains the same as for Linux or macOS runners[^1][^4][^7].

<div style="text-align: center">⁂</div>

[^1]: https://github.com/marketplace/actions/hugo-setup

[^2]: https://belief-driven-design.com/deploying-hugo-with-github-actions-a78c2117aae/

[^3]: https://gohugo.io/hosting-and-deployment/hosting-on-github/

[^4]: https://cicube.io/workflow-hub/peaceiris-actions-hugo/

[^5]: https://hongtaoh.com/en/2021/04/05/hugo-deploy-github-actions/

[^6]: https://github.com/marketplace/actions/hugo-build

[^7]: https://www.morling.dev/blog/automatically-deploying-hugo-website-via-github-actions/

[^8]: https://github.com/DanielBrett/Setting-Up-An-Automated-Hugo-Site

