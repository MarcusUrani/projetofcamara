$('.comunicado__lista a').click(function(e){
	e.preventDefault();
	var id = $(this).attr('href'),
			menuHeight = $('ul').innerHeight(),
			targetOffset = $(id).offset().top;
	$('html, body').animate({
		scrollTop: targetOffset - menuHeight
	}, 500);
});
