//Record how many pixels are scrolled vertically
let scrollpos = window.scrollY;

var header = document.getElementById("navbar");
console.log(header);
//How many pixels you need to scroll to add a class. You can change the value
const scrollChange = 1;

//The function that will add the class
const add_class_on_scroll = () => header.classList.add("nav--scrolled");
const remove_class_on_scroll = () => header.classList.remove("nav--scrolled");

//Tracking a "scroll" event
window.addEventListener("scroll", function () {
  scrollpos = window.scrollY;
  console.log(scrollpos);
  //If we scrolled more than we specified in the scrollChange variable, the add class function is executed
  if (scrollpos >= scrollChange) {
    add_class_on_scroll();
  } else {
    remove_class_on_scroll();
  }
});

/* 
$(window).scroll(function (event) {
  var scroll = $(window).scrollTop();
  // Do something
}); */
