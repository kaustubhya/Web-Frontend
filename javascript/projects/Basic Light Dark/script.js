const checkboxOne = document.getElementById("checkbox-1");
const checkboxTwo = document.getElementById("checkbox-2");
const main = document.querySelector("main");
const container = document.querySelector(".container");

document.addEventListener("DOMContentLoaded", () => {
  const raw = localStorage.getItem("dark-mode");
  try {
    if (raw) {
      const theme = JSON.parse(raw);
      console.log(theme);
      checkboxOne.checked = theme.boxOne;
      checkboxTwo.checked = theme.boxTwo;
      themeSwitch();
      boxThemeSwitch();
    }
  } catch (e) {
    console.error("Error parsing JSON from localStorage:", e);
  }
});

function themeSwitch() {
  if (checkboxOne.checked) {
    main.classList.add("dark");
    document.body.classList.add("dark");
  } else {
    main.classList.remove("dark");
    container.classList.remove("dark");
    document.body.classList.remove("dark");
  }

  localStorage.setItem(
    "dark-mode",
    JSON.stringify({ boxOne: checkboxOne.checked, boxTwo: checkboxTwo.checked })
  );
}

function boxThemeSwitch() {
  if (checkboxTwo.checked) {
    container.classList.add("dark");
  } else {
    container.classList.remove("dark");
  }
  localStorage.setItem(
    "dark-mode",
    JSON.stringify({ boxOne: checkboxOne.checked, boxTwo: checkboxTwo.checked })
  );
}

checkboxOne.addEventListener("change", themeSwitch);

checkboxTwo.addEventListener("change", boxThemeSwitch);
