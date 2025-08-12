const baseURL = 'https://picsum.photos/id/';
const container = document.querySelector('.content');
const rows = 7;

document.querySelector('button').addEventListener('click', loadImages);

function loadImages() {
  container.innerHTML = ''; // Clear previous images
  for (let i = 0; i < rows * 3; i++) {
    const img = document.createElement('img');
    img.src = `${baseURL}${randomNumber2()}/${randomNumber()}/${randomNumber()}`;
    console.log(img.src);
    container.appendChild(img);
  }
}

function randomNumber() {
  return Math.floor(Math.random() * 10) + 300; // width/height: 300–309
}

function randomNumber2() {
  return Math.floor(Math.random() * 1000) + 1; // ID: 1–1000 for variety
}
