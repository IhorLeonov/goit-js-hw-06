'use strict';
const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsList = document.querySelector('#ingredients');

// for (let i = 0; i <= 5; i += 1) {
//   const ingredientsItem = document.createElement('li');
//   ingredientsItem.classList.add('item');
//   ingredientsItem.textContent = ingredients[i];
//   ingredientsList.appendChild(ingredientsItem);
// }

const ingredientsEl = ingredients.map(ingredient => {
  const ingredientsItem = document.createElement('li');
  ingredientsItem.classList.add('item');
  ingredientsItem.textContent = ingredient;

  return ingredientsItem;
});
ingredientsList.append(...ingredientsEl);
console.log(ingredientsList);
