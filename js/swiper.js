'use strict'
document.addEventListener('DOMContentLoaded', function () {
  /*hero-swiper*/
  const heroSwiper = new Swiper('.hero-swiper', {
    slidesPerView: 1,
    slidesPerGroup: 1,

    loop: false,

    simulateTouch: false,

    keyboard: {
      enabled: false,
      onlyInViewport: false,
    },
    effect: 'fade',

    fadeEffect: {
      crossFade: true,
    },

    // If we need pagination
    pagination: {
      el: '.hero-swiper-pgn',
      type: 'bullets',
      clickable: true,
    },

    // Navigation arrows
    navigation: {
      nextEl: '.hero-swiper-nav-btn--next',
      prevEl: '.hero-swiper-nav-btn--prev',
    },

    breakpoints: {
      320: {
        pagination: {
          enabled: false,
        },
      },
      1080: {
        pagination: {
          enabled: true,
        },
      },
    }
  });


  /*clients-swiper*/
  let clientsSwiper = new Swiper('.clients-swiper', {

    slidesPerView: 4,

    slidesPerGroup: 4,

    loop: false,

    simulateTouch: false,

    pagination: {
      el: '.clients-swiper-pgn',
      clickable: true,
    },

    navigation: {
      nextEl: '.clients-swiper-btn--next',
      prevEl: '.clients-swiper-btn--prev',
    },

    breakpoints: {
      320: {
        slidesPerView: 1,
        slidesPerGroup: 1,
        pagination: {
          type: 'fraction',
          clickable: false,
        },
      },
      576: {
        slidesPerView: 2,
        slidesPerGroup: 2,
        pagination: {
          type: 'fraction',
          clickable: false,
        },
      },
      1080: {
        slidesPerView: 4,
        slidesPerGroup: 4,
        pagination: {
          type: 'bullets',
          clickable: true,
        },
      },
    }
  });


  /*reviews-swiper*/
  let reviewsSwiper = new Swiper('.reviews-swiper', {

    slidesPerView: 1,

    slidesPerGroup: 1,

    loop: false,

    simulateTouch: false,

    pagination: {
      el: '.reviews-swiper-pgn',
      clickable: true,
    },

    navigation: {
      nextEl: '.reviews-swiper-btn--next',
      prevEl: '.reviews-swiper-btn--prev',
    },
    breakpoints: {
      320: {
        pagination: {
          enabled: false,
        },
      },
      1080: {
        pagination: {
          enabled: true,
        },
      },
    }
  });
});
