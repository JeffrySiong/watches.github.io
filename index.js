const navMenu = document.getElementById("nav-menu");
const navClose = document.getElementById("nav-close");
const navToggle = document.getElementById("nav-toggle");
const navLink = document.querySelectorAll(".nav__link");

navToggle.addEventListener("click", () => {
  navMenu.classList.add("show");
});

navClose.addEventListener("click", () => {
  navMenu.classList.remove("show");
});

navLink.forEach((link) =>
  link.addEventListener("click", () => {
    navMenu.classList.remove("show");
  })
);

// SWIPERJS
const swiperWatches = new Swiper(".home__swiper", {
  loop: true,
  spaceBetween: 32,
  grabCursor: true,
  effect: "creative",
  creativeEffect: {
    prev: {
      translate: [-100, 0, -500],
      rotate: [0, 0, 15],
      opacity: 0,
    },
    next: {
      translate: [-100, 0, -500],
      rotate: [0, 0, -15],
      opacity: 0,
    },
  },

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

// GSAP
gsap.from(".home__images", 1.5, { delay: 0.1, y: 150, opacity: 0 });
gsap.from(".home__data", 1.5, { delay: 0.8, x: -100, opacity: 0 });
gsap.from(".home__info", 1.5, { delay: 1, x: 100, opacity: 0 });
