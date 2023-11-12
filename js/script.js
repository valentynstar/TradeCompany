document.addEventListener('DOMContentLoaded', () => {
	'use strict';
	
	jQuery(".fancybox").fancybox();

	jQuery('.owl-carousel').owlCarousel({
		item: 4,
		center: true,
		loop: true,
		autoplay: true,
		margin: 0,
		stagePadding: 100,
		mouseDrag: true,
		responsiveClass: true,
		responsive: {
			0: {
				items: 1
			},
			768: {
				items: 2
			},
			992: {
				items: 3
			}
		}
	});

	jQuery('.burger-menu').click(() => {
	jQuery('.burger-menu, .nav-menu, .sub-menu, .search-block, .link-menu').toggleClass('active');
	});
})