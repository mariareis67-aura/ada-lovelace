// ==============================
// ANIMAÇÃO DAS SEÇÕES
// ==============================

const elementos = document.querySelectorAll(
  ".event-card, .card, .algorithm, .portrait"
);

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  },
  {
    threshold: 0.15
  }
);

elementos.forEach((elemento) => {
  observer.observe(elemento);
});


// ==============================
// NAVEGAÇÃO SUAVE
// ==============================

document.querySelectorAll("nav a").forEach((link) => {
  link.addEventListener("click", function (event) {
    event.preventDefault();

    const destino = document.querySelector(
      this.getAttribute("href")
    );

    if (destino) {
      destino.scrollIntoView({
        behavior: "smooth"
      });
    }
  });
});


// ==============================
// EFEITO DE DIGITAÇÃO
// ==============================

const titulo = document.querySelector(".hero h1");

const texto = "Ada Lovelace";

let indice = 0;

titulo.textContent = "";

function escreverTitulo() {
  if (indice < texto.length) {
    titulo.textContent += texto.charAt(indice);
    indice++;

    setTimeout(escreverTitulo, 120);
  }
}

escreverTitulo();


// ==============================
// ANO ATUAL NO RODAPÉ
// ==============================

const ano = document.querySelector("#ano");

if (ano) {
  ano.textContent = new Date().getFullYear();
}
