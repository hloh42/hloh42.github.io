<img src="https://r2cdn.perplexity.ai/pplx-full-logo-primary-dark%402x.png" class="logo" width="120"/>

# can I export steam api sales analytics data into csv?

You **cannot export Steam sales analytics data directly via the Steam API**-the API does not provide access to sales, financial, or visibility data for games[^1][^4]. Steamworks publishers and developers can only download sales and activation reports as CSV files **manually** from the Steamworks web portal[^1][^4].

**Key points:**

- **No API access:** Steam does not currently offer an API endpoint for exporting sales analytics or financial data[^1][^4].
- **Manual CSV export:** You can log into the Steamworks dashboard and download sales, activation, and wishlist reports as CSV files[^1][^4].
- **Automation not supported:** There is no officially supported way to automate this process; developers have requested this feature, but as of now, it is not available[^1].
- **Other data:** For public data like app/game info, prices, and user libraries, you can use the Steam API or third-party APIs and export the results to CSV using custom scripts[^3][^5][^7].

**Summary:**
You can only export Steam sales analytics data as CSV by manually downloading reports from Steamworks-not via the API. For other types of Steam data (like game lists or app info), you can use the API and convert the results to CSV with your own code[^3][^5][^7].

<div style="text-align: center">⁂</div>

[^1]: https://www.reddit.com/r/Steam/comments/10q1yk3/sales_activation_reports_via_steamworks_api_or/

[^2]: https://steamcommunity.com/discussions/forum/0/3183486955454496586/

[^3]: https://nik-davis.github.io/posts/2019/steam-data-collection/

[^4]: https://gamedev.stackexchange.com/questions/208982/does-steam-have-an-api-for-sales-data

[^5]: https://stackoverflow.com/questions/29583145/steam-api-type-error-and-turning-json-into-csv

[^6]: https://gamedev.stackexchange.com/questions/188537/find-format-of-data-from-steam-api-using-python

[^7]: https://www.steamgifts.com/discussion/E66to/export-all-the-owned-steam-games-titles-to-an-excel-text-file

[^8]: https://steamcommunity.com/discussions/forum/10/3729575042629024268/

