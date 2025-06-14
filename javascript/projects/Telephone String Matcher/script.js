const userInput = document.getElementById("user-input");
const result = document.getElementById("results-div");
const checkBtn = document.getElementById("check-btn");
const clearBtn = document.getElementById("clear-btn");

const telRegex = /^1?\s*(?:\(\d{3}\)|\d{3})[\s-]?\d{3}[\s-]?\d{4}$/;

const numberCheckAndDisplay = (input, regex) => {
  if (input.value === "") {
    alert("Please provide a phone number");
    return;
  }

  if (regex.test(input.value)) {
    result.innerHTML += `<div style="color: green; text-align: center; font-size: 20px; margin: 10px 5px">Valid US number: ${userInput.value}</div>`;
  } else {
    result.innerHTML += `<div style="color: red; text-align: center; font-size: 20px;  margin: 10px 5px">Invalid US number: ${userInput.value}</div>`;
  }

  input.value = ``;
};

const clearThings = () => {
  result.innerHTML = ``;
  userInput.value = ``;
};

checkBtn.addEventListener("click", () => {
  numberCheckAndDisplay(userInput, telRegex);
});

userInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    numberCheckAndDisplay(userInput, telRegex);
  }
});

clearBtn.addEventListener("click", () => {
  clearThings();
});
