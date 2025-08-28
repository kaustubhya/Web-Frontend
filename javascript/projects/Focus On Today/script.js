const warnings = document.querySelector(".red-warnings");
const goalsContainer = document.querySelector(".goals-container");
const progressBar = document.querySelector(".progress-bar");
const progressText = document.querySelector(".progress-update-text");
const footerMessage = document.querySelector(".footer-message");
const addTodo = document.querySelector(".add-todo");
const removeTodo = document.querySelector(".remove-todo");

let goalsArray = [];

// ========== LOAD SAVED GOALS ==========
function loadGoals() {
  let savedGoals = JSON.parse(localStorage.getItem("myGoals"));

  if (savedGoals && Array.isArray(savedGoals)) {
    goalsArray = savedGoals;
  } else {
    // default 3 blank goals
    goalsArray = [
      { text: "", checked: false },
      { text: "", checked: false },
      { text: "", checked: false },
    ];
  }
  renderGoals();
}

// ========== SAVE GOALS ==========
function saveGoals() {
  localStorage.setItem("myGoals", JSON.stringify(goalsArray));
}

// ========== RENDER GOALS ==========
const renderGoals = () => {
  goalsContainer.innerHTML = "";

  goalsArray.forEach((goal, index) => {
    const fieldset = document.createElement("fieldset");
    fieldset.classList.add("goal");

    fieldset.innerHTML = `
      <div class="inputs-container">
        <input type="checkbox" id="goal-${index}-checkbox" class="checkbox" ${
      goal.checked ? "checked" : ""
    } />
        <input type="text" id="goal-${index}-input" class="goal-input" value="${
      goal.text
    }" placeholder="Enter your goal here" />
      </div>`;

    goalsContainer.appendChild(fieldset);

    const checkbox = fieldset.querySelector(`#goal-${index}-checkbox`);
    const input = fieldset.querySelector(`#goal-${index}-input`);

    // --- cursor updater ---
    function updateCheckboxCursor() {
      if (checkbox.checked || input.value.trim() !== "") {
        checkbox.classList.add("enabled-cursor");
        checkbox.classList.remove("disabled-cursor");
      } else {
        checkbox.classList.add("disabled-cursor");
        checkbox.classList.remove("enabled-cursor");
      }
    }

    // input change
    input.addEventListener("input", () => {
      goalsArray[index].text = input.value;
      errorRemoval();
      updateCheckboxCursor();
      saveGoals();
    });

    // checkbox change
    checkbox.addEventListener("change", () => {
      if (input.value.trim() === "") {
        checkbox.checked = false;
        updateCheckboxCursor();
        return; // stop if no input
      }

      goalsArray[index].checked = checkbox.checked;
      if (checkbox.checked) {
        input.style.textDecoration = "line-through";
        input.style.color = "#4ba300";
        input.disabled = true;
      } else {
        input.style.textDecoration = "none";
        input.style.color = "#000";
        input.disabled = false;
      }

      updateCheckboxCursor();
      progressUpdate();
      saveGoals();
    });

    // restore styles for checked ones
    if (goal.checked) {
      input.style.textDecoration = "line-through";
      input.style.color = "#4ba300";
      input.disabled = true;
    }

    // initial cursor update
    updateCheckboxCursor();
  });

  errorRemoval();
  progressUpdate();
  updateAddRemoveButtons(); // update buttons every render
};

// ===== ERROR HANDLING =====
function errorRemoval() {
  const empty = goalsArray.some((g) => g.text.trim() === "");
  if (empty) {
    warnings.innerText = "Please set all the goals!";
    warnings.style.display = "block";
  } else {
    warnings.innerText = "";
    warnings.style.display = "none";
  }
}

// ===== PROGRESS BAR =====
function progressUpdate() {
  const done = goalsArray.filter((g) => g.checked).length;
  const total = goalsArray.length;
  const percent = Math.round((done / total) * 100);

  progressBar.style.backgroundColor = "#4ba300";
  progressBar.style.width = percent + "%";
  progressText.innerText = `${done}/${total} Completed`;

  if (done === 0) {
    footerMessage.innerText = `"Move one step ahead today!"`;
  } else if (done < total) {
    footerMessage.innerText = `"You're on the right path"`;
  } else {
    footerMessage.innerText = `"He's Done it!!!!"`;
  }
}

// ===== BUTTON STATE HANDLER =====
function updateAddRemoveButtons() {
  addTodo.disabled = goalsArray.length >= 5; // disable Add if 5
  removeTodo.disabled = goalsArray.length <= 1; // disable Remove if 1
}

// ===== ADD / REMOVE =====
addTodo.addEventListener("click", () => {
  if (goalsArray.length < 5) {
    goalsArray.push({ text: "", checked: false });
    saveGoals();
    renderGoals();
  }
});

removeTodo.addEventListener("click", () => {
  if (goalsArray.length > 1) {
    goalsArray.pop();
    saveGoals();
    renderGoals();
  }
});

// ===== INITIALIZE =====
window.addEventListener("DOMContentLoaded", loadGoals);
