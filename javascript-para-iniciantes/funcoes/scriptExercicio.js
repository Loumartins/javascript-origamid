// Crie uma função para verificar se um valor é Truthy
function verificadorDeTruthy(valor) {
  return !!valor;
}
// Crie uma função matemática que retorne o perímetro de um quadrado
// lembrando: perímetro é a soma dos quatro lados do quadrado
function perimetro(lado) {
  return lado + lado + lado + lado;
}
// Crie uma função que retorne o seu nome completo
// ela deve possuir os parâmetros: nome e sobrenome
function nomeCompleto(nome, sobrenome) {
  return `Seu nome completo é: ${nome + sobrenome}`;
}
// Crie uma função que verifica se um número é par
function verificadorDeNumeroPar(valor) {
  if (typeof valor !== "number") {
    return "argumento inválido, utilize um valor numerico";
  }
  if (valor % 2 === 0) {
    return `O valor ${valor} é par`;
  } else {
    return "O valor é impar";
  }
}
console.log(verificadorDeNumeroPar("bakaka"));

// Crie uma função que retorne o tipo de
// dado do argumento passado nela (typeof)
function retornandoTipoDeValor(valor) {
  return typeof valor;
}
console.log(retornandoTipoDeValor("Oi"));
// addEventListener é uma função nativa do JavaScript
// o primeiro parâmetro é o evento que ocorre e o segundo o Callback
// utilize essa função para mostrar no console o seu nome completo
// quando o evento 'scroll' ocorrer.
let meuNome = "Luiz Henrique";
let meuSobrenome = " Martins";

function nomeCompleto(nome, sobrenome) {
  return `Seu nome completo é: ${nome + sobrenome}`;
}

addEventListener("scroll", function () {
  console.log(nomeCompleto(meuNome, meuSobrenome));
});

// Corrija o erro abaixo
let totalPaises;
function precisoVisitar(paisesVisitados) {
  totalPaises = 193;
  return `Ainda faltam ${totalPaises - paisesVisitados} países para visitar`;
}
function jaVisitei(paisesVisitados) {
  return `Já visitei ${paisesVisitados} do total de ${totalPaises} países`;
}
precisoVisitar(20);
jaVisitei(20);
