
// console é um objeto
console.log(typeof console); // objeto

// "log" é uma função que pertence ao objeto "console"
console.log(typeof console.log);
// o ponto "." entre console e log quer dizer que está acessando a função/método "log" dentro do objeto "console"
// **método é uma função que pertence a um objeto, que está dentro de um objeto.
// ** objeto é como uma pasta. Dentro de um objeto pode-se colocar funções, atributos (dados). É possível, dentro de um objeto, acessar uma função.

const numeros = [1, 2, 3];

// um array também é um objeto. ou seja, também é possível acessar funções/métodos dentro de um array.
console.log(typeof numeros); // objeto

// **o cubo roxo refere-se a uma função/método. O paralelepípedo azul representa um atributo.

// o método "push" serve para adicionar novos elementos dentro de um array
numeros.push(4); // adicionando o valor 4 dentro da array "numeros"
numeros.push(5); // adicionando o valor 5 dentro da array "numeros"

console.log(numeros);

// o atributo "length" serve para saber a quantidade de elementos que tem dentro de um array
// **Os atributos, diferente das funções, não têm parênteses().
console.log(numeros.length); // tem 5 elementos dentro do array "numeros"