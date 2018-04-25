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
		block.parent().parent().parent().addClass('content_413');		
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






/*------------------------------------*\
  go
\*------------------------------------*/
	var init = function() {

		//retriveData()
	
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