const burgerButton = document.querySelector(".nav-burger-btn");
const navbar = document.querySelector(".header-navbar");
const navbarLogo = document.querySelector(".navbar-logo");
burgerButton.addEventListener("click", toggleBurgerButton);
function toggleBurgerButton() {
  burgerButton.classList.toggle("open-burger");
  navbar.classList.toggle("open-navbar");
  if (navbar.classList.contains("open-navbar")) {
    burgerButton.style.position = "fixed";
    navbarLogo.style.position = "fixed";
  } else {
    burgerButton.style.position = "absolute";
    navbarLogo.style.position = "absolute";
  }
}
