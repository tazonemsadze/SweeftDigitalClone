"use strict";

const mobileMenu = document.querySelector(".mobile__menu--container");
const openMenuBtn = document.querySelector(".nav__hamburger--btn");
const closeMenuBtn = document.querySelector(".menu__close--btn");

const openMenu = function () {
  mobileMenu.classList.add("nav-active");
};

const closeMenu = function () {
  mobileMenu.classList.remove("is-active");
};

openMenuBtn.addEventListener("click", openMenu);
closeMenuBtn.addEventListener("click", closeMenu);

// Nav-scrolled JS

const navBar = document.querySelector("nav");
const header = document.querySelector("header");
const logo = document.querySelector(".nav__logo");

const options = {
  threshold: 0.9,
};

const stickyNav = function (entries) {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) {
      navBar.classList.add("nav-scrolled");
      logo.src = "images/Landing/logo-black-grad-full-txt.svg";
    } else if (entry.isIntersecting) {
      navBar.classList.remove("nav-scrolled");
      logo.src = "images/Landing/logo-white-new.svg";
    }
  });
};

const navBarObserver = new IntersectionObserver(stickyNav, options);
navBarObserver.observe(header);

// Infinite Client slider

const clientSlider = document.querySelector(".clients__slider");
const sliderList = clientSlider.querySelector(".clients__slider--list");
const sliderContent = Array.from(sliderList.children);

sliderContent.forEach((item) => {
  const clonedItem = item.cloneNode(true);
  sliderList.appendChild(clonedItem);
});

let splide = new Splide("#clients__feedback", {
  arrows: false,
  focus: "center",
  type: "loop",
  perPage: 1,
  padding: "1.5rem",
  gap: "1rem",
  pagination: false,
  flickPower: "500",
  waitForTransition: true,
  autoplay: true,
  interval: 3000,
  pauseOnHover: true,
  pauseOnFocus: true,
  mediaQuery: "min",
  breakpoints: {
    500: {
      gap: "1.7rem",
      perPage: 1,
    },
    890: {
      gap: "3.5rem",
      perPage: 1,
    },
  },
});
splide.mount();

let splide2 = new Splide("#second__slider", {
  arrows: false,
  perPage: 1,
  focus: "center",
  gap: "1rem",
  pagination: false,
  flickPower: "500",
  waitForTransition: true,
  autoplay: true,
  interval: 3000,
  pauseOnHover: true,
  pauseOnFocus: true,
  mediaQuery: "min",
  breakpoints: {
    500: {
      perPage: 2,
    },
    900: {
      perPage: 3,
    },
    1200: {
      destroy: true,
    },
  },
});
splide2.mount();

let splide3 = new Splide("#core__services", {
  arrows: false,
  perPage: 1,
  focus: "center",
  padding: "1rem",
  gap: "1rem",
  pagination: false,
  flickPower: "500",
  waitForTransition: true,
  autoplay: true,
  interval: 3000,
  pauseOnHover: true,
  pauseOnFocus: true,
  mediaQuery: "min",
  breakpoints: {
    500: {
      perPage: 2,
    },
    900: {
      perPage: 3,
    },
    1300: {
      destroy: true,
    },
  },
});
splide3.mount();
