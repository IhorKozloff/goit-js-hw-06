function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const refs = {
  gameBoardEl: document.querySelector('#boxes'),
  magicCreateBtnEl: document.querySelector('[data-create]'),
  magicDestroyBtnEl: document.querySelector('[data-destroy]'),
  quantityInputEl: document.querySelector('input'),
  toDivsArray: [],
  allNewDivs: [],
}

const buildingFunc = () => {
  let zIndexEl = 1;
  let width = 30;
  let height = 30;

  const quantity = refs.quantityInputEl.value;

  for (let i = 0; i < quantity; i += 1) {
    const oneDiv = document.createElement('div');
    oneDiv.style.width = `${width}px`; 
    oneDiv.style.height = `${height}px`;
    oneDiv.style.backgroundColor = getRandomHexColor();
    oneDiv.style.zIndex = zIndexEl;
    oneDiv.classList.add('boxes__box');
    width += 10;
    height += 10;
    zIndexEl -= 1;  
    refs.toDivsArray.push(oneDiv);
  }
  refs.gameBoardEl.append(...refs.toDivsArray);
  refs.allNewDivs = document.querySelectorAll('.boxes__box');
}



const burnThemAll = () => {
  refs.allNewDivs.forEach((item) => {
   item.remove();
 });
 refs.quantityInputEl.value = 0;
 
}



refs.magicCreateBtnEl.addEventListener('click', buildingFunc);
refs.magicDestroyBtnEl.addEventListener('click', burnThemAll);
















