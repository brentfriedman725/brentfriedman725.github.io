// Define a function to change the header text
function changeHeader() {
    document.querySelector('h1').textContent = 'Hello, World!';
  }
  

function showResume() {
  var w = window.open("resume.pdf", "_blank", "width=800,height=600");
  w.focus();
}

/** GITLET MODAL */


var gitletModal = document.getElementById("gitletModal");
var gitletBtn = document.getElementById("gitletBtn");
var gitletSpan = document.getElementsByClassName("close")[0];
gitletBtn.onclick = function() {
  gitletModal.style.display = "block";
}

gitletSpan.onclick = function() {
  gitletModal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == gitletModal) {
    gitletModal.style.display = "none";
  }
}

/** END GITLET MODAL */


/** ATAXX MODAL */


var ataxxModal = document.getElementById("ataxxModal");
var ataxxBtn = document.getElementById("ataxxBtn");
var ataxxSpan = document.getElementsByClassName("close")[2];
ataxxBtn.onclick = function() {
  ataxxModal.style.display = "block";
}

ataxxSpan.onclick = function() {
  ataxxModal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == ataxxModal) {
    ataxxModal.style.display = "none";
  }
}

/** END ATAXX MODAL */

/** PARKING METER MODAL */



var parkModal = document.getElementById("parkModal");
var parkBtn = document.getElementById("parkBtn");
var parkSpan = document.getElementsByClassName("close")[1];
parkBtn.onclick = function() {
  parkModal.style.display = "block";
}

parkSpan.onclick = function() {
  parkModal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == parkModal) {
    parkModal.style.display = "none";
  }
}

/** END PARKING METER MODAL */


/** CARS MODAL */



var carsModal = document.getElementById("carsModal");
var carsBtn = document.getElementById("carsBtn");
var carsSpan = document.getElementsByClassName("close")[3];
carsBtn.onclick = function() {
  carsModal.style.display = "block";
}

carsSpan.onclick = function() {
  carsModal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == carsModal) {
    carsModal.style.display = "none";
  }
}

/** END CARS MODAL */

