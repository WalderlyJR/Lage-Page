document.addEventListener("DOMContentLoaded", () => {

  const items = document.querySelectorAll(".faq-item");

  items.forEach(item => {
    const question = item.querySelector(".q");

    question.addEventListener("click", () => {

      items.forEach(i => {
        if (i !== item) i.classList.remove("active");
      });

      item.classList.toggle("active");

    });
  });

});
// animação scroll
const sections = document.querySelectorAll(".split, .benefit, .card");

window.addEventListener("scroll", () => {
  sections.forEach(sec => {
    const top = sec.getBoundingClientRect().top;
    if (top < window.innerHeight - 100) {
      sec.style.opacity = 1;
      sec.style.transform = "translateY(0)";
    }
  });
});