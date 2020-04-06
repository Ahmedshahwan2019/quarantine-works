for (i = 0; i < document.querySelectorAll(".drum").length; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function() {
    var keyValue = this.innerHTML;
    makeSound(keyValue);
    animation(keyValue);
  });
}

document.addEventListener("keydown" , function(key) {
  makeSound(key.key);
  animation(key.key);
});

function makeSound(sound) {
  switch (sound) {
    case "w":
      new Audio("sounds/crash.mp3").play();
      break;
    case "a":
      new Audio("sounds/kick-bass.mp3").play();
      break;
    case "s":
      new Audio("sounds/snare.mp3").play();
      break;
    case "d":
      new Audio("sounds/tom_1.mp3").play();
      break;
    case "j":
      new Audio("sounds/tom_2.mp3").play();
      break;
    case "k":
      new Audio("sounds/tom_3.mp3").play();
      break;
    case "l":
      new Audio("sounds/tom_4.mp3").play();
      break;
    default:

  }
}

function animation(anime) {
  var animation = document.querySelector("." + anime);
  animation.classList.add("pressed");
  setTimeout(function(){
    animation.classList.remove("pressed");
  }, 100);
}
