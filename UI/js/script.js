// =Add fade depending on scroll on hero image
(function () {
    $.throttle = jq_throttle = function (delay, no_trailing, callback, debounce_mode) {
        // After wrapper has stopped being called, this timeout ensures that
        // `callback` is executed at the proper times in `throttle` and `end`
        // debounce modes.
        var timeout_id,

          // Keep track of the last time `callback` was executed.
          last_exec = 0;

        // `no_trailing` defaults to falsy.
        if (typeof no_trailing !== 'boolean') {
            debounce_mode = callback;
            callback = no_trailing;
            no_trailing = undefined;
        }

        // The `wrapper` function encapsulates all of the throttling / debouncing
        // functionality and when executed will limit the rate at which `callback`
        // is executed.
        function wrapper() {
            var that = this,
              elapsed = +new Date() - last_exec,
              args = arguments;

            // Execute `callback` and update the `last_exec` timestamp.
            function exec() {
                last_exec = +new Date();
                callback.apply(that, args);
            };

            // If `debounce_mode` is true (at_begin) this is used to clear the flag
            // to allow future `callback` executions.
            function clear() {
                timeout_id = undefined;
            };

            if (debounce_mode && !timeout_id) {
                // Since `wrapper` is being called for the first time and
                // `debounce_mode` is true (at_begin), execute `callback`.
                exec();
            }

            // Clear any existing timeout.
            timeout_id && clearTimeout(timeout_id);

            if (debounce_mode === undefined && elapsed > delay) {
                // In throttle mode, if `delay` time has been exceeded, execute
                // `callback`.
                exec();

            } else if (no_trailing !== true) {
                // In trailing throttle mode, since `delay` time has not been
                // exceeded, schedule `callback` to execute `delay` ms after most
                // recent execution.
                //
                // If `debounce_mode` is true (at_begin), schedule `clear` to execute
                // after `delay` ms.
                //
                // If `debounce_mode` is false (at end), schedule `callback` to
                // execute after `delay` ms.
                timeout_id = setTimeout(debounce_mode ? clear : exec, debounce_mode === undefined ? delay - elapsed : delay);
            }
        };

        // Set the guid of `wrapper` function to the same of original callback, so
        // it can be removed in jQuery 1.4+ .unbind or .die by using the original
        // callback as a reference.
        if ($.guid) {
            wrapper.guid = callback.guid = callback.guid || $.guid++;
        }

        // Return the wrapper function.
        return wrapper;
    };
}());
(function () {
    var doc = document.documentElement;
    var fader = document.querySelector('.hero-img-fader');

    var updatOpacity = function () {
        if (fader !== null) {
            var topScrollOffset = (window.pageYOffset || doc.scrollTop) - (doc.clientTop || 0);
            fader.style.opacity = topScrollOffset / 250;
        }
    };
    updatOpacity();

    $(window).scroll($.throttle(250, updatOpacity));
}());
// Add fade depending on scroll on hero image

// Add/remove classes for menu and search depending on scroll
(function () {
    function getScrollTop() {
        if (typeof pageYOffset != 'undefined') {
            //most browsers except IE before #9
            return pageYOffset;
        }
        else {
            var B = document.body; //IE 'quirks'
            var D = document.documentElement; //IE with doctype
            D = (D.clientHeight) ? D : B;
            return D.scrollTop;
        }
    }
    var updateClass = function (className, height) {
        var body = window.document.body;
        if (getScrollTop() >= height) {
            body.classList.add(className);
        } else {
            body.classList.remove(className);
        }
    }
    var updateClasses = function () {
        if ($('.search-control-holder').length) {
          updateClass('mobile-search-subpage-is-ready', 24);
          updateClass('mobile-search-is-ready', 34);
          updateClass('search-is-ready', 190);
          updateClass('search-subpage-is-ready', 160);
        }
        if($('.nav-mega-wrapper').length)
          updateClass('menu-is-ready', 210);
    };
    updateClasses();
    $(window).scroll($.throttle(250, updateClasses));
}());
// Add/remove classes for menu and search depending on scroll

// Add styles for a category filter
$(function () {
    var $categoryFilterSelector = $('.category-filter');
    if ($categoryFilterSelector.length > 0) {
        $categoryFilterSelector.select2({
            minimumResultsForSearch: Infinity,
            dropdownAutoWidth: 'true'
        });
    }    
});
// Add styles for a category filter

// Add styles for language selector
$(function () {
    var $languageSelector = $('.language-selector');
    var $languageSelectorWrapper = $languageSelector.parent();
    $languageSelector.select2({
        minimumResultsForSearch: Infinity,
        dropdownAutoWidth: 'true'
    });

    var $renderedItem = $languageSelectorWrapper.find('.select2-selection__rendered');
    var renderedItemText = $renderedItem.text();
    $languageSelectorWrapper.prepend('<div class="language-selector-spacer"></div>');
    var $spacer = $languageSelectorWrapper.find('.language-selector-spacer');
    $spacer.text(renderedItemText);

    $languageSelector.on('select2:open', function () {
        $('body').addClass('language-selector-open');
    });

    $languageSelector.on('select2:close', function () {
        $('body').removeClass('language-selector-open');
        var renderedItemText = $renderedItem.text();
        $spacer.text(renderedItemText);
    });

});
// Add styles for language selector

// Add three dots for long text
(function () {
    // =Dot dot dot
    var isDots = $('.events, .content-restrict').length;
    var isEditView = $("body").hasClass("episerver");

    if (isDots && !isEditView) {
        var applyDots = function () {
            $(".events .event .event-copy, .content-restrict").dotdotdot({
                height: null
            });
        };
        setTimeout(applyDots, 100);
        $(window).resize($.throttle(250, applyDots));

    }
    // Dot dot dot
})();
// Add three dots for long text

// Move loggedinmenublock submenu outside of header
(function () {
    var $headerSubmenuDropdown = $('header .navigation-service .inner-width');
    if (!$headerSubmenuDropdown.length) {
        return;
    }
    $headerSubmenuDropdown.appendTo('body');
})();
// Move loggedinmenublock submenu outside of header
// Set correct position to submenu
(function () {
    if (!$('#logged-in-menu').length) {
        return;
    }
    function updatePositionOfLoggedInSubmenu() {
        var $loggedInSumbenu = $("[for=logged-in-menu]");
        var idOfMenuItem = $loggedInSumbenu.attr('for');
        var $loggedInMenuItem = $('#' + idOfMenuItem);
        var leftPosition = $loggedInMenuItem.offset();
        var width = $loggedInMenuItem.width();
        var windowWidth = $(window).width();
        var rightPosition = windowWidth - (leftPosition.left + width);
        var $submenu = $('.header-submenu-dropdown');
        $submenu.css({
            right: rightPosition
        });
    }
    $('#logged-in-menu').on('click', function () {
        updatePositionOfLoggedInSubmenu();
    });
    $(window).resize($.throttle(250, updatePositionOfLoggedInSubmenu));    
})();
// Set correct position to submenu

// Add item for search toggle in mobile view
(function () {
    var $navServiceList = $('.navigation-service ul');
    if (!$navServiceList) {
        return;
    }
    $navServiceList.prepend('<li class="search-init-holder"><div class="search-init"></div></li>');
    var $searchInitHolder = $navServiceList.find('.search-init-holder');
    $searchInitHolder.on('click', function () {
        document.body.scrollTop = document.documentElement.scrollTop = 0;
    });
})();

//Trigger event each time blocks are added. This way javascript updated content will work as well :)
//Only active for episerver editview
if ($("body").hasClass("episerver")) {
    $(function () {
        MutationObserver = window.MutationObserver || window.WebKitMutationObserver;
        var observer = new MutationObserver(function (mutations, observer) {
            $(mutations).each(function (index, mutation) {
                $(mutation.addedNodes).each(function (nodeIndex, node) {
                    if (node.className != null && node.className != "") {
                        $(document).trigger("block-added", node);
                    }
                });
            });
        });
        observer.observe(document, { subtree: true, attributes: false, childList: true });
    });
}

/**	@namespace nvt */
var nvt = (function () {
    "use strict";

    /**
    * @function template
    * @description Version of John Resigs Micro-Template without "with"-block. Further info: jsperf.com/template-engines-performance-compiling-rendering
    * @memberof! nvt
    * @param {string} sTmpl Template-String
    * @param {string} sDataPrfx Data-Object-Prefix
    * @return {Function}
    */
    var template = function (sTmpl, sDataPrfx) {
        var F =
        "var p=[];" +
        "p.push('" +
        sTmpl.replace(/[\r\t\n]/g, " ")
        .replace(/'(?=[^!--]*-->)/g, "\t")
        .split("'").join("\\'")
        .split("\t").join("'")
        .replace(/<!--#(.+?)-->/g, "',$1,'")
        .replace(/&lt;!--#(.+?)--&gt;/g, "',$1,'")
        .split("<!--").join("');")
        .split("-->").join("p.push('") + "');return p.join('');";
        return new Function(sDataPrfx, F);
    };


    /* Exec initial functions */
    var init = function () {
        var
		oMegaMenu = document.querySelector(".nav-mega-wrapper");
        tglRadioButtons(document.querySelectorAll(".nav-mega .nav-mega-label"));
        
        window.addEventListener("onload", throttle(function () {
            tglClassOnScroll(oMegaMenu, 135, "scroll");
        }));

        /* Polyfill for details-element */
        if (!("open" in document.createElement("details"))) {
            var
            arrElm = document.querySelectorAll("details"),
            n = arrElm.length;

            while (n--) {
                arrElm[n].addEventListener("click", function (e) {
                    tglAtr(this, "open");
                    e.stopPropagation();
                });
            }
        }
    };

    var tglAtr = function (O, atrName, strVal) {
        var
        strTmp = O.getAttribute(atrName);

        if (strTmp) {
            O.removeAttribute(atrName);
        } else {
            O.setAttribute(atrName, (strVal ? strVal : atrName));
        }
    };

    var throttle = function (fn, threshhold, scope) {
        threshhold = typeof threshhold !== "undefined" ? threshhold : 250;
        var
	  	last,
	  	deferTimer;
        return function () {
            var
	    	context = scope || this,
			now = +new Date(),
	        args = arguments;
            if (last && now < last + threshhold) {
                clearTimeout(deferTimer);
                deferTimer = setTimeout(function () {
                    last = now;
                    fn.apply(context, args);
                }, threshhold);
            }
            else {
                last = now;
                fn.apply(context, args);
            }
        };
    };

    var tglClassOnScroll = function (oElm, nPos, sClass) {
        var
		nPosTop = document.body.scrollTop || document.documentElement.scrollTop;
        if (oElm) {
            if (nPosTop > nPos) {
                oElm.classList.add(sClass);
            }
            else {
                oElm.classList.remove(sClass);
            }
        }
    };

    var tglRadio = function (evt) {
        evt.preventDefault();
        var
		oOverLay = document.getElementById("tglDesktopMenu"),
		oParent = document.getElementById(this.htmlFor);
        if (oParent) oParent.checked = !oParent.checked;
        if (!oParent.checked) oOverLay.checked = true;
    };

    var tglRadioButtons = function (oNodeList) {
        var
		i = oNodeList.length;
        while (i--) oNodeList[i].addEventListener("click", tglRadio, false);
    };

    /* Return public functions */
    return {
        init: init,
        template: template
    };
})();
nvt.init();

/* SVG Symbol-support */
!function (a, b) {
    "function" == typeof define && define.amd ?
    // AMD. Register as an anonymous module unless amdModuleId is set
    define([], function () { return a.svg4everybody = b() }) : "object" == typeof exports ? module.exports = b() : a.svg4everybody = b()
}(this, function () {/*! svg4everybody v2.0.3 | github.com/jonathantneal/svg4everybody */
    function a(a, b) {
        // if the target exists
        if (b) {
            // create a document fragment to hold the contents of the target
            var c = document.createDocumentFragment(), d = !a.getAttribute("viewBox") && b.getAttribute("viewBox");
            // conditionally set the viewBox on the svg
            d && a.setAttribute("viewBox", d);
            // copy the contents of the clone into the fragment
            for (
                // clone the target
            var e = b.cloneNode(!0) ; e.childNodes.length;) c.appendChild(e.firstChild);
            // append the fragment into the svg
            a.appendChild(c)
        }
    } function b(b) {
        // listen to changes in the request
        b.onreadystatechange = function () {
            // if the request is ready
            if (4 === b.readyState) {
                // get the cached html document
                var c = b._cachedDocument;
                // ensure the cached html document based on the xhr response
                c || (c = b._cachedDocument = document.implementation.createHTMLDocument(""), c.body.innerHTML = b.responseText, b._cachedTarget = {}),
                // clear the xhr embeds list and embed each item
                b._embeds.splice(0).map(function (d) {
                    // get the cached target
                    var e = b._cachedTarget[d.id];
                    // ensure the cached target
                    e || (e = b._cachedTarget[d.id] = c.getElementById(d.id)),
                    // embed the target into the svg
                    a(d.svg, e)
                })
            }
        },
        // test the ready state change immediately
        b.onreadystatechange()
    } function c(c) {
        function d() {
            // while the index exists in the live <use> collection
            for (
                // get the cached <use> index
            var c = 0; c < l.length;) {
                // get the current <use>
                var g = l[c], h = g.parentNode; if (h && /svg/i.test(h.nodeName)) {
                    var i = g.getAttribute("xlink:href"); if (e && (!f.validate || f.validate(i, h, g))) {
                        // remove the <use> element
                        h.removeChild(g);
                        // parse the src and get the url and id
                        var m = i.split("#"), n = m.shift(), o = m.join("#");
                        // if the link is external
                        if (n.length) {
                            // get the cached xhr request
                            var p = j[n];
                            // ensure the xhr request exists
                            p || (p = j[n] = new XMLHttpRequest, p.open("GET", n), p.send(), p._embeds = []),
                            // add the svg and id as an item to the xhr embeds list
                            p._embeds.push({ svg: h, id: o }),
                            // prepare the xhr ready state change event
                            b(p)
                        } else
                            // embed the local id into the svg
                            a(h, document.getElementById(o))
                    }
                } else
                    // increase the index when the previous value was not "valid"
                    ++c
            }
            // continue the interval
            k(d, 67)
        } var e, f = Object(c), g = /\bTrident\/[567]\b|\bMSIE (?:9|10)\.0\b/, h = /\bAppleWebKit\/(\d+)\b/, i = /\bEdge\/12\.(\d+)\b/; e = "polyfill" in f ? f.polyfill : g.test(navigator.userAgent) || (navigator.userAgent.match(i) || [])[1] < 10547 || (navigator.userAgent.match(h) || [])[1] < 537;
        // create xhr requests object
        var j = {}, k = window.requestAnimationFrame || setTimeout, l = document.getElementsByTagName("use");
        // conditionally start the interval if the polyfill is active
        e && d()
    } return c
});
svg4everybody();