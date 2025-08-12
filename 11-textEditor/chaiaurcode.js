const inputField = document.querySelector('#input-field');
const outputField = document.querySelector('#output-field');

const btnUppercase = document.querySelector('.uppercase');
const btnLowercase = document.querySelector('.lowercase');
const btnCapitalize = document.querySelector('.capitalize');
const btnBold = document.querySelector('.bold');
const btnItalic = document.querySelector('.italic');
const btnUnderline = document.querySelector('.underline');

// Update output as user types
inputField.addEventListener('input', () => {
  outputField.textContent = inputField.value;
});

// Uppercase
btnUppercase.addEventListener('click', () => {
  outputField.textContent = inputField.value.toUpperCase();
});

// Lowercase
btnLowercase.addEventListener('click', () => {
  outputField.textContent = inputField.value.toLowerCase();
});

// Capitalize
btnCapitalize.addEventListener('click', () => {
  let text = inputField.value
    .split(' ')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(' ');
  outputField.textContent = text;
});

// Bold toggle
btnBold.addEventListener('click', () => {
  outputField.style.fontWeight =
    outputField.style.fontWeight === 'bold' ? 'normal' : 'bold';
});

// Italic toggle
btnItalic.addEventListener('click', () => {
  outputField.style.fontStyle =
    outputField.style.fontStyle === 'italic' ? 'normal' : 'italic';
});

// Underline toggle
btnUnderline.addEventListener('click', () => {
  outputField.style.textDecoration =
    outputField.style.textDecoration === 'underline' ? 'none' : 'underline';
});
