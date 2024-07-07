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

const cartBtn = document.querySelector("#cart-icon");
const cartMenu = document.querySelector(".subheader__basket");
const cartRemove = document.querySelector("#subheader__basket-remove");
const cartContainer = document.querySelector(".subheader__basket");

cartRemove.addEventListener("click", () => {
  cartMenu.classList.remove("basket-active");
});

document.body.addEventListener("click", () => {
  cartMenu.classList.remove("basket-active");
});
cartBtn.addEventListener("click", (e) => {
  e.stopPropagation();
  cartMenu.classList.toggle("basket-active");
});

cartContainer.addEventListener("click", (e) => {
  e.stopPropagation();
});
