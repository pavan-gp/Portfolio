// about-tabs.js
window.addEventListener("DOMContentLoaded", () => {
  const tabs = document.querySelectorAll(".about-tab");
  const indicator = document.querySelector(".about-tab-indicator");

  if (!tabs.length || !indicator) return;

  const contents = {
    experience: document.getElementById("tab-experience"),
    education: document.getElementById("tab-education")
  };

  // indicator width for 2 tabs
  indicator.style.width = "calc(50% - 8px)";

  tabs.forEach((tab, index) => {
    tab.addEventListener("click", () => {
      tabs.forEach(t => t.classList.remove("active"));
      tab.classList.add("active");

      // move indicator (0% or 100%)
      indicator.style.transform = `translateX(${index * 100}%)`;

      Object.values(contents).forEach(c => c && c.classList.remove("active"));
      const key = tab.dataset.tab;   // experience | education
      if (contents[key]) {
        contents[key].classList.add("active");
      }
    });
  });
});
