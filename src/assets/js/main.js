var preloader=document.getElementById('load');
function myfunctions() {
	preloader.style.display='none';
}


$(document).ready(function(){

	$(window).scroll(function() {
		if ($(window).scrollTop() > 20) {
			$('.menubar').addClass('menubarshadow');
		} else {
			$('.menubar').removeClass('menubarshadow');
		}
	});


});