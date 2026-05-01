const form = document.getElementById('signupForm');
const mail = document.getElementById('mail');
const pass = document.getElementById('pass');
const confirm = document.getElementById('confirm');

const mailErr = document.getElementById('mailErr');
const passErr = document.getElementById('passErr');
const confirmErr = document.getElementById('confirmErr');

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function check(condition, element, message) {
  if (!condition) {
    element.textContent = message;
    return false;
  }
  element.textContent = '';
  return true;
}

form.addEventListener('submit', e => {
  e.preventDefault();

  let valid = true;

  valid &= check(mail.value.trim() !== '', mailErr, 'Email is required');
  valid &= check(emailRegex.test(mail.value), mailErr, 'Invalid email format');
  valid &= check(pass.value.length >= 4, passErr, 'Password must be 4+ characters');
  valid &= check(confirm.value === pass.value && confirm.value.length > 0, confirmErr, 'Passwords must match');

  if (valid) {
    alert('Registration Successful! ');
    form.reset();
  }
});

// Live validation
mail.addEventListener('input', () => check(emailRegex.test(mail.value), mailErr, 'Invalid email format'));
pass.addEventListener('input', () => check(pass.value.length >= 4, passErr, 'Password must be 4+ characters'));
confirm.addEventListener('input', () => check(confirm.value === pass.value, confirmErr, 'Passwords must match'));