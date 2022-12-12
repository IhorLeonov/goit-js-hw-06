'use strict';
const input = document.querySelector('#validation-input');
const lengthEl = input.dataset.length;

input.addEventListener('blur', inputOnBlur);

function inputOnBlur(event) {
  // console.log(event.currentTarget.value.length);
  // console.log(lengthEl);
  input.classList.add('invalid');

  if (event.currentTarget.value.length == lengthEl) {
    input.classList.add('valid');
    if (input.classList.contains('invalid')) {
      input.classList.remove('invalid');
    }
  } else if (input.classList.contains('valid')) {
    input.classList.remove('valid');
  }
}
// console.log(input);
