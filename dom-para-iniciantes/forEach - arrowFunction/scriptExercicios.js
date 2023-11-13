// Mostre no console cada parágrado do site
const paragrafos = document.getElementsByTagName("p");

const paragrafosToArray = Array.from(paragrafos);

paragrafosToArray.forEach((item) => {
  console.log(item.innerText);
});
// Mostre o texto dos parágrafos no console
//resposta acima
// Como corrigir os erros abaixo:
const imgs = document.querySelectorAll("img");

imgs.forEach((item, index) => {
  console.log(item, index);
});

let i = 0;
imgs.forEach(() => {
  console.log(i++);
});

imgs.forEach(() => i++);
