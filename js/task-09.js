'use strict';
// ✅ Напиши скрипт, который изменяет цвета фона элемента <body> через инлайн стиль
// при клике на button.change - color и выводит значение цвета в span.color.
// Для генерации случайного цвета используй функцию getRandomHexColor.

const btnChangeColor = document.querySelector('.change-color');
const spanChangeColor = document.querySelector('.color');
const body = document.querySelector('body');

btnChangeColor.addEventListener('click', onBtnChangeClick);

function onBtnChangeClick() {
  const color = getRandomHexColor();
  spanChangeColor.textContent = color;
  body.style.backgroundColor = color;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
