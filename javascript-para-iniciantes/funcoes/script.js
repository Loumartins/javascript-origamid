// function nomeCompleto(nome, sobrenome) {
//   return nome + sobrenome;
// }
// var nome = "Luiz Henrique";
// var sobrenome = " Martins";

// console.log(nomeCompleto(nome, sobrenome));

// // peso, altura = parametros
// function imc(peso, altura) {
//   const imc = peso / (altura * altura);
//   return imc;
// }

// // peso, altura = argumentos
// console.log(imc(80, 1.8));

// function corFavorita(cor) {
//   if (cor === "azul") {
//     return "Sua cor favorita é azul";
//   } else if (cor === "verde") {
//     return "Sua cor favorita é verde";
//   } else {
//     return "Voce nao gosta de nada";
//   }
// }

// console.log(corFavorita());

var button = document.getElementById("test");

button.addEventListener("click", function () {
  console.log("Voce clicou");
});

let paisesNoMundo;
function paisesQueFaltamVisitar(paisesVisitados) {
  paisesNoMundo = 193;
  return `Ainda faltam ${
    paisesNoMundo - paisesVisitados
  } países para serem visitados`;
}

console.log(paisesQueFaltamVisitar(20));

console.log(paisesNoMundo);
