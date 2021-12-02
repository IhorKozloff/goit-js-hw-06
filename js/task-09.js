function getRandomHexColor(randomColor) {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const refs = {
  spanColorEl: document.querySelector('.color'),
  btnColorChanger: document.querySelector('.change-color'),
}; 

const onBtnColorRandomaizer = () => {
  const randomColor = getRandomHexColor();
  document.body.style.backgroundColor = randomColor;
  refs.spanColorEl.textContent = randomColor;
}

refs.btnColorChanger.addEventListener('click', onBtnColorRandomaizer);




