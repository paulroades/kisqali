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

/*
		console.log(parts);
		console.log(last_part);

		if (last_part != ""){
			last_part = parts[parts.length-2];
		}

		var y = document.getElementsByClassName(last_part);


		console.log(last_part);
*/
		var menuItem= $('.'+last_part);
		menuItem.addClass('menu-red');	

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
        });
        
      
    }
    
    function whatsOnBanner() {
        $('.whatsOn').parent().parent().parent().parent().addClass('fluidBGWhatsOn');
        $('.whatsOn').parent().parent().parent().parent().wrap('<a href="/haematology-academy/calendar/"></a>');
    }
    
    function addLogoOnMobile() {
        $('.inner-width').append('<a href="/" id="logo"><div class="logo-holder"><div class="logo-wrapper"><img itemprop="logo" class="logo" src="/siteassets/hcp-portal-master/img/novartis_logosm2.svg" alt="ServiceSphere GB"></div><input type="hidden" id="toptagline" value="Welcome to Novartis MedHub GB"></div></a>')
    }
    
    function addingToForm() {
        $('.EPiServerForms').wrap('<div class="textBlock"></div>');
        $('#768d910a-4429-4c1f-9a08-a4921f582ea4').prepend('<h3>What can we help you with?</h3>');
        $('#c3015244-4896-4133-8f32-44211e7e0ca3').append('<p style="margin:35px 0 ;">If you have a question about the product, please contact Medical Information on 01276 698370 or medinfo.uk@novartis.com</p>');
        $('#c3015244-4896-4133-8f32-44211e7e0ca3').prepend('<p style="margin:35px 0 ;"><a style="text-decoration: underline" href="/haematology-academy/prescribing-information/">Please click here to access Prescribing Information for the above products.</a></p>');
        $('.formcontainerblock .textBlock').append('<p>Prescribing Information for the above mentioned products can be found <a href="/haematology-academy/prescribing-information/">here</a></p>')
        
        
        // Adding info after drug name as system wont let me add them. Hacky but its needed.
        
        var drugNames = [
             '<sup>&reg;</sup><span style="color: #000;">▼</span> (deferasirox) <a href="/haematology-academy/prescribing-information#ExjadePI">Exjade PI</a>', 
             '<sup>&reg;</sup> (panobinostat) <a href="/haematology-academy/prescribing-information#FarydakePI">Farydak PI</a>', 
             '<sup>&reg;</sup> (ruxolitinib) <a href="/haematology-academy/prescribing-information#JakaviPI">Jakavi PI</a>',  
             '<sup>&reg;</sup> (eltrombopag) <a href="/haematology-academy/prescribing-information#RevoladePI">Revolade PI</a>', 
             '<sup>&reg;</sup> (nilotinib) <a href="/haematology-academy/prescribing-information#TasignaPI">Tasigna PI</a>',  
             '<sup>&reg;</sup><span style="color: #000;">▼</span> (midostaurin) <a href="/haematology-academy/prescribing-information#RydaptPI">Rydapt PI</a>'
        ];
        
        //drugNames[1];
        
        var i;
        for (i = 0; i < drugNames.length; i++) {
            var nthChildNumber = i + 1;
            $('#768d910a-4429-4c1f-9a08-a4921f582ea4 label:nth-of-type(' + nthChildNumber + ') .mdl-checkbox__label').append(drugNames[i]);
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
        

        $('.external').attr('data-linktype', 'link');
    }
    
  
    
    


/*------------------------------------*\
  go
\*------------------------------------*/
	
    
    
    var init = function() {
        smoothScroll()
        MPNPage()
		menuHighlight()
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
        addPlaceholderText()
        externalLink() 
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




