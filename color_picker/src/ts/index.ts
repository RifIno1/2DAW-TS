let colorPicker: HTMLInputElement = document.getElementById('color-picker') as HTMLInputElement;
let changeColorButton: HTMLButtonElement = document.getElementById('change-color-btn') as HTMLButtonElement;

function changeColor(): void {
  const colorCode = colorPicker.value;
  document.body.style.backgroundColor = colorCode;
}

changeColorButton.addEventListener('click', changeColor);
