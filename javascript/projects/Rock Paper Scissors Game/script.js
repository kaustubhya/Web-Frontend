const rock = document.querySelector(".rock-btn");
const paper = document.querySelector(".paper-btn");
const scissors = document.querySelector(".scissors-btn");

const userHand = document.querySelector(".user-hand");
const computerHand = document.querySelector(".computer-hand");

const userIcon = "🤜";
const computerIcon = "🤛";
const rockIcon = "✊";
const scissorsIcon = "✌️";
const paperIcon = "✋";

let userAns = '';
let computerAns = '';

const userScore = document.querySelector(".user-score");
let uScore = 0;
const computerScore = document.querySelector(".computer-score");
let cScore = 0;

const result = document.querySelector(".result");

function computerDraw() {
  const choices = [rockIcon, paperIcon, scissorsIcon];

  const choice = function () {
    const choiceIndex = Math.floor(Math.random() * choices.length);
    return choices[choiceIndex];
  };

  let answer = choice();
  computerHand.children[1].innerText = answer;
  computerAns = answer;
}

function scoreUpdate() {
  if (userAns === computerAns) {
    // console.log("Draw");
    result.innerText = "Draw";
  } else if (userAns === rockIcon && computerAns === scissorsIcon) {
    // console.log("User Wins");
    result.innerText = "You Win!!";
    uScore++;
    userScore.innerText = uScore;
  } else if (userAns === paperIcon && computerAns === scissorsIcon) {
    // console.log("Computer Wins");
    result.innerText = "You Lose!!";
    cScore++;
    computerScore.innerText = cScore;
  } else if (userAns === scissorsIcon && computerAns === rockIcon) {
    // console.log("Computer Wins");
    result.innerText = "You Lose!!";
    cScore++;
    computerScore.innerText = cScore;
  } else if (userAns === paperIcon && computerAns === rockIcon) {
    // console.log("User Wins");
    result.innerText = "You Win!!";
    uScore++;
    userScore.innerText = uScore;
  } else if (userAns === scissorsIcon && computerAns === paperIcon) {
    // console.log("User Wins");
    result.innerText = "You Win!!";
    uScore++;
    userScore.innerText = uScore;
  } else if (userAns === rockIcon && computerAns === paperIcon) {
    // console.log("Computer Wins");
    result.innerText = "You Lose!!";
    cScore++;
    computerScore.innerText = cScore;
  }
}



rock.addEventListener("click", function (e) {
  userHand.children[1].innerText = userIcon;
  computerHand.children[1].innerText = computerIcon;
  result.innerText = '';

//   console.log("Rock Button Clicked");
  userHand.children[1].classList.add("shakeUserHands");
  computerHand.children[1].classList.add("shakeComputerHands");

  // stop animation after 2sec
  setTimeout(() => {
    userHand.children[1].classList.remove("shakeUserHands");
    computerHand.children[1].classList.remove("shakeComputerHands");

    userHand.children[1].innerText = rockIcon;
    userAns = rockIcon;


    computerDraw();

    scoreUpdate();
  }, 2000);
});



paper.addEventListener("click", function (e) {
//   console.log("Paper Button Clicked");
  userHand.children[1].innerText = userIcon;
  computerHand.children[1].innerText = computerIcon;
  result.innerText = '';


  userHand.children[1].classList.add("shakeUserHands");
  computerHand.children[1].classList.add("shakeComputerHands");

  // stop animation after 2sec
  setTimeout(() => {
    userHand.children[1].classList.remove("shakeUserHands");
    computerHand.children[1].classList.remove("shakeComputerHands");

    userHand.children[1].innerText = paperIcon;
    userAns = paperIcon;

    computerDraw();
    scoreUpdate();

  }, 2000);
});

scissors.addEventListener("click", function (e) {
//   console.log("Scissors Button Clicked");
  userHand.children[1].innerText = userIcon;
  computerHand.children[1].innerText = computerIcon;
  result.innerText = '';


  userHand.children[1].classList.add("shakeUserHands");
  computerHand.children[1].classList.add("shakeComputerHands");

  // stop animation after 2sec
  setTimeout(() => {
    userHand.children[1].classList.remove("shakeUserHands");
    computerHand.children[1].classList.remove("shakeComputerHands");

    userHand.children[1].innerText = scissorsIcon;
    userAns = scissorsIcon;

    computerDraw();
    scoreUpdate();

  }, 2000);
});
