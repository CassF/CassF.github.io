/* Skills bar */
$(function (){
	$('.skillbar').each(function (){
		$(this).find('.skillbar-bar').animate({
			width: $(this).attr('data-percent')
		}, 5000);
	});
});

$( document ).ready(function(){
  $(".button-collapse").sideNav();
});