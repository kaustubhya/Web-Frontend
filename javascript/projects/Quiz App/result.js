document.addEventListener("DOMContentLoaded", () => {
  const raw = localStorage.getItem("quizProgress");
  let p = null;
  try {
    p = raw ? JSON.parse(raw) : null;
  } catch (_) {
    p = null;
  }

  const finalScore = p?.score ?? 0;
  const totalQuestions = p?.qIndex ?? 0;
  const wrong = totalQuestions - finalScore;

  // setting the text based on percentage
  const remarks = document.querySelector(".comments");
  const percent = ((finalScore / totalQuestions) * 100).toFixed(1);
  if (percent === 100) {
    remarks.innerText = "You got it all right! Way to gooooo!!!!";
  }
  else if (percent >= 90) {
    remarks.innerText = "Well Well..., you did great!";
  }   
  else if(percent >= 50 && percent < 90) {
    remarks.innerText = "You're doing good!, Keep Improving!!";
  }
  else if(percent < 50 && percent > 20) {
    remarks.innerText = "You need to study more!";
  }
  else {
    remarks.innerText = "You need to study hard! You're dumb AF!";
  }

  // ---- Doughnut chart ----
  const resultChart = document.getElementById("result-chart").getContext("2d");
  new Chart(resultChart, {
    type: "doughnut",
    data: {
      labels: ['Incorrect', 'Correct'],
      datasets: [
        {
          label: "Quiz Results",
          // data: [finalScore, wrong],
          data: [wrong, finalScore],
          backgroundColor: [
            "#FF7A7A", // red for wrong
            "#35BD3A", // green for correct
          ],
          borderColor: ["rgba(255, 99, 132, 1)", "rgba(75, 192, 192, 1)"],
          borderWidth: 2,
        },
      ],
    },
    options: {
      cutout: "75%",
      rotation: Math.PI / 6,
      responsive: true,
      plugins: {
        legend: {
          position: "bottom",
        },
        tooltip: {
          callbacks: {
            label: (context) => {
              let value = context.raw;
              let total = finalScore + wrong;
              let percent = ((value / total) * 100).toFixed(1);
              return `${percent}%`;
            },
          },
        },
        centerText: {
            display: true,
            text: `${finalScore} / ${totalQuestions}`,
        }
      },
    },
    plugins: [{
        id: 'centerText',
        beforeDraw: function(chart) {
            if (chart.config.options.plugins.centerText.display !== null &&
                chart.config.options.plugins.centerText.display) {

                const ctx = chart.ctx;
                const width = chart.width;
                const height = chart.height;

                ctx.restore();
                const fontSize = (height / 154).toFixed(2);
                ctx.font = `bold ${fontSize}em sans-serif`;
                ctx.textBaseline = "middle";

                const text = chart.config.options.plugins.centerText.text;
                const textX = Math.round((width - ctx.measureText(text).width) / 2);
                const textY = height / 2;

                ctx.fillText(text, textX, textY);
                ctx.save();
            }
        }
    }]
  });
});

const retry = document.querySelector(".retry");
retry.addEventListener("click", () => {
  window.location.href = "index.html";
});