const header = document.getElementById("navbar");
const body = document.getElementById("body");
const scrollChange = 1;

const add_class_on_scroll = () => header.classList.add("nav--scrolled");
const remove_class_on_scroll = () => header.classList.remove("nav--scrolled");

body.addEventListener("scroll", function (e) {
  const scrollPos = e.target.scrollTop;
  if (scrollPos >= scrollChange) {
    add_class_on_scroll();
  } else {
    remove_class_on_scroll();
  }
});
