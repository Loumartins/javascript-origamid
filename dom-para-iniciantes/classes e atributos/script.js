//ClassList = Retorna uma lista com as classes do elemento. Permite adicionar, remover e verificar se contem

const menu = document.querySelector(".menu");

menu.classList.add("ativo");
menu.classList.add("azul");
console.log(menu.classList);

if (menu.classList.contains("azul")) {
  menu.classList.add("possui-azul");
}

console.log(menu.classList);

//Atributes = retornar uma array-like com os atributos do elemento
const animais = document.querySelector(".animais");
animais.attributes;

//getAttribute e setAttribute = Metodos que retornam ou definem de acordo com o atributo selecionado

const img = document.querySelector("img");
//getAttribute pega o valor do atributo
console.log(img.getAttribute("src"));

//setAttribute "seta" o valor do atributo
img.setAttribute("alt", "Texto alternativo");
console.log(img.getAttribute("alt"));

//hasAttribute indica se tem um determinado atributo ou nao com true / false
console.log(img.hasAttribute("id"));

//removeAttribute remove o atributo selecionado
img.removeAttribute("alt");

//hasAttribute indica se tem atributos no elemento ou nao
console.log(img.hasAttribute());

//Read only vs Writable = Existem propriedades que nao permitem a mudança de seus valores, essas sao consideradas Read Only, ou seja, apenas leitura.

const animais2 = documento.querySelector(".animais");

animais2.className;
