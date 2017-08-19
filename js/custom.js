$(document).ready(function() {
	$('.navbar-toggle').click(function(e){
		e.preventDefault();
		$('.main-menu').stop().slideToggle('fast');
	});
	
	$("header .header").sticky({topSpacing:0});
	$('.home-slider').owlCarousel({
		items: 3,
		itemsDesktopSmall : [980,2],
		itemsTablet: [620,1],
		scrollPerPage: true,
		autoPlay: true,
		stopOnHover: true
	});
	
	$('.team-slider').owlCarousel({
		items: 4,
		itemsDesktopSmall : [980,2],
		itemsTablet: [620,1],
		scrollPerPage: true,
		autoPlay: true,
		stopOnHover: true
	});
	
	$('.single-slider').owlCarousel({
		items: 1,
		singleItem: true,
		autoPlay: true,
		stopOnHover: true
	});
});