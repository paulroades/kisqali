(function ($) {
    //these parameters are global for all popups
    window.defs = window.defs ? window.defs : {selectorPopup: '.morph-content', overlayClass: 'page-overlay', activeClass: 'active', closeIcon: '.icon-close'};
    window.globals = {
        initDefaults: function ($popup, popupname) {
            //you declare popupname not to overwrite the value if we have a few poups on page
            window[popupname] = {
                $popup: $popup,
                $content: $popup.find('.content-style-overlay')
            }
        },
        updatePopupVerticalPosition: function (popupname) {
            var
                doc = document.documentElement,
                viewPortHeight = Math.max(doc.clientHeight, window.innerHeight || 0),
                topScrollOffset = (window.pageYOffset || doc.scrollTop) - (doc.clientTop || 0),
                offsetHeight = window[popupname].$content.outerHeight();

            if (viewPortHeight > offsetHeight)
                window[popupname].$popup.css({ top: topScrollOffset + viewPortHeight / 2 - offsetHeight / 2 });
            else
                window[popupname].$popup.css({ top: topScrollOffset });
        },
        openOverlay: function (popupname) {
            $('body').addClass(defs.overlayClass);
            window[popupname].$popup.addClass(defs.activeClass);
        },
        addRemoveClasses: function (overlayisClicked, $currentpopup) {
            var
                $popup = $(defs.selectorPopup + '.' + defs.activeClass),
                onePopupisActive = $popup.length === 1 ? true : false,
                $currentpopup = overlayisClicked ? $popup : $currentpopup;
            if (onePopupisActive && !overlayisClicked || overlayisClicked)
                $('body').removeClass(defs.overlayClass);
            $currentpopup.removeClass(defs.activeClass); 
            if ($currentpopup.is('.popup-dynamic'))
                $currentpopup.remove();
        },
        closeOverlay: function (popupname) {
            var $currentpopup = window[popupname].$popup;
            globals.addRemoveClasses(false, $currentpopup);
        },
        closeAll: function () {
            globals.addRemoveClasses(true);
        },
        popupInit: function ($popup, popupname) {
            globals.initDefaults($popup, popupname);
            globals.updatePopupVerticalPosition(popupname);
            $popup.on('click', defs.closeIcon, function () {
                globals.closeOverlay(popupname);
            });
            $(document).on('keydown click', function (e) {
                if ($(e.target).hasClass(defs.overlayClass) && e.type === 'click' || e.keyCode === 27)
                    globals.closeAll();
            });
        }
    }
})(jQuery);




