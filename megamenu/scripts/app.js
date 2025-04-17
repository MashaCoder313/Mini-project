const header = document.querySelector(".header");
const headerItem = document.querySelector(".header-item--with-icon");
const overLay = document.querySelector(".overlay");
const cartOverlay = document.querySelector(".cart-overlay");
const shoppingCartBtn = document.querySelector(".shopping-cart__button");
const shoppingCartContent = document.querySelector(".shopping-cart__content");
const mobileCartIcon = document.querySelector(".mobile-nav__cart-icon");
const mobileMenuIcon = document.querySelector(".mobile-nav__menu-icon");
const mobileCart = document.querySelector(".mobile-cart");
const mobileMenu = document.querySelector(".mobile-menu");
const mobileCartCloseIcon = document.querySelector(".mobile-cart__close-icon");
const mobileMenuCloseIcon = document.querySelector(".mobile-menu__close-icon");
const opinOrCloseSubMenu = document.querySelector(".mobile-menu__arrow-icon");
const mobileMenuSubMenuElem = document.querySelector(".mobile-menu__sub-menu");

const showOverlay = () => {
  overLay.classList.remove("hidden");
};

const closeOverlay = () => {
  overLay.classList.add("hidden");
};

const showShoppingCart = () => {
  shoppingCartContent.classList.toggle("hidden");
  cartOverlay.classList.toggle("hidden");

  if (!cartOverlay.classList.contains("hidden")) {
    header.style.zIndex = "auto";
  } else {
    header.style.zIndex = "6666";
  }

  const handleClickOutside = (event) => {
    if (
      !shoppingCartContent.contains(event.target) &&
      !shoppingCartBtn.contains(event.target)
    ) {
      shoppingCartContent.classList.add("hidden");

      setTimeout(() => {
        cartOverlay.classList.add("hidden");
        header.style.zIndex = "6666";
      }, 100);

      // حذف رویداد کلیک پس از بسته شدن
      document.removeEventListener("click", handleClickOutside);
    }
  };

  // اضافه کردن رویداد کلیک به کل صفحه
  document.addEventListener("click", handleClickOutside);
};

const showMobileShoppingCart = () => {
  mobileCart.style.display = "flex";
  cartOverlay.classList.remove("hidden");
};

const showMobileMenuItems = () => {
  mobileMenu.style.display = "flex";
  cartOverlay.classList.remove("hidden");
};

const closeMobileShoppingCart = () => {
  mobileCart.style.display = "none";
  cartOverlay.classList.add("hidden");
};

const closeMobileMenuItems = () => {
  mobileMenu.style.display = "none";
  cartOverlay.classList.add("hidden");
};

const opinOrCloseSubMenuHandler = () => {
  mobileMenuSubMenuElem.classList.toggle("mobile-menu__sub-menu--show");
  opinOrCloseSubMenu.classList.toggle("rotate");
};
headerItem.addEventListener("mouseover", showOverlay);
headerItem.addEventListener("mouseout", closeOverlay);
shoppingCartBtn.addEventListener("click", showShoppingCart);
mobileCartIcon.addEventListener("click", showMobileShoppingCart);
mobileMenuIcon.addEventListener("click", showMobileMenuItems);
mobileCartCloseIcon.addEventListener("click", closeMobileShoppingCart);
mobileMenuCloseIcon.addEventListener("click", closeMobileMenuItems);
opinOrCloseSubMenu.addEventListener("click", opinOrCloseSubMenuHandler);
