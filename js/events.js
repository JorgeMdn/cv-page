const header = document.getElementById("navbar");
const body = document.getElementById("body");
const scrollChange = 1;
const nameTxt = document.getElementById("nameTxt");
const emailTxt = document.getElementById("emailTxt");
const subjectTxt = document.getElementById("subjectTxt");
const messageTxt = document.getElementById("messageTxt");

const nameRequireMsj = document.getElementById("nameRequireMsj");
const emailRequireMsj = document.getElementById("emailRequireMsj");
const emailValidMsj = document.getElementById("emailValidMsj");
const subjectRequireMsj = document.getElementById("subjectRequireMsj");
const messageRequireMsj = document.getElementById("messageRequireMsj");

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

nameTxt.addEventListener("keypress", () => {
  if (nameTxt.value) {
  }
});
emailTxt.addEventListener("keypress", () => {
  if (emailTxt.value) {
  }
});
subjectTxt.addEventListener("keypress", () => {
  if (subjectTxt.value) {
  }
});
messageTxt.addEventListener("keypress", () => {
  if (messageTxt.value) {
  }
});
