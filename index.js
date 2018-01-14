const imagePercent = 0.95;
var IsRadiant = true;
const radiantColor = "lightblue";
const direColor = "darkred";

const meepmerp = document.getElementById("audio");
const towerImage = document.getElementById("tower");
const button = document.getElementById("toggle");

function setMouseBehavior(element) {
  element.ondragstart = function() { return false; };
  element.onmousedown = function() {
    element.style.height = element.clientHeight * imagePercent;
  }
  element.onmouseup = function() {
    element.style.height = element.clientHeight / imagePercent;
  }
}

setMouseBehavior(towerImage);
setMouseBehavior(button);


towerImage.onclick=function() {
  meepmerp.currentTime = 0;
  meepmerp.play();
}

button.onclick = function() {
  if (IsRadiant) {
    towerImage.src="direTower.png"
    document.body.style.background = direColor;
  } else {
    towerImage.src="radiantTower.png"
    document.body.style.background = radiantColor;
  }
  IsRadiant = !IsRadiant;
}
