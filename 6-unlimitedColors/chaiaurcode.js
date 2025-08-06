// Generate a Random Color

const randomColor = function () {
  const hex = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += hex[Math.floor(Math.random() * 16)];
  }
  return color;
};

console.log(randomColor());

let intervalId;

const startChaningColor = function () {
  console.log('You Pressed start');
  if (!intervalId) {
    intervalId = setInterval(changeBgColor, 1000);
  }
  function changeBgColor() {
    document.body.style.backgroundColor = randomColor();
    console.log(randomColor());
  }
};
const stopChaningColor = function () {
  clearInterval(intervalId);
  intervalId = null;
  console.log('You pressed Stop');
};

document.querySelector('#start').addEventListener('click', startChaningColor);
document.querySelector('#stop').addEventListener('click', stopChaningColor);
