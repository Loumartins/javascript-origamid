// addEventListener = adiciona uma funcao ao elemento, esta funcao é chamada de *CALLBACK* que sera sempre ativada assim que certo evento ocorrer neste elemento

// callback = é boa pratica separar a funçao de callback do addEventListener, ou seja, declarar uma funcao ao inves de passar diretamente como uma funçao anonima

const imgs = document.querySelector("img");

// function voceClicou() {
//   console.log("voce clicou");
// }
// imgs.addEventListener("click", voceClicou);

// event = o primeiro parametro do callback é referente ao evento que ocorreu

// const imgs2 = document.querySelector("img");

// function callback(event) {
//   console.log(event);
// }
// imgs2.addEventListener("click", callback);

//propriedades do event

const animaisLista = document.querySelector(".animais-lista");

console.log(animaisLista);

function executarCallback(event) {
  const currentTarget = event.currentTarget;
  const target = event.target;
  const type = event.type;
  const path = event.path;
  console.log(currentTarget, target, type, path);
}

animaisLista.addEventListener("click", executarCallback);

//event.preventDefault() = previne o comportamento padrao do evento no browser, no caso do link externo por exempo ira previnir que o link seja ativado

//a palavra reservada *THIS* quando utilizada em eventos sempre fara referencia ao elemento

const linkExterno = document.querySelector('[href^="https://origamid.com"]');

console.log(linkExterno);

function clickNoLink(event) {
  event.preventDefault();
  console.log(event.currentTarget.href);
}

linkExterno.addEventListener("click", clickNoLink);

//diferentes eventos = existem diversos eventos como *click* *scroll* *resize* *keydow* *keyup* *mouseenter*. Eventos podem ser adicionados a diferentes elementos como o *window* e o *document* tambem

// const h1 = document.querySelector("h1");

// function callback(event) {
//   console.log(event.type, event);
// }

// h1.addEventListener("click", callback);
// h1.addEventListener("mouseenter", callback);
// window.addEventListener("scroll", callback);
// window.addEventListener("resize", callback);
// window.addEventListener("keydow", callback);

//forEach em eventos = o metodo addEventListener é adicionado a um unico elemento, entao e necessario um loop entre elementos de uma lista para adicionarmos a cada um deles

const imagens = document.querySelectorAll("img");

function imgSrc(evento) {
  const scr = evento.currentTarget.getAttribute("src");
  console.log(src);
}

imagens.forEach((img) => {
  img.addEventListener("click", imgSrc);
});
