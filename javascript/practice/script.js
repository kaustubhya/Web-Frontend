const inputElement = document.querySelector("#input");
const span = document.querySelector("h2 span");

const callApi = function (value) {
  console.log("Calling API", value);
};

const logInput = throttle(callApi, 1000);

inputElement.addEventListener("input", (e) => {
  logInput.call({ name: "KSD", age: 23 }, e.target.value);
  // taking care of 'this' keyword context
});

function throttle(func, delay = 1000) {
  let firstCall = true;
  let timerId = null;
  let lastArgs = [];
  return (...args) => {
    console.log(this);
    lastArgs = args;
    if (firstCall) {
      // making sure that initial call does not give any delay, but calls after that can give delay
      func.apply(this, lastArgs);
      firstCall = false;
      return
    }
    if (timerId) return;
    timerId = setTimeout(() => {
      timerId = null; // so that other timer ids get cancelled when one is running
      func.apply(this, lastArgs); // lastArgs getting spread automatically
    }, delay);
  };
}
