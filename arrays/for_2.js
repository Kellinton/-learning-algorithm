// **foreach percorre até o final do array
// Diferente do FOR, não precisa de incremento, e expressão de verdadeiro ou falso
// foreach

const notas = [7, 8, 3, 4, 10, 9, 8, 8];



// **foreach é uma forma para percorrer os VALORES de um array.(of)
//for of
let valores = '';

for(let nota of notas) {  
    valores += nota + ' ';
   
}
console.log(valores);


// **forma para percorrer os ÍNDICES de um array (in)
//for in
let indices = '';

for(let indice in notas) {
    indices += indice + ' ';
}
console.log(indices);