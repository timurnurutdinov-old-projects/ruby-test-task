$('.bit-button').click(function() {
  $('html').css('overflow', 'visible');
  $('html, body').animate({scrollTop: $("#content-page").offset().top}, 2000, function() {
		$('#displayed-page').css('display', 'none');
  });
});