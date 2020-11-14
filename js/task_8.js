const link = {
    renderBtn: document.querySelector('[data-action="render"]'),
    cleanBtn: document.querySelector('[data-action="destroy"]'),
    boxes: document.querySelector('#boxes'),
};
link.renderBtn.addEventListener('click', renderBtnClick);
link.cleanBtn.addEventListener('click', cleanBtnClick);

function renderBtnClick() {
    let count = document.querySelector('#controls input').value;
    createBoxes(count);
}

function createBoxes(count) {
    let firstSize = 30;
    let fragment = document.createDocumentFragment();
    for (let i = 0; i < count; i++) {
        let size = firstSize + i * 10;
        let div = document.createElement('div');
        div.style.cssText = `width: ${size}px; height: ${size}px; background-color: rgba( ${random()} , ${random()} , ${random()} )`;
        fragment.appendChild(div);
    }
    boxes.appendChild(fragment);
}
function random() {
    return Math.floor(Math.random() * 256);
}
function cleanBtnClick() {
    boxes.innerHTML = '';
}


