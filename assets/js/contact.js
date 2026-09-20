(function () {
  'use strict';

  var form    = document.getElementById('contact-form');
  var success = document.getElementById('form-success');
  var submit  = document.getElementById('submit-btn');

  if (!form) return;

  var formType = form.dataset.formType || 'contact';
  var formEmail = (window.SHRIKAA_FORM && window.SHRIKAA_FORM.email) || 'askshrikaa@gmail.com';
  var endpoint  = 'https://formsubmit.co/ajax/' + encodeURIComponent(formEmail);

  function showError(id, msg) {
    var errEl = document.getElementById(id);
    if (errEl) errEl.textContent = msg;
    var input = document.getElementById(id.replace('-error', ''));
    if (input) input.classList.add('error');
  }

  function clearErrors() {
    form.querySelectorAll('.form-error').forEach(function (el) { el.textContent = ''; });
    form.querySelectorAll('.error').forEach(function (el) { el.classList.remove('error'); });
    var global = document.getElementById('form-global-error');
    if (global) global.style.display = 'none';
  }

  function validate() {
    clearErrors();
    var valid = true;
    var name  = form.querySelector('#name');
    var phone = form.querySelector('#phone');
    var email = form.querySelector('#email');
    var honey = form.querySelector('[name="_honey"]');

    if (honey && honey.value) return false;

    if (!name || !name.value.trim()) {
      showError('name-error', 'Please enter your full name.');
      valid = false;
    }

    if (!phone || !phone.value.trim()) {
      showError('phone-error', 'Please enter your phone number.');
      valid = false;
    } else if (!/^[+\d][\d\s\-]{7,14}$/.test(phone.value.trim())) {
      showError('phone-error', 'Please enter a valid phone number.');
      valid = false;
    }

    if (email && email.value.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value.trim())) {
      showError('email-error', 'Please enter a valid email address.');
      valid = false;
    }

    return valid;
  }

  function setLoading(loading) {
    if (!submit) return;
    if (!submit.dataset.defaultLabel) {
      submit.dataset.defaultLabel = submit.textContent.trim();
    }
    submit.disabled = loading;
    submit.textContent = loading ? 'Sending…' : submit.dataset.defaultLabel;
  }

  function showSuccess() {
    form.style.display = 'none';
    if (success) {
      success.classList.add('form-success--show');
      success.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  }

  function showGlobalError(msg) {
    var el = document.getElementById('form-global-error');
    if (!el) {
      el = document.createElement('p');
      el.id = 'form-global-error';
      el.style.cssText = 'color:#B83232;font-size:var(--text-sm);margin-bottom:var(--sp-4);display:none;';
      form.insertBefore(el, form.firstChild);
    }
    el.textContent = msg;
    el.style.display = 'block';
    el.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  }

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    if (!validate()) return;

    var fd = new FormData(form);
    fd.append('_subject', 'Shrikaa ' + (formType === 'admissions' ? 'Admissions' : 'Contact') + ' enquiry');
    fd.append('_template', 'table');
    fd.append('_captcha', 'false');
    fd.append('Form', formType === 'admissions' ? 'Admissions page' : 'Contact page');

    var emailField = form.querySelector('#email');
    if (emailField && emailField.value.trim()) {
      fd.append('_replyto', emailField.value.trim());
    }

    setLoading(true);

    fetch(endpoint, {
      method: 'POST',
      body: fd,
      headers: { Accept: 'application/json' }
    })
      .then(function (res) {
        return res.json().then(function (data) {
          if (!res.ok || data.success === false) {
            throw new Error(data.message || 'Submission failed');
          }
          showSuccess();
          if (typeof window.SHRIKAA_TRACK === 'function') {
            window.SHRIKAA_TRACK('generate_lead', {
              form_type: formType,
              method: 'formsubmit'
            });
          }
        });
      })
      .catch(function () {
        showGlobalError('Something went wrong. Please try again or call us at 7026386563.');
      })
      .finally(function () {
        setLoading(false);
      });
  });

  ['name', 'phone', 'email'].forEach(function (id) {
    var el = document.getElementById(id);
    if (el) {
      el.addEventListener('input', function () {
        clearErrors();
      });
    }
  });
})();
