'use strict';

const categoryList = document.querySelector('#categories');
console.log('Number of categories:', categoryList.children.length);

const firstEl = categoryList.firstElementChild;
const firstTitle = firstEl.firstElementChild;
console.log('Category:', firstTitle.textContent);
const firstElAmount = firstEl.childNodes[3].childElementCount;
// const firstElAmount = firstEl.lastElementChild.children.length;
console.log('Elements:', firstElAmount);

const secondEl = firstEl.nextElementSibling;
const secondTitle = secondEl.firstElementChild;
console.log('Category:', secondTitle.textContent);
const secondElAmount = secondEl.childNodes[3].childElementCount;
// const secondElAmount = secondEl.lastElementChild.children.length;
console.log('Elements:', secondElAmount);

const thirdEl = categoryList.lastElementChild;
const thirdTitle = thirdEl.firstElementChild;
console.log('Category:', thirdTitle.textContent);
const thirdElAmount = thirdEl.childNodes[3].childElementCount;
// const thirdElAmount = thirdEl.lastElementChild.children.length;
console.log('Elements:', thirdElAmount);
