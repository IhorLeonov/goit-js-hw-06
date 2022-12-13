'use strict';
// Напиши скрипт создания и очистки коллекции элементов.
// Пользователь вводит количество элементов в input и нажимает кнопку Создать, после чего рендерится коллекция.
// При нажатии на кнопку Очистить, коллекция элементов очищается.
// ✅ Создай функцию createBoxes(amount), которая принимает один параметр - число.
// ✅ Функция создает столько < div >, сколько указано в amount и добавляет их в div#boxes.
// ✅ Размеры самого первого <div> - 30px на 30px.
// ✅ Каждый элемент после первого, должен быть шире и выше предыдущего на 10px.
// ✅ Все элементы должены иметь случайный цвет фона в формате HEX.
// ✅ Создай функцию destroyBoxes(), которая очищает содержимое div#boxes, тем самым удаляя все созданные элементы.

const inputAmount = document.querySelector('input');
const btnCreate = document.querySelector('button[data-create]');
const btnDestroy = document.querySelector('button[data-destroy]');
const div = document.querySelector('#boxes');
let currentInputValue = 0;

inputAmount.addEventListener('input', onAmountInput);
btnCreate.addEventListener('click', () => createBoxes(currentInputValue));
btnDestroy.addEventListener('click', destroyBoxes);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function onAmountInput(event) {
  currentInputValue = event.currentTarget.value;
}

function destroyBoxes() {
  div.innerHTML = '';
}

function createBoxes(amount) {
  let width = 30;
  let height = 30;
  let markup = '';
  for (let i = 1; i <= amount; i += 1) {
    const color = getRandomHexColor();
    markup += `<div style="display: flex; background-color: ${color}; width: ${width}px; height: ${height}px; margin: 5px"></div>`;
    width += 10;
    height += 10;
  }
  div.insertAdjacentHTML('beforeend', markup);
}

/**
  |============================
  | Была заминка с передачей аргумента в параметр amount. Я нагуглил такой способ () => createBoxes(currentInputValue)); 
   Но он мне не понятен, и мне кажется, что можно это сделать проще, подскажите пожалуйста как, спасибо 🙃
  |============================
*/
