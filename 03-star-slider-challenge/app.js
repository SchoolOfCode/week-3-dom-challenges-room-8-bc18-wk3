/*
Learning Objectives:
  1. Manipulate DOM elements based on user input.
  2. Dynamically create and delete elements based on slider values.
  3. Enhance understanding of event-driven programming.

Brief:
You're provided with a slider (ranging from 1 to 5) and an empty space to populate star icons. Your task is to create or remove stars dynamically based on the value of the slider.

Expected Outcomes:
  1. The number of star icons should match the slider's value.
  2. Adjusting the slider should immediately reflect the change in the number of star icons.
*/

// Place your plan and solution below!

// grab the div id for the star element
const starDiv = document.getElementById("stars");
const starIcon = document.getElementsByClassName("star-icon");

// Find the appropriate event listener for the slider
const starSlider = document.getElementById("starSlider");
starSlider.addEventListener("input", starMaker);
console.log(starSlider.value)


function starMaker() {
  starDiv.innerHTML = "";
  const starCount = Number(starSlider.value);
  for (let i = 0; i < starCount; i++) {
  const newSpan = document.createElement("span");
  newSpan.classList.add("star-icon")
  newSpan.textContent ="★"
  starDiv.append(newSpan)
  } 
}
//create variable to log the slider value (?)


// create spans for the star icons equal to the changing value from the slider


