const cliente = {
    codigo: 16532,
    nome: 'Ana',
    vip: true,
    endereco: {
        logradouro: 'Rua ABC',
        numero: '123',
        complemento: 'Apto 101 Bloco B',
        pontosRef: [ // array de objetos (2 objetos)
            {nome: 'Hospital X', perto: true},
            {nome: 'Shopping Y', perto: false},
        ]
    },
    nomeFilhos: ['Bia', 'Carlos', 'Fernanda']
};

console.log(cliente['endereco']['logradouro']);
console.log(cliente.endereco.logradouro);
console.log(cliente.endereco.pontosRef[1]);
console.log(cliente.nomeFilhos[2]);
console.log(cliente.endereco.pontosRef[0].perto);

