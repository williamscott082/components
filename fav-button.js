(function (global, $) {
    "use strict";

    global.cheki = global.cheki || {};

    global.cheki.favListing = function () {
        var phoneHome = global.ajaxRequest;
        var setFav = function ($clickedListing, listingID) {
            phoneHome('/favourites', listingID, function (error, response) {
                if (response) {
                    $clickedListing.addClass('active');
                } else if (error) {
                    global.alert(error);
                }
            }, 'POST');
        };
        var removeFav = function ($clickedListing, listingID) {
            phoneHome('/favourites/' + listingID, listingID + '&_method=DELETE', function (error, response) {

                if (response) {
                    $clickedListing.removeClass('active');
                } else if (error) {
                    global.alert(error);
                }
            }, 'POST');
        };

        return {
            setFavs: function (listings) {
                var $allListings = listings;
                var listingIDs = [];
                var obj = this;

                $allListings.each(function () {
                    listingIDs.push($(this).data('favbutton'));
                });

                phoneHome('/favourites', listingIDs, function (error, response) {
                    if (response) {
                        var result = response.map(function (el) {
                            return parseInt(el, 10);
                        });
                        $allListings.each(function () {
                            if ($.inArray($(this).data('favbutton'), result) !== -1) {
                                $(this).addClass('active');
                            }
                            obj.setTitle(!$(this).hasClass('active'), $(this));
                        });
                    }
                });
            },
            clickFav: function (event, clickedListing) {
                var $clickedListing = $(clickedListing);
                var listingID = $clickedListing.data('favbutton');

                global.cheki.haltEvent(event);
                this.setTitle($clickedListing.hasClass('active'), $clickedListing);

                return $clickedListing.hasClass('active')
                    ? removeFav($clickedListing, listingID)
                    : setFav($clickedListing, listingID);
            },
            setTitle: function (isFavourite, $listing) {
                var titleText = $listing.find('a').attr('title');

                if (isFavourite) {
                    $listing.find('a').attr('title', titleText.replace('Remove', 'Add').replace('from', 'to'));
                } else {
                    $listing.find('a').attr('title', titleText.replace('Add', 'Remove').replace('to', 'from'));
                }
            }
        };
    };
}(window, jQuery));
