/* Side navbar */
$( document ).ready(function(){
  $(".button-collapse").sideNav();
});
/* End of navbar */ 

/* Skills bar */
// $(function (){
// 	$('.skillbar').each(function (){
// 		$(this).find('.skillbar-bar').animate({
// 			width: $(this).attr('data-percent')
// 		}, 5000);
// 	});
// });

/* Preloader */
let myVar;

function myFunction() {
    myVar = setTimeout(showPage, 3000);
}

function showPage() {
  document.getElementById("loader").style.display = "none";
  document.getElementById("mainPage").style.display = "block";
}
/* End of preloader */ 

/* TEST TIMELINE */
$(document).ready(function($){
	var timelineBlocks = $('.cd-timeline-block'),
		offset = 0.8;

	//hide timeline blocks which are outside the viewport
	hideBlocks(timelineBlocks, offset);

	//on scolling, show/animate timeline blocks when enter the viewport
	$(window).on('scroll', function(){
		(!window.requestAnimationFrame) 
			? setTimeout(function(){ showBlocks(timelineBlocks, offset); }, 100)
			: window.requestAnimationFrame(function(){ showBlocks(timelineBlocks, offset); });
	});

	function hideBlocks(blocks, offset) {
		blocks.each(function(){
			( $(this).offset().top > $(window).scrollTop()+$(window).height()*offset ) && $(this).find('.cd-timeline-img, .cd-timeline-content').addClass('is-hidden');
		});
	}

	function showBlocks(blocks, offset) {
		blocks.each(function(){
			( $(this).offset().top <= $(window).scrollTop()+$(window).height()*offset && $(this).find('.cd-timeline-img').hasClass('is-hidden') ) && $(this).find('.cd-timeline-img, .cd-timeline-content').removeClass('is-hidden').addClass('bounce-in');
		});
	}
});
/* END OF TIMELINE */
/* FOOTER */
$(function(){
    $("#flip").click(function(e){
    e.preventDefault();
        $("#panel").slideToggle();
         $('html, body').animate({
        scrollTop: 10000
    }, 2500);
    });
});