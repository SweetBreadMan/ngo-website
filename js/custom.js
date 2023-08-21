$(function() {
  /* ######## Main Slider ######## */
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

  /* ######## Scroll Events ######## */

  /* Header & Scroll Btn Event */
  window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    const scrollBtn = document.querySelector('.scroll-top');
    const scrollY = window.scrollY;
    if(scrollY > 90) {
      header.classList.add('scroll');
      scrollBtn.classList.add('scroll');
    } else {
      header.classList.remove('scroll');
      scrollBtn.classList.remove('scroll');
    }
  });

  $('.scroll-top').click(function() {
    $('html, body').animate({scrollTop: 0}, 500);
  })

  /* Donation Section Progress Fill */
  function progressFill() {
    const progress = document.querySelectorAll('.progress-bar');
    for (let item of progress) {
      item.classList.add('fill');
    }
  }

  /* About Section Fade */
  function aboutFade() {
    const aboutPhoto = document.querySelector('.about-explanation .photo');
    const aboutDetail = document.querySelector('.about-explanation .detail');
    const aboutItems = document.querySelectorAll('.about-item');

    for(let item of aboutItems) {
      item.classList.add('scroll');
    }

    aboutPhoto.animate([
      {
        transform: 'translate(-150px, 0)',
        opacity: '0',
      },
      {
        transform: 'translate(0, 0)',
        opacity: '1',
      }
    ],{
      duration : 1300,
      fill: 'forwards',
      easing: 'cubic-bezier(.52,1.48,.9,1.03)'
    })

    aboutDetail.animate([
      {
        transform: 'translate(150px, 0)',
        opacity: '0',
      },
      {
        transform: 'translate(0, 0)',
        opacity: '1',
      }
    ],{
      duration: 1300,
      fill: 'forwards',
      easing: 'cubic-bezier(.52,1.48,.9,1.03)'
    })
  }

  /* History Section Count Up */
  function historyCount() {
    const counters = document.querySelectorAll('.counter-wrapper h1');
    counters.forEach((counter) => {
      counter.innerText = '0';
      const updateCounter = () => {
        const target = Number(counter.dataset.count);
        const count = Number(counter.innerText);
        const increment = target / 230;
        if(count < target) {
          counter.innerText = Math.ceil(count + increment);
          setTimeout(updateCounter, 10);
        } else {
          counter.innerText = target.toLocaleString();
        }
      }
      updateCounter();
    })
  }

  /* Rescue Section Fade */
  function rescueFade() {
    const items = document.querySelectorAll('.rescue-item');
    for(let item of items) {
      item.classList.add('scroll');
    }
  }

  /* Section Scroll Events IntersectionObserver */
  const sections = document.querySelectorAll('section');
  let processedSections = []; // 처리된 섹션을 추적하는 배열

  let options = {
    rootMargin: '-300px 0px -300px 0px',
  }
  let observer = new IntersectionObserver((e) => {
    e.forEach((section) => {
      let sectionName = section.target.className;

      if (section.isIntersecting && !processedSections.includes(sectionName)) {
        processedSections.push(sectionName);
        if (sectionName === 'donation') {
          progressFill();
        } else if (sectionName === 'about') {
          aboutFade();
        } else if (sectionName === 'history') {
          historyCount();
        } else if (sectionName === 'rescue') {
          rescueFade();
        }
      }
    })
  }, options)

  sections.forEach(section => {
    observer.observe(section);
  });

  /* ######## Responsive JS ######## */
  /* Trigger Button */
  $('.btn-trigger').click(function() {
    $('.gnb.mobile-gnb').stop().slideToggle(300);
    $(this).toggleClass('active');
  })
  $('section').click(function() {
    $('.gnb.mobile-gnb').stop().slideUp(300);
    $('.btn-trigger').removeClass('active');
  })

  /* ######## Sponsor Slider ######## */
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