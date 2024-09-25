// Selecting HTML element and storing it to a variable
const btn = document.querySelector("button");
const span = document.querySelector("span");
const h1 = document.querySelector("h1");

// adding events to an element
btn.addEventListener("click", rgbColor);
btn.addEventListener("keydown", keySpaceEnter);

// variable initialization
var totalRgbValue;

/* This is to generate the random RGB color*/
function makeRandRGBColor() {
  const r = Math.floor(Math.random() * 255) + 1;
  const g = Math.floor(Math.random() * 255) + 1;
  const b = Math.floor(Math.random() * 255) + 1;
  totalRgbValue = r + g + b;
  return `rgb(${r}, ${g}, ${b})`;
}

/* This will determine what fontColor to display.
If the color is in the darker shade, the font color 
will be white otherwise it's black. 
This will make the page readable regardless 
of the background color shade*/

function fontColor() {
  if (totalRgbValue > 400) {
    return (span.style.color = "black");
  } else {
    return (span.style.color = "white");
  }
}

/* This function is when the user use spacebar or 
enter instead of clicking on the button */

function keySpaceEnter(e) {
  if (e.key === "Enter" || e.code === "Space") {
    return rgbColor();
  }
}

/* This will execute once the button is clicked*/

function rgbColor() {
  const newRGB = makeRandRGBColor();
  document.body.style.backgroundColor = newRGB;
  span.innerText = newRGB;
  fontColor();
  h1.style.color = fontColor();
}
