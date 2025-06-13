// script.js

let price = 19.5; // matches the HTML display
let cid = [
  ["PENNY", 1.01],
  ["NICKEL", 2.05],
  ["DIME", 3.1],
  ["QUARTER", 4.25],
  ["ONE", 90],
  ["FIVE", 55],
  ["TEN", 20],
  ["TWENTY", 60],
  ["ONE HUNDRED", 100],
];

const purchaseBtn = document.getElementById("purchase-btn");
const changeDueDiv = document.getElementById("change-due");

purchaseBtn.addEventListener("click", () => {
  const cash = parseFloat(document.getElementById("cash").value);

  if (isNaN(cash) || cash < price) {
    alert("Customer does not have enough money to purchase the item");
    changeDueDiv.innerText = "";
    return;
  }

  const result = calculateChange(cash, price, cid);

  if (result.status === "INSUFFICIENT_FUNDS") {
    changeDueDiv.innerText = `Status: ${result.status}`;
  } else if (result.status === "CLOSED") {
    const changeStr = result.change
      .map(([unit, amt]) => `${unit}: $${amt.toFixed(2)}`)
      .join("\n");
    changeDueDiv.innerText = `Status: CLOSED\n${changeStr}`;
  } else if (result.change.length === 0) {
    changeDueDiv.innerText = "No change due - customer paid with exact cash";
  } else {
    const changeStr = result.change
      .map(([unit, amt]) => `${unit}: $${amt.toFixed(2)}`)
      .join("\n ");
    changeDueDiv.innerText = `Status: OPEN\nChange due: ${changeStr}`;
  }
});

function calculateChange(cash, price, cid) {
  let changeCents = Math.round((cash - price) * 100);
  const cidCents = cid.map(([name, amt]) => [name, Math.round(amt * 100)]);
  const totalCidCents = cidCents.reduce((sum, [_, amt]) => sum + amt, 0);
  console.log(totalCidCents / 100);

  if (changeCents === 0) return { status: "OPEN", change: [] };
  if (changeCents > totalCidCents)
    return { status: "INSUFFICIENT_FUNDS", change: [] };
  if (changeCents === totalCidCents) {
    const changeOnly = cid.filter(([_, amt]) => amt > 0);
    return { status: "CLOSED", change: changeOnly };
  }

  const units = [
    { name: "ONE HUNDRED", value: 10000 },
    { name: "TWENTY", value: 2000 },
    { name: "TEN", value: 1000 },
    { name: "FIVE", value: 500 },
    { name: "ONE", value: 100 },
    { name: "QUARTER", value: 25 },
    { name: "DIME", value: 10 },
    { name: "NICKEL", value: 5 },
    { name: "PENNY", value: 1 },
  ];

  let changeArr = [];
  for (let unit of units) {
    let amount = 0;
    let available = cidCents.find(([n]) => n === unit.name)[1];
    while (changeCents >= unit.value && available >= unit.value) {
      changeCents -= unit.value;
      available -= unit.value;
      amount += unit.value;
    }
    if (amount > 0) {
      changeArr.push([unit.name, amount / 100]);
      cidCents.find(([n]) => n === unit.name)[1] = available;
    }
  }

  if (changeCents > 0) return { status: "INSUFFICIENT_FUNDS", change: [] };
  return { status: "OPEN", change: changeArr };
}
