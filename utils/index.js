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

const toastContainer = document.querySelector(".toast");
const products = document.querySelectorAll(".product");

const addToBasket = () => {
  toastContainer.classList.add("toast-active");
  setTimeout(() => {
    toastContainer.classList.add("toast-timer");
  }, 1000);

  setTimeout(() => {
    toastContainer.classList.remove("toast-active");
    toastContainer.classList.remove("toast-timer");
  }, 3000);
};

products.forEach((product) => {
  const basketBtn = product.querySelector(".product-add");
  if (basketBtn) {
    basketBtn.addEventListener("click", addToBasket);
  }
});
