# Debounced Random User Fetch

This project demonstrates how to use **debouncing** in JavaScript to reduce unnecessary API calls while fetching data from the [`randomuser.me`](https://randomuser.me) API.

---

## 📌 How It Works
1. The page contains an **input box**.
2. As you **type into the input**, the code waits **500ms** after the last keystroke before making an API request.
3. The request is made to `https://randomuser.me/api/`, which returns details of a **random user**.
4. The user’s **photo, name, email, and location** are displayed in a card below the input box.
5. Typing again after a pause will replace the card with another **random user**.

---

## 💡 Why Use Debounce?
Without debounce:
- Typing `"hello"` triggers **5 API calls** (`h`, `he`, `hel`, `hell`, `hello`).
- This wastes network resources and can slow down the app.

With debounce:
- The script **waits until typing stops for 500ms** before making **just 1 API call**.

---

## 🖊 Usage
1. Open the HTML page in your browser.
2. Start typing **anything** into the input field.
3. After 500ms of no typing:
   - The API will fetch **one random user**.
   - A card will display:
     - Profile picture
     - Full name
     - Email
     - Location (city & country)
4. Typing again will show a **new random user**.

---

## 📂 Files
- **index.html** → Contains the input box and container for the user card.
- **chaiaurcode.js** → Contains:
  - `debounce()` function
  - API call to `randomuser.me`
  - Card rendering logic
- *(CSS file is optional — not required for functionality.)*

---

## 🖥 Example Flow
```plaintext
Type: "Hello"
↓ (wait 500ms)
API → Random User #1 displayed

Type: "Hello World"
↓ (wait 500ms)
API → Random User #2 displayed
