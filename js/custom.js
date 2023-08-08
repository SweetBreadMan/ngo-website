$(function () {
  /* Main Slider */
  const slider = $('.main-slider-items');

  slider.on('init', function () {
    $('.main-slider-item img').css('transform', 'scale(1)');
    $('.main-slider-item img').css('transition', 'transform 20s');
  });

  slider.slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    dots: false,
    arrows: true,
    useTransform: false,
    pauseOnHover: false
  })

  /* Main Slider Img Scale */
  slider.on('beforeChange', function (event, slick, currentSlide, nextSlide) {
    $('.main-slider-items .slick-current img').css('transform', 'scale(1.2)');
    $('.main-slider-items .slick-slide').eq(currentSlide).find('img').css('transform', 'scale(1)');
    $('.main-slider-items .slick-slide').not('.slick-current').find('img').css('transform', 'scale(1)');
  });
  slider.on('afterChange', function (event, slick, currentSlide, nextSlide) {
    $('.main-slider-items .slick-current img').css('transform', 'scale(1.2)');
  });

  slider.on('click', '.slick-next', function () {
    slider.slick('slickPlay');
  });
  slider.on('click', '.slick-prev', function () {
    slider.slick('slickPlay');
  });

  /* Scroll Top Button */
  $(window).scroll(function () {
    if ($(this).scrollTop() > 500) {
      $('.scroll-top').fadeIn(200);
    } else {
      $('.scroll-top').fadeOut(200);
    }
  });
  $('.scroll-top').click(function () {
    $('html, body').animate({scrollTop: 0}, 500);
  });

  /* ######## Responsive Jquery ######## */
  /* Hamburger Button */
  $('.hamburger-btn').click(function () {
    $('.gnb').stop().slideToggle(300);
    $(this).toggleClass('active');
  })
  $('section').click(function(){
    $('.gnb').stop().slideUp(300);
    $('.hamburger-btn').removeClass('active');
  })

  /* Sponsor Slider */
  $('.sponsor-items').slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    dots: false,
    arrows: false,
    pauseOnHover: false,
    responsive: [{
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }]
  })
})