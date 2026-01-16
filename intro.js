window.addEventListener("load", () => {
  const body = document.body;
  const intro = document.getElementById("intro-screen");
  const introLogo = document.querySelector(".intro-logo");

  // when logo pop-out animation finishes
  introLogo.addEventListener("animationend", () => {
    intro.classList.add("fade-out");   // fade black background

    setTimeout(() => {
      body.classList.add("logo-done"); // fade page content in
    }, 800); // same as #intro-screen transition
  });
});

