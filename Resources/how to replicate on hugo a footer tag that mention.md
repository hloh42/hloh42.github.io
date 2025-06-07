<img src="https://r2cdn.perplexity.ai/pplx-full-logo-primary-dark%402x.png" class="logo" width="120"/>

# how to replicate on hugo a footer tag that mentions that this article is part of this topic series based on tagging or graphing or other technologies?

To create a **Hugo footer that mentions an article is part of a topic series**—and lists or links to other posts in that series, based on tagging or series taxonomy—you can use Hugo’s built-in taxonomy features and a partial template. Here’s a concise guide based on best practices and recent community solutions[^1]:

---

## **Step-by-Step: Series Footer in Hugo**

### **1. Define the Series Taxonomy**

In your `config.toml` or `config.yaml`, add a `series` taxonomy:

```toml
[taxonomies]
  tag = "tags"
  series = "series"
```


### **2. Add Series to Your Content Front Matter**

In each relevant Markdown file, specify the series:

```yaml
series: ["Your Series Name"]
```


### **3. Create a Series Partial**

Create a partial, e.g., `layouts/partials/series.html`, with logic to display series information:

```go
{{- with (.GetTerms "series") -}}
  {{- range . -}}
    <div class="series-footer">
      <span>This article is part of the <strong>{{ .Title }}</strong> series.</span>
      <details>
        <summary>All posts in this series</summary>
        <ol>
          {{- range .Pages.ByDate -}}
            <li>
              {{- if eq .File.UniqueID $.File.UniqueID -}}
                <b>{{ .Title }}</b>
              {{- else -}}
                <a href="{{ .Permalink }}">{{ .Title }}</a>
              {{- end -}}
            </li>
          {{- end -}}
        </ol>
      </details>
    </div>
  {{- end -}}
{{- end -}}
```

- This will show a footer with the series name and a collapsible list of all posts in the series, highlighting the current post[^1].


### **4. Include the Partial in Your Post Layout**

At the bottom of `layouts/_default/single.html` (or your post template), add:

```go
{{ if .Params.series }}
  {{ partial "series.html" . }}
{{ end }}
```


### **5. Style as Needed**

Add CSS to your theme for `.series-footer` as desired.

---

## **How It Works**

- **Detection:** The partial checks if the post is part of a series.
- **Listing:** It displays the series name and links to all posts in chronological order.
- **Highlighting:** The current post is bolded.
- **Navigation:** You can also add previous/next buttons if you want (see the full example in the source[^1]).

---

## **References**

- This approach is based on a widely recommended solution in the Hugo community, which you can see in detail (including navigation buttons) at [Cavelab’s blog][^1].

---

**In summary:**
Use Hugo’s `series` taxonomy, mark your posts, and add a partial to your footer to automatically display series membership and navigation. This is robust, flexible, and works with Hugo’s built-in taxonomy and templating system[^1].

<div style="text-align: center">⁂</div>

[^1]: https://blog.cavelab.dev/2025/01/hugo-navigate-series/

[^2]: https://discourse.gohugo.io/t/static-header-and-footer-for-hugo/29280

[^3]: https://discourse.gohugo.io/t/removing-the-footer-from-the-main-documentation-theme/20681

[^4]: https://github.com/gurusabarish/hugo-profile/issues/188

[^5]: https://stackoverflow.com/questions/69214343/load-script-in-footer-of-site-only-if-on-specific-layout-in-hugo

[^6]: https://www.youtube.com/watch?v=rZXoU-JTStU

[^7]: https://bit-101.com/blog/posts/2024-01-01/hugo-themes-part-3/

[^8]: https://hugo-in-action.foofun.cn/docs/part1/chapter4/2/

