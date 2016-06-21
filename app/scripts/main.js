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
	var submit = function(data){
		
	}

	$('form').attr("action", "https://formspree.io/ejklemen@gmail.com");
	$('form').submit(function(e){
		e.preventDefault();
		$('form').serialize();
		var formData = {
            'name'  : $('input[name=name]').val(),
            'email' : $('input[name=_replyto]').val(),
            'body'  : $('textarea[name=body]').val()
        };
        $.ajax({
            url: "https://formspree.io/ejklemen@gmail.com", 
            method: "POST",
            // accepts: 'application/json',
            data: formData,
            dataType: "json"
        }).done(function(data){
        	e.preventDefault();
        	$('form')[0].reset();
        	swal(
        	  'Success!',
        	  'Your message has been sent! I will get back to you shortly.',
        	  'success'
        	)
        });
        return false;
	});
	
});