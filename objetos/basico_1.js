const numeros = [1, 2, 3];

const produto = {
    nome: 'Caneta', // chave: valor
    preco: 9.99,
    desconto: 0.2
};

console.log(Array.isArray(numeros)) // ver se é array


console.log(numeros[0]); // acessando elementos pelo índice
console.log(produto['nome']); // acessando atributo "nome" dentro do objeto "produto" com colchetes
console.log(produto.nome);  // acessando atributo "nome" dentro do objeto "produto" com ponto (Prática mais utilizada)
console.log(produto.preco);
console.log(produto.desconto);



console.log(typeof produto); 