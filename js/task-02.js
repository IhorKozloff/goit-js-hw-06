const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsElList = document.querySelector('#ingredients');

const ingredientElArray = ingredients.map(item => {
  const ingredientEl = document.createElement("li");
  ingredientEl.classList.add("item");
  ingredientEl.textContent = `${item}`;
  return ingredientEl;
})

ingredientsElList.append(...ingredientElArray);

