// funcoes que estão dentro do objeto array

const numeros = [1, 2, 3, 4, 5];

numeros[0] = 100; // forma de alterar um elemento dentro do array
numeros.push(6);// forma de adicionar um elemento dentro do array já existente

const numeros2 = numeros.concat(7, 8, 9); // concatena com um array ja existente os elementos que colocar, diferente do push, concat gera um novo array
console.log(numeros2);

numeros.includes(5); // verificar se o 5 está incluso no array, se tiver retorna verdadeiro
console.log(numeros.includes(5));

console.log(numeros.join(' , ')); //join junta todos os elementos do array a partir de um símbolo que colocar. no exemplo foi a vírgula

console.log(numeros.indexOf(2)) // mostrar o índice do valor 2. Se tiver outros valores 2, o primeiro é o que contará