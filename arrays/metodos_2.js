const numeros = [1, 2, 3, 4, 5, 8];

numeros.splice(1, 2); // método splice serve para remover um elemento do array. 
// o primeiro parâmetro serve para dizer a partir de qual índice irá remover (1)
// o segundo parâmetro  serve para dizer a quantidade de elementos para excluir (2)
console.log(numeros);

numeros.pop(); // remove o último elemento do array e retorna o valor
console.log(numeros.pop()); //retornando o valor excluído
console.log(numeros);