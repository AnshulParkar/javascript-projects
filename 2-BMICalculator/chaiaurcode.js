const form = document.querySelector('form');

form.addEventListener('submit', function (e) {
  e.preventDefault();

  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const result = document.querySelector('#result');

  if (height <= 0 || isNaN(height)) {
    result.innerHTML = `Please give a valid Height: You have Entered ${height}`;
  } else if (weight <= 0 || isNaN(weight)) {
    result.innerHTML = `Please give a valid weight: You have Entered ${weight}`;
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);

    if (bmi < 18.6) {
      result.innerHTML = `You are UnderWeight & your BMI is <span>${bmi}</span>`;
    } else if (bmi >= 18.6 && bmi < 24.9) {
      result.innerHTML = `Your weight is normal  & your BMI is <span>${bmi}</span>`;
    } else {
      result.innerHTML = `You are OverWeight  & your BMI is <span>${bmi}</span>`;
    }
  }
});
