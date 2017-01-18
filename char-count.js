;(function($, OAM) {
    OAM.ready(function() {
        $('[data-char-count]').each(function () {
            var maxlength = $(this).attr('maxlength');

            if (typeof maxlength !== typeof undefined && maxlength !== false) {
                var limit = parseInt(maxlength, 10),
                    $counter = $("<small>", {class: "charCount" }).html("<span class='charsLeft'>" + limit + "</span>/" + limit);

                $counter.insertBefore($(this));
                $(this).keyup(function() {
                    var left = limit - $(this).val().length;
                    if (left < 0) {
                        left = 0;
                    }
                    $counter.find('.charsLeft').text(left);
                });
            }
        });
    });
})(jQuery, window.OAM);
