const passwordInput = document.getElementById('password');
const passwordStrength = document.getElementById('password-strength');

passwordInput.addEventListener('input', function() {
  const password = passwordInput.value;
  let strength = '';

  if (password.length < 6) {
    strength = 'Weak';
  } else if (password.length < 10) {
    strength = 'Medium';
  } else {
    strength = 'Strong';
  }

  passwordStrength.textContent = `Password Strength: ${strength}`;
});

const form = document.getElementById('signup-form');

form.addEventListener('submit', function(event) {
  event.preventDefault();
  // You can add form submission logic here, like AJAX request
  alert('Form submitted!');
});
