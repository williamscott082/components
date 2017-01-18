;(function (document, global, Modernizr, Cookies) {
    var RESS = function RESS(Modernizr, window) {
        Modernizr.addTest("highres", function () {
            var dpr = window.devicePixelRatio || (window.screen.deviceXDPI / window.screen.logicalXDPI) || 1;
            return (dpr > 1);
        });

        this.clientInfo = {
            windowHeight: window.innerHeight,
            fontFace: Modernizr.fontface,
            highRes: Modernizr.highres,
            backgroundSize: Modernizr.backgroundsize,
            borderRadius: Modernizr.borderradius,
            flexBox: Modernizr.flexbox,
            rgba: Modernizr.rgba,
            opacity: Modernizr.opacity,
            textShadow: Modernizr.textshadow,
            generatedContent: Modernizr.generatedcontent,
            cssTransforms: Modernizr.csstransforms,
            cssTransitions: Modernizr.csstransitions,
            history: Modernizr.history,
            hashchange: Modernizr.hashchange,
            canvas: Modernizr.canvas,
            autocomplete: Modernizr.input.autocomplete,
            placeholder: Modernizr.input.placeholder,
            multiple: Modernizr.input.multiple,
            search: Modernizr.input.search,
            tel: Modernizr.input.tel,
            url: Modernizr.input.url,
            datetime: Modernizr.input.datetime,
            date: Modernizr.input.date,
            number: Modernizr.input.number,
            color: Modernizr.input.color,
            range: Modernizr.input.range,
            sessionStorage: Modernizr.sessionstorage,
            localStorage: Modernizr.localstorage,
            geolocation: Modernizr.geolocation,
            svg: Modernizr.svg,
            touch: Modernizr.touch,
            battery: Modernizr.battery,
            cookies: Modernizr.cookies,
            lastChild: Modernizr.lastchild,
            mediaQueries: Modernizr.mediaqueries,
            fileInput: Modernizr.fileinput
        };

        this.updateItem();
    };

    RESS.prototype = {
        'refreshViewportWidth': function refreshClientInfo() {
            this.clientInfo.windowWidth =
                    global.innerWidth
                    || document.documentElement.clientWidth + 21
                    || document.body.clientWidth;

            if (this.getItem('_ress')) {
                var storedWidth = this.getItem('_ress');
                return storedWidth.windowWidth !== this.clientInfo.windowWidth;
            }
            return true;
        },
        'updateItem': function updateItem() {
            if (this.refreshViewportWidth()) {
                this.writeItem('_ress', this.clientInfo, 999, true);
            }
        },
        'getItem': function getItem(key) {
            return Cookies.get(key);
        },
        'writeItem': function writeItem(key, value) {
            Cookies.set(key, value);

            return true;
        }
    };

    global.RESS = global.RESS || new RESS(Modernizr, global);

})(document, window, window.Modernizr, window.Cookies);