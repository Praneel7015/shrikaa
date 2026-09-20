(function () {
  'use strict';

  /* ─── NAV TEMPLATE ──────────────────────────────────────────────── */
  var NAV_HTML = function (isLight) {
    return '<nav class="nav' + (isLight ? ' nav--light' : '') + '" id="nav">' +
      '<div class="container nav__inner">' +
        '<a href="index.html" class="nav__logo" aria-label="Shrikaa home">' +
          '<img src="assets/images/logo-cropped-sm.png" alt="Shrikaa" class="nav__logo-img" width="48" height="48" />' +
          '<span class="nav__logo-text">Shrikaa</span>' +
        '</a>' +
        '<div class="nav__links">' +
          '<a href="index.html"      class="nav__link" data-page="home">Home</a>' +
          '<a href="about.html"      class="nav__link" data-page="about">About</a>' +
          '<a href="academics.html"  class="nav__link" data-page="academics">Courses</a>' +
          '<a href="results.html"    class="nav__link" data-page="results">Results</a>' +
          '<a href="admissions.html" class="nav__link" data-page="admissions">Admissions</a>' +
          '<a href="guides/index.html" class="nav__link" data-page="guides">Guides</a>' +
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
        '<a href="guides/index.html" class="nav__mobile-link" data-page="guides">Guides</a>' +
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
              '<img src="assets/images/logo-cropped-sm.png" alt="Shrikaa" class="footer__logo-img" width="40" height="40" />' +
              '<span class="footer__logo-text" style="font-family:var(--font-brand);font-weight:400;letter-spacing:0.08em;">Shrikaa</span>' +
            '</div>' +
            '<p>Affordable, high-quality coaching for 1st &amp; 2nd PUC, CET, NEET, and JEE students in Bengaluru.</p>' +
            '<div class="footer__social" aria-label="Social media">' +
              '<a href="https://www.instagram.com/shrikaa_/" class="footer__social-link" target="_blank" rel="noopener" aria-label="Instagram">' +
                '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none"/></svg>' +
              '</a>' +
              '<a href="https://www.youtube.com/@AskShrikaa" class="footer__social-link" target="_blank" rel="noopener" aria-label="YouTube">' +
                '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 0 0 1.46 6.42 29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.95 1.96C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.96A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z"/><polygon fill="currentColor" stroke="none" points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02"/></svg>' +
              '</a>' +
              '<a href="https://www.facebook.com/shrikaa.shrika" class="footer__social-link" target="_blank" rel="noopener" aria-label="Facebook">' +
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
              '<a href="guides/index.html">Guides</a>' +
              '<a href="contact.html">Contact</a>' +
            '</nav>' +
          '</div>' +
          '<div class="footer__col">' +
            '<h4>Programs</h4>' +
            '<nav class="footer__links">' +
              '<a href="puc-coaching-jayanagar.html">PUC Coaching</a>' +
              '<a href="cet-coaching-bengaluru.html">CET Prep</a>' +
              '<a href="neet-coaching-bengaluru.html">NEET Prep</a>' +
              '<a href="jee-coaching-bengaluru.html">JEE Prep</a>' +
              '<a href="academics.html#physics">Physics</a>' +
              '<a href="academics.html#biology">Biology</a>' +
            '</nav>' +
          '</div>' +
          '<div class="footer__col">' +
            '<h4>Contact</h4>' +
            '<address style="font-style:normal;">' +
              '<div class="footer__contact-item"><span>&#9672;</span><span>276/D, Jayanagar 8th Block, Bengaluru</span></div>' +
              '<div class="footer__contact-item"><span>&#9990;</span><a href="tel:+917026386563">7026386563</a></div>' +
              '<div class="footer__contact-item"><span>&#9993;</span><a href="mailto:askshrikaa@gmail.com">askshrikaa@gmail.com</a></div>' +
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
            '<a href="contact.html">Privacy enquiries</a>' +
            '<a href="admissions.html">Admissions</a>' +
          '</div>' +
        '</div>' +
      '</div>' +
    '</footer>' +
    '<nav class="mobile-cta" aria-label="Quick actions">' +
      '<a href="tel:+917026386563" class="mobile-cta__btn">Call</a>' +
      '<a href="https://wa.me/917026386563" class="mobile-cta__btn mobile-cta__btn--wa" target="_blank" rel="noopener">WhatsApp</a>' +
      '<a href="admissions.html" class="mobile-cta__btn mobile-cta__btn--primary">Apply</a>' +
    '</nav>' +
    '<a href="https://www.askshrikaa.com" class="ask-float" target="_blank" rel="noopener" aria-label="Open AskShrikaa platform">' +
      '<img src="assets/images/askshrikaa-logo-sm.png" alt="AskShrikaa" width="40" height="40" />' +
    '</a>' +
    '<a href="https://wa.me/917026386563" class="wa-float" target="_blank" rel="noopener" aria-label="Chat on WhatsApp">' +
      '<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.435 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 6.045L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>' +
    '</a>';

  function assetPrefix() {
    var path = window.location.pathname || '';
    return path.indexOf('/guides/') !== -1 ? '../' : '';
  }

  function rewriteMountedPaths(prefix) {
    if (!prefix) return;
    document.querySelectorAll('img[src^="assets/"]').forEach(function (el) {
      el.setAttribute('src', prefix + el.getAttribute('src'));
    });
    document.querySelectorAll('a[href]').forEach(function (a) {
      var href = a.getAttribute('href') || '';
      if (!href || href.indexOf('http') === 0 || href.indexOf('tel:') === 0 || href.indexOf('mailto:') === 0 || href.charAt(0) === '#' || href.indexOf('../') === 0) return;
      if (/\.html($|#)/.test(href) || href.indexOf('guides/') === 0) {
        a.setAttribute('href', prefix + href);
      }
    });
  }

  function mount() {
    var page     = document.body.dataset.page || '';
    var isLight  = page !== 'home';
    var prefix   = assetPrefix();

    var navSlot = document.getElementById('site-nav');
    if (navSlot) {
      navSlot.outerHTML = NAV_HTML(isLight);
    }

    var footerSlot = document.getElementById('site-footer');
    if (footerSlot) {
      footerSlot.outerHTML = FOOTER_HTML;
      document.body.classList.add('has-mobile-cta');
    }

    rewriteMountedPaths(prefix);

    document.querySelectorAll('#nav [data-page]').forEach(function (el) {
      if (el.dataset.page !== page) return;
      if (el.classList.contains('nav__mobile-link')) {
        el.classList.add('nav__mobile-link--active');
      } else {
        el.classList.add('nav__link--active');
      }
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

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', mount);
  } else {
    mount();
  }
})();
