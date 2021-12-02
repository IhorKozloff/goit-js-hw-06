const refs = {
    counterEl: document.querySelector('#value'),
    buttonIncrementEl: document.querySelector('[data-action="increment"]'),
    buttonDecrementEl: document.querySelector('[data-action="decrement"]'),
};

let counterValue = 0;

const onButtonIncrement  = () => {
    counterValue += 1;
    refs.counterEl.textContent = counterValue;
};
const onButtonDecrement  = () => {
    counterValue -= 1;
    refs.counterEl.textContent = counterValue;
};

refs.buttonIncrementEl.addEventListener('click', onButtonIncrement);
refs.buttonDecrementEl.addEventListener('click', onButtonDecrement);
