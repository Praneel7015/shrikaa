/**
 * form.js — Contact form client-side validation + submission feedback.
 */
(function () {
  'use strict';

  const form        = document.getElementById('contact-form');
  const successBox  = document.getElementById('form-success');
  const submitBtn   = document.getElementById('submit-btn');

  if (!form) return;

  function showError(fieldId, message) {
    const field = document.getElementById(fieldId);
    const error = document.getElementById(fieldId + '-error');
    if (field) field.classList.add('error');
    if (error) error.textContent = message;
  }

  function clearError(fieldId) {
    const field = document.getElementById(fieldId);
    const error = document.getElementById(fieldId + '-error');
    if (field) field.classList.remove('error');
    if (error) error.textContent = '';
  }

  function validate() {
    let valid = true;

    const name  = document.getElementById('name');
    const phone = document.getElementById('phone');

    clearError('name');
    clearError('phone');

    if (!name || !name.value.trim()) {
      showError('name', 'Please enter your full name.');
      valid = false;
    }

    if (!phone || !phone.value.trim()) {
      showError('phone', 'Please enter your phone number.');
      valid = false;
    } else if (!/^[+\d][\d\s\-]{7,14}$/.test(phone.value.trim())) {
      showError('phone', 'Please enter a valid phone number.');
      valid = false;
    }

    return valid;
  }

  form.addEventListener('submit', function (e) {
    e.preventDefault();

    if (!validate()) return;

    // Disable button to prevent double-submit
    if (submitBtn) {
      submitBtn.disabled = true;
      submitBtn.textContent = 'Sending...';
    }

    /**
     * Replace the setTimeout block below with your real form submission
     * (e.g. fetch to a backend endpoint or a service like Formspree/Netlify Forms).
     *
     * Example with Formspree:
     *   fetch('https://formspree.io/f/YOUR_FORM_ID', {
     *     method: 'POST',
     *     body: new FormData(form),
     *     headers: { Accept: 'application/json' }
     *   })
     */
    setTimeout(function () {
      form.reset();
      form.style.display = 'none';
      if (successBox) {
        successBox.classList.add('form-success--show');
        successBox.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    }, 600);
  });

  // Live clear errors on input
  ['name', 'phone'].forEach(function (id) {
    const el = document.getElementById(id);
    if (el) {
      el.addEventListener('input', function () { clearError(id); });
    }
  });
})();
