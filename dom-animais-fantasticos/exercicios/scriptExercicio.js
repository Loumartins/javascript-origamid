// Retorne no console todas as imagens do site
const imagens = document.querySelectorAll("img");
console.log(imagens);
// Retorne no console apenas as imagens que começaram com a palavra imagem
const imgAnimais = document.querySelectorAll(
  'img[src^="/dom-animais-fantasticos/img/imagem"]'
);
console.log(imgAnimais);
// Selecione todos os links internos (onde o href começa com #)
const linksInternos = document.querySelectorAll('[href^="#"]');
console.log(linksInternos);
// Selecione o primeiro h2 dentro de .animais-descricao
const primeiroParagrafo = document.querySelector(".animais-descricao h2");
console.log(primeiroParagrafo.innerText);
// Selecione o último p do site
const ultimoParagrafo = document.querySelector(".copy p:last-child");
console.log(ultimoParagrafo.innerText);
