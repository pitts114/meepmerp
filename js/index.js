const imagePercent = 0.95;
const radiantColor = 'lightblue';
const direColor = 'darkred';
const radiantTextColor = 'white';
const direTextColor = 'black';
var isRadiant;
const meepmerp = document.getElementById('audio');
const towerImage = document.getElementById('tower');
const button = document.getElementById('toggle');
const counter = document.getElementById('counter');
let sessionCount = 0;
const clicksToReveal = 20;

function count() {
  //add 1 to stored click count and returns the new amount
  const clicks = 'clicks';
  const count = Number(localStorage.getItem(clicks));
  if (!count) {
    localStorage.setItem(clicks, '0');
  }
  const newCount = count + 1;
  sessionCount++;
  localStorage.setItem(clicks, newCount.toString());

  if (sessionCount >= clicksToReveal) {
    counter.style.display = 'block';
    counter.innerHTML = newCount;
  }
}

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
    counter.style.color = radiantTextColor;
  };
  towerImage.src='img/radiantTower.png';
}

function setDire() {
  towerImage.onload = function() {
    document.body.style.background = direColor;
    localStorage.setItem('isRadiant', 'false');
    counter.style.color = direTextColor;
  }
  towerImage.src='img/direTower.png';
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


towerImage.onclick = function() {
  count();
  meepmerp.currentTime = 0;
  meepmerp.play();
}

button.onclick = toggle;