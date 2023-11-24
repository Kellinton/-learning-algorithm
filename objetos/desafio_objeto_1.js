// const nascimento = {
//     dia: 24,
//     mes: 11,
//     ano: 2023,
//     exibir: function() {
//         return console.log(`${this.dia}/${this.mes}/${this.ano}`);
//     }
// }

// console.log(nascimento.exibir());

const nascimento = {
    dia: 9,
    mes: 10,
    ano: 2010,
    exibir: function() {
        return `${this.dia}/${this.mes}/${this.ano}`
    }
};

nascimento.dia = 11;

console.log(nascimento.mes);
console.log(nascimento.exibir());