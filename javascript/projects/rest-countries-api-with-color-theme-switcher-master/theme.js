// theme.js
// Applies saved theme ASAP and keeps the mode UI (icon + label) in sync.
// Safe to include on every page. Prefer including this BEFORE other page scripts
// to reduce FOUC, but it will work even if loaded later.

(function applySavedThemeImmediately() {
  try {
    const saved = localStorage.getItem("theme");
    if (saved === "dark" && document.body) {
      document.body.classList.add("dark");
    }
  } catch (e) {
    // ignore storage errors (private mode etc.)
  }
})();

document.addEventListener("DOMContentLoaded", () => {
  // convert node list to array using array,from
  const modeBoxes = Array.from(document.querySelectorAll(".modeBox"));

  // helper to update icon + text for a single modeBox
  function updateModeBoxUI(box, isDark) {
    if (!box) return;
    const icon = box.querySelector("i");
    const label = box.querySelector("p");

    // FontAwesome: ensure solid style class remains; only replace the icon name
    if (icon) {
      // prefer classList.replace if available
      if (isDark) {
        if (icon.classList.contains("fa-moon")) {
          icon.classList.replace("fa-moon", "fa-sun");
        } else {
          icon.classList.add("fa-sun");
          icon.classList.remove("fa-moon");
        }
      } else {
        if (icon.classList.contains("fa-sun")) {
          icon.classList.replace("fa-sun", "fa-moon");
        } else {
          icon.classList.add("fa-moon");
          icon.classList.remove("fa-sun");
        }
      }
    }

    if (label) {
      label.textContent = isDark ? "Light Mode" : "Dark Mode";
    }

    // accessibility
    box.setAttribute("role", "button");
    box.setAttribute("tabindex", "0");
    box.setAttribute("aria-pressed", String(isDark));
    box.setAttribute("aria-label", isDark ? "Switch to light mode" : "Switch to dark mode");
  }

  // update all modeBoxes based on current theme
  function refreshAllModeBoxes() {
    const isDark = document.body.classList.contains("dark");
    if (modeBoxes.length === 0) return;
    modeBoxes.forEach((mb) => updateModeBoxUI(mb, isDark));
  }

  // attach click + keyboard handlers
  if (modeBoxes.length) {
    modeBoxes.forEach((mb) => {
      mb.addEventListener("click", () => {
        const isDark = document.body.classList.toggle("dark");
        try {
          localStorage.setItem("theme", isDark ? "dark" : "light");
        } catch (e) {}
        refreshAllModeBoxes();
      });

      // allow Enter / Space toggling when focused
      mb.addEventListener("keydown", (ev) => {
        if (ev.key === "Enter" || ev.key === " ") {
          ev.preventDefault();
          mb.click();
        }
      });
    });
  }

  // Ensure the UI matches the current theme (on page load)
  refreshAllModeBoxes();
});
