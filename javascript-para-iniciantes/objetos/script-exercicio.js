// Crie um objeto com os seus dados pessoais
// Deve possui pelo menos duas propriedades nome e sobrenome
let pessoa = {
  nome: "Luiz",
  sobrenome: "Henrique",
  nomeCompleto(nome, sobrenome) {
    return `nome completo: ${nome + sobrenome}`;
  },
};

// Crie um método no objeto anterior, que mostre o seu nome completo

// Modifique o valor da propriedade preco para 3000
var carro = {
  preco: 1000,
  portas: 4,
  marca: "Audi",
};

carro.preco = 3000;
console.log(carro.preco);
// Crie um objeto de um cachorro que represente um labrador,
// preto com 10 anos, que late ao ver um homem
let cachorro = {
  cor: "preto",
  raca: "labrador",
  latir(pessoa) {
    if (pessoa === "homem") {
      console.log("O cachorro ira latir");
    } else {
      console.log("O cachorro nao ira latir");
    }
  },
};
console.log(cachorro.latir("homem"));
