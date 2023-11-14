// Verifique a distância da primeira imagem
// em relação ao topo da página
const distanciaPrimeiraImagem = document.querySelector("img");
console.log(distanciaPrimeiraImagem.offsetTop);
// Retorne a soma da largura de todas as imagens

function somaImagens() {
  const imgs = document.querySelectorAll("img");
  let soma = 0;
  imgs.forEach((item) => {
    soma = soma + item.offsetWidth;
  });
  console.log(soma);
}
window.onload = function () {
  somaImagens();
};

// Verifique se os links da página possuem
// o mínimo recomendado para telas utilizadas
// com o dedo. (48px/48px de acordo com o google)
const links = document.querySelectorAll("a");
console.log(links);

links.forEach((item) => {
  const linkWidth = item.offsetWidth;
  const linkHeight = item.offsetHeight;
  if (linkWidth >= 48 && linkHeight >= 48) {
    console.log(item, "Possui acessibilidade");
  } else {
    console.log("Nao possui boa acessibilidade");
  }
});
// Se o browser for menor que 720px,
// adicione a classe menu-mobile ao menu

const small = window.matchMedia("(max-width: 720px)").matches;
if (small.matches) {
  const menu = document.querySelector(".menu");
  menu.classList.add("menu-mobile");
}
