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

/* Preloader */
let myVar;

function myFunction() {
    myVar = setTimeout(showPage, 3000);
}

function showPage() {
  document.getElementById("cont").style.display = "none";
  document.getElementById("myDiv").style.display = "block";
}
/* End of preloader */ 