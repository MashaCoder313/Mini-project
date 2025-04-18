const accordionHeader = document.querySelectorAll(".accordion-header");

accordionHeader.forEach((Header) => {
  Header.addEventListener("click", (event) => {
    const accordion = event.target.closest(".accordion");

    if (accordion) {
      accordion.classList.toggle("accordion--show");
    }
  });
});
