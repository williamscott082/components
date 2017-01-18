(function (window, $) {
    "use strict";
    window.cheki = window.cheki || {};

    $.extend(window.cheki, {
        haltEvent: function (e) {
            if (e.preventDefault) {
                e.preventDefault();
            }
            if (e.stopImmediatePropagation) {
                e.stopImmediatePropagation();
            }
            if (e.stopPropagation) {
                e.stopPropagation();
            }
            if (e.stop) {
                e.stop();
            }
            e.returnValue = false;

            return false;
        }
    });
}(window, jQuery));
