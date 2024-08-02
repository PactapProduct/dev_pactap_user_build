
$(document).ready(function(){
	if($('.detail-gallery').length>0){
		$('.detail-gallery').each(function(){
            var sliderThumbnail = new Swiper('.slider-thumbnail', {
              slidesPerView: 4,
              freeMode: true,
              watchSlidesVisibility: true,
              watchSlidesProgress: true,
              navigation: {
                nextEl: '.nextMe',
                prevEl: '.prevMe',
              },
            });
			$(this).find(".carousel a").on('click',function(event) {
				event.preventDefault();
				$(this).parents('.detail-gallery').find(".carousel a").removeClass('active');
				$(this).addClass('active');
				var z_url =  $(this).find('img').attr("src");
				$(this).parents('.detail-gallery').find("#img_zoom").attr("src", z_url);
				$('.zoomWindow').css('background-image','url("'+z_url+'")');
			});
			
		});
	}
    
    /*var slider = new Swiper('.slider', {
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      thumbs: {
        swiper: sliderThumbnail
      }
    });*/
    
});
