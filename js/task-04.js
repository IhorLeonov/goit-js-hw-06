'use strict';
const btnDec = document.querySelector('button[data-action="decrement"]');
const btnInc = document.querySelector('button[data-action="increment"]');
const count = document.getElementById('value');
console.log(count);

btnDec.addEventListener('click', onBtnDecrementClick);
btnInc.addEventListener('click', onBtnIncrementClick);
let counterValue = 0;

function onBtnDecrementClick() {
  counterValue -= 1;
  count.innerHTML = counterValue;
  console.log('Click btnDec');
}

function onBtnIncrementClick() {
  counterValue += 1;
  count.innerHTML = counterValue;
  console.log('Click btnInc');
}
