// with each character typed in search box, make an API call to randomuserme api and display a card below it. Use debounce concept to reduce api calls.

// You will automatically learn about this and apply in this. ☕️

const userInput = document.getElementById('user-input');
const userCard = document.getElementById('user-card');

// Debounce function
function debounce(func, delay) {
  let timer;
  return function (...args) {
    clearTimeout(timer);
    timer = setTimeout(() => {
      func.apply(this, args);
    }, delay);
  };
}

// Fetch user from API
async function fetchRandomUser() {
  console.log('API called'); // debug
  try {
    const res = await fetch('https://randomuser.me/api/');
    const data = await res.json();
    const user = data.results[0];
    displayUserCard(user);
  } catch (err) {
    console.error('Error fetching user:', err);
  }
}

// Display user card
function displayUserCard(user) {
  userCard.style.display = 'block'; // 👈 Make it visible
  userCard.innerHTML = `
    <div style="border:1px solid #ccc; padding:15px; border-radius:8px; max-width:300px;">
      <img src="${user.picture.large}" alt="User" style="width:100px; height:100px; border-radius:50%; display:block; margin:auto;">
      <h3 style="text-align:center;">${user.name.first} ${user.name.last}</h3>
      <p style="text-align:center; margin:5px 0;">${user.email}</p>
      <p style="text-align:center; margin:5px 0;">${user.location.city}, ${user.location.country}</p>
    </div>
  `;
}

// Event listener with debounce
userInput.addEventListener(
  'input',
  debounce(() => {
    if (userInput.value.trim() !== '') {
      fetchRandomUser();
    } else {
      userCard.innerHTML = '';
    }
  }, 500)
);
