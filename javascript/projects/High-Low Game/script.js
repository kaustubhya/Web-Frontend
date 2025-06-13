const number = document.querySelector("#num-input");
const form = document.querySelector("form");

const resultText = document.querySelector(".result-text");
const newGameBtn = document.querySelector(".new-game");
const submitBtn = document.querySelector(".submit-btn");
const guessArrText = document.querySelector(".guesses-array");

function iife() {
  let guessesArr = [];
  let randomNumber = Math.floor(Math.random() * 101);
  number.disabled = true;
  submitBtn.disabled = true;
  newGameBtn.disabled = false;

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    guessesArr.push(parseInt(number.value));
    guessArrText.innerText = guessesArr;

    if (parseInt(number.value) === randomNumber) {
      resultText.innerText = "Congrats You Guessed it right!!";
      newGameBtn.disabled = false;
      submitBtn.disabled = true;
    } else if (parseInt(number.value) > randomNumber) {
      resultText.innerText = "Too High! try again";
    } else if (parseInt(number.value) < randomNumber) {
      resultText.innerText = "Too Low! try again";
    }

    // clear the input after making a guess
    number.value = "";
  });

  newGameBtn.addEventListener("click", (e) => {
    e.preventDefault();
    submitBtn.disabled = false;
    newGameBtn.disabled = true;
    number.disabled = false;
    guessesArr = [];
    resultText.innerText = "";
    guessArrText.innerText = "";
    randomNumber = Math.floor(Math.random() * 101);
  });
}
iife();
// IIFE to encapsulate the game logic and avoid polluting the global scope like hiding the access of random variable from the user