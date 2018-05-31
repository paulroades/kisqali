var evohome = (function() {
	'use strict';

/*------------------------------------*\
    section blocks
\*------------------------------------*/
	function titleSpotBlock() {
		var block = $('.title_spot_block');		
		block.parent().parent().parent().addClass('content_413');		
	}
	
	function homeBlock() {
		var block = $('.home');		
		block.parent().parent().parent().addClass('home_background');		
	}
	
	
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

	function myProfile() {
		var block = $('.edit--profile');		
		block.parent().addClass('remove--top');			
	}	
	
	
	function pageStyle() {

		var block = $('.page--wrapper');		
		block.parent().addClass('page--block');	
	}

	function siteLogo() {
		//$( "#logo" ).clone().prependTo( ".nav-mega" );
		 var logo = $( "#logo" ).detach();
		 logo.prependTo('.nav-mega');
 		
	}
	
	function siteSearch() {
		var myDiv = $('#content_96339').detach();
		myDiv.appendTo('.nav-mega');

		//$( ".search-control-holder" ).clone().appendTo( ".nav-mega" );
		
	}
	
	function hasClass(element, cls) {
		return (' ' + element.className + ' ').indexOf(' ' + cls + ' ') > -1;
	}
    
    function homeSpotTable() {
        $('.home-spot').parent().parent().parent().parent().parent().wrapAll('<div class="tableRow"></div>');
        $('.tableRow').append('<div class="clear"></div>')
    }
    
    function addToMobileMenu() {
        var newMenuItems = $('#secondary-menu .nav-mega a');
        $(".nav-mega-wrapper .nav-mega").append(newMenuItems);
    }
    
    function addLogoOnMobile() {
        $('.inner-width').append('<a href="/" id="logo"><div class="logo-holder"><div class="logo-wrapper"><img itemprop="logo" class="logo" src="/siteassets/hcp-portal-master/img/novartis_logosm2.svg" alt="ServiceSphere GB"></div><input type="hidden" id="toptagline" value="Welcome to Novartis MedHub GB"></div></a>')
    }

	
/*------------------------------------*\
  go
\*------------------------------------*/
	var init = function() {
		titleSpotBlock() 
		homeBlock() 
		sectionSpotBlock() 
		tealBlueBlock() 
		midBlueBlock() 
		darkBlueBlock() 
		darkBlue4Block() 
		whiteBlock() 
		medicineSpotBlock() 
		medicineSpotBlockw()
		siteLogo() 
		myProfile()
		//siteSearch() 
		pageStyle() 
        homeSpotTable()
        if($(window).width() > 767) {
        } else {
            addToMobileMenu()
            addLogoOnMobile()
        }
	};

	return { init: init };

})();

$(function() {
	evohome.init();
});