// var videoGames = ["Xbox", "PS4", "Switch"];

// for (let i = 0; i < videoGames.length; i++) {
//   console.log(videoGames[i]);
// }

// let ultimoItem = videoGames.pop();

// console.log(ultimoItem);

// for (let i = 0; i < 10; i++) {
//   console.log(i);
// }

// let i = 0;
// while (i < 10) {
//   i++;
//   console.log(i);
// }

// for (let i = 0; i < videoGames.length; i++) {
//   console.log(videoGames[i]);
//   if (videoGames[i] === "PS4") {
//     break;
//   }
// }

let frutas = ["Banana", "Maça", "Abacaxi", "Uva"];

// Utilizando função anonima
frutas.forEach(function (item) {
  console.log(item);
});

//Implementando uma função e fazendo a chamada dela direto no forEach
function mostrarFrutas(item) {
  console.log(item);
}
frutas.forEach(mostrarFrutas);

function meuCallback(element) {
  console.log(element);
}

const array = [1, 2, 3, 4, 5];
array.forEach(meuCallback);
