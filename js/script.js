document.addEventListener('DOMContentLoaded', () => {
	'use strict';
	
	jQuery(".fancybox").fancybox();

	jQuery('.owl-carousel').owlCarousel({
		items: 4,
		loop: true,
		center: true,
		autoplay: true,
		margin: 100,
		stagePadding: 10,
		mouseDrag: true,
		autoWidth: true,
		autoHeight: true,
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