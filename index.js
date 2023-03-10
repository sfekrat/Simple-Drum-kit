// Button pressed.
for (let i = 0; i < document.querySelectorAll(".drum").length; i++) {
  document.querySelectorAll("button")[i].addEventListener("click", handleClick);
  function handleClick() {
    playSound(this.innerHTML);
    buttonAnimation(this.innerHTML);
  }
}
// Button pressed.
document.addEventListener("keydown", function(event) {
    playSound(event.key);
    buttonAnimation(event.key);
});
// Play relevent sound.
function playSound(key) {
    switch (key) {
        case "w":
          new Audio("sounds/tom-1.mp3").play();
          break;
        case "a":
          new Audio("sounds/tom-2.mp3").play();
          break;
        case "s":
          new Audio("sounds/tom-3.mp3").play();
          break;
        case "d":
          new Audio("sounds/tom-4.mp3").play();
          break;
        case "j":
          new Audio("sounds/snare.mp3").play();
          break;
        case "k":
          new Audio("sounds/kick-bass.mp3").play();
          break;
        case "l":
          new Audio("sounds/crash.mp3").play();
          break;
        default:
          console.log(this.innerHTML);
          break;
      }
}
function buttonAnimation(currentKey) {
    var activeButton = document.querySelector("." + currentKey);
    activeButton.classList.add("pressed");
    setTimeout(function() {
        activeButton.classList.remove("pressed");   
    }, 100);
}