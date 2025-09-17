const getNewsLetter = document.querySelector(".container-1");
const closeBtn = document.querySelector(".close-icon-container");
const popupOverlay = document.querySelector(".popup-overlay");
const subscribeButton = document.querySelector(".subscribe");
const emailInput = document.querySelector("#email");

getNewsLetter.addEventListener("click", () => {
  popupOverlay.classList.add("active");
  getNewsLetter.classList.add("inactive");
});

closeBtn.addEventListener("click", () => {
  popupOverlay.classList.remove("active");
  getNewsLetter.classList.remove("inactive");
});

popupOverlay.addEventListener("click", (e) => {
  if (e.target === popupOverlay) {
    popupOverlay.classList.remove("active");
    getNewsLetter.classList.remove("inactive");
  }
});

// validate email
function isValidEmail(email) {
  // quick regex for format: something@something.something
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}

emailInput.addEventListener("input", () => {
  if (isValidEmail(emailInput.value.trim())) {
    subscribeButton.disabled = false;

    subscribeButton.addEventListener("click", () => {
      popupOverlay.classList.remove("active");
      getNewsLetter.classList.remove("inactive");
    });
  }
  else {
    subscribeButton.disabled = true;
  }
});
