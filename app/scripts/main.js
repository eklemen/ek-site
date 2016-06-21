$(function() {
    smoothScroll.init({
        offset: 50,
        updateURL: true,
    });
	$('.hamburger-menu').on('click', function() {
		$('.bar').toggleClass('animate');
	})
	$('.nav a').on('click', function(){
		$('.navbar-toggle').click();
		$('.bar').toggleClass('animate');
	})
});