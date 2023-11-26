// Transforme o objeto abaixo em uma Constructor Function
function Pessoa(nome, idade) {
  this.nome = nome;
  this.idade = idade;
  this.andar = function () {
    console.log(`${nome} andou`);
  };
}

// Crie 3 pessoas, João - 20 anos,
// Maria - 25 anos, Bruno - 15 anos
const joao = new Pessoa("joao", 24);
joao.andar();

const maria = new Pessoa("maria", 23);
maria.andar();

const bruno = new Pessoa("bruno", 29);
bruno.andar();
// Crie uma Constructor Function (Dom) para manipulação
// de listas de elementos do dom. Deve conter as seguintes
// propriedades e métodos:
// elements, retorna NodeList com os elementos selecionados
// addClass(classe), adiciona a classe a todos os elementos
// removeClass(classe), remove a classe a todos os elementos

function Dom(seletor) {
  const elementsList = document.querySelectorAll(seletor);
  this.elements = elementsList;
  this.addClass = function (classe) {
    this.elements.forEach((element) => {
      element.classList.add(classe);
    });
  };
  this.removeClass = function (classe) {
    this.elements.forEach((element) => {
      element.classList.remove(classe);
    });
  };
}
