// Duplique o menu e adicione ele em copy
const copyright = document.querySelector(".copy");
console.log(copyright);
const menu = document.querySelector(".menu");
console.log(menu);

const menuClone = menu.cloneNode(true);
copyright.appendChild(menuClone);
// Selecione o primeiro DT da dl de Faq
const faq = document.querySelector(".faq");
const primeiroDt = faq.querySelector("dt");
console.log(primeiroDt);

//console.log(faqLista.children[0]);

// Selecione o DD referente ao primeiro DT

const primeiroDd = primeiroDt.nextElementSibling;
// Substitua o conteúdo html de .faq pelo de .animais
const animais = document.querySelector(".animais");

faq.innerHTML = animais.innerHTML;
