document.addEventListener("DOMContentLoaded", () => {

  /* =========================
     FAQ (abre/fecha)
  ========================= */
  const items = document.querySelectorAll(".faq-item");

  items.forEach(item => {
    const question = item.querySelector(".q");

    if (question) {
      question.addEventListener("click", () => {

        items.forEach(i => {
          if (i !== item) i.classList.remove("active");
        });

        item.classList.toggle("active");
      });
    }
  });


  /* =========================
     ANIMAÇÃO AO SCROLL
  ========================= */
  const sections = document.querySelectorAll(".split, .benefit, .card");

  function revealOnScroll() {
    sections.forEach(sec => {
      const top = sec.getBoundingClientRect().top;

      if (top < window.innerHeight - 100) {
        sec.style.opacity = "1";
        sec.style.transform = "translateY(0)";
      }
    });
  }

  window.addEventListener("scroll", revealOnScroll);

  // executa uma vez ao carregar
  revealOnScroll();


  

});
