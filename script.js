const emailInput = document.querySelector('.entry-field');
const emailInputTwo = document.querySelector('.entry-field-two');
const shopMenuItem = document.querySelector('.menu-link-shop').parentElement;
const dropdown = shopMenuItem.querySelector('.menu-link-options');

emailInput.addEventListener('blur', function() {
  this.classList.add('interacted');
});

emailInputTwo.addEventListener('blur', function() {
  this.classList.add('interacted-two');
});

shopMenuItem.addEventListener('mouseenter', () => {
  dropdown.classList.add('is-active');
});

shopMenuItem.addEventListener('mouseleave', () => {
  dropdown.classList.remove('is-active');
});