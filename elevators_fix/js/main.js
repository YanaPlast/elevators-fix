$(window).load(function(){

	$('.navbar__burger, .navbar__menu-link').on('click', function(){
		$('.navbar__menu').toggleClass('navbar__menu_active');
		$('.navbar__burger').toggleClass('navbar__burger_active');
		$('body').toggleClass('lock');
	});

	/*$('.navbar__menu-link').on('click', function(){
		$('.navbar__menu').toggleClass('navbar__menu_active');
		$('.navbar__burger').toggleClass('navbar__burger_active');
		$('body').toggleClass('lock');
	});
	*/

	$("a[href^='#']").click(function() {
		var _href = $(this).attr("href");
		$("html, body").animate({scrollTop: $(_href).offset().top - 170 + "px"});
		return false;
	});

	/* показывать карту, когда докрутили */

	var reviews = $('.reviews');
	var reviewsTop = reviews.offset().top;
	$(window).bind('scroll', function(){
		var windowTop = $(this).scrollTop();
		if(windowTop > reviewsTop) {
			$('.map').html('<script type="text/javascript" charset="utf-8" async src="https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3A8c6b30629cd5296d6be780fca53cd6b369d5d82b410f3c92df836b562f276e85&amp;width=100%25&amp;height=400&amp;lang=ru_RU&amp;scroll=false"></script>');
			$(window).unbind('scroll');
		}
	});

});


