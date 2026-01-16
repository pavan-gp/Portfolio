// skills-ui.js  (update or replace existing one)
window.addEventListener("DOMContentLoaded", () => {
  const badges = document.querySelectorAll(".skill-badge");
  const nameEl = document.getElementById("skill-name");
  const descEl = document.getElementById("skill-desc");
  const dotsContainer = document.getElementById("skill-dots");

  if (!badges.length || !nameEl || !dotsContainer) return;

  const SKILL_DATA = {
    html: {
      name: "HTML",
      desc: "Semantic, accessible structure for modern web pages, forms and layouts that keeps projects maintainable and SEO‑friendly.",
      level: 4
    },
    css: {
      name: "CSS",
      desc: "Responsive layouts with flexbox and grid, reusable components and smooth micro‑interactions for dark and light themes.",
      level: 4
    },
    js: {
      name: "JavaScript",
      desc: "Interactive UI components, REST API integration and custom logic for dynamic single‑page experiences.",
      level: 4
    },
    react: {
      name: "React.js",
      desc: "Component‑based frontends, hooks and state management to build scalable, maintainable interfaces.",
      level: 3
    },
    python: {
      name: "Python",
      desc: "AI/ML experimentation, automation scripts and backend services with a focus on clean, readable code.",
      level: 3
    },
    tools: {
      name: "Figma & VS Code",
      desc: "Designing pixel‑perfect layouts in Figma and efficiently shipping code in VS Code with Git.",
      level: 3
    }
  };

  const renderDots = (level) => {
    dotsContainer.innerHTML = "";
    for (let i = 0; i < 5; i++) {
      const span = document.createElement("span");
      span.className = "dot" + (i < level ? " filled" : "");
      dotsContainer.appendChild(span);
    }
  };

  const activate = (key) => {
    const data = SKILL_DATA[key];
    if (!data) return;

    badges.forEach(b => b.classList.remove("active"));
    document.querySelector(`.skill-badge[data-skill="${key}"]`)?.classList.add("active");

    nameEl.textContent = data.name;
    descEl.textContent = data.desc;
    renderDots(data.level);
  };

  badges.forEach(badge => {
    badge.addEventListener("click", () => {
      activate(badge.dataset.skill);
    });
  });

  activate("html");
});
