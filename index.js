const imagePercent = 0.95;
const meepmerp = document.getElementById("audio");
const radiantImage = document.getElementById("radiant");
radiantImage.onclick=function() {
  meepmerp.currentTime = 0;
  meepmerp.play();
}
radiantImage.ondragstart = function() { return false; };
radiantImage.onmousedown = function() {
  radiantImage.style.height = radiantImage.clientHeight * imagePercent;
}
radiantImage.onmouseup = function() {
  radiantImage.style.height = radiantImage.clientHeight / imagePercent;
}
