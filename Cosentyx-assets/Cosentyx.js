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
        $('.whiteBGImage').parent().parent().parent().parent().addClass('add-bgOne');
        $('.whiteBGImage2').parent().parent().parent().parent().addClass('add-bgTwo');
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
            case '/Medicines/cosentyx/early-intervention':
                $('.early-intervention').addClass('menu-red');
                break;
            case '/Medicines/cosentyx/targeting-inflammation':
                $('.targeting-inflammation').addClass('menu-red');
                break;
            case '/Medicines/cosentyx/ankylosing-spondylitis-disease-background':
                $('.AS').addClass('menu-red');
                break;
            case '/Medicines/cosentyx/psoriatic-arthritis-disease-background':
                $('.PSA').addClass('menu-red');
                break;
            case '/Medicines/cosentyx/mission-for-movement':
                $('.mission-for-movement').addClass('menu-red');
                break;
            case '/Medicines/cosentyx/resources':
                $('.resources').addClass('menu-red');
                break;
            case '/Medicines/cosentyx/prescribing-information/':
                $('.prescribing-information').addClass('menu-red');
                break;
            case '/Medicines/cosentyx/contact':
                $('.contact').addClass('menu-red');
                break;
            default:
                //$('.cosentyx').addClass('menu-red');
        }
    }

    function showFootnoteText() {
        $('.footNoteButton').click(function(e){
            e.preventDefault();
            $(this).toggleClass('active');
            if ($(this).hasClass('active')) {
                $(this).next('div').slideDown();
                $(this).text('Close footnotes');
            } else {
                $(this).next('div').slideUp();
                $(this).text('Show footnotes');
            }
        });
    }
    
    function slideDownContent() {
        $('.showButton').click(function(e){
            e.preventDefault();
            $(this).toggleClass('active');
            if ($(this).hasClass('active')) {
                $(this).children('span').text('Close');
            } else {
                //$(this).text('Show infographic');
                $(this).children('span').text('Open');
            }
            $(this).parent().parent().parent().parent().siblings('.slideReveal').slideToggle();
        });
    }
    
	
	
    function staticBlock(){
        var headerHeight = $('#secondary-menu').outerHeight() + 20;
        
        $('#static').parent().parent().parent().addClass('stickySidebar').css('top', headerHeight);
        
        Stickyfill.add($('.stickySidebar'));
//        var headerHeight = $('#secondary-menu').outerHeight() + 20;
//        var $sidebar   = $("#static"), 
//                $window    = $(window),
//                offset     = $sidebar.offset(),
//                topPadding = headerHeight;
//
//            $window.scroll(function() {
//                console.log(topPadding);
//                if ($window.scrollTop() > offset.top) {
//                    $sidebar.stop().animate({
//                        top: $window.scrollTop() - offset.top + topPadding
//                    });
//                } else {
//                    $sidebar.stop().animate({
//                        top: 0
//                    });
//                }
//            });
	}
    
    function headingSectionWithSidebar() {
        $('.content-focused-page-headline').parent().wrap('<div class="headingSection addBottom"><div class="block spotblock spot grid-3-4 leftSideHeader"><div class="spotContainer visual headingColor-color2 headingAlignment-left headingStyle-normal iconColor-color1 textColor-color1 textAlignment-left textStyle-normal linkColor-color1 backgroundColor-color7 spotLayout-topimage trigger-change"><div class="content content_410 patternBG content_310"></div></div></div></div>');
        
        var headerSideImage = $('.content-heading-img img').attr('src');
        $('.headingSection').append('<div class="block htmlembedblock grid-1-4" id="content_84996"><div class="content_310 bgImage" style="background: url(' + headerSideImage + ') no-repeat center center; background-size: cover;"></div></div><div class="clear"></div>');
        
        var paraText = $('.content-holder').html();
        $('.content-holder').hide();
        $('.headingSection .patternBG .grid-content').append(paraText);
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
    //Adding tabs to the top of these pages
    function addToBodyClass() {
        switch (window.location.pathname) {
            case '/Medicines/cosentyx/ankylosing-spondylitis-disease-background':
                $('#content').prepend('<div class="tabs"><ul><li><a class="active" href="/Medicines/cosentyx/ankylosing-spondylitis-disease-background">DISEASE BACKGROUND</a></li><li><a href="/Medicines/cosentyx/ankylosing-spondylitis-your-as-patient">YOUR AS PATIENT</a></li><li><a href="#">SUSTAINED BENEFITS</a></li></ul></div>');
                break;
            case '/Medicines/cosentyx/ankylosing-spondylitis-your-as-patient':
                console.log('test');
                $('#content').prepend('<div class="tabs"><ul><li><a href="/Medicines/cosentyx/ankylosing-spondylitis-disease-background">DISEASE BACKGROUND</a></li><li><a class="active" href="/Medicines/cosentyx/ankylosing-spondylitis-your-as-patient">YOUR AS PATIENT</a></li><li><a href="#">SUSTAINED BENEFITS</a></li></ul></div>');
                break;
            case '/Medicines/cosentyx/psoriatic-arthritis-disease-background':
                $('#content').prepend('<div class="tabs"><ul><li><a class="active" href="/Medicines/cosentyx/psoriatic-arthritis-disease-background">DISEASE BACKGROUND</a></li><li><a href="/Medicines/cosentyx/your-psoriatic-arthritis-patient">YOUR PsA PATIENT</a></li><li><a href="/Medicines/cosentyx/sustained-benefits-in-psa">SUSTAINED BENEFITS</a></li></ul></div>');
                break;
            case '/Medicines/cosentyx/your-psoriatic-arthritis-patient':
               $('#content').prepend('<div class="tabs"><ul><li><a href="/Medicines/cosentyx/psoriatic-arthritis-disease-background">DISEASE BACKGROUND</a></li><li><a class="active" href="/Medicines/cosentyx/your-psoriatic-arthritis-patient">YOUR PsA PATIENT</a></li><li><a href="/Medicines/cosentyx/sustained-benefits-in-psa">SUSTAINED BENEFITS</a></li></ul></div>');
               break; 
            case '/Medicines/cosentyx/sustained-benefits-in-psa':
               $('#content').prepend('<div class="tabs"><ul><li><a href="/Medicines/cosentyx/psoriatic-arthritis-disease-background">DISEASE BACKGROUND</a></li><li><a href="/Medicines/cosentyx/your-psoriatic-arthritis-patient">YOUR PsA PATIENT</a></li><li><a class="active" href="/Medicines/cosentyx/sustained-benefits-in-psa">SUSTAINED BENEFITS</a></li></ul></div>');
               break; 
        }
    }
    
    function smoothScroll() {
        $('.internalLinks li a[href*="#"], .pageLink[href*="#"]').on('click', function (e) {
            e.preventDefault();
            $('html, body').animate({
                scrollTop: $($(this).attr('href')).offset().top - 250
            }, 500, 'linear');
        });
    };
    
    function addToMobileMenu() {
        var newMenuItems = $('#secondary-menu .nav-mega a');
        $(".nav-mega-wrapper .nav-mega").append(newMenuItems);
    }
    
    function addLogoOnMobile() {
        $('.inner-width').append('<a href="/" id="logo"><div class="logo-holder"><div class="logo-wrapper"><img itemprop="logo" class="logo" src="/siteassets/gb-portal/portal-home/img/novartis_logosm2.svg" alt="ServiceSphere GB"></div><input type="hidden" id="toptagline" value="Welcome to Novartis MedHub GB"></div></a>')
    }
    
    function addingToForm() {
        $('.EPiServerForms').wrap('<div class="textBlock"></div>');
        $('#cfeba562-9fdd-4787-800f-6a113828b22e').prepend('<h3>What can we help you with?</h3>');
    }
    
    
    // This function is to add the sidebar content below the main content on mobile
    function addToFooter() {
        if ($(window).width() < 769) {
            $('.footerGroup').parent().addClass('footerGroupParent');
            $('.footerGroupParent').wrapAll('<div class="mobileFooterContent"></div>');
            $('.mobileFooterContent').append('<div style="clear:both;"></div>');
            var footerItems = $('.mobileFooterContent');
            $('#content').append(footerItems);
        } else {
            
        }
    }
    
    function externalLink() {
        $('.external').click(function(e) {
            e.preventDefault();
            $('#external-link-disclaimer').addClass('active');
            var internalLinlocation = $(this).attr('href');
            
            $('.btn-success').click(function(){
                //window.location = internalLinlocation;
                window.open(internalLinlocation);
                $('#external-link-disclaimer').removeClass('active');
            });
            $('.btn-cancel').click(function(){
               $('#external-link-disclaimer').removeClass('active');
           });
        });
    }
    
    function addPlaceholderText() {
        $('.block .textBlock form .FormTextbox__Input').each(function(index, elem) {
            var eId = $(elem).attr('id');
            var label = null;
            if (eId && (label = $(elem).parents('form').find('label[for='+ eId +']')).length == 1) {
                $(elem).attr('placeholder', $.trim($(label).html()));
                $(label).remove();
            }
         });
    }
    
    function internalTabsControls() {
        $('.internalTabs li a').click(function(e){
            e.preventDefault();
            var url = $(this).attr('href');
            $('.tabContent').addClass('hidden');
            $(url).removeClass('hidden');
            $('.tabs.internalTabs ul li a').removeClass('active');
            $(this).addClass('active');
        });
    }
    

/*------------------------------------*\
  go
\*------------------------------------*/
	var init = function() {
        externalLink()
        addingToForm()
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
        if ($(window).width() > 1024) {
            //staticBlock()
        } else if ($(window).width() < 767)  {
           addToMobileMenu()
           addLogoOnMobile()        
        } else {
            
        }
        
        headingSectionWithSidebar()
        backtoTop() 
        smoothScroll()
        addToFooter()
        addPlaceholderText()
        internalTabsControls()
	};

	return { init: init };

})();

$(function() {
	evohome.init();
});