$(document).ready(function() {
	$('.icon-menu').click(function(event) {
	$('.icon-menu,.menu__body').toggleClass('active');
	$('body').toggleClass('lock');  
	});

	function ibg(){
	$.each($('.ibg'), function(index, val) {
			if($(this).find('img').length>0){
			$(this).css('background-image','url("'+$(this).find('img').attr('src')+'")');
		}
		});
	}
	ibg();

	$('.agenda__btn').click(function(event) {
		if($('.agenda__list').hasClass('one')) {
			$('.agenda__btn').not($(this)).removeClass('on').css('display', 'inline-block');;
			$('.event').not($(this).next()).slideUp(300).css('display', 'none');
		}
		$(this).toggleClass('on').next().slideToggle(300);
		$('.event').click(function(event) {
			$(this).css('display', 'none');
			$('.agenda__btn').css('display', 'inline-block');
			
		});
		$(this).css('display', 'none');
	});
	
	// Fixed Header

	let header = $("#header");
	let intro = $("#intro");
	let introH = intro.innerHeight();
	let scrollPos = $(window).scrollTop();
	let menu = $("#menu");
	let menuToggle = $("#menuToggle");

	checkScroll(scrollPos, introH);

	$(window).on("scroll load resize", function() {
		introH = intro.innerHeight();
		scrollPos = $(this).scrollTop();

		checkScroll(scrollPos, introH);
	});

	function checkScroll(scrollPos, introH) {

		if( scrollPos > introH ) {
			header.addClass("fixed");
		} else {
			header.removeClass("fixed");
		}

	}


	// Smooth scroll

	$("[data-scroll]").on("click", function(event) {
		event.preventDefault();

		let elementID = $(this).data('scroll');
		let elementOffset = $(elementID).offset().top;

		menu.removeClass("show");

		$("html, body").animate({
			scrollTop: elementOffset + 1
		}, 700);
	});

	// menuToggle

	menuToggle.on("click", function(event) {
		event.preventDefault();

		menu.toggleClass("show");
	});

});