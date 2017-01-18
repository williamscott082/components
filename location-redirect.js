;(function (OAM, $, global) {
    "use strict";
    OAM.ready(function () {
        //toggle hidden area
        $("[data-href]").each(function () {
            var $this = $(this),
                href = $this.data('href');

            $this.on('click', function (e) {
                if (
                    !$(e.target).is('a')
                        && !$(e.target).is(':input')
                        && !$(e.target).is('[data-reveal-id]')
                ) {
                    e.preventDefault();
                    global.location.href = href;
                }
            });
        });
    });
})(window.OAM, jQuery, window);