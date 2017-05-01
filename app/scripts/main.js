// Will change this back to its own external file, the ESLint was upset that nothing was defined along with
// a lot of other things that were unnecessary...

// 'use strict';
// var $ = require('/bower_components/jquery/dist/jquery.min');
// var smoothScroll = require('/bower_components/smooth-scroll/dist/js/smooth-scroll.min');
// var swal = require('/bower_components/sweetalert2/dist/sweetalert2.min');
// $(function() {
// 	smoothScroll.init({
// 		offset: 50,
// 		updateURL: true
// 	});
// 	$('.hamburger-menu').on('click', function() {
// 		$('.bar').toggleClass('animate');
// 	});
// 	$('.nav a').on('click', function(){
// 		$('.navbar-toggle').click();
// 		$('.bar').toggleClass('animate');
// 	});
//
// 	var $form = $('form');
// 	$form.attr('action', 'https://formspree.io/ejklemen@gmail.com');
// 	$form.submit(function(e){
// 		e.preventDefault();
// 		$('form').serialize();
// 		var formData = {
// 			'name': $('input[name=name]').val(),
// 			'email': $('input[name=_replyto]').val(),
// 			'body': $('textarea[name=body]').val()
// 		};
// 		$.ajax({
// 			url: 'https://formspree.io/ejklemen@gmail.com',
// 			method: 'POST',
// 			data: formData,
// 			dataType: 'json'
// 		}).done(function(){
// 			e.preventDefault();
// 			$('form')[0].reset();
// 			swal(
// 				'Success!',
// 				'Your message has been sent! I will get back to you shortly.',
// 				'success'
// 			);
// 		}).fail(function(err){
// 			e.preventDefault();
// 			console.log(err);
// 			$('form')[0].reset();
// 			swal(
// 				'Oops!',
// 				'It looks like something went wrong. Try again later or send a message directly to <a href="mailto:ejklemen@gmail.com">ejklemen@gmail.com</a>',
// 				'error'
// 			);
// 		});
// 		return false;
// 	});
// });
