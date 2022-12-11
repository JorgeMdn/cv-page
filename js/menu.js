const menuButton = document.querySelector(".nav__mobile__button");
const menuButtonInput = document.querySelector(".nav__mobile_input");
const nav = document.querySelector(".nav__list");
const main = document.querySelector(".main");
const navItemList = document.querySelectorAll(".nav__item");

function resetMobileMenu() {
  nav.classList.remove("nav__list--opened");
  main.classList.remove("main--blur");
  menuButtonInput.checked = false;
}

menuButton.addEventListener("click", () => {
  nav.classList.toggle("nav__list--opened");
  main.classList.toggle("main--blur");
  menuButtonInput.checked = !menuButtonInput.checked;
});

navItemList.forEach((item) => {
  item.addEventListener("click", () => {
    if (nav.classList.contains("nav__list--opened")) {
      resetMobileMenu();
    }
  });
});

window.addEventListener("resize", function () {
  const width = document.body.clientWidth;

  if (width > 900 && main.classList.contains("main--blur")) {
    main.classList.remove("main--blur");
    return;
  }

  if (width < 900) {
    resetMobileMenu();
  }
});
