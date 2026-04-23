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
  const intervalTime = 4000;

  setInterval(() => {
    images[currentIndex].classList.remove("hero__image--active");

    currentIndex = (currentIndex + 1) % images.length;

    images[currentIndex].classList.add("hero__image--active");
  }, intervalTime);
}

function processMegaMenu() {
  const dropdownLinks = document.querySelectorAll('.global-nav__item--has-dropdown > .global-nav__link');

  dropdownLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      // Toggle logic only for mobile viewports
      if (window.innerWidth <= 768) {
        e.preventDefault();
        const parentItem = link.parentElement;
        parentItem.classList.toggle('is-open');
      }
    });
  });
}

document.addEventListener("DOMContentLoaded", () => {
  processHeader();
  processSlider();
  processMegaMenu();
});
