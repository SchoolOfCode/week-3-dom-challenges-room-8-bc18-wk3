/*
Learning Objectives:
  1. Understand and utilize DOM element selection.
  2. Implement event listeners on buttons.
  3. Manipulate image attributes dynamically based on user interactions.

Brief:
You're provided with two images of a lightbulb: one turned on and one turned off. Your task is to implement the functionality to control the bulb's illumination. Use the 'Turn On' and 'Turn Off' buttons to switch the src attribute of the image tag, effectively lighting up or dimming the bulb.

Expected Outcomes:
  1. When the "Turn On" button is clicked, the lightbulb image should change to its 'on' state.
  2. When the "Turn Off" button is clicked, the lightbulb image should change to its 'off' state.
  3. The bulb's state should only change when the respective button is clicked.
*/

// Place your plan and solution below!
let bulbState = "";
let bulbImg = "";
let bulbPNG = document.getElementById("lightbulb");

const onButton = document.getElementById("turnBulbOn");
const offButton = document.getElementById("turnBulbOff");

function lightSwitch(button) {
  if (button === "on") {
    bulbState = "on";
    console.log(bulbState);
  } else if (button === "off") {
    bulbState = "off";
    console.log(bulbState);
  }

  // Update the bulb image path
  bulbImg = `light-bulb-${bulbState}.png`;
  console.log(bulbState);

  // Update the image source dynamically
  if (bulbPNG) {
    bulbPNG.src = bulbImg;
    console.log(bulbImg);
  }
}

const turnOnHandler = onButton.addEventListener("click", () =>
  lightSwitch("on")
);

const turnOffHandler = offButton.addEventListener("click", () =>
  lightSwitch("off")
);

//when on button is clicked, bulbState is set to on
// grab on button
// create handler that takes in
//when off button is clicked, bulbState is set to off
