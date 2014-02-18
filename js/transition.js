$('.bit-button').click(function() {
  $('html').css('overflow', 'visible');
  $('html, body').animate({scrollTop: $("#content-link").offset().top - 100}, 2000);
});