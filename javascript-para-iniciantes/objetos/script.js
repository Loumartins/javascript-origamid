let pessoa = {
  nome: "Luiz",
  idade: 27,
  profissao: "Programador",
  possuiFaculdade: true,
};

console.log(pessoa.nome);

let quadrado = {
  lados: 4,
  area: function (lado) {
    return lado * lado;
  },
  perimetro: function (lado) {
    return this.lados * lado;
  },
};

var menu = {
  width: 800,
  height: 50,
  backgroundColor: "#84e",
};

var bg = menu.backgroundColor;
