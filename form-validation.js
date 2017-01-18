;(function ($, OAM) {
    "use strict";
    OAM.ready(function () {
        OAM.script(OAM.scripts.validator).wait(function () {
            $("[data-parsley-ifvalue]").attr("data-parsley-validate-if-empty", "");

            //allow only numeric input
            $('body').not('.smart').find('[data-amount-input]').each(function () {
                $(this).number(true, 0);
            });

            $('form')
                .find('div.hide').each(function () {
                    var $this = $(this);

                    if ($this.find('.error').length > 0) {
                        $this.removeClass('hide');
                    }
                }).end()
                .parsley({
                    trigger: "change submit",
                    errorClass: "error",
                    successClass: "success",
                    errorsWrapper: "<div></div>",
                    errorTemplate: "<small class=\"error\"></small>"
                });
        });
    });
}(jQuery, window.OAM));
