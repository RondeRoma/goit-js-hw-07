const link = {
    nameInput: document.querySelector('#name-input'),
    nameOutput: document.querySelector('#name-output'),
};

link.nameInput.addEventListener('input', onInputChange);

function onInputChange(event){
link.nameInput.value === ''?
link.nameOutput.textContent = 'незнакомец':
link.nameOutput.textContent = event.currentTarget.value
}


  