$(document).ready(function() {
	
	var owl = $("#owl-demo");
	
	owl.owlCarousel({
		navigation : false, // Show next and prev buttons
		autoPlay: false,
		slideSpeed: 200,
		paginationSpeed: 700,
		singleItem: true,
		rewindNav : true,
		items: 6,
	});
	
});