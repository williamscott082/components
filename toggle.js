;(function($, cheki, OAM) {
    OAM.ready(function() {
        //toggle hidden area
        $("[data-toggle]").each(function() {
            var element = $(this);
            var toggleTarget = element.data("toggle");

            element.on("click", function(e) {
                cheki.haltEvent(e);

                $(this)
                    .toggleClass("active");
                $(toggleTarget)
                    .toggleClass("active")
                    .toggleClass("hide");
            });
        });
    });
})(jQuery, window.cheki, window.OAM);
