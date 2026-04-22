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
  "Lucas", "Ana", "Rafael", "Mariana", "João",
  "Fernanda", "Carlos", "Juliana", "Bruno", "Camila",

  "Pedro", "Larissa", "Gabriel", "Amanda", "Felipe",
  "Bianca", "Rodrigo", "Tatiane", "Diego", "Vanessa",

  "Matheus", "Letícia", "Gustavo", "Patrícia", "Vinicius",
  "Priscila", "André", "Renata", "Leonardo", "Simone",

  "Thiago", "Beatriz", "Eduardo", "Carla", "Marcelo",
  "Natália", "Caio", "Aline", "Henrique", "Cristiane",

  "Fernando", "Kelly", "Ricardo", "Débora", "Alexandre",
  "Sandra", "Danilo", "Jéssica", "Wesley", "Paula",

  "Roberto", "Michele", "Fábio", "Sabrina", "Maurício",
  "Monique", "Jonathan", "Rafaela", "Otávio", "Larissa",

  "Igor", "Bruna", "César", "Juliano", "Adriana",
  "Alan", "Eliane", "Douglas", "Elaine", "Robson",

  "Leandro", "Valéria", "Samuel", "Fabiana", "Victor",
  "Viviane", "William", "Cláudia", "Renan", "Daniele",

  "Marcos", "Rosana", "Elias", "Gisele", "Sérgio",
  "Marlene", "Paulo", "Isabela", "Cristiano", "Lorena",

  "Arthur", "Yasmin", "Enzo", "Gabriela", "Heitor",
  "Luana", "Miguel", "Alice", "Davi", "Helena"
];
  const actions = [
  "acabou de acessar o sistema",
  "entrou agora",
  "começou a usar",
  "acabou de comprar",
  "garantiu acesso agora"
];

const notification = document.getElementById("liveNotification");
const nameEl = document.getElementById("liveName");

function showNotification() {
  if (!notification || !nameEl) return;

  const randomName = names[Math.floor(Math.random() * names.length)];
  const randomAction = actions[Math.floor(Math.random() * actions.length)];

  nameEl.textContent = `${randomName} ${randomAction}`;

  notification.classList.add("show");

  setTimeout(() => {
    notification.classList.remove("show");
  }, 3000);
}

// intervalo (melhor frequência)
setInterval(showNotification, 8000);

// primeira aparição
setTimeout(showNotification, 3000);

});
