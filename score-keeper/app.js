var button1 = document.querySelector("#p1btn");
var button2 = document.querySelector("#p2btn");
var player1 = document.querySelector("#player1");
var score1 = Number(player1.innerHTML);
var player2 = document.querySelector("#player2");
var score2 = Number(player2.innerHTML);
var control = document.querySelector("#control");
var controlNum = Number(document.querySelector("#control").innerHTML);
var reset = document.querySelector("#reset");
var inputValue = Number(document.querySelector("input").value);
var isTrue = true;

button1.addEventListener("click", function() {
  if (isTrue) {
    score1 = score1 + 1;
    player1.innerHTML = score1;
    if (score1 === inputValue) {
      isTrue = !isTrue;
      player1.style.color = "green";
    }
  }

});

button2.addEventListener("click", function() {
  if (isTrue) {
    score2 = score2 + 1;
    player2.innerHTML = score2;
    if (score2 === inputValue) {
      isTrue = !isTrue;
      player2.style.color = "green";
    }
  }
});

document.querySelector("input").addEventListener("change", function() {
  inputValue = Number(document.querySelector("input").value);
  control.innerHTML = inputValue;
  resset();
});

function resset() {
  score1 = 0;
  player1.innerHTML = score1;
  score2 = 0;
  player2.innerHTML = score2;
  // inputValue = 5;
  // document.querySelector("input").value = 5;
  // control.innerHTML = inputValue;
  isTrue = true;
  player1.style.color = "black";
  player2.style.color = "black";
}

reset.addEventListener("click", function() {
  resset();
});