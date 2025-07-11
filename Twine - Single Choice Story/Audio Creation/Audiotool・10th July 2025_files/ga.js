(function () {
    if (window.location.hostname == 'localhost') {
        return;
    }

    var gaId = 'G-JBQGMZED6F';

    var scriptTag = document.createElement('script');
    scriptTag.setAttribute('src', 'https://www.googletagmanager.com/gtag/js?id=' + gaId);
    scriptTag.setAttribute("async", "true");
    scriptTag.onload = function () {
        window.dataLayer = window.dataLayer || [];
        function gtag() { dataLayer.push(arguments); }
        gtag('js', new Date());
        gtag('config', gaId);

        const sendAlive = () => {
            gtag('event', 'is_alive');
        }

        // 
        // Google only counts session duration if something happens.
        // if nothing happens until the user leaves, session duration is 0.
        // Thus, send `is_alive` event to google analytics every 30 seconds.
        setInterval(sendAlive, 30 * 1000);
    }


    const base = document.getElementsByTagName("base")[0];
    base.parentNode.insertBefore(scriptTag, base.nextSibling);
})();