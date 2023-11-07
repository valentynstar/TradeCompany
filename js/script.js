$(document).ready(function (){
	'use strict';
	
	jQuery(".fancybox").fancybox();

	$('.owl-carousel').owlCarousel({
		item: 4,
		loop: true,
		center: true,
		autoplay: true,
		margin: 100,
		stagePadding: 250

	});

	jQuery('.burger-menu').click( () =>{
	jQuery('.burger-menu, .nav-menu, .sub-menu, .search-block, .link-menu').toggleClass('active');
	});
});
