function processHeader() {
  const hamburger = document.querySelector(".js-hamburger");
  const nav = document.querySelector(".js-nav");
  const overlay = document.querySelector(".js-overlay");

  if (hamburger && nav && overlay) {
    hamburger.addEventListener("click", () => {
      nav.classList.toggle("js-nav--active");
      overlay.classList.toggle("js-overlay--active");
      hamburger.classList.toggle("header__hamburger--hidden");
    });

    overlay.addEventListener("click", () => {
      nav.classList.remove("js-nav--active");
      overlay.classList.remove("js-overlay--active");
      hamburger.classList.remove("header__hamburger--hidden");
    });
  }
}

document.addEventListener("DOMContentLoaded", processHeader);
