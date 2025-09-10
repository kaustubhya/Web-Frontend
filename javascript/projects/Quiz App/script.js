const highestScoreBox = document.querySelector(".highest-score-box");
const highestScoreText = document.querySelector(".highest-score");
const startNowBtn = document.querySelector(".start-now");

const raw = localStorage.getItem("quizProgress");
let p = null;
try {
  p = raw ? JSON.parse(raw) : null;
  if (p === null) {
    highestScoreBox.style.visibility = "hidden";
  } else {
    const myHighScore = p?.highestScore ?? 0;
    highestScoreBox.style.visibility = "visible";
    highestScoreText.innerText = myHighScore;
  }
} catch (_) {
  p = null;
}

startNowBtn.addEventListener("click", () => {
  const myHighScore = p?.highestScore ?? 0;

  localStorage.setItem(
    "quizProgress",
    JSON.stringify({ qIndex: 0, score: 0, highestScore: myHighScore })
  );
  window.location.href = "quiz.html";
});
