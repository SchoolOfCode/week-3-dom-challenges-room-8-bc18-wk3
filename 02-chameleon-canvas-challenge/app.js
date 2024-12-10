/*
Learning Objectives:
  1. Understand and utilize DOM input events.
  2. Manipulate the style properties of DOM elements.
  3. React to changes in input fields dynamically.

Brief:
You're presented with a canvas and a color picker. Your task is to implement the functionality to change the background color of the canvas based on the color selected in the color picker.

Expected Outcomes:
  1. When a color is selected using the color picker, the canvas should instantly reflect that color.
  2. The canvas should always display the current color selected in the color picker.
*/

// Place your plan and solution below!


// grab the canvas
// grab the input
// write a function that gets the rgb value from the color picker and sets the background color of the canvas to that color.

const canvasDiv = document.getElementById("canvas");

const colorChoice = document.getElementById("colorPicker");

function changeColor() {
  canvasDiv.style.backgroundColor = colorChoice.value
}

colorChoice.addEventListener("input", changeColor)