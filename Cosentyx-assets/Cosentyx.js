var evohome = (function() {
	'use strict';

/*------------------------------------*\
    section blocks
\*------------------------------------*/
	
	function addClassToBody() {
        if($('.homePage')[0]) {
            $('body').addClass('home');
        }
    }


	function titleSpotBlock() {
		var block = $('.title_spot_block');		
		block.parent().parent().parent().addClass('content_410');		
	}
    
   function titleSpotBlock() {
		var block = $('.title_spot_block');		
		block.parent().parent().parent().addClass('content_410');		
	}

    
	function homeBlock() {
		var block = $('.haem');		
		block.parent().parent().parent().addClass('cos_bgGradient');	
		var block = $('.pattern');		
		block.parent().parent().parent().addClass('patternBG');


		var block = $('.leap');		
		block.parent().parent().parent().addClass('bgLeap');

		

		/*var block = $('.haem-acad-past');		
		
		block.parent().parent().parent().addClass('haem_past_background');	
	*/}


	function eventSpotBlock() {
		var block = $('.310');		
		block.parent().parent().parent().addClass('content_310');	
		var block = $('.share-col');		
		block.parent().parent().parent().parent().addClass('add-purple');	
		block.parent().parent().parent().addClass('rep');	
		var block = $('.spot_block_248');		
		block.parent().parent().parent().addClass('content_248 bgPurple');		


	}	

    function homeBlock_dom() {
		var block = $('.home .tableLayout');		
		block.parent().parent().parent().parent().parent().addClass('rowTableCell');
        if ($('.home .spot').hasClass('rowTableCell')) {
            $('.home .spot.rowTableCell').wrapAll("<div class='row rowTable'></div>");
        } else {
            
        }
        var bgPattern = $('.home .bgPattern');
        bgPattern.parent().parent().parent().parent().parent().parent().addClass('patternBG');
        bgPattern.parent().parent().parent().parent().parent().removeClass('backgroundColor-color7');
        var bgGradient = $('.home .bgGradient');
        bgGradient.parent().parent().parent().parent().parent().parent().addClass('bgGradient');
        bgGradient.parent().parent().parent().parent().parent().removeClass('backgroundColor-color7');
	}


	function colorBlocks() {
		var block = $('.purple');		
		block.parent().parent().parent().parent().addClass('add-purple');
		var block = $('.pink');		
		block.parent().parent().parent().parent().addClass('add-pink');	
		var block = $('.white');		
		block.parent().parent().parent().parent().addClass('add-white');
		var block = $('.dusky');		
		block.parent().parent().parent().parent().addClass('add-dusky');	
        var block = $('.grad');		
		block.parent().parent().parent().parent().addClass('add-grad');
	}	


	function disclaimerLink() {

		var domain = document.location.origin;
		var qsv = window.location.search;	
		var url = $('.publicuserinterestpromptblock').find('.popup-controls > li:first-of-type > a.btn').attr("href");
		var target = domain + url + qsv;
		$('.publicuserinterestpromptblock').find('.popup-controls > li:first-of-type > a.btn').attr("href", target); 

	}

	function siteLogo() {
		//$( "#logo" ).clone().prependTo( ".nav-mega" );
		 var logo = $( "#logo" ).detach();
		 logo.prependTo('.nav-mega');

		 
 		
	}
    
    function gradBGColor() {
        $('.gradient').parent().parent().parent().parent().addClass('cos_bgGradient_narrow');
    }


  	function subMenu() {
		var myDiv = $('#sub-menu').detach();
		myDiv.appendTo('.nav-mega');

		//$( ".search-control-holder" ).clone().appendTo( ".nav-mega" );
		
	}

    function questionBlockWrap() {
        $('.wrapMePadding').parent().wrapAll("<div class='questionBlock paddingLarge backgroundColor-color7 grid-1-1'></div>");
        $('.questionBlock').append('<div style="clear:both"></div>');
    }
    
    function menuHighlight(){
        switch (window.location.pathname) {
            case '/products/cosentyx/early-intervention':
                $('.early-intervention').addClass('menu-red');
                break;
            case '/products/cosentyx/targeting-inflammation':
                $('.targeting-inflammation').addClass('menu-red');
                break;
            case '/products/cosentyx/AS':
                $('.AS').addClass('menu-red');
                break;
            case '/products/cosentyx/psoriatic-arthritis-disease-background':
                $('.PSA').addClass('menu-red');
                break;
            case '/products/cosentyx/mission-for-movement':
                $('.mission-for-movement').addClass('menu-red');
                break;
            case '/products/cosentyx/resources':
                $('.resources').addClass('menu-red');
                break;
            case '/products/cosentyx/prescribing-information/':
                $('.prescribing-information').addClass('menu-red');
                break;
            default:
                $('.cosentyx').addClass('menu-red');
        }
//		var url = $(location).attr('href'), parts = url.split("/"), last_part = parts[parts.length-2];
//
///*
//		console.log(parts);
//		console.log(last_part);
//
//		if (last_part != ""){
//			last_part = parts[parts.length-2];
//		}
//
//		var y = document.getElementsByClassName(last_part);
//
//
//		console.log(last_part);
//*/
//		var menuItem= $('.'+last_part);
//		menuItem.addClass('menu-red');	

    }

    function showFootnoteText() {
        $('.footnotes h6').click(function(){
            $(this).toggleClass('active');
            if ($(this).hasClass('active')) {
                $(this).next('div').slideDown();
                $(this).text('Hide footnotes');
            } else {
                $(this).next('div').slideUp();
                $(this).text('Show footnotes');
            }
        });
    }
    
    function slideDownContent() {
        $('.iconRight .content .showButton').click(function(e){
            e.preventDefault();
            $(this).toggleClass('active');
            if ($(this).hasClass('active')) {
                $(this).text('Close Graph');
            } else {
                $(this).text('Open Graph');
            }
            $(this).parent().parent().parent().parent().next('.slideReveal').slideToggle();
        });
    }
    
	
	
    function staticBlock(){
        var headerHeight = $('#secondary-menu').outerHeight() + 20;
        var $sidebar   = $("#static"), 
                $window    = $(window),
                offset     = $sidebar.offset(),
                topPadding = -180;

            $window.scroll(function() {
                if ($window.scrollTop() > offset.top) {
                    $sidebar.stop().animate({
                        top: $window.scrollTop() - offset.top + topPadding
                    });
                } else {
                    $sidebar.stop().animate({
                        top: 0
                    });
                }
            });
	}
    
    function headingSectionWithSidebar() {
        $('.content-focused-page-headline').parent().wrap('<div class="headingSection addBottom"><div class="block spotblock spot grid-3-4 leftSideHeader"><div class="spotContainer visual headingColor-color2 headingAlignment-left headingStyle-normal iconColor-color1 textColor-color1 textAlignment-left textStyle-normal linkColor-color1 backgroundColor-color7 spotLayout-topimage trigger-change"><div class="content content_410 patternBG content_310"></div></div></div></div>');
        var headerSideImage = $('.content-heading-img img').attr('src');
        $('.headingSection').append('<div class="block htmlembedblock grid-1-4" id="content_84996"><div class="content_310 bgImage" style="background: url(' + headerSideImage + ') no-repeat center center; background-size: cover;"></div></div><div class="clear"></div>');
    }
    
    function backtoTop() {
        $('.backToTopButton').click(function() {
          $("html, body").animate({ scrollTop: 0 }, "slow");
          return false;
        });
    }
    
//    function addTabsNavigation() {
//        if ($('.iHaveTabs')[0]){
//            $('#content').prepend('<div class="tabs"><ul><li><a href="/Medicines/cosentyx/ankylosing-spondylitis-disease-background">DISEASE BACKGROUND</a></li><li><a href="/Medicines/cosentyx/ankylosing-spondylitis-long-term-benefits">LONG-TERM BENEFITS</a></li><li><a href="/Medicines/cosentyx/ankylosing-spondylitis-your-AS-patient">YOUR AS PATIENT</a></li></ul></div>');
//        } else {
//            // Do something if class does not exist
//        }
//    }
    
    function addToBodyClass() {
        switch (window.location.pathname) {
            case '/Medicines/cosentyx/ankylosing-spondylitis-disease-background':
                $('#content').prepend('<div class="tabs"><ul><li><a class="active" href="/Medicines/cosentyx/ankylosing-spondylitis-disease-background">DISEASE BACKGROUND</a></li><li><a href="/Medicines/cosentyx/ankylosing-spondylitis-long-term-benefits">LONG-TERM BENEFITS</a></li><li><a href="/Medicines/cosentyx/ankylosing-spondylitis-your-AS-patient">YOUR AS PATIENT</a></li></ul></div>');
                break;
            case '/something':
            case '/somestuff':
                $('#main').addClass('some')
        }
    }


/*------------------------------------*\
  go
\*------------------------------------*/
	var init = function() {
        menuHighlight()
		//retriveData()
	    questionBlockWrap()
		titleSpotBlock() 
		subMenu() 
        addClassToBody()
		homeBlock() 
        
		colorBlocks() 
		//redBlocks() 
		eventSpotBlock() 
		//leftBlock()
		//rightBlock()
		siteLogo() 

		disclaimerLink()
        gradBGColor()
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
        
        showFootnoteText()
        slideDownContent()
        addToBodyClass()
        staticBlock()
        headingSectionWithSidebar()
        backtoTop() 
        
	};

	return { init: init };

})();

$(function() {
	evohome.init();
});