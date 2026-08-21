(function () {
  'use strict';
  var nav    = document.getElementById('nav');
  var burger = document.getElementById('nav-burger');
  var mobile = document.getElementById('nav-mobile');
  if (!nav || !burger || !mobile) return;

  var isLightPage = nav.classList.contains('nav--light');

  function onScroll() {
    if (window.scrollY > 40) {
      nav.classList.add('nav--scrolled');
      if (!isLightPage) nav.classList.add('nav--light');
    } else {
      nav.classList.remove('nav--scrolled');
      if (!isLightPage) nav.classList.remove('nav--light');
    }
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  burger.addEventListener('click', function () {
    var isOpen = mobile.classList.toggle('nav__mobile--open');
    burger.classList.toggle('nav__burger--open', isOpen);
    burger.setAttribute('aria-expanded', String(isOpen));
  });

  document.addEventListener('click', function (e) {
    if (!nav.contains(e.target)) {
      mobile.classList.remove('nav__mobile--open');
      burger.classList.remove('nav__burger--open');
      burger.setAttribute('aria-expanded', 'false');
    }
  });

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') {
      mobile.classList.remove('nav__mobile--open');
      burger.classList.remove('nav__burger--open');
      burger.setAttribute('aria-expanded', 'false');
    }
  });
})();
