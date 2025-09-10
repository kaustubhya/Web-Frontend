const main = document.querySelector("main");
const questionText = document.querySelector(".question-text");
const currentQuestion = document.querySelector(".current-question");
const timeLeft = document.querySelector(".timer-sec");
const options = document.querySelectorAll(".options-container .option");
const nextButton = document.querySelector(".next");
const timeContainer = document.querySelector(".time");
const innerTimeContainer = document.querySelector(".inner-time");
const volumeToggle = document.querySelector("#volume-icon");
const correctAudio = new Audio("./sounds/correct.mp3");
const wrongAudio = new Audio("./sounds/incorrect.mp3");
const bgAudio = new Audio("./sounds/bg-sound.mp3");

let questionsData = [];
let qIndex = 0;
let timerIdForSetInterVal = null;
let highestScore = 0;
let score = 0;
let volumeOn = false;
bgAudio.loop = true;
bgAudio.volume = 0.5;
wrongAudio.volume = 0.05;
correctAudio.volume = 0.4;

function countDown(inputTime) {
  clearInterval(timerIdForSetInterVal);
  main.style.backgroundColor = "#CCE2C2";
  timeContainer.style.backgroundColor = "#02A4096E";
  innerTimeContainer.style.backgroundColor = "#02A4096E";
  nextButton.style.color = "#01AB08";

  let time = inputTime;
  let yellowTime = Math.trunc(inputTime / 2); // makes 7.5 -> 7
  let redTime = Math.trunc(inputTime / 5);

  timerIdForSetInterVal = setInterval(() => {
    time--;

    if (time <= 0) {
      timeLeft.innerText = inputTime;
      clearInterval(timerIdForSetInterVal);
      nextButton.click();
      return;
    }

    if (time < 10) {
      timeLeft.innerText = `0${time}`;
    } else {
      timeLeft.innerText = time;
    }

    if (time === yellowTime) {
      main.style.backgroundColor = "#E4E5C7";
      timeContainer.style.backgroundColor = "#C5B1006E";
      innerTimeContainer.style.backgroundColor = "#C5B1006E";
      nextButton.style.color = "#C58800";
    } else if (time === redTime) {
      main.style.backgroundColor = "#DBADAD";
      timeContainer.style.backgroundColor = "#C50C006E";
      innerTimeContainer.style.backgroundColor = "#C50C006E";
      nextButton.style.color = "#C50000";
    }
  }, 1000);
}

async function loadQuestions() {
  try {
    const response = await fetch("./data/questions.json");
    questionsData = await response.json();
    console.log(`Questions: `, questionsData);
  } catch (e) {
    console.log(`Error: ${e}`);
  }
}

function renderQuestions(qIndex) {
  const firstQuestion = questionsData[qIndex];
  questionText.innerText = firstQuestion.question;
  currentQuestion.innerText = qIndex + 1;

  // doing the resets on options container for each new question
  options.forEach((op, index) => {
    // set new option texts
    op.querySelector("div:first-child").innerText =
      firstQuestion.options[index];
    // hiding the inner container again
    op.querySelector(".inner-options").classList.remove("show");

    // hiding things inside container
    op.querySelector(".my-choice-text").innerText = "";
    op.querySelector(".my-choice-icon img").src = ""; // remove image src
    op.querySelector(".inner-options").classList.remove("show");

    op.style.border = "3px solid #d9d9d9";
    op.style.pointerEvents = "auto"; // re-enable clicks
  });

  if (qIndex < 10) {
    countDown(20);
  } else if (qIndex >= 10 && qIndex <= 19) {
    countDown(25);
  } else {
    countDown(30);
  }
}

volumeToggle.addEventListener("click", () => {
  volumeOn = !volumeOn;

  if (volumeOn === false) {
    volumeToggle.src = "./images/volume_mute.svg";
    bgAudio.muted = true;
    wrongAudio.muted = true;
    correctAudio.muted = true;
  } else {
    volumeToggle.src = "./images/volume_up.svg";
    bgAudio.muted = false;
    wrongAudio.muted = false;
    correctAudio.muted = false;
    bgAudio.play();
  }
});

// local storage saving progress

function saveProgress() {
  const progress = {
    qIndex,
    score,
    highestScore,
  };
  localStorage.setItem("quizProgress", JSON.stringify(progress));
}

// local storage, getting data

function loadProgress() {
  const saved = localStorage.getItem("quizProgress");
  if (saved) {
    const progress = JSON.parse(saved);
    qIndex = progress.qIndex || 0;
    score = progress.score || 0;
    highestScore = progress.highestScore || 0;
    return true;
  }
  return false;
}

async function loadQuiz() {
  await loadQuestions();

  // get your progress from local storage if it is there
  const hasProgress = loadProgress(); // check for saved state
  if (hasProgress) {
    renderQuestions(qIndex);
    console.log("Restored progress:", { qIndex, score });
  } else {
    renderQuestions(0);
  }
  if (volumeOn) {
    bgAudio
      .play()
      .catch((err) =>
        console.log("Autoplay blocked, will start on user interaction:", err)
      );
  }

  options.forEach((op, index) => {
    op.addEventListener("click", () => {
      const correctIndex = questionsData[qIndex].correctIndex;

      options.forEach((op) => {
        op.style.pointerEvents = "none"; // disable clicks after clicking an
      });

      if (index !== questionsData[qIndex].correctIndex) {
        const correctInner =
          options[correctIndex].querySelector(".inner-options");
        const correctIcon = options[correctIndex].querySelector(
          ".my-choice-icon img"
        );

        // show the clicked (wrong) option's inner panel & wrong icon (you already do this earlier)
        op.querySelector(".inner-options").classList.add("show");
        op.querySelector(".my-choice-text").innerText = "You chose";
        const wrongIcon = op.querySelector(".my-choice-icon img");
        wrongIcon.src = "./images/wrong.svg";
        wrongIcon.style.display = "block";
        op.style.border = "3px solid red";

        // NOW reveal the correct option's inner panel and tick icon
        correctInner.classList.add("show"); // <<--- this was missing
        correctIcon.src = "./images/correct.svg";
        correctIcon.style.display = "block"; // ensure visible
        options[correctIndex].style.border = "3px solid green";

        wrongAudio.play();
      } else {
        op.querySelector(".inner-options").classList.add("show");

        console.log("Correct");
        op.querySelector(".my-choice-icon img").src = `./images/correct.svg`;
        op.querySelector(".my-choice-icon img").style.display = "block";

        op.style.border = "3px solid green";
        correctAudio.play();
        score++;
        console.log(score);
      }

      saveProgress(); // save after answering
    });
  });

  nextButton.addEventListener("click", () => {
    qIndex++;
    if (qIndex >= 30) {
      // calculate highest score and update high score if score > high score
      if (score > highestScore) {
        highestScore = score;
      }

      // Redirect to results page
      window.location.href = "result.html";
    } else {
      renderQuestions(qIndex);
    }
    // Save score to localStorage so result.html can access it. Highscore is saved here
    saveProgress();
  });
}

document.addEventListener("DOMContentLoaded", loadQuiz);
