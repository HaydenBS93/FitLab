document.addEventListener("DOMContentLoaded", function () {
  const darkModeStylesheet = document.getElementById("dark-mode-stylesheet");
  const darkModeToggle = document.getElementById("dark-mode-toggle");
  const lightModeIcon = document.querySelector(".light-mode-icon");
  const darkModeIcon = document.querySelector(".dark-mode-icon");

  darkModeToggle.addEventListener("click", function () {
    document.body.classList.toggle("dark-mode");
    const isDarkModeNow = document.body.classList.contains("dark-mode");

    darkModeStylesheet.setAttribute(
      "href",
      isDarkModeNow ? "src/dark-mode.css" : ""
    );

    lightModeIcon.classList.toggle("hidden", isDarkModeNow);
    darkModeIcon.classList.toggle("hidden", !isDarkModeNow);

    localStorage.setItem("darkMode", isDarkModeNow);
  });

  const isDarkMode = localStorage.getItem("darkMode") === "true";

  document.body.classList.toggle("dark-mode", isDarkMode);
  darkModeStylesheet.setAttribute(
    "href",
    isDarkMode ? "src/dark-mode.css" : ""
  );

  lightModeIcon.classList.toggle("hidden", isDarkMode);
  darkModeIcon.classList.toggle("hidden", !isDarkMode);
});
