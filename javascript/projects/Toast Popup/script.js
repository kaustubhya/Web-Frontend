const showToastBtn = document.querySelector(".show-toast");
const horizontalPosition = document.querySelector("#horizontal-position");
const verticalPosition = document.querySelector("#vertical-position");
const toastContainer = document.querySelector(".toasts-container");
const toastMessageInput = document.querySelector("#toast-message");
const toastType = document.querySelector("#toast-type");
const durationInput = document.querySelector("#duration");

function setToastContainerPosition() {
  toastContainer.className = "toasts-container";

  if (
    horizontalPosition.value === "right" &&
    verticalPosition.value === "top"
  ) {
    toastContainer.classList.add("toasts-container_top-right");
  } else if (
    verticalPosition.value === "bottom" &&
    horizontalPosition.value === "left"
  ) {
    toastContainer.classList.add("toasts-container_bottom-left");
  } else if (
    horizontalPosition.value === "right" &&
    verticalPosition.value === "bottom"
  ) {
    toastContainer.classList.add("toasts-container_bottom-right");
  }
}

function removeToast(toast) {
  toast.classList.add("slide-out");

  // Wait for animation to finish before removing
  toast.addEventListener("animationend", () => {
    toast.remove();
  });
}

function createToast(type, message, duration) {
  const toast = document.createElement("div");
  toast.classList.add("toast");

  // Add class based on type
  toast.classList.add(`toast-${type}`);

  // Emoji/icon by type
  let icon = "";
  switch (type) {
    case "success":
      icon = "✓";
      break;
    case "error":
      icon = "✗";
      break;
    case "info":
      icon = "ⓘ";
      break;
    case "warning":
      icon = "⚠️";
      break;
  }

  // Set content
  toast.innerHTML = `<span>${icon}</span><span>${message}</span><span style="cursor:pointer;margin-left:auto;">✕</span>`;

  // Dismiss manually
  toast.querySelector("span:last-child").addEventListener("click", () => {
    removeToast(toast);
  });

  setTimeout(() => {
    removeToast(toast);
  }, duration * 1000);

  // Add to container
  toastContainer.appendChild(toast);
}

showToastBtn.addEventListener("click", () => {
  setToastContainerPosition();

  const type = toastType.value;
  const message = toastMessageInput.value;
  const duration = parseInt(durationInput.value, 10);

  createToast(type, message, duration);
});
