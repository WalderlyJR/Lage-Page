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


  /* =========================
     PROVA SOCIAL (notificação)
  ========================= */
  const names = [
  "Lucas", "Ana COMPROU", "Rafael", "Mariana", "João",
  "Fernanda", "Carlos", "Juliana COMPROU", "Bruno", "Camila",

  "Pedro", "Larissa COMPROU", "Gabriel", "Amanda", "Felipe",
  "Bianca", "Rodrigo", "Tatiane", "Diego", "Vanessa",

  "Matheus", "Letícia COMPROU", "Gustavo", "Patrícia", "Vinicius",
  "Priscila", "André", "Renata", "Leonardo", "Simone",

  "Thiago COMPROU", "Beatriz", "Eduardo", "Carla", "Marcelo",
  "Natália", "Caio", "Aline", "Henrique", "Cristiane",

  "Fernando", "Kelly", "Ricardo", "Débora", "Alexandre",
  "Sandra", "Danilo", "Jéssica", "Wesley", "Paula",

  "Roberto", "Michele", "Fábio", "Sabrina", "Maurício",
  "Monique", "Jonathan", "Rafaela", "Otávio", "Larissa",

  "Igor", "Bruna", "César COMPROU", "Juliano", "Adriana",
  "Alan", "Eliane", "Douglas COMPROU", "Elaine", "Robson",

  "Leandro", "Valéria", "Samuel", "Fabiana", "Victor",
  "Viviane", "William", "Cláudia", "Renan", "Daniele",

  "Marcos", "Rosana", "Elias", "Gisele", "Sérgio",
  "Marlene", "Paulo", "Isabela", "Cristiano", "Lorena",

  "Arthur", "Yasmin", "Enzo", "Gabriela", "Heitor",
  "Luana", "Miguel", "Alice", "Davi", "Helena"
];
  const notification = document.getElementById("liveNotification");
  const nameEl = document.getElementById("liveName");

  function showNotification() {
    if (!notification || !nameEl) return;

    const randomName = names[Math.floor(Math.random() * names.length)];
    nameEl.textContent = randomName;

    notification.classList.add("show");

    setTimeout(() => {
      notification.classList.remove("show");
    }, 3000);
  }

  // aparece a cada 5 segundos
  setInterval(showNotification, 25000);

  // primeira aparição rápida
  setTimeout(showNotification, 2000);

});