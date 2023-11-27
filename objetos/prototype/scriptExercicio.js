// Crie uma função construtora de Pessoas
// Deve conter nome, sobrenome e idade
// Crie um método no protótipo que retorne
// o nome completo da pessoa

function Pessoa(nome, sobrenome, idade) {
  this.nome = nome;
  this.sobrenome = sobrenome;
  this.idade = idade;
}

Pessoa.prototype.nomeCompleto = function () {
  const nomeCompleto = `${this.nome} ${this.sobrenome}`;
  return nomeCompleto;
};

const pessoa1 = new Pessoa("Luiz", "Henrique", 27);

// Liste os métodos acessados por
// dados criados com NodeList,
// HTMLCollection, Document

// Liste os construtores dos dados abaixo
const links = document.querySelector("li");

links; // HTMLLIElement
links.click; // function
links.innerText; // String
links.value; // number
links.hidden; // boolean
links.offsetLeft; // number
links.click(); // undefined

// Qual o construtor do dado abaixo:
links.hidden.constructor.name;
//String
