(function () {
  'use strict';
  var form    = document.getElementById('contact-form');
  var success = document.getElementById('form-success');
  if (!form) return;

  function showError(id, msg) {
    var el = document.getElementById(id);
    if (el) { el.textContent = msg; }
    var input = document.getElementById(id.replace('-error', ''));
    if (input) input.classList.add('error');
  }

  function clearErrors() {
    form.querySelectorAll('.form-error').forEach(function (el) { el.textContent = ''; });
    form.querySelectorAll('.error').forEach(function (el) { el.classList.remove('error'); });
  }

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    clearErrors();
    var name  = form.querySelector('#name');
    var phone = form.querySelector('#phone');
    var valid = true;

    if (!name || !name.value.trim()) {
      showError('name-error', 'Please enter your full name.');
      valid = false;
    }
    if (!phone || !phone.value.trim()) {
      showError('phone-error', 'Please enter your phone number.');
      valid = false;
    }
    if (!valid) return;

    /* Wire to Formspree or PHP here when ready:
       fetch('https://formspree.io/f/YOUR_ID', { method:'POST', body: new FormData(form) })
    */
    form.style.display = 'none';
    if (success) {
      success.classList.add('form-success--show');
      success.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  });
})();
