// Prototype : a propriedade prototype é um objeto adicionado a uma função quando a mesma é criada -- Prototype esta somente ligada a função

function Pessoa(nome, idade) {
  this.nome = nome;
  this.idade = idade;
}

Pessoa.prototype.andar = function () {
  return this.nome + " andou";
};
Pessoa.prototype.nadar = function () {
  return this.nme + " nadou";
};

const andre = new Pessoa("andre", 25);

console.log(Pessoa.prototype);
console.log(andre.prototype);

// O objeto criado utilizando o construtor, possui acesso aos metodos e propriedades do prototipo deste construtor. Lembrando, prototype é uma propriedade de funçoes apenas

// __proto__ : O novo objeto acessa os metodos e propriedades do prototipo atraves da propriedade __proto__. É papel da engine fazer essa busca, **NAO** devemos falar com o __proto__ diretamente

//Objetos, funcoes e numeros, strings e outros tipos de dados sao criados utilizando construtores.Esses construtores possuem um prototipo e metodos, que poderao ser acessados pelo tipo de dado. Ex:
const brasil = "Brasil";
const cidade = new String("Rio");

//  ↑ essas duas variaveis possuem os metodos e funcoes que sao "herdadas" por ser de um tipo string

//é possivel acessar a funcao do prototipo : é comum, principalmente em codigos mais antigos, o uso direto de funcoes do prototipo do construtor Array.

const lista = document.querySelectorAll("li");

const listaArray = Array.prototype.slice.call(lista);
const listaArray2 = Array.from(lista);
