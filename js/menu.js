const menuButton = document.querySelector(".nav__mobile__button");
const nav = document.querySelector(".nav__list");
const main = document.querySelector(".main");

menuButton.addEventListener("click", () => {
  nav.classList.toggle("nav__list--opened");
  main.classList.toggle("main--blur");
});
