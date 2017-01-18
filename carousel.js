;(function (global, $) {
    "use strict";
    global.cheki = global.cheki || {};

    var configs = {
        featuredCars: {
            accessibility: true,
            slidesToShow: 5,
            slidesToScroll: 1,
            arrows: true,
            swipe: true,
            autoplay: true,
            autoplaySpeed: 7000,
            responsive: [
                {
                    breakpoint: 640,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 960,
                    settings: {
                        slidesToShow: 4,
                        slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 1040,
                    settings: {
                        slidesToShow: 5,
                        slidesToScroll: 1
                    }
                }
            ]
        },
        similarCars: {
            accessibility: true,
            slidesToShow: 3,
            slidesToScroll: 1,
            arrows: true,
            centerMode: true,
            swipe: true,
            responsive: [
                {
                    breakpoint: 640,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 960,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 1040,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1
                    }
                }
            ]
        },
        listingMainCars: {
            accessibility: false,
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: true,
            fade: true,
            centerMode: true,
            swipe: true,
            dots: true,
            adaptiveHeight: false
        },
        listingThumbCars: {
            slidesToShow: 8,
            slidesToScroll: 1,
            focusOnSelect: true,
            centerMode: false
        },
        partnerCars: {
            accessibility: true,
            slidesToShow: 5,
            slidesToScroll: 1,
            dots: false,
            centerMode: false,
            arrows: true,
            focusOnSelect: true,
            variableWidth: true
        },
        landingGalleryMainNewCars: {
            accessibility: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            fade: true,
            centerMode: false,
            swipe: true,
            dots: false,
            adaptiveHeight: true,
            autoplay: true,
            autoplaySpeed: 10000
        },
        landingGalleryThumbNewCars: {
            slidesToShow: 5,
            slidesToScroll: 1,
            focusOnSelect: true,
            centerMode: false
        },
        listingMainNewCars: {
            accessibility: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: true,
            swipe: true,
            autoplay: true,
            autoplaySpeed: 7000,
            responsive: [
                {
                    breakpoint: 640,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: false,
                        arrows: false
                    }
                },
                {
                    breakpoint: 1040,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: false,
                        arrows: false
                    }
                }
            ]
        },
        listingCardNewCars: {
            accessibility: true,
            slidesToShow: 4,
            slidesToScroll: 1,
            arrows: true,
            swipe: true,
            autoplay: true,
            autoplaySpeed: 7000,
            responsive: [
                {
                    breakpoint: 640,
                    settings: {
                        accessibility: true,
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        arrows: true,
                        swipe: true
                    }
                },
                {
                    breakpoint: 960,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: false,
                        arrows: true
                    }
                },
                {
                    breakpoint: 1040,
                    settings: {
                        accessibility: true,
                        slidesToShow: 4,
                        slidesToScroll: 1,
                        arrows: true,
                        swipe: true
                    }
                }
            ]
        },
        listingBrandsNewCars: {
            accessibility: true,
            slidesToShow: 5,
            slidesToScroll: 1,
            arrows: true,
            centerMode: false,
            swipe: true,
            autoplay: true,
            autoplaySpeed: 7000,
            responsive: [
                {
                    breakpoint: 640,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 960,
                    settings: {
                        slidesToShow: 4,
                        slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 1040,
                    settings: {
                        slidesToShow: 5,
                        slidesToScroll: 1
                    }
                }
            ]
        },
        listingViewMainNewCars: {
            accessibility: true,
            adaptiveHeight: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: true,
            fade: true,
            swipe: true
        },
        listingViewThumbsNewCars: {
            slidesToShow: 6,
            slidesToScroll: 1,
            centerMode: false,
            focusOnSelect: true,
            rows: 1
        },
        listingViewVideosNewCars: {
            accessibility: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: true,
            fade: true,
            centerMode: true,
            centerPadding: '0px',
            swipe: true
        }
    };

    global.cheki.carousel = function ($el, configName, opts) {
        var config = $.extend(true, {}, configs[configName], opts);
        var autoplay = config.autoplay || false;

        $el.slick(config);

        if (autoplay) {
            $el.data('carouselIsPlaying', true);

            $(global).on('scroll', $.debounceLast(500, this, function() {
                var isVisible = $el.is(':visible') && $el.visible(true);
                var isPlaying = $el.data('carouselIsPlaying');

                if (isVisible && !isPlaying) {
                    $el.data('carouselIsPlaying', true).slick('slickPlay');
                }

                if (!isVisible && isPlaying) {
                    $el.data('carouselIsPlaying', false).slick('slickPause');
                }
            }));
        }

        return $el;
    };
})(window, jQuery);
