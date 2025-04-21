const filterBtn = document.querySelector(".filter-btn");
const closeIcon = document.querySelector(".filter-header__close-icon");
const filterContainer = document.querySelector(".filter-container");
const selectColorHeader = document.querySelector(".select-color__header");
const selectColorItems = document.querySelector(".select-color__items");
const selectColorCheckbox = document.querySelectorAll(
  ".select-color__checkbox"
);
const filterContainerToggle = () => {
  filterContainer.classList.toggle("filter-container--active");
};

filterBtn.addEventListener("click", filterContainerToggle);
closeIcon.addEventListener("click", filterContainerToggle);

selectColorHeader.addEventListener("click", () => {
  selectColorItems.classList.toggle("select-color__items--active");
});

// * Way 1
selectColorCheckbox.forEach(function (checkbox) {
  checkbox.addEventListener("change", function () {
    const colorBox = this.nextElementSibling;
    const parent = this.closest(".select-color__item");
    const icon = parent.querySelector(".select-color__icon");

    if (this.checked) {
      colorBox.style.backgroundColor = icon.style.backgroundColor;
    } else {
      colorBox.style.backgroundColor = "transparent";
    }
  });
});

// * Way 2 -> Arrow Function && event.target ...
// selectColorCheckbox.forEach((checkbox) => {
//   checkbox.addEventListener("change", (event) => {
//     const colorBox = event.target.nextElementSibling;
//     const parent = event.target.closest(".select-color__item");
//     const icon = parent.querySelector(".select-color__icon");

//     if (event.target.checked) {
//       colorBox.style.backgroundColor = icon.style.backgroundColor;
//     } else {
//       colorBox.style.backgroundColor = "transparent";
//     }
//   });
// });
