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
		var block = $('.haem');		
		block.parent().parent().parent().addClass('haem_background');	
		var block = $('.haem-acad');		
		block.parent().parent().parent().addClass('haem_ec_background');
		var block = $('.haem-acad-past');		
		block.parent().parent().parent().addClass('haem_past_background');	
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
		block.parent().parent().parent().addClass('event_background_left');		
	}

	function rightBlock() {
		var block = $('.event--right');		
		block.parent().parent().parent().addClass('event_background_right');		
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
        block.parent().parent().parent().parent().parent().addClass('halfWidthColumn');	
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
        $('.grid-1-2').wrapAll("<div class='bgImage'></div>");
        $('.bgImage').append("<div style='clear: both'></div>");
    }




/*------------------------------------*\
  go
\*------------------------------------*/
	var init = function() {

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

		disclaimerLink()
        wrapDivs()
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