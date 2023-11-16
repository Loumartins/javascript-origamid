// Quando o usuário clicar nos links internos do site,
// adicione a classe ativo ao item clicado e remova dos
// demais itens caso eles possuam a mesma. Previna
// o comportamento padrão desses links
const linksInternos = document.querySelectorAll('a[href^="#"]');

function adicionandoClasseAtivo(event) {
  event.preventDefault();
  linksInternos.forEach((item) => {
    linksInternos.classList.remove("ativo");
  });
  event.currentTarget.classList.add("ativo");
}

linksInternos.forEach((link) => {
  link.addEventListener("click", adicionandoClasseAtivo);
});

// Selecione todos os elementos do site começando a partir do body,
// ao clique mostre exatamente quais elementos estão sendo clicados

const todosOsElmentos = document.querySelectorAll("body *");

function clique(event) {
  console.log(event.currentTarget);
}

todosOsElmentos.forEach((item) => {
  item.addEventListener("click", clique);
});
// Utilizando o código anterior, ao invés de mostrar no console,
// remova o elemento que está sendo clicado, o método remove() remove um elemento

function removendo(event) {
  event.currentTarget.remove();
}

todosOsElmentos.forEach((item) => {
  item.addEventListener("click", removendo);
});

// Se o usuário clicar na tecla (t), aumente todo o texto do site.

function pressionarTecla(event) {
  if (event.key === "t") {
    document.body.style.fontSize = "90px";
  } else if (event.key === "z") {
    document.body.style.fontSize = "18px";
  }
}

document.addEventListener("keydown", pressionarTecla);
