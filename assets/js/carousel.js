(function () {
  'use strict';

  /*
   * INFINITE CAROUSEL — how it works:
   *
   * The "infinite" trick uses DOM cloning:
   *   [clone of last N] | [real cards] | [clone of first N]
   *
   * We start at position = N (the first real card).
   * When we slide past the last real card into the trailing clones,
   * we instantly snap (no animation) back to the identical real position.
   * Same in reverse for the leading clones → seamless loop.
   *
   * Card widths are calculated in JS (not CSS %) so they are exact
   * pixel values that account for the gap between cards.
   */

  var GAP = 24; // matches --sp-6 (1.5rem @ 16px base)

  function initCarousel(opts) {
    var trackEl  = document.getElementById(opts.trackId);
    var outerEl  = opts.outerId ? document.getElementById(opts.outerId) : (trackEl && trackEl.parentElement);
    var prevBtn  = document.getElementById(opts.prevId);
    var nextBtn  = document.getElementById(opts.nextId);
    var dotsWrap = document.getElementById(opts.dotsId);
    if (!trackEl || !outerEl) return;
    var realCards  = Array.from(trackEl.children);
    var totalReal  = realCards.length;
    var autoTimer  = null;
    var touchStartX = 0;
    var isAnimating = false;

    // ── responsive perPage ──────────────────────────────────────────────
    function getPerPage() {
      var w = window.innerWidth;
      if (w <= 520)  return 1;
      if (w <= 820)  return 2;
      return Math.min(opts.perPage || 3, totalReal);
    }

    // ── card width (px) ─────────────────────────────────────────────────
    function cardWidth() {
      var pp   = getPerPage();
      var wrap = outerEl.offsetWidth;
      return Math.floor((wrap - GAP * (pp - 1)) / pp);
    }

    // ── clone setup ─────────────────────────────────────────────────────
    // Index into ALL children (including clones).
    // realStart = number of leading clones.
    var realStart = 0;

    function buildClones() {
      // Remove old clones
      Array.from(trackEl.querySelectorAll('[data-clone]')).forEach(function (el) {
        trackEl.removeChild(el);
      });

      var pp = getPerPage();

      // Leading clones (last `pp` real cards) → prepended
      for (var i = totalReal - pp; i < totalReal; i++) {
        var cl = realCards[i].cloneNode(true);
        cl.setAttribute('data-clone', 'lead');
        cl.setAttribute('aria-hidden', 'true');
        trackEl.insertBefore(cl, trackEl.firstChild);
      }

      // Trailing clones (first `pp` real cards) → appended
      for (var j = 0; j < pp; j++) {
        var ct = realCards[j].cloneNode(true);
        ct.setAttribute('data-clone', 'trail');
        ct.setAttribute('aria-hidden', 'true');
        trackEl.appendChild(ct);
      }

      realStart = pp; // leading clones count
    }

    // ── set card sizes ──────────────────────────────────────────────────
    function sizecards() {
      var cw = cardWidth();
      Array.from(trackEl.children).forEach(function (c) {
        c.style.width    = cw + 'px';
        c.style.flexShrink = '0';
      });
    }

    // currentIndex is the real-card index (0-based, within real cards).
    var currentIndex = 0;

    // ── translate to absolute position ──────────────────────────────────
    function offsetFor(realIdx) {
      var cw = cardWidth();
      // Position of the realIdx-th real card accounting for leading clones
      var absIdx = realStart + realIdx;
      return absIdx * (cw + GAP);
    }

    function setTranslate(px, animate) {
      trackEl.style.transition = animate
        ? 'transform 0.48s cubic-bezier(0.4, 0, 0.2, 1)'
        : 'none';
      trackEl.style.transform = 'translateX(-' + px + 'px)';
    }

    // ── dots ────────────────────────────────────────────────────────────
    function buildDots() {
      if (!dotsWrap) return;
      dotsWrap.innerHTML = '';
      for (var i = 0; i < totalReal; i++) {
        var btn = document.createElement('button');
        btn.className = 'faculty-carousel__dot' +
          (i === currentIndex ? ' faculty-carousel__dot--active' : '');
        btn.setAttribute('aria-label', 'Go to slide ' + (i + 1));
        (function (idx) {
          btn.addEventListener('click', function () { goTo(idx); });
        })(i);
        dotsWrap.appendChild(btn);
      }
    }

    function updateDots() {
      if (!dotsWrap) return;
      dotsWrap.querySelectorAll('.faculty-carousel__dot').forEach(function (d, i) {
        d.classList.toggle('faculty-carousel__dot--active', i === currentIndex);
      });
    }

    // ── goTo (real index) ───────────────────────────────────────────────
    function goTo(idx, animate) {
      if (animate === undefined) animate = true;
      currentIndex = ((idx % totalReal) + totalReal) % totalReal; // wrap
      setTranslate(offsetFor(currentIndex), animate);
      updateDots();
    }

    // ── infinite-loop snap on transitionend ─────────────────────────────
    trackEl.addEventListener('transitionend', function () {
      isAnimating = false;
      // If we slid into trailing clones, snap to real start
      if (currentIndex === 0 && /* check if we got here via prev wrap */
          parseFloat(trackEl.style.transform.replace('translateX(','')) < 0) {
        // edge case: already handled by goTo modular arithmetic
      }
      // Re-snap silently if needed (handles clone boundary crossing)
      setTranslate(offsetFor(currentIndex), false);
    });

    function goPrev() {
      if (isAnimating) return;
      isAnimating = true;
      var pp = getPerPage();
      var next = currentIndex - pp;

      if (next < 0) {
        // Slide into leading clones first, then snap
        var leadOffset = (realStart - pp + currentIndex) * (cardWidth() + GAP);
        // Actually just animate to the clone position then snap
        trackEl.style.transition = 'transform 0.48s cubic-bezier(0.4, 0, 0.2, 1)';
        trackEl.style.transform  = 'translateX(-' + (realStart - pp) * (cardWidth() + GAP) + 'px)';
        currentIndex = totalReal - pp;
        updateDots();
        setTimeout(function () {
          setTranslate(offsetFor(currentIndex), false);
          isAnimating = false;
        }, 480);
        return;
      }

      goTo(next);
      setTimeout(function () { isAnimating = false; }, 500);
    }

    function goNext() {
      if (isAnimating) return;
      isAnimating = true;
      var pp   = getPerPage();
      var next = currentIndex + pp;

      if (next >= totalReal) {
        // Slide into trailing clones first, then snap
        var trailAbsIdx = realStart + totalReal; // first trailing clone position
        trackEl.style.transition = 'transform 0.48s cubic-bezier(0.4, 0, 0.2, 1)';
        trackEl.style.transform  = 'translateX(-' + trailAbsIdx * (cardWidth() + GAP) + 'px)';
        currentIndex = 0;
        updateDots();
        setTimeout(function () {
          setTranslate(offsetFor(0), false);
          isAnimating = false;
        }, 480);
        return;
      }

      goTo(next);
      setTimeout(function () { isAnimating = false; }, 500);
    }

    // ── autoplay ────────────────────────────────────────────────────────
    function startAuto() {
      clearInterval(autoTimer);
      autoTimer = setInterval(function () { goNext(); }, opts.autoplayMs || 4000);
    }
    function stopAuto() { clearInterval(autoTimer); }

    outerEl.addEventListener('mouseenter', stopAuto);
    outerEl.addEventListener('focusin',    stopAuto);
    outerEl.addEventListener('mouseleave', startAuto);
    outerEl.addEventListener('focusout',   startAuto);

    // ── swipe ────────────────────────────────────────────────────────────
    trackEl.addEventListener('touchstart', function (e) {
      touchStartX = e.changedTouches[0].clientX;
    }, { passive: true });
    trackEl.addEventListener('touchend', function (e) {
      var delta = e.changedTouches[0].clientX - touchStartX;
      if (Math.abs(delta) > 50) { delta < 0 ? goNext() : goPrev(); }
    }, { passive: true });

    // ── buttons ──────────────────────────────────────────────────────────
    if (prevBtn) prevBtn.addEventListener('click', goPrev);
    if (nextBtn) nextBtn.addEventListener('click', goNext);

    // ── resize ───────────────────────────────────────────────────────────
    var resizeTimer;
    window.addEventListener('resize', function () {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(function () {
        setup();
      }, 200);
    });

    // ── full setup (also used on resize) ────────────────────────────────
    function setup() {
      currentIndex = 0;
      buildClones();
      sizecards();
      buildDots();
      setTranslate(offsetFor(0), false);
      startAuto();
    }

    setup();
  }

  document.addEventListener('DOMContentLoaded', function () {
    initCarousel({
      trackId:    'facultyTrack',
      outerId:    'facultyOuter',
      prevId:     'facultyPrev',
      nextId:     'facultyNext',
      dotsId:     'facultyDots',
      perPage:    3,
      autoplayMs: 3500
    });
  });

})();
