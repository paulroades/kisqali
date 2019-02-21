var evohome = (function() {
	'use strict';

/*------------------------------------*\
    section blocks
\*------------------------------------*/
	function titleSpotBlock() {
		var block = $('.title_spot_block');
		block.parent().parent().parent().addClass('content_400');
        $('.title_spot_block_300').parent().parent().parent().addClass('content_300');
	}

	function homeBlock() {
		var block = $('.haem');
		block.parent().parent().parent().addClass('haem_background');
		var block = $('.haem-acad');
		block.parent().parent().parent().addClass('haem_ec_background');
		var block = $('.haem-acad-past');
		block.parent().parent().parent().addClass('haem_past_background');
        var block = $('.white');
		block.parent().parent().parent().addClass('white_background');
        $('.haem-footer').parent().parent().parent().addClass('haem-footer-bg');
        $('.haem-acadAlt').parent().parent().parent().parent().addClass('haem-acadAltContainer');
	}

	function blueBlock() {
		var block = $('.blue');
		block.parent().parent().parent().addClass('blue_background');
	}

	function redBlocks() {
		var block = $('.red');
		block.parent().parent().parent().addClass('red_background');

		var block = $('.red_nvs');
		block.parent().parent().parent().addClass('red_background_nvs');
	}

	function eventSpotBlock() {
		var block = $('.event_spot_block');
		block.parent().parent().parent().addClass('content_310');
	}

	function leftBlock() {
		var block = $('.event--left');
		block.parent().parent().parent().parent() .parent().addClass('event_background');
	}

	function rightBlock() {
		var block = $('.event--right');
		block.parent().parent().parent().parent().parent().addClass('event_background');
	}

    function gradientBoxBlue() {
        $('.blueGradient').parent().parent().parent().parent().parent().addClass('gradWrap');
        $('.bgImageBlueGrad').parent().addClass('gradWrap');
        $('.gradWrap').wrapAll( '<div class="gradientBackground"></div>');
        $('.gradientBackground').append('<div style="clear: both;"></div>');
        $('.whiteGradient').parent().parent().parent().parent().parent().parent().addClass('gradientBackgroundWhite');
    }

    function rowItems() {
        $('.rowItem').parent().wrapAll( '<div class="row"></div>');
        $('.row').append('<div style="clear: both;"></div>');
    }


	function disclaimerLink() {

		var domain = document.location.origin;
		var qsv = window.location.search;
		var url = $('.publicuserinterestpromptblock').find('.popup-controls > li:first-of-type > a.btn').attr("href");
		var target = domain + url + qsv;
		$('.publicuserinterestpromptblock').find('.popup-controls > li:first-of-type > a.btn').attr("href", target);

	}

    function increaseWidthColumn() {
        var block = $('.absolutePositionedBottom');
        block.parent().parent().parent().parent().parent().addClass('half');
        $( ".half" ).wrapAll( "<div class='alignCenter blocks--event--links'></div>");

        $( '.alignCenter' ).append('<div style="clear:both"></div>');
    	$( ".blocks--event--links" ).wrap( "<div class='block richtextblock spotblock grid-1-1 grey_background'></div>");
    }
    function eventsBlockHeight() {
        $('.height_310').parent().parent().parent().addClass('content_310');
    }

	/*
	function sectionSpotBlock() {
		var block = $('.section_spot_block');
		block.parent().parent().parent().addClass('content_310');
	}

	function medicineSpotBlock() {
		var block = $('.medicine_spot_block');
		block.parent().parent().parent().addClass('content_310');

	}

	function medicineSpotBlockw() {
		var block = $('.medicine_spot_block-w');
		block.parent().parent().parent().addClass('content_310');
		block.parent().parent().parent().addClass('blue--text');

	}

	function tealBlueBlock() {
		var block = $('.teal--blue');
		block.parent().parent().parent().parent().addClass('add-teal-blue');
	}

	function midBlueBlock() {
		var block = $('.mid--blue');
		block.parent().parent().parent().parent().addClass('add-mid-blue');
	}

	function darkBlueBlock() {
		var block = $('.dark--blue');
		block.parent().parent().parent().parent().addClass('add-dark-blue');
	}

	function whiteBlock() {
		var block = $('.add--white');
		block.parent().parent().parent().parent().addClass('add-white');
	}

	function darkBlue4Block() {
		var block = $('.dark--blue--4');
		block.parent().parent().parent().parent().addClass('add-dark-blue4');
	}


	function pageStyle() {

		var block = $('.page--wrapper');
		block.parent().addClass('page--block');
	}

≈

	function siteSearch() {
		var myDiv = $('#content_96339').detach();
		myDiv.appendTo('.nav-mega');

		//$( ".search-control-holder" ).clone().appendTo( ".nav-mega" );

	}

	function hasClass(element, cls) {
		return (' ' + element.className + ' ').indexOf(' ' + cls + ' ') > -1;
	}
*/
	function siteLogo() {
		//$( "#logo" ).clone().prependTo( ".nav-mega" );
		 var logo = $( "#logo" ).detach();
		 logo.prependTo('.nav-mega');



	}


  	function subMenu() {
		var myDiv = $('#sub-menu').detach();
		myDiv.appendTo('.nav-mega');

		//$( ".search-control-holder" ).clone().appendTo( ".nav-mega" );

	}

    function wrapDivs() {
        $('.event_background').wrapAll("<div class='bgImage'></div>");
        $('.bgImage').append("<div style='clear: both'></div>");
    }


    function menuHighlight(){
		var url = $(location).attr('href'), parts = url.split("/"), last_part = parts[parts.length-2];

		var temp = parts[parts.length-1];

		console.log(temp);
		console.log(last_part);

		// if last section is empty use last_part
		if (temp == ""){
			var menuItem= $('.'+last_part);
			
		} else {
			
			if (temp.startsWith('?')){
				var tempId = temp.substring(1, temp.length);
				var menuItem= $('.'+tempId);
			} else {
				var menuItem= $('.'+temp);
			}
			
		}
		
		menuItem.addClass('menu-red');
		
		/*
		if (last_part != ""){
			last_part = parts[parts.length-2];
		}

		var y = document.getElementsByClassName(last_part);


		console.log(last_part);

		var menuItem= $('.'+last_part);
		menuItem.addClass('menu-red');
*/
    }



    function addToMobileMenu() {
        var newMenuItems = $('#secondary-menu .nav-mega a');
        $(".nav-mega-wrapper .nav-mega").append(newMenuItems);
    }

    function MPNPage() {
        if ($('.MPNPage')[0]){
            $('body').addClass('bgWhite');
        } else {
            // Do something if class does not exist
        }
    }


    function smoothScroll() {
        $('.internalLinksMPN li a[href*="#"]').on('click', function (e) {
            e.preventDefault();
            $('html, body').animate({
                scrollTop: $($(this).attr('href')).offset().top - 100
            }, 500, 'linear');
        });
        $('.piQuickLinks li a[href*="#"]').on('click', function (e) {
            e.preventDefault();					
            $('html, body').animate({
                scrollTop: $($(this).attr('href')).offset().top - 200
            }, 500, 'linear');
			
			  $('.piQuickLinks li a[href*="#"]').removeClass("menu-red");
			  var id = $(this).parent().attr('class')
			  console.log(id);
			$('.' + id).children('a').addClass("menu-red");
			  
					//$(this).addClass("menu-red");
        });
        
        $('.quickLinks ul li a.internalLink').click(function(e){
            e.preventDefault();					
            $('html, body').animate({
                scrollTop: $($(this).attr('href')).offset().top - 100
            }, 500, 'linear');
        });
        
        
    };

    function whatsOnBanner() {
        $('.whatsOn').parent().parent().parent().parent().addClass('fluidBGWhatsOn');
        $('.whatsOn').parent().parent().parent().parent().wrap('<a href="/haematology-academy/calendar/"></a>');
    }

    function addLogoOnMobile() {
        $('.inner-width').append('<a href="/" id="logo"><div class="logo-holder"><div class="logo-wrapper"><img itemprop="logo" class="logo" src="/siteassets/hcp-portal-master/img/novartis_logosm2.svg" alt="ServiceSphere GB"></div><input type="hidden" id="toptagline" value="Welcome to Novartis MedHub GB"></div></a>')
    }

    function addingToForm() {
        $('.EPiServerForms').wrap('<div class="textBlock"></div>');
        $('#d24b2b3c-6218-43f1-a667-28e5d03066f7').prepend('<h3>What can we help you with?</h3>');
        $('#8fc84c2e-2d08-41c7-97c7-37dd6bf11994').append('<p style="margin:35px 0 ;">If you have a question about the product, please contact Medical Information on 01276 698370 or medinfo.uk@novartis.com</p>');

        // Adding info after drug name as system wont let me add them. Hacky but its needed.

        var drugNames = [
             '<sup>&reg;</sup><span style="color: #000;">▼</span> (deferasirox)',
             '<sup>&reg;</sup> (panobinostat)',
             '<sup>&reg;</sup> (ruxolitinib)',
             '<sup>&reg;</sup> (eltrombopag)',
             '<sup>&reg;</sup> (nilotinib)',
             '<sup>&reg;</sup><span style="color: #000;">▼</span> (midostaurin)'
        ];

        //drugNames[1];

        var i;
        for (i = 0; i < drugNames.length; i++) {
            var nthChildNumber = i + 1;
            $('#d24b2b3c-6218-43f1-a667-28e5d03066f7 label:nth-of-type(' + nthChildNumber + ') .mdl-checkbox__label').append(drugNames[i]);
            //console.log(drugNames[i]);
        }

    }

    function eventsContentWrap() {
        $('.whiteBackground').parent().addClass('whiteBackgroundWrap');
        $('.whiteBackgroundWrap').wrapAll('<div class="whiteBackgroundContent"></div>');
        $('.whiteBackgroundContent').append('<div style="clear:both"></div>');
    }

    // Add class to quick links on the PI page.

    function isScrolledIntoView(elem) {
        var docViewTop = $(window).scrollTop();
        var docViewBottom = docViewTop + $(window).height();

        var elemTop = $(elem).offset().top;
        var elemBottom = elemTop + $(elem).height();

        return (elemTop <= docViewBottom);
    }

//    $(window).scroll(function () {
//        $('.piContainer').each(function () {
//            if (isScrolledIntoView(this) === true) {
//                $(this).addClass('inview');
//            } else {
//                $(this).removeClass('inview');
//            }
//        });
//    });

    // button to reset search by dropdowns

    function clearViewBy() {
        $('.resetLink').click(function(){
            $('#month option').prop('selected', function() {
                return this.defaultSelected;
            });
        });
    }
    
    function headingSectionWithSidebar() {
        $('.content-focused-page-headline').parent().wrap('<div class="gradientBackground"><div class="spotContainer visual headingColor-color2 headingAlignment-left headingStyle-normal iconColor-color1 textColor-color1 textAlignment-left textStyle-normal linkColor-color1 backgroundColor-transparent spotLayout-topimage trigger-change" itemscope="" itemtype="http://schema.org/CreativeWork"><div class="content content_400 content_300"><div class="content-restrict" style="overflow-wrap: break-word;"><div itemprop="text"><div class="title_spot_block title_spot_block_300 blueGradient"><div class="headingTable"><div class="headingTableCell"></div></div></div></div></div></div></div></div><div style="clear: both;"></div></div>');
    }
    
    function headingBlock() {
        $('.sectionHeading').parent().parent().parent().parent().addClass('contentHeading');
    }
    
    function backtoTop() {
        $('.backToTopButton').click(function() {
          $("html, body").animate({ scrollTop: 0 }, "slow");
          return false;
        });
    }
    
    function staticBlock(){
        
        if ($('#static')[0]){
            var $sidebar   = $("#static"), 
                $window    = $(window),
                offset     = $sidebar.offset(),
                topPadding = 90;

                $sidebar.css({
                    top: 0
                });

                $window.scroll(function() {

                    if ($window.scrollTop() > offset.top) {
                        $sidebar.css({
                            top: $window.scrollTop() - offset.top + topPadding
                        });
                    } else {
                        $sidebar.css({
                            top: 0
                        });
                    }
                });
        } else {
            // Do something if class does not exist
        }
	}
    
    
    
var dragging = false

$(function() {
    var handle = $('#drag')
    var target = $('#wheel_dial')
    handle.mousedown(function() {
        dragging = true
    })
    $(document).mouseup(function() {
        dragging = false
    })
    $(document).mousemove(function(e) {
        if (dragging) {
            
            var mouse_x = e.pageX;
            var mouse_y = e.pageY;
            var radians = Math.atan2(mouse_x - 10, mouse_y - 10);
            var degree = (radians * (360 / Math.PI) * -1) + 90;
            target.css('-moz-transform', 'rotate(' + degree + 'deg)');
            target.css('-moz-transform-origin', '50% 50%');
            target.css('-webkit-transform', 'rotate(' + degree + 'deg)');
            target.css('-webkit-transform-origin', '50% 50%');
            target.css('-o-transform', 'rotate(' + degree + 'deg)');
            target.css('-o-transform-origin', '50% 50%');
            target.css('-ms-transform', 'rotate(' + degree + 'deg)');
            target.css('-ms-transform-origin', '50% 50%');
        }
    })
});
    
    function publicPopup() {
        $('.external').click(function(){
            if ($(this).attr('href') === 'http://www.novartis.co.uk') {
                $('#external-link-disclaimer .content-style-overlay h2 + div').html('You are now leaving the Novartis HCP portal website. This link will take you to the Novartis UK website instead.');
            } else if ($(this).attr('href') === 'http://www.novartis.co.uk/') {
                $('#external-link-disclaimer .content-style-overlay h2 + div').html('You are now leaving the Novartis HCP portal website. This link will take you to the Novartis UK website instead.');
            } else {
                $('#external-link-disclaimer .content-style-overlay h2 + div').html('You are now leaving this website. This link will take you to a website containing content that Novartis cannot be held responsible for. Our Privacy Policy does not apply. You are solely responsible for your interactions with that website.<br>Novartis Pharmaceuticals UK Ltd assumes no responsibility for the site or its content.');
            }
        });
    }
    
    function tabControls(){
        $('#halfWidthTabs .tabs ul li a').click(function(e){
            e.preventDefault();
            var url = $(this).attr('href');
            $('#halfWidthTabs .tabs ul li a').removeClass('active');
            $(this).addClass('active');
            $('#halfWidthTabs .tabContent').removeClass('active');
            $(url).addClass('active');
        });
        
        
        $('#tabsFiveAccross .tabs ul li a').click(function(e){
            e.preventDefault();
            var url = $(this).attr('href');
            $('#tabsFiveAccross .tabs ul li a').removeClass('active');
            $(this).addClass('active');
            $('#tabsFiveAccross .tabContent').removeClass('active');
            $(url).addClass('active');
        });
    }



/*------------------------------------*\
  go
\*------------------------------------*/



    var init = function() {
        smoothScroll()
        menuHighlight()
		MPNPage()		
		retriveData()
	    increaseWidthColumn()
		titleSpotBlock()
		subMenu()
		homeBlock()
		blueBlock()
		redBlocks()
		eventSpotBlock()
		leftBlock()
		rightBlock()
		siteLogo()
        whatsOnBanner()
		disclaimerLink()
        wrapDivs()
        publicPopup()
        tabControls()
        if($(window).width() > 767) {
        } else {
            addToMobileMenu()
            addLogoOnMobile()
        }

        gradientBoxBlue()
        rowItems()
        eventsBlockHeight()
        addingToForm()
        eventsContentWrap()
        clearViewBy()
        headingSectionWithSidebar()
        headingBlock()
        backtoTop()
        if($(window).width() > 1024) {
            staticBlock()
        } else {
            
        }
		/*

		sectionSpotBlock()
		tealBlueBlock()
		midBlueBlock()
		darkBlueBlock()
		darkBlue4Block()
		whiteBlock()
		medicineSpotBlock()
		medicineSpotBlockw()

		//siteSearch()
		pageStyle()*/

	};

	return { init: init };

})();

$(function() {
	evohome.init();
});
