const link = {
    decrBtn: document.querySelector('[data-action = "decrement"]'),
    incrBtn: document.querySelector('[data-action = "increment"]'),
    result: document.querySelector('#value'),
}

let counter = 0;
const increment = () => {
    counter +=1;
    link.result.textContent = counter;

};
const decrement = ()=> {
    counter -= 1;
    link.result.textContent = counter;

}

link.incrBtn.addEventListener('click', increment)
link.decrBtn.addEventListener('click', decrement)