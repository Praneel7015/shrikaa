(function () {
  'use strict';

  /* ─── NAV TEMPLATE ──────────────────────────────────────────────── */
  var NAV_HTML = function (isLight) {
    return '<nav class="nav' + (isLight ? ' nav--light' : '') + '" id="nav">' +
      '<div class="container nav__inner">' +
        '<a href="index.html" class="nav__logo" aria-label="Shrikaa home">' +
          '<img src="assets/images/logo-cropped.png" alt="Shrikaa" class="nav__logo-img" />' +
          '<span class="nav__logo-text">Shrikaa</span>' +
        '</a>' +
        '<div class="nav__links">' +
          '<a href="index.html"      class="nav__link" data-page="home">Home</a>' +
          '<a href="about.html"      class="nav__link" data-page="about">About</a>' +
          '<a href="academics.html"  class="nav__link" data-page="academics">Courses</a>' +
          '<a href="results.html"    class="nav__link" data-page="results">Results</a>' +
          '<a href="admissions.html" class="nav__link" data-page="admissions">Admissions</a>' +
          '<a href="contact.html"    class="nav__link" data-page="contact">Contact</a>' +
        '</div>' +
        '<div class="nav__cta">' +
          '<a href="https://www.askshrikaa.com" class="btn btn--white btn--nav-cta" target="_blank" rel="noopener">AskShrikaa</a>' +
        '</div>' +
        '<button class="nav__burger" id="nav-burger" aria-label="Toggle menu" aria-expanded="false" aria-controls="nav-mobile">' +
          '<span></span><span></span><span></span>' +
        '</button>' +
      '</div>' +
      '<div class="nav__mobile" id="nav-mobile">' +
        '<a href="index.html"      class="nav__mobile-link" data-page="home">Home</a>' +
        '<a href="about.html"      class="nav__mobile-link" data-page="about">About</a>' +
        '<a href="academics.html"  class="nav__mobile-link" data-page="academics">Courses</a>' +
        '<a href="results.html"    class="nav__mobile-link" data-page="results">Results</a>' +
        '<a href="admissions.html" class="nav__mobile-link" data-page="admissions">Admissions</a>' +
        '<a href="contact.html"    class="nav__mobile-link" data-page="contact">Contact</a>' +
        '<a href="https://www.askshrikaa.com" class="btn btn--primary nav__mobile-cta" target="_blank" rel="noopener">AskShrikaa &rarr;</a>' +
      '</div>' +
    '</nav>';
  };

  /* ─── FOOTER TEMPLATE ───────────────────────────────────────────── */
  var FOOTER_HTML =
    '<footer class="footer" role="contentinfo">' +
      '<div class="container">' +
        '<div class="footer__grid">' +
          '<div class="footer__brand">' +
            '<div class="footer__logo">' +
              '<img src="assets/images/logo-cropped.png" alt="Shrikaa" class="footer__logo-img" />' +
              '<span class="footer__logo-text" style="font-family:var(--font-brand);font-weight:400;letter-spacing:0.08em;">Shrikaa</span>' +
            '</div>' +
            '<p>Affordable, high-quality coaching for 1st &amp; 2nd PUC, CET, NEET, and JEE students in Bengaluru.</p>' +
            '<div class="footer__social" aria-label="Social media">' +
              '<a href="#" class="footer__social-link" aria-label="Instagram">' +
                '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none"/></svg>' +
              '</a>' +
              '<a href="#" class="footer__social-link" aria-label="YouTube">' +
                '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 0 0 1.46 6.42 29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.95 1.96C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.96A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z"/><polygon fill="currentColor" stroke="none" points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02"/></svg>' +
              '</a>' +
              '<a href="#" class="footer__social-link" aria-label="Facebook">' +
                '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>' +
              '</a>' +
            '</div>' +
          '</div>' +
          '<div class="footer__col">' +
            '<h4>Quick Links</h4>' +
            '<nav class="footer__links">' +
              '<a href="about.html">About Us</a>' +
              '<a href="academics.html">Courses</a>' +
              '<a href="results.html">Results</a>' +
              '<a href="admissions.html">Admissions</a>' +
              '<a href="contact.html">Contact</a>' +
            '</nav>' +
          '</div>' +
          '<div class="footer__col">' +
            '<h4>Programs</h4>' +
            '<nav class="footer__links">' +
              '<a href="academics.html#physics">Physics</a>' +
              '<a href="academics.html#chemistry">Chemistry</a>' +
              '<a href="academics.html#mathematics">Mathematics</a>' +
              '<a href="academics.html#biology">Biology</a>' +
              '<a href="academics.html#cet">CET Prep</a>' +
              '<a href="academics.html#neet">NEET Prep</a>' +
            '</nav>' +
          '</div>' +
          '<div class="footer__col">' +
            '<h4>Contact</h4>' +
            '<address style="font-style:normal;">' +
              '<div class="footer__contact-item"><span>&#9672;</span><span>Gopal Krishna Complex, 45/3, Residency Road, Bengaluru 560025</span></div>' +
              '<div class="footer__contact-item"><span>&#9990;</span><a href="tel:+919902316289">+91 99023 16289</a></div>' +
              '<div class="footer__contact-item"><span>&#9993;</span><a href="mailto:write2shrikaa@gmail.com">write2shrikaa@gmail.com</a></div>' +
            '</address>' +
            '<div style="margin-top:var(--sp-5);">' +
              '<a href="https://www.askshrikaa.com" target="_blank" rel="noopener" class="footer__ask-link">AskShrikaa Platform &rarr;</a>' +
            '</div>' +
          '</div>' +
        '</div>' +
        '<div class="footer__bottom">' +
          '<a href="https://praneel.sindhole.com/contact" class="footer__credit" target="_blank" rel="noopener">Made by Praneel S</a>' +
          '<p>&copy; 2026 Shrikaa Intellect Innovations. All rights reserved.</p>' +
          '<div class="footer__legal">' +
            '<a href="#">Privacy Policy</a>' +
            '<a href="#">Terms of Use</a>' +
          '</div>' +
        '</div>' +
      '</div>' +
    '</footer>' +
    /* AskShrikaa float — sits above WhatsApp */
    '<a href="https://www.askshrikaa.com" class="ask-float" target="_blank" rel="noopener" aria-label="Open AskShrikaa platform">' +
      '<img src="assets/images/askshrikaa-logo.png" alt="AskShrikaa" />' +
    '</a>' +
    /* WhatsApp float */
    '<a href="https://wa.me/919902316289" class="wa-float" target="_blank" rel="noopener" aria-label="Chat on WhatsApp">' +
      '<svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path d="M16 2C8.268 2 2 8.268 2 16c0 2.47.67 4.79 1.84 6.78L2 30l7.42-1.81A14 14 0 0 0 16 30c7.732 0 14-6.268 14-14S23.732 2 16 2zm7.21 19.44c-.3.84-1.76 1.6-2.42 1.65-.62.05-1.2.28-4.04-.84-3.38-1.34-5.56-4.8-5.73-5.02-.17-.22-1.38-1.83-1.38-3.49s.87-2.48 1.18-2.82c.3-.33.66-.42.88-.42.22 0 .44.01.63.01.2 0 .47-.08.74.56.28.66.95 2.3 1.04 2.47.09.17.14.37.03.6-.11.22-.17.36-.33.55-.17.2-.35.44-.5.59-.17.17-.34.35-.15.68.2.33.87 1.44 1.87 2.33 1.28 1.14 2.36 1.5 2.7 1.66.33.17.53.14.72-.08.2-.22.84-.99 1.07-1.32.22-.33.44-.28.74-.17.3.11 1.9.9 2.23 1.06.33.17.55.25.63.39.08.14.08.8-.22 1.65z"/></svg>' +
    '</a>';

  /* ─── MOUNT ─────────────────────────────────────────────────────── */
  function mount() {
    var page     = document.body.dataset.page || '';
    var isLight  = page !== 'home';

    /* Inject nav */
    var navSlot = document.getElementById('site-nav');
    if (navSlot) {
      navSlot.outerHTML = NAV_HTML(isLight);
    }

    /* Inject footer */
    var footerSlot = document.getElementById('site-footer');
    if (footerSlot) {
      footerSlot.outerHTML = FOOTER_HTML;
    }

    /* Mark active links */
    document.querySelectorAll('[data-page]').forEach(function (el) {
      if (el.dataset.page === page) {
        el.classList.add('nav__link--active');
        el.classList.add('nav__mobile-link--active');
      }
    });

    /* Init scroll behaviour (was in nav.js) */
    initNav();
  }

  /* ─── NAV BEHAVIOUR ─────────────────────────────────────────────── */
  function initNav() {
    var nav    = document.getElementById('nav');
    var burger = document.getElementById('nav-burger');
    var mobile = document.getElementById('nav-mobile');
    if (!nav || !burger || !mobile) return;

    var isLightPage = nav.classList.contains('nav--light');
    var lastY       = 0;
    var ticking     = false;

    function onScroll() {
      var y = window.scrollY;

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
        mobile.classList.remove('nav__mobile--open');
        burger.classList.remove('nav__burger--open');
        burger.setAttribute('aria-expanded', 'false');
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
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', mount);
  } else {
    mount();
  }
})();
