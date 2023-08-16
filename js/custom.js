$(function() {
  /* Main Slider */
  const slider = $('.main-slider-items');

  slider.slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    dots: true,
    arrows: true,
    pauseOnHover: false,
    fade: true,
  })

  /* Scroll Top Button */
  const $header = $('header');
  const $scrollBtn = $('.scroll-top');
  $(window).scroll(function() {
    if($(this).scrollTop() > 90) {
      $scrollBtn.fadeIn();
      $header.addClass('scroll');
    } else {
      $scrollBtn.fadeOut();
      $header.removeClass('scroll');
    }
  })
  $scrollBtn.click(function() {
    $('html, body').animate({scrollTop: 0}, 500);
  });
  

  /* ######## Responsive jQuery ######## */
  /* Trigger Button */
  $('.btn-trigger').click(function() {
    $('.gnb.mobile-gnb').stop().slideToggle(300);
    $(this).toggleClass('active');
  })
  $('section').click(function() {
    $('.gnb.mobile-gnb').stop().slideUp(300);
    $('.btn-trigger').removeClass('active');
  })

  /* Sponsor Slider */
  $('.sponsor-items').slick({
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    dots: false,
    arrows: false,
    pauseOnHover: false,
    responsive: [
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        }
      },
      {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplaySpeed: 1500
        }
      }
    ]
  })
})