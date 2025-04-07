
const header = document.querySelector(".header");
const headerItem = document.querySelector(".header-item--with-icon");
const overLay = document.querySelector(".overlay");
const cartOverlay = document.querySelector(".cart-overlay");
const shoppingCartBtn = document.querySelector(".shopping-cart__button");
const shoppingCartContent = document.querySelector(".shopping-cart__content");
const shoppingCart = document.querySelector(".shopping-cart");


const showOverlay = () => {
  overLay.classList.remove("hidden");
}

const closeOverlay = () => {
  overLay.classList.add("hidden");
}

const showShoppingCart = () => {
  shoppingCartContent.classList.toggle("hidden");
  cartOverlay.classList.toggle("hidden");

  if (!cartOverlay.classList.contains("hidden")) {
    header.style.zIndex = "auto"
  } else {
    header.style.zIndex = "6666"
  }


  document.addEventListener("click", (event) => {
    if (!shoppingCartContent.contains(event.target) && !shoppingCartBtn.contains(event.target) ) {
      shoppingCartContent.classList.add("hidden");

      setTimeout(() => {
        cartOverlay.classList.add("hidden");
        header.style.zIndex = "6666"

      }, 100)
    }
  });
}

headerItem.addEventListener("mouseover", showOverlay);
headerItem.addEventListener("mouseout", closeOverlay);
shoppingCartBtn.addEventListener("click", showShoppingCart);