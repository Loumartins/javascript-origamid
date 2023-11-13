/**
 *O que é DOM? 
 - É  uma interface que representa documentos HTML e XML atraves de objetos. Com ela é possivel manipular a estrutura, estilo e conteudo destes documentos.
 */

console.log(window);

window.innerHeight;

function gerarCorAleatoria() {
  let r = Math.floor(Math.random() * 256);
  let g = Math.floor(Math.random() * 256);
  let b = Math.floor(Math.random() * 256);

  let corAleatoria = "rgb(" + r + "," + g + "," + b + ")";

  return corAleatoria;
}

function mudarCorH1() {
  const titulo = document.querySelector("h1");
  const gerandoCorAleatoria = gerarCorAleatoria();

  titulo.style.color = gerandoCorAleatoria;
}
