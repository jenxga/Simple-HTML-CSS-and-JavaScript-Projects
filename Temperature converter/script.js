//This selects the button element
const btn = document.querySelector("button");

// Select the input element with an id of celcius
const inputCelcius = document.getElementById("celcius");

// Select the input element with an id of fahrenheit
const inputFahrenheit = document.getElementById("fahrenheit");

// Select the input element with an id of kelvin
const inputKelvin = document.getElementById("kelvin");

//Selects all the input element and store it in inputs variable
const inputs = document.querySelectorAll("input");

// Clear all button.
// Once clicked all values will be cleared
function clearAll() {
  inputCelcius.value = "";
  inputFahrenheit.value = "";
  inputKelvin.value = "";
}

btn.addEventListener("click", clearAll);

// The main event.
// the for loop is for the input to function simultaneously
for (let i = 0; i < inputs.length; i++) {
  let input = inputs[i];

  input.addEventListener("input", function (e) {
    let value = parseFloat(e.target.value);

    // id refers to the input id set in each input
    switch (e.target.id) {
      case "celcius":
        inputFahrenheit.value = value * 1.8 + 32;
        inputKelvin.value = value + 273.15;
        break;
      case "fahrenheit":
        inputCelcius.value = (value - 32) * (5 / 9);
        inputKelvin.value = (value - 32) * (5 / 9) + 273.15;
        break;
      case "kelvin":
        inputCelcius.value = value - 273.15;
        inputFahrenheit.value = (value - 273.15) * 1.8 + 32;
        break;
    }
  });
}
