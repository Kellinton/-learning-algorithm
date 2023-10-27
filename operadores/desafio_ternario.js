const a = 8;
const b = 4;
const operacao = '/';
const resultado = operacao === '+' ? (a + b) : operacao === '-' ? (a - b) : operacao === '*' ? (a * b) : (a / b);

console.log(resultado);

// algoritmo que faz um cálculo de dois valores a partir da operação escolhida pelo usuário