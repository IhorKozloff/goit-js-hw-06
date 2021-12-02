const formEl = document.querySelector('.login-form');


const onFormSubmited = (e) => {
    e.preventDefault();

    const getDataList = {};

    if (e.currentTarget.elements.email.value.length === 0 || e.currentTarget.elements.password.value.length === 0) {
        alert('Все поля должны быть заполнены!');
    } 
    else {
        const formData = new FormData(e.currentTarget);
        formData.forEach((value, item) => {
            getDataList[item] = value;
        });
        console.log(getDataList);
        formEl.reset();
    }
    
};

formEl.addEventListener('submit', onFormSubmited);
