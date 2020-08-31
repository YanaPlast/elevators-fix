$('.navbar__burger').on('click', function(){
	$('.navbar__menu').toggleClass('navbar__menu_active');
});
$("a[href^='#']").click(function() {
	var _href = $(this).attr("href");
	$("html, body").animate({scrollTop: $(_href).offset().top - 170 + "px"});
	return false;
});



