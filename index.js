const imagePercent = 0.95;
const radiantColor = "lightblue";
const direColor = "darkred";
var isRadiant;
const meepmerp = document.getElementById("audio");
const towerImage = document.getElementById("tower");
const button = document.getElementById("toggle");

function shrinkElement(element) {
  element.style.height = element.clientHeight * imagePercent;
}

function growElement(element) {
  element.style.height = element.clientHeight / imagePercent;
}

function setMouseBehavior(element) {
  element.ondragstart = function() { return false; };
  element.onmousedown = function() {
    shrinkElement(element);
  }
  element.onmouseup = function() {
    growElement(element);
  }
  element.ontouchstart = function() {
    shrinkElement(element);
  }
  element.ontouchend = function() {
    growElement(element);
  }
}

function setRadiant() {
  towerImage.onload = function() {
    document.body.style.background = radiantColor;
    localStorage.setItem('isRadiant', 'true');
  };
  towerImage.src="radiantTower.png";
}

function setDire() {
  towerImage.onload = function() {
    document.body.style.background = direColor;
    localStorage.setItem('isRadiant', 'false');
  }
  towerImage.src="direTower.png";
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