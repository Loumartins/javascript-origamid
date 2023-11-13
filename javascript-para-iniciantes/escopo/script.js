//O codigo abaixo dará erro devido a definicao de escopo

// function mostrarCarro() {
//   var carro = "Fusca";
//   console.log(`Meu carro é um ${carro}`);
// }

// console.log(mostrarCarro(carro));

//Atualizando para a forma correta
var carro = "Fusca";
function mostrarCarro() {
  console.log(`Meu carro é um ${carro}`);
}

console.log(mostrarCarro(carro));

/*
Const = Mantem o escopo no bloco, impede a redeclaração e impede a modificação do valor da variavel, evitando bugs no codigo
*/

const mes = "Dezembro";
mes = "Janeiro"; //erro pela tentativa de modificar o valor
//const semana // erro por nao ter declarado valor

const data = {
  dia: 28,
  mes: "Dezembro",
  ano: 2018,
};

data.dia = 29; // Funciona
data = "Janeiro"; // Erro

/*
Let = Mantem o escopo, impede a redeclaração, mas permite a modificacao do valor da variavel 
 */

let ano;

ano = 2018;
ano++;
console.log(ano); // 2019

// let ano = 2020; // erro, redeclarou a variavel
