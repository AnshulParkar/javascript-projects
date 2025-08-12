const url = 'https://api.chucknorris.io/jokes/random';
let latestJoke = ''; // global variable

//-------------------------------------------------

// handle this end point with XMLHttpReques
// function getJokeXHR() {
//   const xhr = new XMLHttpRequest();
//   xhr.open('GET', url);

//   xhr.onload = function () {
//     if (xhr.status === 200) {
//       const jokeData = JSON.parse(xhr.responseText);
//       latestJoke = jokeData.value; // store joke for later use
//       console.log('XHR Joke:', latestJoke);
//     } else {
//       console.error('XHR Error:', xhr.status);
//     }
//   };

//   xhr.onerror = function () {
//     console.error('XHR Request failed');
//   };

//   xhr.send();
// }
// getJokeXHR();

// document.querySelector('button').addEventListener('click', () => {
//   const ans = document.getElementById('display-joke');
//   ans.innerHTML = latestJoke || 'No joke loaded yet!';
// });

//------------------------------------------------------------------

// handle this end point with promises
function getJokeFetch() {
  fetch(url)
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.json();
    })
    .then((data) => {
      latestJoke = data.value;
      console.log('Fetch Joke:', data.value);
    })
    .catch((err) => {
      console.error('Fetch Error:', err);
    });
}

getJokeFetch();

document.querySelector('button').addEventListener('click', () => {
  const ans = document.getElementById('display-joke');
  ans.innerHTML = latestJoke || 'No joke loaded yet!';
});

//----------------------------------------------------------------

// handle the case of race condition
// let latestRequestId = 0;

// function getJokeWithRaceConditionHandling() {
//   const requestId = ++latestRequestId; // unique ID for each request

//   fetch(url)
//     .then((res) => res.json())
//     .then((data) => {
//       if (requestId === latestRequestId) {
//         latestJoke = data.value;
//         console.log('Race-safe Joke:', data.value);
//       } else {
//         console.warn('Ignored stale response:', data.value);
//       }
//     })
//     .catch((err) => console.error(err));
// }

// // Simulate rapid requests
// getJokeWithRaceConditionHandling();
// getJokeWithRaceConditionHandling();
// getJokeWithRaceConditionHandling();

// document.querySelector('button').addEventListener('click', () => {
//   const ans = document.getElementById('display-joke');
//   ans.innerHTML = latestJoke || 'No joke loaded yet!';
// });
