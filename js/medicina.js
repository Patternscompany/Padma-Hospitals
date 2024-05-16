jQuery(document).ready(function($) {
   'use strict';
		
		// Appointment datepicker
		$('.datepicker').datepicker();
		
		
		// Phone mask
		$("#phone").mask("(999) 999-99-99");
		
		
		// Fancybox - Litebox
		$(".fancybox").fancybox();
		
		
		// Parallax parameter
		$.stellar({
			horizontalScrolling: false,
			verticalOffset: 40,
			responsive:true
		});
			
		
		// Home logos carousel	
		$('.owl-logos').owlCarousel({
			loop:true,
			margin:0,
			autoplay:true,
			responsiveClass:true,
			responsive:{
				0:{
				items:1,
				nav:false
				},
				600:{
				items:3,
				nav:false
				},
				960:{
				items:4,
				nav:false
				},
				1281:{
				items:4,
				nav:false
				}
			}
		});
	
	
	
		// Home gallery carousel
		$('.home-gallery').owlCarousel({
			loop:true,
			margin:0,
			autoplay:true,
			responsiveClass:true,
			responsive:{
				0:{
				items:1,
				nav:false
				},
				600:{
				items:3,
				nav:false
				},
				960:{
				items:4,
				nav:false
			},
				1281:{
				items:4,
				nav:false
				}
			}
		});
		
});
	

// Acordeon 
jQuery('#accordion .panel-heading').on('click', function () {   
    jQuery('#accordion .panel-heading').removeClass('actives');
    $(this).addClass('actives');
 });
 
 

// Wow animations
		wow = new WOW(
      	{
       		animateClass: 'animated',
        	offset:       100
      	}
    	);
    	wow.init();		
		
		
// Preloader		
window.addEventListener('DOMContentLoaded', function() {
        new QueryLoader2(document.querySelector("body"), {
            barColor: "#fff",
            backgroundColor: "#1dd2c8",
            percentage: true,
            barHeight: 2,
            minimumTime: 200,
            fadeOutTime: 1000
        });
    });
	const plusButtons = document.querySelectorAll(".plus");
const dropdowns = document.querySelectorAll(".navbar-nav li ul");

plusButtons.forEach((plusButton, index) => {
    plusButton.addEventListener("click", () => {
        // Check if the device width is less than or equal to 992px
        if (window.innerWidth <= 992) {
            // Toggle the 'active' class to show/hide the dropdown menu
            dropdowns[index].classList.toggle("active");
        }
    });
});