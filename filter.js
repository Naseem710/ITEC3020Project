//part 5
function initFilter() {
  const filterInput = document.getElementById("filter-input");
  const noResults = document.getElementById("no-results");
  if (!filterInput) return; 

  filterInput.addEventListener("input", function () {
    const query = this.value.toLowerCase().trim();
    let visibleCount = 0;

    const cards = document.querySelectorAll(".card");

    cards.forEach(function (card) {
      const titleEl = card.querySelector(".card-title");
      const title = titleEl ? titleEl.textContent.toLowerCase() : "";

      const metaEl = card.querySelector(".card-meta");
      const meta = metaEl ? metaEl.textContent.toLowerCase() : "";

      const descEl = card.querySelector("p");
      const description = descEl ? descEl.textContent.toLowerCase() : "";

      // show the card if query matches title or body/ description
      if (title.includes(query) || meta.includes(query) || description.includes(query)) {
        card.style.display = "";
        visibleCount++;
      } else {
        card.style.display = "none";
      }
    });
    
    if (noResults) {
      noResults.style.display = visibleCount === 0 ? "block" : "none";
    }
  });
}

document.addEventListener("DOMContentLoaded", function () {
  initFilter();
});