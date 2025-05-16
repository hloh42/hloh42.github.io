<img src="https://r2cdn.perplexity.ai/pplx-full-logo-primary-dark%402x.png" class="logo" width="120"/>

# google analytics intergration hugo guide

Here’s a **step-by-step guide to integrating Google Analytics (GA4 or Universal Analytics) with your Hugo site** using best practices as of 2025:

---

## **1. Create a Google Analytics Property**

- Go to [Google Analytics](https://analytics.google.com/) and sign in.
- Create a new property for your website.
- For GA4, you’ll get a **Measurement ID** (format: `G-XXXXXXXX`); for Universal Analytics, it’s a Tracking ID (`UA-XXXXXX-X`)[^1][^5][^6].

---

## **2. Add Your Tracking ID to Hugo’s Config**

- Open your Hugo site’s `config.toml` (or `config.yaml`).
- Add your Google Analytics ID:

```toml
googleAnalytics = "G-XXXXXXXX"
```

- Replace with your actual Measurement ID or Tracking ID[^1][^5][^6].

---

## **3. Use Hugo’s Built-in Google Analytics Template (Recommended)**

- Hugo provides a built-in template for Google Analytics.
- Most modern Hugo themes automatically include this template if `googleAnalytics` is set in your config.
- **No extra steps are needed if your theme supports this.**

---

## **4. If Your Theme Doesn’t Support It, Add the Template Manually**

- Copy your theme’s `layouts/partials/header.html` to your site’s `/layouts/partials/header.html` (so you don’t modify the theme directly)[^1][^5].
- In your custom `header.html`, add this inside the `<head>` section:

```go-html-template
{{ template "_internal/google_analytics.html" . }}
```

Or for asynchronous loading:

```go-html-template
{{ template "_internal/google_analytics_async.html" . }}
```

- This will inject the correct GA tracking code based on your config[^1][^5].

---

## **5. (Alternative) Add GA4 Script Directly**

If you want to use the latest GA4 script directly, create a partial (e.g., `layouts/partials/analytics.html`) and include:

```go-html-template
{{ with site.Params.googleAnalytics }}
<script async src="https://www.googletagmanager.com/gtag/js?id={{ . }}"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', '{{ . }}');
</script>
{{ end }}
```

Then add `{{ partial "analytics.html" . }}` in your base template’s `<head>` section[^2][^5][^6][^8].

---

## **6. Build and Deploy Your Site**

- Run `hugo` to generate your site.
- Deploy as usual.
- Visit your site and check the “Realtime” section in Google Analytics to confirm tracking is working[^1][^5][^6].

---

## **Troubleshooting Tips**

- Use a private/incognito window or disable ad/script blockers to verify tracking[^1].
- Use browser developer tools to check if the GA script is present in your site’s HTML[^6].
- Make sure you’re using the correct ID format (`G-` for GA4, `UA-` for Universal Analytics).

---

## **Summary Table**

| Step | Action |
| :-- | :-- |
| Create GA property | Get Measurement/Tracking ID from Google Analytics |
| Edit Hugo config | Add `googleAnalytics = "G-XXXXXXXX"` in config.toml |
| Built-in template | Most themes auto-inject GA if config is set |
| Manual template (if needed) | Add `{{ template "_internal/google_analytics.html" . }}` |
| Custom GA4 script (optional) | Add GA4 script in a partial and include in `<head>` |
| Verify | Check GA dashboard for hits |


---

**References:**
[^1][^2][^5][^6][^8] - All confirm and detail these steps for both Universal Analytics and GA4.

---

**In summary:**
For most Hugo sites, just add your GA ID to `config.toml` and Hugo will handle the rest. For custom themes or advanced use, manually add the template or GA4 script in your header partial.

<div style="text-align: center">⁂</div>

[^1]: https://gideonwolfe.com/posts/sysadmin/hugo/hugogoogleanalytics/

[^2]: https://brightzheng100.github.io/diary/howto-integrate-google-analytics-4-with-hugo-website/

[^3]: https://discourse.gohugo.io/t/add-google-analytics/44211

[^4]: https://dev.to/charly3pins/how-to-add-google-analytics-to-your-hugo-site-2i7e

[^5]: https://staticmania.com/blog/google-analytics-on-hugo

[^6]: https://bossagyu.com/en/blog/003-google-analytics/

[^7]: https://www.rudderstack.com/guides/how-to-event-stream-data-from-your-hugo-site-to-google-analytics-using-rudderstack/

[^8]: https://discourse.gohugo.io/t/how-to-make-site-updates-to-support-google-analytics-4/38271

