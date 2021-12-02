const refs = {
    inputNameEl: document.querySelector('#name-input'),
    outputSpanEl: document.querySelector('#name-output'), 
}

const onChangeInputName = (e) => {
    e.currentTarget.value.trim().length === 0 ? refs.outputSpanEl.textContent = "Anonymous" : refs.outputSpanEl.textContent = e.currentTarget.value;
};

refs.inputNameEl.addEventListener('input', onChangeInputName);

