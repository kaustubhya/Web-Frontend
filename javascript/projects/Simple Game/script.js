const box = document.querySelector(".box");
let playerPositionX = 0;
let playerPositionY = 0;

box.addEventListener("keydown", (e) => {
  if (e.key === "ArrowLeft") {
    playerPositionX -= 10;
    box.style.left = `${playerPositionX}px`;
    console.log("Left arrow key is pressed");
  }
  else if (e.key === "ArrowRight") {
    playerPositionX += 10;
    box.style.left = `${playerPositionX}px`;
    console.log("Right arrow key is pressed");
  }
  else if (e.key === "ArrowUp") {
    playerPositionY -= 10;
    box.style.top = `${playerPositionY}px`;
    console.log("Top arrow key is pressed");
  }
  else if (e.key === "ArrowDown") {
    playerPositionY += 10;
    box.style.top = `${playerPositionY}px`;
    console.log("Down arrow key is pressed");
  }
});


