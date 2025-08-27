const warnings = document.querySelector(".red-warnings");
const goal1Checkbox = document.querySelector("#goal1-checkbox");
const goal1Input = document.querySelector("#goal1-input");
const goal2Checkbox = document.querySelector("#goal2-checkbox");
const goal2Input = document.querySelector("#goal2-input");
const goal3Checkbox = document.querySelector("#goal3-checkbox");
const goal3Input = document.querySelector("#goal3-input");

const progressBar = document.querySelector(".progress-bar");
const progressText = document.querySelector(".progress-update-text");
const footerMessage = document.querySelector(".footer-message");

let tasksDone = 0;

// ========== LOAD SAVED GOALS ==========
function loadGoals() {
  let savedGoals = JSON.parse(localStorage.getItem("myGoals"));
  errorRemoval()

  if (savedGoals) {
    // populate inputs + checkboxes
    goal1Input.value = savedGoals[0].text;
    goal1Checkbox.checked = savedGoals[0].checked;

    goal2Input.value = savedGoals[1].text;
    goal2Checkbox.checked = savedGoals[1].checked;

    goal3Input.value = savedGoals[2].text;
    goal3Checkbox.checked = savedGoals[2].checked;

    // count completed
    tasksDone = savedGoals.filter((g) => g.checked).length;
    progressUpdate(tasksDone);

    // restore error
    errorRemoval();
  } else {
    saveGoals(); // initialize storage if empty
  }
}

// ========== SAVE GOALS ==========
function saveGoals() {
  const myGoals = [
    { text: goal1Input.value, checked: goal1Checkbox.checked },
    { text: goal2Input.value, checked: goal2Checkbox.checked },
    { text: goal3Input.value, checked: goal3Checkbox.checked },
  ];
  localStorage.setItem("myGoals", JSON.stringify(myGoals));
}

// ========== ERROR HANDLING ==========
function errorRemoval() {
  // Enable/disable checkboxes based on inputs
  goal1Checkbox.disabled = goal1Input.value.trim() === "";
  goal2Checkbox.disabled = goal2Input.value.trim() === "";
  goal3Checkbox.disabled = goal3Input.value.trim() === "";

  // Show warning if ANY input is empty
  if (
    goal1Input.value.trim() === "" ||
    goal2Input.value.trim() === "" ||
    goal3Input.value.trim() === ""
  ) {
    warnings.innerText = "Please set all the goals!";
    warnings.style.display = "block";
  } else {
    warnings.innerText = "";
    warnings.style.display = "none";
  }
}

// ========== PROGRESS BAR ==========
function progressUpdate(tasksDone) {
  progressBar.style.backgroundColor = "#4ba300";

  if (tasksDone === 0) {
    progressBar.style.width = "0%";
    progressText.innerText = "";
    footerMessage.innerText = `"Move one step ahead today!"`;
  } else if (tasksDone === 1) {
    progressBar.style.width = "33%";
    progressText.innerText = "1/3 Completed";
    footerMessage.innerText = `"You're on the right path"`;
  } else if (tasksDone === 2) {
    progressBar.style.width = "66%";
    progressText.innerText = "2/3 Completed";
    footerMessage.innerText = `"Keep Going, You're making great progress!"`;
  } else if (tasksDone === 3) {
    progressBar.style.width = "100%";
    progressText.innerText = "3/3 Completed";
    footerMessage.innerText = `"He's Done it!!!!"`;
  }
}

// ========== EVENT LISTENERS ==========
window.addEventListener("DOMContentLoaded", loadGoals);

[goal1Input, goal2Input, goal3Input].forEach((input) => {
  input.addEventListener("input", () => {
    errorRemoval();
    saveGoals();
  });
});

function handleCheckbox(checkbox, input) {
  checkbox.addEventListener("change", () => {
    if (checkbox.checked) {
      input.style.textDecoration = "line-through";
      input.style.color = "#4ba300";
      input.disabled = true;
      tasksDone += 1;
    } else {
      input.style.textDecoration = "none";
      input.style.color = "#000";
      input.disabled = false;
      tasksDone -= 1;
    }
    progressUpdate(tasksDone);
    saveGoals();
  });
}

handleCheckbox(goal1Checkbox, goal1Input);
handleCheckbox(goal2Checkbox, goal2Input);
handleCheckbox(goal3Checkbox, goal3Input);
