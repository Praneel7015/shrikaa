(function () {
  'use strict';

  var NAV_HTML = function (isLight) {
    return '<nav class="nav' + (isLight ? ' nav--light' : '') + '" id="nav">' +
      '<div class="container nav__inner">' +
        '<a href="/" class="nav__logo" aria-label="Shrikaa home">' +
          '<img src="/assets/images/logo-cropped-sm.webp" alt="Shrikaa" class="nav__logo-img" width="48" height="48" />' +
          '<span class="nav__logo-text">Shrikaa</span>' +
        '</a>' +
        '<div class="nav__links">' +
          '<a href="/"      class="nav__link" data-page="home">Home</a>' +
          '<a href="/about"      class="nav__link" data-page="about">About</a>' +
          '<a href="/academics"  class="nav__link" data-page="academics">Courses</a>' +
          '<a href="/results"    class="nav__link" data-page="results">Results</a>' +
          '<a href="/donate"      class="nav__link" data-page="donate">Donate</a>' +
          '<a href="/contact"    class="nav__link" data-page="contact">Contact</a>' +
        '</div>' +
        '<div class="nav__cta">' +
          '<a href="https://www.askshrikaa.com" class="btn btn--white btn--nav-cta" target="_blank" rel="noopener">AskShrikaa</a>' +
        '</div>' +
        '<button class="nav__burger" id="nav-burger" aria-label="Toggle menu" aria-expanded="false" aria-controls="nav-mobile">' +
          '<span></span><span></span><span></span>' +
        '</button>' +
      '</div>' +
      '<div class="nav__mobile" id="nav-mobile">' +
        '<a href="/"      class="nav__mobile-link" data-page="home">Home</a>' +
        '<a href="/about"      class="nav__mobile-link" data-page="about">About</a>' +
        '<a href="/academics"  class="nav__mobile-link" data-page="academics">Courses</a>' +
        '<a href="/results"    class="nav__mobile-link" data-page="results">Results</a>' +
        '<a href="/donate"      class="nav__mobile-link" data-page="donate">Donate</a>' +
        '<a href="/contact"    class="nav__mobile-link" data-page="contact">Contact</a>' +
        '<a href="https://www.askshrikaa.com" class="btn btn--primary nav__mobile-cta" target="_blank" rel="noopener">AskShrikaa &rarr;</a>' +
      '</div>' +
    '</nav>';
  };

  function mount() {
    var page = document.body.dataset.page || '';
    var slot = document.getElementById('site-nav');
    if (!slot) return;
    slot.outerHTML = NAV_HTML(page !== 'home');
    document.querySelectorAll('#nav [data-page]').forEach(function (el) {
      if (el.dataset.page !== page) return;
      el.classList.add(el.classList.contains('nav__mobile-link') ? 'nav__mobile-link--active' : 'nav__link--active');
    });
    initNav();
  }
  function initNav() {
    var nav    = document.getElementById('nav');
    var burger = document.getElementById('nav-burger');
    var mobile = document.getElementById('nav-mobile');
    if (!nav || !burger || !mobile) return;

    var isLightPage = nav.classList.contains('nav--light');
    var lastY       = 0;
    var ticking     = false;

    if (mobile.parentElement !== document.body) {
      document.body.appendChild(mobile);
    }

    function isMenuOpen() {
      return mobile.classList.contains('nav__mobile--open');
    }

    function setMenuOpen(open) {
      mobile.classList.toggle('nav__mobile--open', open);
      burger.classList.toggle('nav__burger--open', open);
      nav.classList.toggle('nav--menu-open', open);
      document.body.classList.toggle('nav-menu-open', open);
      burger.setAttribute('aria-expanded', String(open));
      if (open) {
        nav.classList.remove('nav--hidden');
      }
    }

    function onScroll() {
      var y = window.scrollY;

      if (isMenuOpen()) {
        lastY   = y;
        ticking = false;
        return;
      }

      if (y > 40) {
        nav.classList.add('nav--scrolled');
        if (!isLightPage) nav.classList.add('nav--light');
      } else {
        nav.classList.remove('nav--scrolled');
        if (!isLightPage) nav.classList.remove('nav--light');
      }

      if (y < 60) {
        nav.classList.remove('nav--hidden');
      } else if (y > lastY + 6) {
        nav.classList.add('nav--hidden');
      } else if (y < lastY - 6) {
        nav.classList.remove('nav--hidden');
      }

      lastY   = y;
      ticking = false;
    }

    window.addEventListener('scroll', function () {
      if (!ticking) { window.requestAnimationFrame(onScroll); ticking = true; }
    }, { passive: true });
    onScroll();

    burger.addEventListener('click', function (e) {
      e.stopPropagation();
      setMenuOpen(!isMenuOpen());
    });

    mobile.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        setMenuOpen(false);
      });
    });

    document.addEventListener('click', function (e) {
      if (!isMenuOpen()) return;
      if (nav.contains(e.target) || mobile.contains(e.target)) return;
      setMenuOpen(false);
    });

    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && isMenuOpen()) {
        setMenuOpen(false);
      }
    });

    window.addEventListener('resize', function () {
      if (window.innerWidth > 768 && isMenuOpen()) {
        setMenuOpen(false);
      }
    });
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', mount);
  else mount();
})();
