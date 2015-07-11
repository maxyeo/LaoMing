$(document).ready(function() {  

	sizeitup();

	//nav bar scoll action
	$('#logo').click(function() {
		$("html, body").animate({ scrollTop: $('').offset().top}, 500);
	});//clicked on top


});

$(window).resize(function() {
 	sizeitup();
});

function sizeitup() {
	var bodyh = $(window).height();
	var bodyw = $(window).width();
	if (bodyw > 650) {
		$(".top").css("height",bodyh);
	}
}

$(window).scroll(function() {
	var bodyh = $(window).height();
	var pos = $(window).scrollTop();
	var ent = $("#enterprises").offset().top + 185;
	var tea = $("#team").offset().top - 140;
	if (pos > 0) {
		$('header').addClass('up');
	} else {
		$('header').removeClass('up');
	}
	if (pos < ent) {
		$("#ent-menu").removeClass().addClass("top");
	} else if (pos > ent && pos < tea) {
		$("#ent-menu").removeClass().addClass("move");
	} else if (pos > tea) {
		$("#ent-menu").removeClass().addClass("bot");
	}
	console.log();
});

//SMOOTH SCROLLING
$(function() {
	$('a[href*=#]:not([href=#])').click(function() {
		if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
			var target = $(this.hash);
			target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
			if (target.length) {
				$('html,body').animate({
					scrollTop: target.offset().top - 70
				}, 500);
				return false;
			}
		}
	});
});

$(".navicon-button").click(function(){
	$("nav").toggleClass("open");
	$(this).toggleClass("open");
});