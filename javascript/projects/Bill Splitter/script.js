const billInput = document.querySelector("#bill-amount");
const tipCustom = document.querySelector(".custom-tip");

let tipPercentage = 0;
let bill = 0;
let totalPeople = 0;

const tipAmt = document.querySelector(".tip-amount");
const totalAmt = document.querySelector(".total-amount");
const genButton = document.querySelector(".generate");
const eachAmt = document.querySelector(".each-person-bill");
const people = document.querySelector(".peopleInput");
const allTips = document.querySelectorAll(".tip");
const reset = document.querySelector(".reset");

billInput.addEventListener("input", (e) => {
  bill = e.target.value;
  console.log(`bill is: ${bill}`);

  if (billInput.value) {
    tipCustom.disabled = false;
    people.disabled = false;

    // 🛑🛑 allTips is a NodeList of buttons, not a single element. You need to loop through each button in allTips and enable them individually.
    // enabling each buttons here via a loop
    allTips.forEach((eachTip) => (eachTip.disabled = false));
  } else {
    tipCustom.disabled = true;
    people.disabled = true;
    allTips.forEach((eachTip) => (eachTip.disabled = true));
  }
});

// 🛑🛑🛑🛑🛑🛑🛑🛑🛑🛑 Sir method

const tipContainer = document.querySelector(".tip-container");

tipContainer.addEventListener("click", (e) => {
  console.log(e.target);

  if (e.target !== tipContainer) {
    // removing all already selected borders via loop
    // 1. Convert html collection to array [...tipContainer.children]
    // 2. Loop through the array and remove the selected class

    [...tipContainer.children].forEach((eachTip) =>
      eachTip.classList.remove("selected")
    );

    // then add outline to only the selected class
    e.target.classList.add("selected");
    tipPercentage = parseInt(e.target.innerText) / 100; // 🛑🛑🛑

    // When we click on a tip button, the custom tip value is removed
    tipCustom.value = "";
  }
});

tipCustom.addEventListener("input", (e) => {
  tipPercentage = tipCustom.value / 100;
  [...tipContainer.children].forEach((eachTip) =>
    eachTip.classList.remove("selected")
  );
  // when we input the tip in custom box, the highlighted value is removed
});

people.addEventListener("input", (e) => {
  totalPeople = people.value;

  if (tipPercentage !== 0 && totalPeople !== 0) {
    genButton.disabled = false;
  }
});

genButton.addEventListener("click", (e) => {
  e.preventDefault();
  let tip = parseFloat(bill) * parseFloat(tipPercentage);
  let totalBill = parseFloat(bill) + tip;
  let eachPersonBill = totalBill / parseFloat(totalPeople);

  tipAmt.innerText = `₹ ${tip.toFixed(2)}`;
  totalAmt.innerText = `₹ ${totalBill.toFixed(2)}`;
  eachAmt.innerText = `₹ ${eachPersonBill.toFixed(2)}`;

  reset.disabled = false;
});

reset.addEventListener("click", (e) => {
  e.preventDefault();
  tipAmt.innerText = "";
  totalAmt.innerText = "";
  eachAmt.innerText = "";

  totalPeople = 0;
  people.value = "";
  tipPercentage = 0;
  bill = 0;
  billInput.value = "";
  tipCustom.value = "";
  [...tipContainer.children].forEach((eachTip) =>
    eachTip.classList.remove("selected")
  );

  reset.disabled = true;
  tipCustom.disabled = true;
  people.disabled = true;
  genButton.disabled = true;
  allTips.forEach((eachTip) => (eachTip.disabled = true));
});
