const blastItemList = document.querySelectorAll(".blast__item");
const bannerTitle = document.querySelector(".banner__title");

blastItemList.forEach((blast) => {
  blast.addEventListener("mouseenter", () => {
    blast.classList.add("blast__item--animation");
    setTimeout(() => {
      blast.classList.remove("blast__item--animation");
    }, 500);
  });
});

bannerTitle.addEventListener("mouseenter", () => {
  bannerTitle.classList.add("banner__title--animation");
  setTimeout(() => {
    bannerTitle.classList.remove("banner__title--animation");
  }, 1000);
});
