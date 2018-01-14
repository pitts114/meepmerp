const imagePercent = 0.95;
var IsRadiant = true;
const radiantColor = "lightblue";
const direColor = "red";
const meepmerp = document.getElementById("audio");
const towerImage = document.getElementById("tower");
const button = document.getElementById("toggle");
towerImage.onclick=function() {
  meepmerp.currentTime = 0;
  meepmerp.play();
}
towerImage.ondragstart = function() { return false; };
towerImage.onmousedown = function() {
  towerImage.style.height = towerImage.clientHeight * imagePercent;
}
towerImage.onmouseup = function() {
  towerImage.style.height = towerImage.clientHeight / imagePercent;
}

toggle.onclick = function() {
  if (IsRadiant) {
    towerImage.src="direTower.png"
    document.body.style.background = direColor;
  } else {
    towerImage.src="radiantTower.png"
    document.body.style.background = radiantColor;
  }
  IsRadiant = !IsRadiant;
}
