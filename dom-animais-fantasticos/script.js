// Selecionando o DOM
// Utilizando o ID
const animais = document.getElementById("animais");
console.log(animais.innerText);

// Utilizando *Classe e Tag*
// -- retornam uma *LISTA* de elementos DOM, a lista retornada esta ao vivo, ou seja, significa que se elementos forem adicionados, ela sera automaticamento atualizada.

const gridSection = document.getElementsByClassName("grid-section");
console.log(gridSection[0].innerText);

// Seletor Geral Unico
// querySelector retorna o primeiro elemento que combinar com o seu seletor CSS

const primeiroLi = document.querySelector("ul li");
console.log(primeiroLi.innerText);

const primeiroUl = document.querySelector("ul");
console.log(primeiroUl);

const linkInterno = document.querySelector("[href^='#']");
console.log(linkInterno);

// Seletor Geral Lista
// querySelectorAll retorna todos os elementos compativeis com o seletor CSS em uma NodeList

const animaisImg = document.querySelectorAll(".animais img");
console.log(animaisImg);

//HTMLCollection vs NodeList
// A diferença esta nos metodos e propriedades de ambas. Alem disso a NodeList retornada com querySelectorAll é estatica.

const gridSectionHTML = document.getElementsByClassName("grid-section");
const gridSectionNode = document.querySelectorAll(".grid-section");

// console.log(gridSectionHTML);
// console.log(gridSectionNode);

// Array-like
//HTMLCollection e NodeList sao array-like, parecem uma array mas nao são. O metodo de Array forEach() por exemplo, existe apenas em NodeList

gridSectionNode.forEach(function (item, index) {
  console.log(item);
});

//Metodo de transformação de array-like em array
const arrayGrid = Array.from(gridSectionHTML);

console.log(arrayGrid);
