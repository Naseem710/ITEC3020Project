// part4
document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contact-form");

  function showError(fieldId, message) {
    // Each field has a matching error span right after it, e.g.
    // id="name" -> id="name-error"
    const errorEl = document.getElementById(fieldId + "-error");
    if (!errorEl) return;

    errorEl.textContent = message;
    errorEl.classList.add("visible");
  }

  function clearError(fieldId) {
    const errorEl = document.getElementById(fieldId + "-error");
    if (!errorEl) return;

    errorEl.textContent = "";
    errorEl.classList.remove("visible");
  }

  function validateEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    let isValid = true;

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    // Validate name — show error if empty
    if (name === "") {
      showError("name", "Please enter your name.");
      isValid = false;
    } else {
      clearError("name");
    }

    // Validate email — show error if empty or invalid format
    if (email === "") {
      showError("email", "Please enter your email.");
      isValid = false;
    } else if (!validateEmail(email)) {
      showError("email", "Please enter a valid email address.");
      isValid = false;
    } else {
      clearError("email");
    }

    // Validate message — show error if fewer than 20 characters
    if (message.length < 20) {
      showError("message", "Message must be at least 20 characters long.");
      isValid = false;
    } else {
      clearError("message");
    }

    // If everything passed, show a success message in place of the form
    if (isValid) {
      form.style.display = "none";
      document.getElementById("form-success").style.display = "block";
    }
  });

  // Clear errors as the user types
  ["name", "email", "message"].forEach(function (id) {
    document.getElementById(id).addEventListener("input", function () {
      clearError(id);
    });
  });
});