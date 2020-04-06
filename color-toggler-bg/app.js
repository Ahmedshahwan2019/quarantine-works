var body = document.querySelector("body");
var toggle = document.querySelector("button");

toggle.addEventListener("click", function(){
  var ranNum1 = Math.floor(Math.random()*256);
  var ranNum2 = Math.floor(Math.random()*256);
  var ranNum3 = Math.floor(Math.random()*256);
  var rgb = 'rgb(' + ranNum1 + ','+ ranNum2 + ',' + ranNum3 + ')';
  body.style.background = rgb;
});