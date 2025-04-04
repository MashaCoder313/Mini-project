const loadMoreBtn = document.querySelector(".load-more__btn");
const loadMoreBtnText = document.querySelector(".load-more__btn-text");
const loadMoreText = document.querySelector(".load-more__text");
const loadMoreShadow = document.querySelector(".load-more__shadow");
const loadMoreMinusIcon = document.querySelector(".load-more__minus-icon");
const loadMoreAddIcon = document.querySelector(".load-more__add-icon");

const loadMoreHandler = () => {
  loadMoreText.classList.toggle("collapsed");
  loadMoreText.classList.toggle("expanded");
  loadMoreShadow.classList.toggle("hidden");
  loadMoreMinusIcon.classList.toggle("hidden");
  loadMoreAddIcon.classList.toggle("hidden");
  loadMoreBtn.classList.toggle("load-more__btn--collapsed");
  loadMoreBtn.classList.toggle("load-more__btn--expanded");

  if (loadMoreBtn.classList.contains("load-more__btn--collapsed")) {
    loadMoreBtnText.textContent = "مشاهده بیشتر";
  } else {
    loadMoreBtnText.textContent = "مشاهده کمتر";
  }
};

loadMoreBtn.addEventListener("click", loadMoreHandler);
