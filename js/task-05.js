const inputEl = document.getElementById('name-input');
const spanEl = document.getElementById('name-output');
inputEl.addEventListener('input', onInputChange);
function onInputChange(event){
    if(!event.currentTarget.value){
     return spanEl.textContent = 'Anonymous';
    };
spanEl.textContent = event.currentTarget.value;
};

