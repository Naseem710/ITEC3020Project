// This JS is to toggle light/dark mode and remember the choice using localStorage

document.addEventListener("DOMContentLoaded", function () {
  const toggleBtn = document.getElementById("theme-toggle");

  function applyTheme(theme) {
    document.body.setAttribute("data-theme", theme);
    toggleBtn.textContent = theme === "dark" ? "Light Mode" : "Dark Mode";

    // Save the selected theme to localStorage so it remains across pages and reloads
    localStorage.setItem("theme", theme);
  }

  function loadSavedTheme() {
    // Read the theme saved on a previous visit
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme) {
      // If theme was saved before then use it
      applyTheme(savedTheme);
    } else {
      // Defaults to light theme if there is no saved theme
      applyTheme("light");
    }
  }

  toggleBtn.addEventListener("click", function () {
    // Checks the theme currently applied to <body>, then flip to the opposite one
    const currentTheme = document.body.getAttribute("data-theme");
    const newTheme = currentTheme === "dark" ? "light" : "dark";
    applyTheme(newTheme);
  });

  loadSavedTheme(); // THis runs the saved theme on every page load
});
