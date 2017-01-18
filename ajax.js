;(function (global, $, undefined) {
    "use strict";

    global.ajaxRequest = function (url, data, callback, method) {
        method = (typeof method === 'undefined') ? 'GET' : method;
        var header = (method === 'POST') ? { 'X-CSRF-Token': $('meta[name="csrf-token"]').attr('content') } : '';

        return $.ajax({
            url: url,
            data: "data=" + data,
            type: method,
            headers: header
        })
            .done(function (data) {
                callback(undefined, data);
            })
            .fail(function () {
                callback("Error making ajax " + method + " request to:" + url, undefined);
            });
    };
})(window, jQuery);
