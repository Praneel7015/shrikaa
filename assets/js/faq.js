/**
 * FAQ accordion + small progressive enhancements
 */
(function () {
  'use strict';

  document.querySelectorAll('.faq-item').forEach(function (item) {
    var btn = item.querySelector('.faq-item__trigger');
    var panel = item.querySelector('.faq-item__panel');
    if (!btn || !panel) return;

    btn.addEventListener('click', function () {
      var open = item.classList.toggle('faq-item--open');
      btn.setAttribute('aria-expanded', String(open));
      panel.hidden = !open;
    });
  });
})();
