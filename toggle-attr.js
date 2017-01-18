/**
 * Toggles html attributes by setting up data tags
 *
 * e.g.
 *
 * <input type="checkbox" data-toggle-attr="required" data-toggle-target="some-other-html-element" />
 *
 * Available data tags:
 *
 *  * data-toggle-event - the interaction event to bind to, defaults to "click"
 *  * data-toggle-attr - the html attribute to add or remove
 *  * data-toggle-attr-value - the value to set, defaults to empty string
 *  * data-toggle-target - the target html element defaults to self $(this)
 */
;(function($, OAM){
    OAM.ready(function() {
        $("[data-toggle-attr]").each(function(i, el) {
            var toggleEvent = $(el).attr("data-toggle-event") || "click";
            $(this).on(toggleEvent, function() {
                var toggleAttr = $(this).attr("data-toggle-attr") || "";
                var toggleAttrValue = $(this).attr("data-toggle-attr-value") || "";
                var $element = $($(this).attr("data-toggle-target"));
                if($element.length === 0) {
                    $element = $(this);
                }

                if ($element.is("[" + toggleAttr + "]")) {
                    $element.removeAttr(toggleAttr);
                } else {
                    $element.attr(toggleAttr, toggleAttrValue);
                }
            });
        });
    });
}(jQuery, window.OAM));
