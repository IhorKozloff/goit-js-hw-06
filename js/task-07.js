const inputEl = document.querySelector('#font-size-control');
const textEl = document.querySelector('#text');

textEl.style.fontSize = `${inputEl.value}px`;

const onInputChange = () => {
    textEl.style.fontSize = `${inputEl.value}px`; 
};

inputEl.addEventListener('input', onInputChange);



