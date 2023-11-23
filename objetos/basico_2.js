// let fn = function() {

// }


const produto = { // método é igual a comportamentos que é igual a AÇÃO, ALGORITMO. Ex: De um carro, Acelerar, freas, ligar, desligar são comportamentos de um carro.
    // atributos são características Ex: Cor, Velocidade Atual, são características de um carro.
//variável/chave: propriedade/valor 
    nome: 'iPad', 
    preco: 5600,
    desconto: 0.5, // com 50%
    precoComDesconto: function() {
        return this.preco * (1 - this.desconto); // "this" serve para referenciar um atributo que está dentro/pertence ao próprio objeto. (Quando um objeto quer acessar os seus próprios atributos, usa-se o "this")
    }
};


console.log('O desconto do ' + produto.nome + ' foi de: ' + produto.precoComDesconto());


// O que está dentro de um objeto?
// R: Atributos e métodos.
// Não necessariamente precisa ter só métodos, e não necessariamente precisa ter só atributos. Pode ter um objeto vazio, pode ter um objeto que só tem atributos e pode-se ter um objeto que só métodos.

//Quais são os membros de um objeto?
//Atributos e métodos são MEMBROS de um objeto.
