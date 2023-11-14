// Height e width = Estas sao propriedades e metodos dos objetos Element e HTMLElement, a maioria delas sao Read Only

const section = document.querySelector(".animais");

section.clientHeight; // height + padding
section.offsetHeight; // height + padding + border
section.scrollHeight; // height total, mesmo dentro do scroll

//offsetTop - offsetLeft
//Distancia entre o topo do elemento e o topo da pagina
section.offsetTop;

//Distancia entre o canto esquerdo do elemento e o canto esquerdo da pagina
section.offsetLeft;

//getBoundingClientReact() = Metodo que retorna um objeto com valores de width, height, distancias do elementos e mais
const rect = section.getBoundingClientRect();
rect.height; // height do elemento
rect.width; // width do elemento
rect.top; // distancia entre o topo do elemento e o scroll

//Window
window.innerWidth; // width da janela
window.outerHeight; // soma dev tools tambem
window.innerHeight; // height da janela
window.outerWidth; // soma a barra de endereço

//propriedades depreeciadas
window.pageYOffset; // distancia total do scroll horizontal
window.pageXOffset; // distancia total do scroll vertical

//Nao é o ideal
if (window.innerWidth < 600) {
  console.log("tela menor que 600px");
}

//matchMedia() = utiliza um media-querie como no CSS para verificar a largura do browser

const small = window.matchMedia("(max-width: 600px)");

if (small.matches) {
  console.log("menor que 600px");
} else {
  console.log("maior que 600px");
}
