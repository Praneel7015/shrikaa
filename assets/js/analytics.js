/**
 * Analytics — set ga4 measurement ID when ready (Search Console / GA4 admin).
 * Events fire only when ga4 is a non-empty G-XXXXXXXX string.
 */
(function () {
  'use strict';

  var cfg = window.SHRIKAA_ANALYTICS || {};
  var id = cfg.ga4 || '';

  function gtag() {
    window.dataLayer.push(arguments);
  }

  function initGa4() {
    if (!id || id.indexOf('G-') !== 0) return;
    window.dataLayer = window.dataLayer || [];
    window.gtag = gtag;
    gtag('js', new Date());
    gtag('config', id, { anonymize_ip: true });

    var s = document.createElement('script');
    s.async = true;
    s.src = 'https://www.googletagmanager.com/gtag/js?id=' + encodeURIComponent(id);
    document.head.appendChild(s);
  }

  function track(name, params) {
    if (typeof window.gtag === 'function') {
      window.gtag('event', name, params || {});
    }
  }

  window.SHRIKAA_TRACK = track;

  initGa4();

  document.addEventListener('click', function (e) {
    var a = e.target.closest && e.target.closest('a');
    if (!a) return;
    var href = a.getAttribute('href') || '';
    if (a.classList.contains('wa-float') || href.indexOf('wa.me') !== -1) {
      track('whatsapp_click', { link_url: href });
    } else if (a.classList.contains('ask-float') || (href.indexOf('askshrikaa.com') !== -1 && !a.classList.contains('nav__link'))) {
      track('askshrikaa_click', { link_url: href });
    } else if (href.indexOf('tel:') === 0) {
      track('call_click', { link_url: href });
    } else if (a.classList.contains('mobile-cta__btn')) {
      track('mobile_cta_click', { label: a.textContent.trim() });
    }
  }, true);
})();
