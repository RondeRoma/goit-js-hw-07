const link = {
    fontSizeInput: document.querySelector('#font-size-control'),
    spanText: document.querySelector('#text'),
};

link.fontSizeInput.addEventListener('input', changeFs);
function changeFs(event) {
link.spanText.style.fontSize = event.currentTarget.value + "px";
}

