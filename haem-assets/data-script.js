
var jqueryNoConflict = jQuery;

//begin main function
//jqueryNoConflict(document).ready(function(){
    //console.log(1);
	//retriveData();
//});
//end main function


// Create the XHR object.
function createCORSRequest(method, url) {

  var xhr = new XMLHttpRequest();
  if ("withCredentials" in xhr) {
    // XHR for Chrome/Firefox/Opera/Safari.
    xhr.open(method, url, true);
  } else if (typeof XDomainRequest != "undefined") {
    // XDomainRequest for IE.
    xhr = new XDomainRequest();
    xhr.open(method, url);
  } else {
    // CORS not supported.
    xhr = null;
  }
  return xhr;
}

function makeCorsRequest(url) {
  // All HTML5 Rocks properties support CORS.
  //var url = 'http://updates.html5rocks.com';

  var xhr = createCORSRequest('GET', url);
  if (!xhr) {
    alert('CORS not supported');
    return;
  }

  // Response handlers.
  xhr.onload = function() {
    var text = xhr.responseText;
    var title = getTitle(text);		
    alert('Response from CORS request to ' + url + ': ' + title);
  };

  xhr.onerror = function() {
    alert('Woops, there was an error making the request.');
  };

  xhr.send();
}

// grab data
function retriveData(callback) {
    //var dataSource = 'http://fixtures.purple-agency.net/fixtures.json';
	//var data = makeCorsRequest(dataSource);
	
	//console.log(0);
	//var dataSource = '/siteassets/theme/NEW_Portal/ui/js/calender/academy.json';
	//var data = makeCorsRequest(dataSource);
	var dataSource = '/siteassets/theme/NEW_Portal/UI/js/calendar/academy.json';
    
    jqueryNoConflict.getJSON(dataSource, renderDataVisualsTemplate_future);
    jqueryNoConflict.getJSON(dataSource, renderDataVisualsTemplate_past);
    
};

// render compiled handlebars template
function renderDataVisualsTemplate_future(data){	

	var i = data.Dates.length	
	//remove past event and sort in date order
	while (i--) {
		var dt1 = Date.parse(data.Dates[i].Event["date"]);
		var today = new Date();		
		if (dt1 < today) {
			data.Dates.splice(i, 1);
		} 
	}
	data.Dates.sort(function(a, b) {
    	var dt1 = Date.parse(a.Event["date"]);
    	var dt2 = Date.parse(b.Event["date"]);   

	    if (dt1 < dt2) return -1;
    	if (dt2 < dt1) return 1;
    	return 0;

	}); 

    handlebarsDebugHelper();
    renderHandlebarsTemplate('/siteassets/theme/NEW_Portal/UI/js/calendar/dataDetailsTemplate.html', '#data-details', data);
};

// render compiled handlebars template
function renderDataVisualsTemplate_past(data){	


	var i = data.Dates.length	
	//remove past event and sort in date order
	while (i--) {
		var dt1 = Date.parse(data.Dates[i].Event["date"]);
		var today = new Date();		
		if (dt1 > today) {
			data.Dates.splice(i, 1);
		} 
	}
	data.Dates.sort(function(a, b) {
    	var dt1 = Date.parse(a.Event["date"]);
    	var dt2 = Date.parse(b.Event["date"]);   

	    if (dt1 < dt2) return -1;
    	if (dt2 < dt1) return 1;
    	return 0;

	});
    handlebarsDebugHelper();
    renderHandlebarsTemplate('/siteassets/theme/NEW_Portal/UI/js/calendar/dataDetailsTemplate.html', '#past-details', data);
};


// render handlebars templates via ajax
function getTemplateAjax(path, callback) {
    var source, template;
    jqueryNoConflict.ajax({
        url: path,
        success: function (data) {
            source = data;
            template = Handlebars.compile(source);	 
            if (callback) callback(template);
        },
		 complete: function() {
			searchProducts();			 
		 }
    });
};

// function to compile handlebars template
function renderHandlebarsTemplate(withTemplate,inElement,withData){
    getTemplateAjax(withTemplate, function(template) {
        jqueryNoConflict(inElement).html(template(withData));
    })
};

// add handlebars debugger
function handlebarsDebugHelper(){
    Handlebars.registerHelper("debug", function(optionalValue) {
        console.log("Current Context");
        console.log("====================");
        console.log(this);
    });
};


/*------------------------------------*\
    search products
\*------------------------------------*/
function searchProducts() {
		var itemMonth, itemLocation, thisItem, thisInputM,thisInputL, i;
		var inputM = $('#month');
		var inputL = $('#location');
		var inputD = $('#disease');
		var item = $('.event--link');
		var months = "";
		var locations = "";
		var diseases = "";
		
		//var diseases = getParameterByName('d');

		//$("div.select select#disease").val(diseases);
        clearViewBy();
		changePlaces();
        
		// show and hide depending on whether brand has links to the product
		function changePlaces() {
			item.each(function() {
				itemMonth = $(this).attr('data-date');
				itemLocation = $(this).attr('data-location');
				itemDisease = $(this).attr('data-disease');

                
				if ((months.length < 1 ) && (locations.length < 1 ) && (diseases.length < 1 )){
					$(this).show();		
				} else {

					if (itemMonth.indexOf(months) == -1)
				{									
					$(this).hide();						
				}	else {		
					if (itemLocation.indexOf(locations) == -1)
					{									
						$(this).hide();						
					}	else {	

						if (itemDisease.indexOf(diseases) == -1)
						{									
							$(this).hide();						
						}	else {	

							$(this).show();	
						}						
					}
				}	
			}	
           
		});
		}
    
        
    
    
		//changePlaces();
		// on input change turn relevant data attributes off or on except if the data attribute is set to none in that case it's assumed the product has no link for this product and can't be switched on

		inputL.change(function(){				
			locations = "";
			if (this.value > 0){
				locations = this.value;
			}
			console.log("1a: "+locations);
			changePlaces(); // run show hide
		});
		
		inputM.change(function(){		
			months = "";
			if (this.value > 0){
				months = this.value;
			}
			console.log("1b: "+months);
			changePlaces(); // run show hide
		});

		inputD.change(function(){		
			diseases = "";
			if (this.value > 0){
				diseases = this.value;
			}
			console.log("dis: "+diseases);
			changePlaces(); // run show hide
		});
		
		$('.quick-link--search').on('click', function(){
			$(this).toggleClass('checked');
		});
        function clearViewBy() {
            $('.resetLink').click(function(e){
                e.preventDefault();
                months = "";
                locations = "";
                diseases = "";
                changePlaces();
            });
        }
        
	}


	function getParameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}


