// *number* = é a construtora de numeros, todo numero possui propriedades e metodos do prototype de Number. Number tambem possui alguuns metodos.

const ano = 2018;
const preco1 = new Number(99);

// *number.isNaN() - number.isInteger()* = isNan() é um metodo de Number, ou seja, nao faz parte do prototipo. isInteger() verifica se é uma integral

Number.isNaN(Nan); // true
Number.isNaN(4 + 5); // false

Number.isInteger(20); // true
Number.isInteger(23.6); // false

// *number.parseFloat() - number.parseInt()* = parseFloat() serve para retornarmos um numero a partir de uma string. A string deve começar com um numero. parseInt() recebe tambem um segundo parametro que é o Radix, 10 é para decimal

parseFloat("99.50");
Number.parseFloat("99.50"); // 99.5
Number.parseFloat("100 reais"); // 100
Numver.parseFloat("R$ 100"); // NaN -> para retornar um number a string deve começar com um numero

parseInt("99.50", 10); // 99
parseInt(5.43434355555, 10); // 5
Number.parseInt("100 Reais", 10); // 100

// *n.toFixed(decimais)* = arredonda o numero com base no total de casas decimais do argumento

const preco2 = 2.99;
preco2.toFixed(); //3

const carro = 1000.455;
carro.toFixed(2); // 1000.46

const preco3 = 1499.99;
preco3.toFixed(); // 1499

// *n.toString()* = transforma o numero em uma string com base no radix. Use o 10 para o sistema decimal

const preco4 = 2.99;
preco4.toString(10); // '2.99'

// *n.toLocaleString(lang, options)* = formata o numero de acordo com a lingua e opcoes passadas

const preco5 = 59.49;
//preco5.toLocaleString("en-US", { style: "currency", currency: "USD" }); //$59,49
preco5.toLocaleString("pt-BR", { style: "currency", currency: "BRL" }); //R$59,49
console.log(preco5);

// *Math* = é um objeto nativo que possui propriedades e metodos de expressoes matematicas comuns

Math.PI;
Math.E;
Math.LN10;

// *math.abs() - math.ceil() - math.floor() - math.round()* = abs() -> retorna o valor absoluto, ou seja , transformando negativo em positivo. ceil() -> arredonda pra cima sempre retornando uma integral. floor() -> arredonda pra baixo sempre retornando uma integral. round() -> arrendonda para o numero integral mais proximo

Math.abs(-5.5); // 5.5
Math.ceil(4.8334); // 5
Math.ceil(4.3); // 5
Math.floor(4.8334); // 4
Math.floor(4.3); // 4
Math.round(4.8334); // 5
Math.round(4.3); // 4

// *math.max() - math.min() - math.round()* = max() retorna o maior número de uma lista de argumentos, min() o menor número e random() um número aleatório entre 0 e 1.

Math.max(5, 3, 10, 42, 2); // 42
Math.min(5, 3, 10, 42, 2); // 2

Math.random(); // 0.XXX
Math.floor(Math.random() * 100); // entre 0 e 100
Math.floor(Math.random() * 500); // entre 0 e 500

// Número random entre 72 e 32
Math.floor(Math.random() * (72 - 32 + 1)) + 32;
Math.floor(Math.random() * (max - min + 1)) + min;
