
const filterBtn =document.querySelector(".filter-btn")
const closeIcon = document.querySelector(".filter-header__close-icon")
const filterContainer =document.querySelector(".filter-container")
const selectColorHeader = document.querySelector(".select-color__header")
const selectColorItems = document.querySelector(".select-color__items")

const filterContainerToggle = () => {
    filterContainer.classList.toggle("filter-container--active")
}

filterBtn.addEventListener("click", filterContainerToggle)
closeIcon.addEventListener("click", filterContainerToggle)

selectColorHeader.addEventListener("click", () => {
    selectColorItems.classList.toggle("select-color__items--active")
})