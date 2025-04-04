const loadMoreBtn = document.querySelector(".load-more__btn");
const loadMoreText = document.querySelector(".load-more__text");
const loadMoreShadow = document.querySelector(".load-more__shadow");
const loadMoreMinusIcon = document.querySelector(".load-more__minus-icon");
const loadMoreAddIcon = document.querySelector(".load-more__add-icon");

const loadMoreHandler = () => {
  loadMoreText.classList.toggle("load-more__text--collapsed");
  loadMoreText.classList.toggle("load-more__text--expanded");
  loadMoreShadow.classList.toggle("hidden");
  loadMoreMinusIcon.classList.toggle("hidden");
  loadMoreAddIcon.classList.toggle("hidden");
};

loadMoreBtn.addEventListener("click", loadMoreHandler);
