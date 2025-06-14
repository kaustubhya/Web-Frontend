const form = document.querySelector("#form");
const input = document.querySelector("#number");
const output = document.querySelector("#output");
const button = document.querySelector("#convert-btn");

const romanNumbers = [
  { name: "M", value: 1000 },
  { name: "CM", value: 900 },
  { name: "D", value: 500 },
  { name: "CD", value: 400 },
  { name: "C", value: 100 },
  { name: "XC", value: 90 },
  { name: "L", value: 50 },
  { name: "XL", value: 40 },
  { name: "X", value: 10 },
  { name: "IX", value: 9 },
  { name: "V", value: 5 },
  { name: "IV", value: 4 },
  { name: "I", value: 1 },
];

button.addEventListener("click", () => {
  output.innerText = "";

  let num = parseInt(input.value);

  if (input.value === "") {
    output.innerText = "Please enter a valid number";
    return;
  } else if (input.value < 1) {
    output.innerText = "Please enter a number greater than or equal to 1";
    return;
  } else if (input.value > 3999) {
    output.innerText = "Please enter a number less than or equal to 3999";
    return;
  } else {
    output.classList.remove("hidden");
    let myNum = num;
    let ans = "";
    for (let i = 0; i < romanNumbers.length; i++) {
      let romanVal = romanNumbers[i].value;
      let romanLetter = romanNumbers[i].name;
      while (myNum >= romanVal) {
        myNum -= romanVal;
        ans += romanLetter;
      }
    }

    output.innerText = ans;
  }
});
