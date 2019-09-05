let color1 = "#ffffff";
let color2 = "#ffffff";
let color3 = "#ffffff";
let color4 = "#ffffff";
let color5 = "#ffffff";

const hex1 = document.getElementById("displayHex1");
const column1 = document.getElementById("color1");
const check1 = document.getElementById("lock1");

const hex2 = document.getElementById("displayHex2");
const column2 = document.getElementById("color2");
const check2 = document.getElementById("lock2");

const hex3 = document.getElementById("displayHex3");
const column3 = document.getElementById("color3");
const check3 = document.getElementById("lock3");

const hex4 = document.getElementById("displayHex4");
const column4 = document.getElementById("color4");
const check4 = document.getElementById("lock4");

const hex5 = document.getElementById("displayHex5");
const column5 = document.getElementById("color5");
const check5 = document.getElementById("lock5");

// This checks for locked colors and generates new ones
function generateColor() {
  if (check1.checked != true) {
    color1 = Math.random()
      .toString(16)
      .slice(2, 8);
    column1.setAttribute("style", `background-color:#` + `${color1}`);
    hex1.innerHTML = `#` + `${color1}`;
  } else { 
    // do nothing
  }

  if (check2.checked != true) {
    color2 = Math.random()
      .toString(16)
      .slice(2, 8);
    column2.setAttribute("style", `background-color:#` + `${color2}`);
    hex2.innerHTML = `#` + `${color2}`;
  } else { 
    //do nothing...
  }

  if (check3.checked != true) {
    color3 = Math.random()
      .toString(16)
      .slice(2, 8);
    column3.setAttribute("style", `background-color:#` + `${color3}`);
    hex3.innerHTML = `#` + `${color3}`;
  } else { 
    //do nothing...
  }


  if (check4.checked != true) {
    color4 = Math.random()
      .toString(16)
      .slice(2, 8);
    column4.setAttribute("style", `background-color:#` + `${color4}`);
    hex4.innerHTML = `#` + `${color4}`;
  } else { 
    //do nothing
  }

  if (check5.checked != true) {
    color5 = Math.random()
      .toString(16)
      .slice(2, 8);
    column5.setAttribute("style", `background-color:#` + `${color5}`);
    hex5.innerHTML = `#` + `${color5}`;
  } else {
    // do nothing...
  }

// Change URL based on generated colors
function changeURL() {
  window.history.pushState(
    "object or string",
    "Page Title",
    `/color-generator/${color1}-${color2}-${color3}-${color4}-${color5}`
  );
}

document.body.onkeyup = function(e) {
  if (e.keyCode == 32) {
    generateColor();
    changeURL();
  }
};

  window.onload = generateColor;