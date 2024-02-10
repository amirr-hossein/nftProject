const burgerButton = document.querySelector(".nav-burger-btn");
const navbar = document.querySelector(".header-navbar");
const navbarLogo = document.querySelector(".navbar-logo");

burgerButton.addEventListener("click", toggleBurgerButton);

// OPEN && CLOSE NAVBAR HEADER
function toggleBurgerButton() {
  burgerButton.classList.toggle("open-burger");
  navbar.classList.toggle("open-navbar");

  //  FIXED NAVBAR BURGER && NAVBAR LOGO WHEN NAVBAR LIST IS OPEN
  if (navbar.classList.contains("open-navbar")) {
    burgerButton.style.position = "fixed";
    navbarLogo.style.position = "fixed";
  } else {
    burgerButton.style.position = "absolute";
    navbarLogo.style.position = "absolute";
  }
}
