 
 /* carousel 
 $(function(){
     $(".button-collapse").sideNav();
    $('.carousel').carousel();
 }); */


/* Skills bar */
$(function (){
	$('.skillbar').each(function (){
		$(this).find('.skillbar-bar').animate({
			width: $(this).attr('data-percent')
		}, 5000);
	});
});

$('.carousel.carousel-slider').carousel({full_width: true});

$('.carousel-slider').slider({full_width: true});//slider init
