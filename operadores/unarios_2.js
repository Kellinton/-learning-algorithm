let a = 1;
let b = 2;

//tem essa forma (melhor)

//a++
//console.log(a === b); 
//b++

//ou 

console.log(++a === b++); // 2 = 2 (primeiro fez a comparação, e depois ouve o incremento no valor da variável B).
console.log('valor de A: ' + a + ', valor de B: ' + b); // agora B vale 3 