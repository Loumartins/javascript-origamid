// // const carros = ["Ford", "Fiat", "Honda"];
// // carros.forEach(function (item, index, array) {
// //   console.log(item.toUpperCase());
// // });

// //-------------------------------------------------
// //usando arrowFunction

// carros.forEach((item, index, array) => {
//   console.log(item.toUpperCase());
// });

// const li = document.querySelectorAll("li");

// li.forEach((i) => i.classList.add("ativa"));
// //-------------------------------------------------

// //modificando o terceiro parametro do callback de carros.

// const carros = ["Ford", "Fiat", "Honda"];

// carros.forEach((item, index, array) => {
//   array[index] = "Carro " + item;
// });

// console.log(carros);

// //-----------------------------------------------

// map()
// const carros2 = ["Ford", "Fiat", "Honda"];

// const novosCarros = carros.map((item, index, array) => {
//   return item.toUpperCase();
// });

// const numeross = [2, 4, 53, 55, 65];
// const numerosX2 = numeross.map((item) => {
//   return item * 2;
// });

// console.log(numerosX2);
// //-----------------------------------------------
// //usando map com um array de objetos
// const aulass = [
//   {
//     nome: "HTML 1",
//     min: 15,
//   },
//   {
//     nome: "HTML 2",
//     min: 10,
//   },
//   {
//     nome: "CSS 1",
//     min: 20,
//   },
//   {
//     nome: "CSS 2",
//     min: 30,
//   },
// ];
// const aulasNome = aulass.map((item) => {
//   return item.nome;
// });
// //console.log(aulasNome);
// const aulasMinuto = aulas.map((item) => {
//   return item.min;
// });
// console.log(aulasMinuto);

// //-----------------------------------------------

// reduce
// const tempoAulas = [10, 25, 30];

// const totalTempoAulas = tempoAulas.reduce((acc, total) => {
//   return acc + total;
// });
// console.log(totalTempoAulas);

// const totalTempoAulas2 = tempoAulas.reduce((acc, cur) => acc + cur, 100);

// console.log(totalTempoAulas2);

// //-----------------------------------------------

// //usando o reduce para achar o maior valor

// const numeros1 = [10, 25, 60, 5, 35, 10];

// const maiorValor = numeros1.reduce((anterior, atual) => {
//   return anterior < atual ? atual : anterior;
// });

// console.log(maiorValor);

// //retornando outros valores com reduce

// const aulas = [
//   {
//     nome: "HTML 1",
//     min: 15,
//   },
//   {
//     nome: "HTML 2",
//     min: 10,
//   },
//   {
//     nome: "CSS 1",
//     min: 20,
//   },
//   {
//     nome: "JS 1",
//     min: 25,
//   },
// ];

// const listaAulas = aulas.reduce(
//   (acumulador, atual, index) => {
//     acumulador[index] = atual.nome;
//     return acumulador;
//   },
//   {} //criando um objeto vazio
// );

// console.log(listaAulas);

// //reduceRight

// const frutas = ["Banana", "Pera", "Uva"];

// const frutasDireita = frutas.reduceRight((acc, fruta) => {
//   return acc + " " + fruta;
// });

//-----------------------------------------------

// //some
// const frutas1 = ["Banana", "Pera", "Uva"];
// const temUva = frutas1.some((item) => {
//   return item === "Uva";
// });

// //criando uma funçao e passando para o parametro do some

// function maiorQue100(numero) {
//   return numero > 100;
// }

// const numerosss = [0, 43, 22, 88, 101, 2];
// const temMaior = numerosss.some(maiorQue100);

//.find e .findIndex()

//-----------------------------------------------

const frutas = ["Banana", "Pêra", "Uva", "Maçã"];
const buscaUva = frutas.findIndex((fruta) => {
  return fruta === "Uva";
}); //2

const numeros = [6, 43, 22, 88, 101, 29];
const buscaMaior45 = numeros.find((x) => {
  return x > 45;
}); //88
