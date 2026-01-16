// internship-modal.js
document.addEventListener("DOMContentLoaded", () => {
  const card = document.getElementById("internshipCard");
  const modal = document.getElementById("internshipModal");
  const closeBtn = document.querySelector(".internship-modal-close");
  const backdrop = document.querySelector(".internship-modal-backdrop");
  const downloadBtn = document.querySelector(".internship-download-btn");

  // your PDF path
  const pdfPath = "images/ss.pdf";

  function openModal() {
    modal.classList.add("is-open");
    document.body.style.overflow = "hidden";
  }

  function closeModal() {
    modal.classList.remove("is-open");
    document.body.style.overflow = "";
  }

  if (card) {
    // open when clicking card or button
    card.addEventListener("click", (e) => {
      if (e.target.classList.contains("internship-view-btn")) {
        e.stopPropagation();
      }
      openModal();
    });

    const btn = card.querySelector(".internship-view-btn");
    if (btn) {
      btn.addEventListener("click", (e) => {
        e.stopPropagation();
        openModal();
      });
    }
  }

  if (closeBtn) closeBtn.addEventListener("click", closeModal);
  if (backdrop) backdrop.addEventListener("click", closeModal);

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modal.classList.contains("is-open")) {
      closeModal();
    }
  });

  if (downloadBtn) {
    downloadBtn.addEventListener("click", () => {
      const link = document.createElement("a");
      link.href = pdfPath;
      link.download = "Internship-Letter.pdf";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    });
  }
});
