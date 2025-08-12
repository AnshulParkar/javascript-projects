//------------------------------------------------------------------

// Fetch directly when button is clicked

const url = 'https://api.thecatapi.com/v1/images/search';
const container = document.querySelector('.container');
const button = document.querySelector('button');

button.addEventListener('click', () => {
  fetch(url)
    .then((response) => {
      if (!response.ok)
        throw new Error(`HTTP error! Status: ${response.status}`);
      return response.json();
    })
    .then((data) => {
      const img = document.createElement('img');
      img.src = data[0].url;
      container.innerHTML = ''; // Clear previous images
      container.appendChild(img);
      console.log('Fetch Url:', data[0].url);
    })
    .catch((err) => {
      console.error('Fetch Error:', err);
    });
});

//---------------------------------------------------------------------

// My Logic =>

// const url = 'https://api.thecatapi.com/v1/images/search';
// let newURL = '';
// const container = document.querySelector('.container');
// //Using Promises (fetch API)

// function getCatUrl() {
//   fetch(url)
//     .then((response) => {
//       if (!response.ok)
//         throw new Error(`HTTP error! Status: ${response.status}`);
//       return response.json();
//     })
//     .then((data) => {
//       newURL = data[0].url; // correct indexing because data was array of size 1
//       console.log('Fetch Url:', newURL);
//     })
//     .catch((err) => {
//       console.error('Fetch Error:', err);
//     });
// }
// getCatUrl();
// console.log('New url is', newURL);
// document.querySelector('button').addEventListener('click', () => {
//   container.innerHTML = ''; // Clear previous images
//   const img = document.createElement('img');
//   img.src = `${newURL}`;
//   console.log(img.src);
//   container.appendChild(img);
// });

//--------------------------------------------------------

// Using async/await for cleaner code

// const url = 'https://api.thecatapi.com/v1/images/search';
// const container = document.querySelector('.container');
// const button = document.querySelector('button');

// async function getCat() {
//   try {
//     const response = await fetch(url);
//     if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);
//     const data = await response.json();
//     const img = document.createElement('img');
//     img.src = data[0].url;
//     container.innerHTML = '';
//     container.appendChild(img);
//     console.log('Fetch Url:', data[0].url);
//   } catch (error) {
//     console.error('Fetch Error:', error);
//   }
// }

// button.addEventListener('click', getCat);
