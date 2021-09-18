$(document).ready(function() {
	$('.header__burger, .header__mobile-link').click (function(event) {
		$('.header__mobile-menu, .header__burger').toggleClass('active');
		$('body').toggleClass('lock');
	});
	/*$('.portfolio__img').click (function(event) {
		$('.portfolio__img').toggleClass('zoom');
	});*/
});

