// manipulando elementos = é possivel mover elementos no dom com metodos de node

const animais = document.querySelector(".animais");
const contato = document.querySelector(".contato");
const titulo = contato.querySelector(".titulo");
animais.appendChild(titulo);

// contato.insertBefore(lista3, titulo); // insere a lista antes de titulo
// contato.removeChild(titulo); //remove titulo de contato
// contato.replaceChild(lista3, titulo); // substitui titulo por lista

// novos elementos = podemos criar novos elementos com o metodo creatElement()

const novoH1 = document.createElement("h1");
const mapa = document.querySelector(".mapa");

novoH1.innerText = "Novo Titulo";
novoH1.classList.add("titulo");

console.log(novoH1);

mapa.appendChild(novoH1);

//clonar elementos = todo elemento selecionado é unico. Para criamos um elemento baseado no anterior é necessario utlizar o metodo cloneNode()
// true sinaliza para incluir os filhos

const h1 = document.querySelector("h1");
const faq = document.querySelector(".faq");

const cloneH1 = h1.cloneNode(true);
faq.appendChild(cloneH1);
