// safe menu script — paste into script.js (keep your header-height setter if you want)
(function () {
  const hamburger = document.querySelector(".hamburger");
  const nav = document.querySelector(".nav-list");
  const closeBtn = document.querySelector(".close-btn");
  const overlay = document.querySelector(".overlay");

  // small helpers
  function openNav() {

    if (nav) nav.classList.add("open");        // use "open" because your CSS uses .nav-list.open
    if (overlay) overlay.classList.add("active");
    if (hamburger) {
      hamburger.style.display = "none";
      hamburger.setAttribute("aria-expanded", "true");
    }
    document.body.style.overflow = "hidden"; // optional: prevent background scroll
  }

  function closeNav() {
    if (nav) nav.classList.remove("open");
    if (overlay) overlay.classList.remove("active");
    if (hamburger) {
      hamburger.style.display = "flex";
      hamburger.setAttribute("aria-expanded", "false");
    }
    document.body.style.overflow = "";
  }

  // attach listeners only if elements exist
  if (hamburger) {
    hamburger.addEventListener("click", openNav);
  } else {
    console.warn("hamburger element not found — check .hamburger selector");
  }

  if (closeBtn) {
    closeBtn.addEventListener("click", closeNav);
  } else {
    console.warn("close button not found — check .close-btn selector");
  }

  if (overlay) {
    overlay.addEventListener("click", closeNav);
  } else {
    console.warn("overlay element not found — check .overlay selector");
  }

  // expose close for other usage (optional)
  window.closeNavBar = closeNav;
})();