const sectionProducts = [...document.querySelectorAll(".section__bottom")];

const prevBtn = [...document.querySelectorAll(".section-prev")];
const nextBtn = [...document.querySelectorAll(".section-next")];

sectionProducts.forEach((item, i) => {
  let containerDimensions = item.getBoundingClientRect();
  let containerWidth = containerDimensions.width;

  nextBtn[i].addEventListener("click", () => {
    item.scrollLeft += containerWidth;
  });
  prevBtn[i].addEventListener("click", () => {
    item.scrollLeft -= containerWidth;
  });
});
