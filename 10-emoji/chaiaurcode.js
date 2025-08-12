const btn = document.querySelector('#emoji');
const emojis = [
  '😆',
  '😅',
  '🤣',
  '😂',
  '😀',
  '🤑',
  '🤨',
  '🙂',
  '😊',
  '😗',
  '😛',
  '😏',
  '🤥',
  '😴',
  '🥺',
  '😧',
  '😇',
  '😳',
  '🙃',
  '🥴',
  '🧐',
  '🤨',
  '😒',
  '🤔',
  '🤭',
  '🥰',
  '🤐',
  '👀',
  '🤔',
  '🤪',
  '🥲',
  '😃',
  '😁',
  '😬',
];

// When mouse hovers over the emoji
btn.addEventListener('mouseover', () => {
  const randomIndex = Math.floor(Math.random() * emojis.length);
  btn.textContent = emojis[randomIndex];
  btn.style.filter = 'none'; // remove grayscale on hover
});

// When mouse leaves the emoji
btn.addEventListener('mouseout', () => {
  btn.style.filter = 'grayscale(100%)'; // apply grayscale effect
});

