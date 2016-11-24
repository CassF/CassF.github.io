// This is a functions that scrolls to #{blah}link
function goToByScroll(id){
    // Remove "link" from the ID
    id = id.replace("link", "");
    // Scroll
    $('html,body').animate({
    scrollTop: $("#"+id).offset().top},'slow');
}
$("#sidebar > ul > li > a").click(function(e) { 
    // Prevent a page reload when a link is pressed
    e.preventDefault(); 
    // Call the scroll function
    goToByScroll(this.id);           
});

jQuery(function($){

	$('#contact').click( function(e){
		$('#greeting').animate({top: '0',opacity: '0'});
		e.preventDefault();
		$('html,body').animate({scrollTop:$(this.hash).offset().top}, 300, function(){
			$('#greeting').show();
			$('#greeting').animate({ top: '-45px', opacity: '1' },300, function(){
				$('#greeting').delay(1500).animate({ top: '-100px', opacity: '0'},300)
			});
		});
	});

	$('#comment-count').click( function(e){
		e.preventDefault();
		$('html,body').animate({scrollTop:($(this.hash).offset().top)-125}, 300);
	});

	$('#ct-photo').click( function(e){
		e.preventDefault();
		$('html,body').animate({scrollTop:($(this.hash).offset().top)-125}, 300);
	});


});