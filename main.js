

//modal

$(document).ready(function(){
	$(".contactbtn").on("click", function(){
		$(".overlay").toggleClass("show");

	})
	$(".closebtn").on("click", function(){
		$(".overlay").toggleClass("show");

	})

	var map;
	function initialize() {
	  map = new google.maps.Map(document.getElementById('map-canvas'), {
	    zoom: 8,
	    center: {lat: -34.397, lng: 150.644}
	  });
	}

	google.maps.event.addDomListener(window, 'load', initialize);
	
});
//paralax on about elements

//email sender / verifier
