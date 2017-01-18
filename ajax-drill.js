;(function (global, $, cheki) {
    "use strict";

    global.cheki = global.cheki || {};
    if (global.ajaxRequest === 'undefined') {
        cheki.logWarning('ajaxRequest not available in ajax-drill.js');
        // fail silently
        return;
    }

    global.cheki.ajaxDrill = function () {
        var buildMarkup = function (response) {
            var $options = [];
            $.each(response, function (i, item) {
                $options.push(
                    $('<option/>', {
                        text: item.title,
                        value: item.id
                    })
                );
            });
            return $options;
        };
        var populateTarget = function ($options, $target) {
            var textPleaseSelect = "Please Select";
            var textNoOptionsAvailable = "No Options Available";

            $target.find("option[value!='']").remove();
            $target.find("option[value='']").text(
                $options.length > 0
                    ? textPleaseSelect
                    : textNoOptionsAvailable
            );
            $target
                .append($options)
                .prop('disabled', false);

            if ($target.data('selected') !== 'undefined') {
                $target
                    .val($target.data('selected'))
                    .change();
            }
            if ($target.data('target') === 'undefined') {
                return true;
            }
        };
        var clearTargetChain = function ($target) {
            var nextTarget = $target.data('target');

            if (!nextTarget) {
                return;
            }
            $(nextTarget)
                .prop('disabled', true)
                .find('option:selected').text('Please Select Previous');

            clearTargetChain($(nextTarget));
        };

        return {
            init: function ($this) {
                var url = $this.data('url') || global.location.href,
                    data = $this.val(),
                    $target = $($this.data('target'));
                $target
                    .prop('disabled', true)
                    .find('option:selected').text('Loading...');

                if ($target.val() !== "") {
                    clearTargetChain($target);
                }
                global.ajaxRequest(url, data, function (error, response) {
                    if (!response) {
                        return false;
                    }
                    populateTarget(buildMarkup(response), $target);
                });
            }
        };
    };
})(window, jQuery, window.cheki);
