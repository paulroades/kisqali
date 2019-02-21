var evohome = (function() {
	'use strict';

/*------------------------------------*\
    section blocks
\*------------------------------------*/
	
    function halfSpotBlock() {
        var block = $('.half_spot_block');     
        block.parent().parent().parent().addClass('content_620');       
    }


	function homeSpotBlock() {
		var block = $('.360');		
		block.parent().parent().parent().addClass('content_360');		
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


  	function subMenu() {
		var myDiv = $('#sub-menu').detach();
		myDiv.appendTo('.nav-mega');

		//$( ".search-control-holder" ).clone().appendTo( ".nav-mega" );
		
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
    }


    function addClassToBody() {
        if($('.homePage')[0]) {
            $('body').addClass('home');
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
    
    
    function whiteBackground() {
		var block = $('.backgroundWhite');		
		block.parent().addClass('backgroundWhiteBG');		
	}

    function addToMobileMenu() {
        var newMenuItems = $('#secondary-menu .nav-mega a');
        $(".nav-mega-wrapper .nav-mega").append(newMenuItems);
        console.log('menu');
    }
    
    function addLogoOnMobile() {
        $('.inner-width').append('<a href="/" id="logo"><div class="logo-holder"><div class="logo-wrapper"><img itemprop="logo" class="logo" src="/siteassets/gb-portal/img/novartis_logosm2.svg" alt="ServiceSphere GB"></div><input type="hidden" id="toptagline" value="Welcome to Novartis MedHub GB"></div></a>')
    }
    
    
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

/*------------------------------------*\
  go
\*------------------------------------*/
	var init = function() {
        menuHighlight()	;
        whiteBackground();
		//subMenu() ;
       	siteLogo() ;
		disclaimerLink();
		homeSpotBlock();
        halfSpotBlock();

        addClassToBody();
        publicPopup();
        if($(window).width() > 767) {
            
        } else {
            addLogoOnMobile();
            addToMobileMenu();
        }
		
	};

	return { init: init };

})();

$(function() {
	evohome.init();
});