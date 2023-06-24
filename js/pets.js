const mobileBtn = document.querySelector(".mobile__nav-btn");
const navBar = document.querySelector(".main__nav");
const navUL = document.querySelector(".nav-ul");
const hamburgerIcon = document.querySelector(".mobile__nav-btn--icon");

const revealMobileNav = function () {
  navBar.classList.toggle("hidden");
  navBar.classList.contains("hidden")
    ? (hamburgerIcon.src = "../images/burger-menu-svgrepo-com.svg")
    : (hamburgerIcon.src = "../images/x.svg");
};

mobileBtn.addEventListener("click", revealMobileNav);
