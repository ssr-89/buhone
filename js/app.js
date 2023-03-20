'use strict'
document.addEventListener('DOMContentLoaded', () => {
  const body = document.querySelector('.body');
  /*плавный скрол*/
  const anchors = document.querySelectorAll('.js-scroll-link')

  for (let anchor of anchors) {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();

      const blockID = anchor.getAttribute('href').substr(1);

      document.getElementById(blockID).scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      })
    })
  };

  /*header-menu*/
  const headerNav = document.querySelector('.header-nav');
  const menuBurger = document.querySelector('.burger-menu');
  const headerMenuLinks = document.querySelectorAll('.header-menu__link');

  menuBurger.addEventListener('click', function () {
    body.classList.toggle('overflow-hidden');
    headerNav.classList.toggle('nav-active');
    this.classList.toggle('burger-active');
    if (this.classList.contains("burger-active")) {
      body.classList.add('overflow-hidden');
      headerNav.classList.add("nav-active");
    } else {
      body.classList.remove('overflow-hidden');
      headerNav.classList.remove("nav-active");
    }
  });
  headerMenuLinks.forEach(function (el) {
    el.addEventListener("click", function () {
      body.classList.remove('overflow-hidden');
      menuBurger.classList.remove("burger-active");
      headerNav.classList.remove("nav-active");
    });
  });

  document.addEventListener("keydown", function (e) {
    if (e.which === 27) {
      menuBurger.classList.remove("burger-active");
      headerNav.classList.remove("nav-active");
    }
  });


  /*services*/
  const servicesContainer = document.querySelector('.services__container');
  const servicesTop = document.querySelector('.services-top');
  const openCardBtns = document.querySelectorAll('.open-card-btn');
  const servicesContent = document.querySelectorAll('.services-list__item');
  const servicesNavLinks = document.querySelectorAll(
    '.services-list__nav-link'
  );

  openCardBtns.forEach(function (openCardBtn) {
    openCardBtn.addEventListener('click', (e) => {
      const path = e.currentTarget.dataset.path;

      for (let service of servicesContent) {
        service.classList.remove('show-service');
      }
      document
        .querySelector(`[data-target="${path}"]`)
        .classList.add('show-service');
      servicesTop.classList.add('services-top_hidden');
      servicesContainer.classList.add('services__container_hidden');
    });
  });

  for (let i = 0; i < servicesContent.lenght; i++) {
    if (!servicesContent[i].classList.contains('show-service')) {
      servicesContainer.classList.remove('services__container_hidden');
      servicesTop.classList.remove('services-top_hidden');
    } else {
      servicesContainer.classList.add('services__container_hidden');
      servicesTop.classList.add('services-top_hidden');
    }
  }

  servicesNavLinks.forEach(function (element) {
    element.addEventListener('click', () => {
      for (let service of servicesContent) {
        service.classList.remove('show-service');
      }
      servicesContainer.classList.remove('services__container_hidden');
      servicesTop.classList.remove('services-top_hidden');
    });
  });
  /*services-show-more*/
  const servicesCards = document.querySelectorAll('.services-card');
  const btnVisible = document.querySelector('.services-show-btn');
  const btnHidden = document.querySelector('.services-hidden-btn');

  for (let e of servicesCards) {
    btnVisible.addEventListener('click', function () {
      e.classList.add('visible-card');
      btnVisible.classList.add('hidden_show-btn');
      btnHidden.classList.add('visible_hidden-btn');
    });
    btnHidden.addEventListener('click', function () {
      e.classList.remove('visible-card');
      btnVisible.classList.remove('hidden_show-btn');
      btnHidden.classList.remove('visible_hidden-btn');
    });
    if (btnHidden.classList.contains('visible_hidden-btn')) {
      btnVisible.classList.remove('hidden_show-btn');
    } else if (btnVisible.classList.contains('hidden_show-btn')) {
      btnHidden.classList.add('visible_hidden-btn');
    }
  }


  /*ABOUT*/
  /*about-top*/
  const aboutUsLink = document.querySelector('.about-top__text-link');
  const aboutTop = document.getElementById('about-top'); /*about-top-hidden*/
  const aboutCards = document.getElementById('cases'); /*about-cards-hidden*/
  const aboutTopDescr = document.getElementById('about-us'); /*about-top-descr-vis*/
  const aboutTopReturn = document.querySelector('.about-nav-link');
  const aboutCardsBtns = document.querySelector('.about-card__btns'); /*about-hid-card-btns*/


  if (aboutUsLink) {
    aboutUsLink.addEventListener('click', () => {
      aboutTop.classList.add('about-top-hidden');
      aboutCards.classList.add('about-cards-hidden');
      aboutTopDescr.classList.add('about-top-descr-vis');
      aboutCardsBtns.classList.add('about-hid-card-btns');

    });
  } else {
    aboutTop.classList.remove('about-top-hidden');
    aboutCards.classList.remove('about-cards-hidden');
    aboutTopDescr.classList.remove('about-top-descr-vis');
    aboutCardsBtns.classList.remove('about-hid-card-btns');
  }
  if (aboutTopReturn) {
    aboutTopReturn.addEventListener('click', () => {
      aboutTop.classList.remove('about-top-hidden');
      aboutCards.classList.remove('about-cards-hidden');
      aboutTopDescr.classList.remove('about-top-descr-vis');
      aboutCardsBtns.classList.remove('about-hid-card-btns');

    });
  } else {
    aboutTop.classList.add('about-top-hidden');
    aboutCards.classList.add('about-cards-hidden');
    aboutTopDescr.classList.add('about-top-descr-vis');
    aboutCardsBtns.classList.add('about-hid-card-btns');
  }

  /*about-pop-up*/
  const aboutLists = document.querySelector('.about-lists-cases'); /*open-lists-cases*/
  const aboutListCases = document.querySelectorAll('.about-list-cases'); /*open-list-cases*/
  const aboutOpenListBtns = document.querySelectorAll('.about-card__link');
  const aboutCloseListBtns = document.querySelectorAll('.about-list-cases__close-btn');

  const lockPadding = document.querySelectorAll('.lock-padding');


  aboutOpenListBtns.forEach(function (e) {
    const nameId = e.getAttribute("href").replace("#", "");
    const currentAboutPopup = document.getElementById(nameId);
    e.addEventListener('click', (el) => {
      el.preventDefault();
      aboutLists.classList.add('open-lists-cases');
      currentAboutPopup.classList.add('open-list-cases');
      bodyLock();
    });
  });

  if (aboutCloseListBtns.length > 0) {
    aboutCloseListBtns.forEach(function (e) {
      e.addEventListener("click", (el) => {
        el.preventDefault();
        aboutLists.classList.remove('open-lists-cases');
        if (aboutListCases.length > 0) {
          for (let i = 0; i < aboutListCases.length; i++) {
            aboutListCases[i].classList.remove('open-list-cases');
          }
        }
        bodyUnLock();
      });
    });
  }

  function bodyLock() {
    const lockPaddingValue = window.innerWidth - document.querySelector('.wrapper').offsetWidth + 'px';
    if (lockPadding.lenght > 0) {
      for (let i = 0; i < lockPadding.lenght; i++) {
        const el = lockPadding[i];
        el.style.paddingRight = lockPaddingValue;
      }
    }
    body.style.paddingRight = lockPaddingValue;
    body.classList.add('overflow-hidden');
  }

  function bodyUnLock() {
    if (lockPadding.lenght > 0) {
      for (let i = 0; i < lockPadding.lenght; i++) {
        const el = lockPadding[i];
        el.style.paddingRight = '0px';
      }
    }
    body.style.paddingRight = '0px';
    body.classList.remove('overflow-hidden');
  }

  aboutLists.addEventListener('click', function (event) {
    if (event.target === this) { // если кликнули на родителе, то закрываем модальное окно
      aboutLists.classList.remove('open-lists-cases');
      if (aboutListCases.length > 0) {
        for (let i = 0; i < aboutListCases.length; i++) {
          aboutListCases[i].classList.remove('open-list-cases');
        }
      }
      bodyUnLock();
    }
  });

  document.addEventListener("keydown", function (e) {
    // Esc
    if (e.which === 27) {
      aboutLists.classList.remove('open-lists-cases');
      if (aboutListCases.length > 0) {
        for (let i = 0; i < aboutListCases.length; i++) {
          aboutListCases[i].classList.remove('open-list-cases');
        }
      }
      bodyUnLock();
    }
  });

  /*about-show-more*/
  const aboutCardElements = document.querySelectorAll('.about-card');
  const aboutBtnVis = document.querySelector('.about-show-btn');
  const aboutBtnHid = document.querySelector('.about-hidden-btn');

  for (let i = 0; i < aboutCardElements.length; i++) {
    aboutBtnVis.addEventListener('click', function () {
      aboutCardElements[i].classList.add('visible-card');
      aboutBtnVis.classList.add('hidden_show-btn');
      aboutBtnHid.classList.add('visible_hidden-btn');
    });
    aboutBtnHid.addEventListener('click', function () {
      aboutCardElements[i].classList.remove('visible-card');
      aboutBtnVis.classList.remove('hidden_show-btn');
      aboutBtnHid.classList.remove('visible_hidden-btn');
    });
    if (aboutBtnHid.classList.contains('visible_hidden-btn')) {
      aboutCardElements[i].classList.remove('visible-card');
      aboutBtnVis.classList.remove('hidden_show-btn');
    } else if (aboutBtnVis.classList.contains('hidden_show-btn')) {
      aboutCardElements[i].classList.add('visible-card');
      aboutBtnHid.classList.add('visible_hidden-btn');
    }
  }



  document.addEventListener("focus", function (event) {
    console.log("Фокус на элементе: ", event.target);
  }, true);
});
