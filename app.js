let color = "#ffffff";
const body = document.getElementsByTagName("body")[0];
const hex = document.getElementById("displayHex");

function getColor() {
  color =
    "#" +
    Math.random()
      .toString(16)
      .slice(2, 8);
  body.setAttribute("style", `background-color:${color}`);
  hex.innerHTML = `${color}`;
}

document.body.onkeyup = function(e) {
  if (e.keyCode == 32) {
    getColor();
  }
};
