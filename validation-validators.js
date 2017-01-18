(function(global, $) {
    global.Parsley.addValidator("ifvalue", function (value, requirement) {
        var $targetElement = $('[name="' + requirement + '"]');
        if (value.toString().length) {
            $targetElement.attr("required", "required");
        } else {
            $targetElement.removeAttr("required");
        }
        $targetElement.parsley().validate(null, true);

        return true;
    }, 32);
})(window, jQuery);
