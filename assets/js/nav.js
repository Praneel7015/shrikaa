(function () {
  'use strict';
  var nav    = document.getElementById('nav');
  var burger = document.getElementById('nav-burger');
  var mobile = document.getElementById('nav-mobile');
  if (!nav || !burger || !mobile) return;

  var isLightPage = nav.classList.contains('nav--light');
  var lastY       = 0;
  var ticking     = false;

  function onScroll() {
    var y = window.scrollY;

    // Scrolled state (background + light mode)
    if (y > 40) {
      nav.classList.add('nav--scrolled');
      if (!isLightPage) nav.classList.add('nav--light');
    } else {
      nav.classList.remove('nav--scrolled');
      if (!isLightPage) nav.classList.remove('nav--light');
    }

    // Hide on scroll-down, reveal on scroll-up
    // Always show when within 60px of top
    if (y < 60) {
      nav.classList.remove('nav--hidden');
    } else if (y > lastY + 6) {
      // Scrolling down — hide; also close mobile menu
      nav.classList.add('nav--hidden');
      mobile.classList.remove('nav__mobile--open');
      burger.classList.remove('nav__burger--open');
      burger.setAttribute('aria-expanded', 'false');
    } else if (y < lastY - 6) {
      // Scrolling up — reveal
      nav.classList.remove('nav--hidden');
    }

    lastY    = y;
    ticking  = false;
  }

  window.addEventListener('scroll', function () {
    if (!ticking) {
      window.requestAnimationFrame(onScroll);
      ticking = true;
    }
  }, { passive: true });
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
