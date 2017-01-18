;(function (global, Cookies, localStorage, Modernizr) {
    "use strict";
    global.Storage = function Storage() {
        var localStorageSupported = Modernizr.localstorage;
        var cookiesSupported = Modernizr.cookies;

        if (!localStorageSupported && !cookiesSupported) {
            return;
        }

        return {
            setItem: function (key, value, expire) {
                expire = expire || 999;
                if (value !== "undefined" && value !== null) {
                    if (typeof value === 'object') {
                        value = JSON.stringify(value);
                    }
                    if (localStorageSupported) {
                        localStorage.setItem(key, value);
                        return true;
                    }
                    if (cookiesSupported) {
                        Cookies.set(key, value, {expires: expire});
                        return true;
                    }
                }

                return false;
            },
            getItem: function (key) {
                var item = false;
                if (localStorageSupported) {
                    item = localStorage.getItem(key);
                } else if (cookiesSupported) {
                    item = Cookies.get(key);
                }
                if (typeof item === 'object') {
                    item = JSON.parse(item);
                }

                return item;
            },
            removeItem: function (key) {
                if (localStorageSupported) {
                    localStorage.removeItem(key);
                    return true;
                }
                if (cookiesSupported) {
                    Cookies.remove(key);
                    return true;
                }

                return false;
            }
        };
    };

})(window, window.Cookies, window.localStorage, window.Modernizr);