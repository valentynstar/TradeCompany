// JavaScript Document
jQuery.noConflict();
jQuery(document).ready(function () {

    'use strict';

	let slid = jQuery('#review-carousel');

	jQuery(".fancybox").fancybox();

	slid.owlCarousel({
		items: 1,
		autoplay: true,
		autoplayTimeout: 6000,
		autoplayHoverPause: false,
		smartSpeed: 1000,
		dotsSpeed: 1000,
		loop: true,
		nav: false,
		navText: ['<i class="fas fa-angle-left"></i>', '<i class="fas fa-angle-right"></i>'],
		dots: true,
		mouseDrag: true,
		margin: 30,
		stagePadding: 0,
		autoWidth: false,
		responsiveClass: true,
		responsive:{
			0:{
				items: 1,
				dots: true,
				nav: false,
				mouseDrag: true,
				autoplay: false
			},
			479:{
				items: 1,
				dots: true,
				mouseDrag: true
			},
			767:{
				items: 1,
				dots: true,
				mouseDrag: true
			},
			991:{
				items: 1,
				dots: true,
				mouseDrag: true
			},
			1099:{
				items: 1,
				dots: true,
				mouseDrag: true
			}
		}
	});
	
	});