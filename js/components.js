//part 2
// this code is for inserting the header and footer inside everypage without hard coding it

function loadComponent(selector, filePath) {
  fetch(filePath)
    .then(response => {
      if (!response.ok) throw new Error("Could not load " + filePath);
      return response.text();
    })
    .then(html => {
      document.querySelector(selector).innerHTML = html;

      if (selector === "#header-placeholder") {
        initThemeToggle();
        highlightCurrentPage();
      }
    })
    .catch(error => console.error(error));
}

// This is used to keep track of the active nav in orrder to see which tab is the active one
function highlightCurrentPage() {
  const currentPage = window.location.pathname.split("/").pop();
  const navLinks = document.querySelectorAll(".nav-links a");

  navLinks.forEach(link => {
    if (link.getAttribute("href") === currentPage) {
      link.setAttribute("aria-current", "page");
    }
  });
}

document.addEventListener("DOMContentLoaded", function () {
  loadComponent("#header-placeholder", "components/header.html");
  loadComponent("#footer-placeholder", "components/footer.html");
});