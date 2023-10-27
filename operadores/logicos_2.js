// Algoritmo para ir ao shopping. A pessoa terá dois trabalhos durante a semana, e de acordo com
// a ida dele ou não ao trabalho, irá refletir se ele irá ao shopping no fim de semana para fazer algumas compras

const trabalho1 = true; // foi trabalhar no primeiro dia
const trabalho2 = true; // foi trabalhar no segundo dia

let comprarTV50 = trabalho1 && trabalho2; // AND
console.log('Vai comprar a TV de 50 polegadas? ' + comprarTV50);

let comprarTV32 = trabalho1 !== trabalho2; // XOR
console.log('Vai comprar a TV de 32 polegadas? ' + comprarTV32);

let tomarSorvete = trabalho1 || trabalho2; // OR
console.log('Vai tomar sorvete? ' + tomarSorvete);

let ficarEmCasa = !tomarSorvete; // NOT (operador unário)
console.log('Vai ficar em casa? ' + ficarEmCasa);