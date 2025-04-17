const btn = document.querySelector(".button");
const overlay = document.querySelector(".overlay");
const popupBox = document.querySelector(".popup__box");
const closeBtn = document.querySelector(".popup-box__close-icon");

btn.addEventListener("click", () => {
  overlay.classList.add("overlay-active");
  popupBox.classList.add("popup__box-active");
});

closeBtn.addEventListener("click", () => {
  overlay.classList.remove("overlay-active");
  popupBox.classList.remove("popup__box-active");
});
