const imagePercent = 0.95;
const radiantColor = "lightblue";
const direColor = "darkred";
var isRadiant;
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

function setRadiant() {
  towerImage.src="radiantTower.png"
  document.body.style.background = radiantColor;
  localStorage.setItem('isRadiant', 'true');
}

function setDire() {
  towerImage.src="direTower.png"
  document.body.style.background = direColor;
  localStorage.setItem('isRadiant', 'false');
}

function toggle() {
  if (isRadiant) {
    setDire();
  } else {
    setRadiant();
  }
  isRadiant = !isRadiant;
}


isRadiant = localStorage.getItem('isRadiant'); //str or undefined
console.log(isRadiant);
if (!isRadiant) {
  isRadiant = true;
  localStorage.setItem('isRadiant', 'true');
} else {
  if (isRadiant == 'true') {
    isRadiant = true;
    setRadiant();
  } else {
    isRadiant = false;
    setDire();
  }
}

setMouseBehavior(towerImage);
setMouseBehavior(button);


towerImage.onclick=function() {
  meepmerp.currentTime = 0;
  meepmerp.play();
}

button.onclick = toggle;