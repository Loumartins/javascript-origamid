// String é a construtora de strings, toda string possui as propriedades e metodos do prototype de String

const comida = "Pizza";
const liquido = new String("Agua");
const ano = new String(2018);

// * str.length * = propriedade com o total de caracteres da string
const frase = "A melhor comida";

comida.length;
frase.length;

console.log(comida[0]);
console.log(frase[10]);

// *str.chartAt(N) * =  metodo que retorna o caractere de acordo com o index

const linguagem = "Javascript";

console.log(linguagem.charAt(0));
console.log(linguagem.charAt(2));
console.log(linguagem.charAt(linguagem.length - 1));

// *str.concat(srt2 , srt3)* = concatena as strings e retorna o resultado

const fraseJs = "A melhor linguagem é: ";
const fraseCompletaJs = fraseJs.concat(linguagem, "!!!");

console.log(fraseCompletaJs);

// *str.includes* = metodo que procura pela exata string dentro de outra string *A PROCURA É CASE SENSITIVE*

const fruta = "Banana";
const listaDeFrutas = "Melancia, Banana, Laranja";

listaDeFrutas.includes(fruta); // true
fruta.includes(listaDeFrutas); // false

// *str.endsWith(search) - str.startsWith(search)* = metodo que procura pela exata string dentro da outra. *A PROCURA É CASE SENSITIVE*

fruta.endsWith("nana"); // true
fruta.startsWith("ba"); // true
fruta.startsWith("na"); // false

// *str.slice(start , end)* = metodo que corta a string de acordo com os valores passados no start e no end

const transacao1 = "Depósito de cliente";
const transacao2 = "Depósito de fornecedor";
const transacao3 = "Taxa de camisas";

transacao1.slice(0, 3); // Dep
transacao2.slice(0, 3); // Dep
transacao3.slice(0, 3); // Tax

transacao1.slice(12); // cliente
transacao1.slice(-4); // ente
// quando colocado numero negativo no parametro ele ira cortar os ultimos caracteres, da esquerda para direita
transacao1.slice(3, 6); // ósi

// *str.substring(start, end)* = corta a string de acordo com os valores de start e end. Nao funciona com valores negativos como o slice

linguagem.substring(3, 5); // aS
linguagem.substring(0, 4); // Java
linguagem.substring(4); // Script
linguagem.substring(-3); // Javascript
//quando passado um valor negativo ele retorna o proprio metodo

// *str.indexOf(search) e str.lastIndeOf(search)* = retorna o index da string, assim que achar o primeiro resultado ele ja retorna. No caso do lastIndexOf ele retorna o ultimo resultado

const instrumento = "Guitarra";

instrumento.indexOf("r"); // 5
instrumento.lastIndexOf("r"); // 6
instrumento.indexOf("ta"); // 3

// *str.padStart(n, str) e str.padEnd(n, str)* = aumenta o tamanho da string para o valor de n. Ou seja, uma string com 8 caracteres, se passarmos n = 10, ela passara a ter 10 caracteres. O preenchimento é feito com espaço, caso nao seja declarado o segundo argumento.

const listaPrecos = ["R$ 99", "R$ 199", "R$ 12000"];

listaPrecos.forEach((preco) => {
  console.log(preco.padStart(10, "."));
});

listaPrecos[0].padStart(10, "."); // .....R$ 99
listaPrecos[0].padEnd(10, "."); // R$ 99....

// *str.repeat(n)* = repete a string (n) vezes

const fraseRepeat = "ta";
const fraseRepetida = fraseRepeat.repeat(4);
console.log(fraseRepetida);

// *str.replace(regex|substr , newstr|function)* = troca parte da string por outra. Podemos utilizar uma regular expression ou um valor direto. Se usarmos um valor direto ele ira trocar apenas o primeiro valor que encontrar

let listaItens = "Camisas Bones Calças Bermudas Vestidos Saias";
listaItens = listaItens.replace(/[ ]+/g, ", ");

let preco = "R$ 1200,43";
precoNovo = preco.replace(",", ".");
console.log(precoNovo);

// *str.split(padrao)* = divide a string de acordo com o padrao passado e retorna uma *ARRAY*

const arrayItens = listaItens.split(", ");

const htmlText = "<div>O melhor item</div><div>A melhor lista</div>";
const htmlArray = htmlText.split("div");
const htmlNovo = htmlArray.join("section");

// *str.toLowerCase() e str.toUpperCase()* = retorna a string em letras maiusculas e minusculas. Bom para verificar o input dos usuarios.

const sexo1 = "Feminino";
const sexo2 = "feminino";
const sexo3 = "FEMININO";

sexo1.toLowerCase() === "feminino";
sexo2.toLowerCase() === "feminino";
sexo3.toLowerCase() === "feminino";

// *str.trim() , *str.trimStart(), *str.trimEnd()* = remove espaços em branco do inicio ou final de uma string

const valor = " R$ 23.00 ";
valor = valor.replace(".", ",");

valor.trim();
valor.trimStart();
valor.trimEnd();
