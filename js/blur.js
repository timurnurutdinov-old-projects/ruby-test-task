
	  function fader() {
		  var r = $('.blurred'), // берем все элементы, имеющие класс .blurred
		  wh = $(window).height(), // тут берем высоту окна
		  dt = $(document).scrollTop(), // отступ от верха, наверно для каждого браузера
		  step = $('.image-wrap').css('height'), // разбиваем img на линии(шаги)
		  elView, opacity, scrolled,
		  n = 10;
		  

		  // Loop elements with class "blurred"
			  r.each(function() {
				  scrolled = $(document).scrollTop();
				  temp = scrolled / n;
				  //alert(temp);
				  if (temp < 100) {
					  opacity = 0.1 * temp;
				  }
				  $(this).css('opacity', opacity);
			  }
		  );
	  }
	  
	  $(document).bind('scroll', fader);
	  
	  (function() {
	    $(window).scroll(function() {
	      var oVal;
	      oVal = $(window).scrollTop() / 240;
	      return $(".blur").css("opacity", oVal);
	    });

	  }).call(this);
	  