const produto1 = {
    nome: "Computador",
    preco: 3000.0,
    quantidade: 2
}

const Produto = function(nome, preco, quantidade) {
    // ATRIBUTOS
    this.nome = nome;
    this.preco = preco;
    this.quantidade = quantidade;
}


// #region MÉTODOS /

    //acessando o objeto Prototype da função e criando a função total() do tipo Double
    Produto.prototype.total = function() {
        return this.preco *  this.quantidade;
    }  

    Produto.prototype.add = function(amount) {
        //return this.quantidade = this.quantidade + amount;
        return this.quantidade += amount;
    }

    Produto.prototype.remove = function(amount) {

        if(this.quantidade >= amount) { // se a quantidade for maior ou igual ao estoque
            return this.quantidade -= amount;  
        }
        
    }

    //retornando os dados do produto em forma de String
    Produto.prototype.label = function() {               //duas casas decimais
        return "Dados: " + this.nome + ", " + this.preco.toFixed(2);
    }

// #endregion MÉTODOS /



const produto2 = new Produto('Monitor', 800.0, 10); // construindo o produto2 com a função Produto

const produto3 = new Produto('Mouse', 50.0, 4);

























//**Definir as propriedades no Construtor e os métodos no Prototype */


//Prototype de um construtor ou função construtora define uma estrutura de membros (propriedades e métodos) que são 
//compartilhados pelas instâncias desse construtor.