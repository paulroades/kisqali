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
	
	function staticBlock(){
		var elementPosition = $('#static').offset();

	$(window).scroll(function(){
        if($(window).scrollTop() > elementPosition.top){
              $('#static').css('position','fixed').css('top','0');
        } else {
            $('#static').css('position','static');
        }    
	});
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
    function addExjadeTeal() {
		var block = $('.addExjadeTeal');		
		block.parent().parent().parent().parent().addClass('add-exjade-teal');				
	}
    function addTasignaBlue() {
		var block = $('.addTasignaBlue');		
		block.parent().parent().parent().parent().addClass('add-tasigna-blue');				
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
    
    function showPopUp() {
        $('.breastCancer').parent().parent().parent().parent().addClass('breastCancerClickContainer');
        $('.breastCancerClickContainer a').click(function(e){
            e.preventDefault();
            $('#therapyAreaPopup').addClass('active');
        });
	}
    function removePadding() {
        $('#secondary-menu').parent().addClass('noPadding');
    }
    
    function addGoggleAnalytics() {
        console.log('GA loaded');
        $('head').append('<script async src="https://www.googletagmanager.com/gtag/js?id=UA-109035671-1"><\/script><script>window.dataLayer = window.dataLayer || [];function gtag(){dataLayer.push(arguments);}gtag("js", new Date());gtag("config", "UA-109035671-1");<\/script>');
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
        addGoggleAnalytics()
        addTasignaBlue()
        addExjadeTeal()
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
        showPopUp()
        removePadding()
		staticBlock()
        publicPopup()
	};

	return { init: init };

})();

$(function() {
	evohome.init();
});