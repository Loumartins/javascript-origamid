// outerHtml , innerHtml , innerText = Propriedades que retornam uma string contendo o html ou texto. É possivel atribuir um novo valor para as mesmas element.innerText = 'novo texto'.

const menu = document.querySelector(".menu");

const outer = menu.outerHTML; // todo o html do elemento
//console.log(outer);
const inner = menu.innerHTML; // html interno (os filhos)
//console.log(inner);
const text = menu.innerText; // texto, sem tags
//console.log(text);
// menu.innerText = "<p>Texto</p>"; // a tag vai como texto
// menu.innerHTML = "<p>Texto</p>"; // a tag é renderizada

const h1 = document.querySelector("h1");

/*
 h1.outerHTML = <p>Novo titulo</p>
  faria a substituição total, incluindo a tag

h1.innerHTML = <p>Novo titulo</p>
  colocaria um valor interno 

h1.innerText = <p>Novo titulo</p>
  substituiria somente o texto
*/

// -------------------------------------------------------------------------

// transversing = como navegar pelo DOM, utilizando suas propriedades e metodos

const lista = document.querySelector(".animais-lista");

lista.parentElement; // pai
console.log(lista.parentElement);

lista.parentElement.parentElement; // pai do pai
console.log(lista.parentElement.parentElement);

lista.previousElementSibling; // elemento acima
console.log(lista.previousElementSibling);

lista.nextElementSibling; // elemento abaixo
console.log(lista.nextElementSibling);

const filhosDaLista = lista.children; // HTMLCollection com os filhos
console.log(filhosDaLista);

// const transformandoEmArray = Array.from(filhosDaLista);
// transformandoEmArray.forEach((item) => {
//   console.log(item);
// });

const primeiroFilho = lista.children[0]; // com o primeiro filho
console.log(primeiroFilho);

const ultimoFilho = lista.children[--lista.children.length]; // ultimo filho
console.log(ultimoFilho);

const todasLi = lista.querySelectorAll("li"); // todas as Li
console.log(todasLi);

lista.querySelector("li:last-children"); // ultimo li

//---------------------------------------------------------------------------------

//element vs node = element's representam um elemento html, ou seja, uma tag. um node representa um nó, que pode ser um element, texto, comentario, quebra de linha e mais

// const lista2 = document.querySelector(".animais-lista");

// lista2.previousElementSibling; //elemento acima
// lista2.nextElementSibling; // elemento abaixo

// lista2.previousSibling; // node acima
// lista2.nextSibling; // node abaixo
// lista2.firstChild; // primeiro node child
// lista.childNodes; // todos os node child

// ------------------------------------------------------------------------------
