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
    
    function homeBlock() {
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
	
		//titleSpotBlock() 
		subMenu() 
        addClassToBody()
		homeBlock() 
        
		//blueBlock() 
		//redBlocks() 
		//eventSpotBlock() 
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