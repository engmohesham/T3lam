const loginCard = document.querySelector('.card');
const signupCard = document.querySelector('.signup-card');
const signupButton = document.querySelector('.signup-button');
const loginButton = document.querySelector('.login-button');

signupButton.addEventListener('click', () => {
  loginCard.style.display = 'none';
  signupCard.style.display = 'block';
});

loginButton.addEventListener('click', () => {
  signupCard.style.display = 'none';
  loginCard.style.display = 'block';
});