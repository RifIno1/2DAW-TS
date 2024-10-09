"use strict";
let colorPicker = document.getElementById('color-picker');
let changeColorButton = document.getElementById('change-color-btn');
function changeColor() {
    const colorCode = colorPicker.value;
    document.body.style.backgroundColor = colorCode;
}
changeColorButton.addEventListener('click', changeColor);
