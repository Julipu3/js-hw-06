const inputEl = document.querySelector('#validation-input');
inputEl.addEventListener('blur',(event)=> {
    if(+inputEl.getAttribute('data-length') === event.currentTarget.value.length) {
        inputEl.classList.add('valid')
        inputEl.classList.remove('invalide')
    }else{
        inputEl.classList.add('invalid')
        inputEl.classList.remove('valide') 
    }
});
