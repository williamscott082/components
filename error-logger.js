;(function (global, navigator) {
    "use strict";
    global.cheki = global.cheki || {};

    var XMLHttpFactories = [
        function () {
            return new XMLHttpRequest();
        },
        function () {
            return new ActiveXObject("Msxml2.XMLHTTP");
        },
        function () {
            return new ActiveXObject("Msxml3.XMLHTTP");
        },
        function () {
            return new ActiveXObject("Microsoft.XMLHTTP");
        }
    ];

    var createXMLHTTPObject = function () {
        var xmlhttp = false;
        for (var i = 0; i < XMLHttpFactories.length; i++) {
            try {
                xmlhttp = XMLHttpFactories[i]();
            } catch (e) {
                continue;
            }
            break;
        }

        return xmlhttp;
    };

    global.cheki.logWarning = function (message, file, line, column, error) {
        // exit if no message or message indicates that it's non-actionable and no file is included
        if (
            !message
            || (
                !file
                && message.indexOf('Script error') > -1
            )
            || (/bingbot|bot|googlebot|crawler|spider|robot|crawling/i).test(navigator.userAgent) // if a crawler caused the error, do not log
        ) {
            return;
        }

        var requestParams = [
            'errorMsg=', encodeURIComponent(message),
            '&file=', encodeURIComponent(file),
            '&lineNumber=', encodeURIComponent(line),
            '&column=', encodeURIComponent(column),
            '&location=', encodeURIComponent(global.location.href),
            '&userAgent=', encodeURIComponent(navigator.userAgent),
            '&appName=', encodeURIComponent(navigator.appName),
            '&appCodeName=', encodeURIComponent(navigator.appCodeName),
            '&cookieEnabled=', encodeURIComponent(navigator.cookieEnabled ? '1' : '0'),
            '&platform=', encodeURIComponent(navigator.platform),
            '&language=', encodeURIComponent(navigator.language),
            '&browserTime=', encodeURIComponent(new Date().getTime())
        ];

        requestParams.push('&stackTrace=');
        if (
            typeof error !== 'undefined'
            && error
            && ('stack' in error)
        ) {
            requestParams.push(encodeURIComponent(error.stack));
        }

        var request = createXMLHTTPObject();
        if (request) {
            request.open('POST', '/javascript-logger', true);
            request.onreadystatechange = function () {};
            request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
            request.send(requestParams.join(''));
        }
    };

    try {
        global.onerror = global.cheki.logWarning;
    } catch (er) {
        //
    }
})(window, navigator);
