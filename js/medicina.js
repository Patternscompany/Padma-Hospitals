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

		$(document).ready(function () {
  
			$("#contact_form").submit(function (event) {
		  
			  event.preventDefault();
		  
			  var FullName = $('.cname').val();
			  var Email = $('.cemail').val();
			  var Phone = $('.Cph').val();
			  var Company = $('.Ccompany').val();
			  var Country = $('.Ccountry').val();
			  var Message = $('.cMessage').val();
			  var captcha = grecaptcha.getResponse();
		  
			  var email_regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
		  
			  if (FullName.trim() == '') {
				$(".cname_error").html("This Field is required");
			  }
			  else {
				$('.cname_error').html('');
			  }
		  
			  if (Email.trim() == "") {
				$(".cemail_error").html("This Field is required");
			  }
			  else if (!(Email.match(email_regex)) == true) {
				$(".cemail_error").html("Please Enter Valid Email");
			  }
			  else {
				$('.cemail_error').html('');
			  }
		  
			  if (Phone.trim() == "") {
				$(".Cph_error").html("This Field is required");
			  }
			  else {
				$('.Cph_error').html("");
			  }
		  
			  if (Company.trim() == "") {
				$(".Ccompany_error").html("This Field is required");
			  }
			  else {
				$('.Ccompany_error').html("");
			  }
		  
			  if (Country.trim() == "") {
				$(".Ccountry_error").html("This Field is required");
			  }
			  else {
				$('.Ccountry_error').html("");
			  }
		  
			  if (Message.trim() == "") {
				$(".cMessage_error").html("This Field is required");
			  }
			  else {
				$('.cMessage_error').html("");
			  }
		  
			  if (!(FullName.length == 0 || Email.length == 0 || Phone.length == 0 || Company.length == 0 || Country.length == 0 || Message.length == 0) && (!Email.match(email_regex) == false)) {
				$.ajax({
				  type: "POST",
				  url: "act.php",
				  data: {
					cname: FullName,
					cemail: Email,
					Cph: Phone,
					Ccompany: Company,
					Ccountry: Country,
					cMessage: Message,
					recaptchaResponse: captcha
				  },
				  success: function (response) {
					if (response.success == true) {
					  window.location.href = "contact.html"
					} else {
					  console.log("Processing failed: ");
					}
		  
				  }
				});
			  }
			});
		  
		  
			// $('.cname').keydown(function (e) {
			//   if (e.altKey) {
			// 	e.preventDefault();
			//   } else {
			// 	var key = e.keyCode;
			// 	if (!((key == 8) || (key == 32) || (key == 46) || (key == 16) || (key >= 35 && key <= 40) || (key >= 65 && key <= 90))) {
			// 	  e.preventDefault();
			// 	}
			//   }
			// });
		  
		
		  
			// $('.Ccountry,.Ccompany').on("input", function () {
			//   var inputValue = $(this).val();
			//   var validCharacters = /^[A-Za-z]+$/;
		  
			//   if (!validCharacters.test(inputValue)) {
			// 	$(this).val(inputValue.replace(/[^A-Za-z]/g, ""));
			//   }
			// });
		  
			// $('.Cph').on("input", function () {
			//   var inputValue = $(this).val();
			//   var validNumbers = /^\d+$/;
		  
			//   if (!validNumbers.test(inputValue) || inputValue.length !== 15) {
			// 	$(this).val(inputValue.replace(/\D/g, "").substring(0, 15));
			//   }
			// });
		  
			// const textArea = document.getElementById("textArea");
			// let previousChar = '';
		  
			// textArea.addEventListener("input", function (e) {
			//   const inputValue = textArea.value;
			//   const currentChar = inputValue.charAt(inputValue.length - 1);
		  
			//   if (currentChar === ' ' && previousChar === ' ') {
			// 	// If the current and previous characters are spaces, prevent the input
			// 	e.preventDefault();
			// 	textArea.value = inputValue.slice(0, inputValue.length - 1); // Remove the extra space
			//   }
		  
			//   previousChar = currentChar;
			// });
		  
		  
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
