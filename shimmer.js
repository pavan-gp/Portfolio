// shimmer.js
document.addEventListener("DOMContentLoaded", () => {
  const shimmerEl = document.querySelector(".shimmer-text");
  if (!shimmerEl) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          shimmerEl.classList.add("shimmer-run");
          observer.unobserve(shimmerEl);
        }
      });
    },
    { threshold: 0.6 }
  );

  observer.observe(shimmerEl);
});
