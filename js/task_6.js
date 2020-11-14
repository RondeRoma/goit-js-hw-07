const correctInput = document.querySelector('#validation-input');
correctInput.addEventListener('blur', isInputBlur);

function isInputBlur(){
    if(
        correctInput.value.length < correctInput.dataset.length||
        correctInput.value.length > correctInput.dataset.length
        ){
        correctInput.classList.remove('valid'); 
        correctInput.classList.add('invalid');
    } else {    
    correctInput.classList.remove('invalid'); 
    correctInput.classList.add('valid');
 }
}
  
