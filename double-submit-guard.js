;(function ($) {
    "use strict";
    $.fn.doubleSubmitGuard = function () {
        var $form = $(this);

        $form.on('submit', function (e) {
            if ($form.data('submitted') === true) {
                e.preventDefault();
            } else {
                $form.attr('data-submitted', true);
            }
        });
        $form.find(':input').on('change', function () {
            $form.removeAttr('data-submitted');
            $form.attr('data-submitted', false);
        });

        return this;
    };
}(jQuery));