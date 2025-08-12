const title = document.getElementById('title');
const author = document.getElementById('author');
const year = document.getElementById('year');
const bookList = document.getElementById('book-list');
const btn = document.querySelector('.btn');

btn.addEventListener('click', function (e) {
  e.preventDefault(); // prevent form refresh

  // CREATE
  if (title.value.trim() && author.value.trim() && year.value.trim()) {
    const row = document.createElement('section');
    row.classList.add('table-section');

    row.innerHTML = `
      <div>${title.value}</div>
      <div>${author.value}</div>
      <div>${year.value}</div>
      <div>
        <button class="edit-btn">Edit</button>
        <button class="delete-btn">Delete</button>
      </div>
    `;

    bookList.appendChild(row);

    // Clear inputs after adding
    title.value = '';
    author.value = '';
    year.value = '';

    // READ / UPDATE / DELETE
    row.querySelector('.delete-btn').addEventListener('click', () => {
      row.remove(); // DELETE
    });

    row.querySelector('.edit-btn').addEventListener('click', () => {
      // UPDATE: fill form with current values
      title.value = row.children[0].textContent;
      author.value = row.children[1].textContent;
      year.value = row.children[2].textContent;
      row.remove(); // remove old row to replace with updated one
    });
  } else {
    alert('Please fill in all fields');
  }
});
