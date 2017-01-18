var googletag = googletag || {};
googletag.cmd = googletag.cmd || [];

OAM.ready(function() {
    (function($, OAM) {
        var $bannerAds = $('.bannerAd');
        var isMobile = $('body').is('.smart, .feature');

        if (!$bannerAds.length) {
            return;
        }

        var initialiseAds = function() {
            $bannerAds.each(function() {
                var $bannerAd = $(this);
                var data = $bannerAd.data();

                googletag.cmd.push(function () {
                    googletag.defineSlot(
                        data.banneradheadertagsnippet,
                        [data.width, data.height],
                        data.banneradsnippet
                    ).addService(googletag.pubads());

                    googletag.pubads().enableSingleRequest();
                    googletag.enableServices();
                });
            });
        };

        var displayAds = function() {
            googletag.cmd.push(function () {
                $bannerAds.each(function() {
                    googletag.display($(this).data('banneradsnippet'));
                });
            });
        };

        var loadAds = function() {
            initialiseAds();
            displayAds();
            OAM.script('https://www.googletagservices.com/tag/js/gpt.js');
        };

        var bannerAdsInViewport = function() {
            var inViewport = false;
            $bannerAds.filter(':visible').each(function() {
                if ($(this).visible(true)) {
                    inViewport = true;
                }
            });

            return inViewport;
        };

        if (bannerAdsInViewport() || OAM.isOperaMini() || isMobile) {
            loadAds();
        } else {
            $(window).on('scroll.loadAds', $.debounceLast(200, this, function() {
                if (bannerAdsInViewport()) {
                    $(window).off('scroll.loadAds');
                    loadAds();
                }
            }));
        }
    })(jQuery, window.OAM);
});
