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

function processSlider() {
  const images = document.querySelectorAll(".hero__image");
  if (images.length === 0) return;

  let currentIndex = 0;
  const intervalTime = 4000; // 4 seconds

  setInterval(() => {
    // Remove active class from current image
    images[currentIndex].classList.remove("hero__image--active");

    // Move to next image index
    currentIndex = (currentIndex + 1) % images.length;

    // Add active class to new image
    images[currentIndex].classList.add("hero__image--active");
  }, intervalTime);
}

document.addEventListener("DOMContentLoaded", () => {
  processHeader();
  processSlider();
});
