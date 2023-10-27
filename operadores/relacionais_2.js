let a = 1; // tipo numérico
let b = "1" //tipo string
let c = "2" //tipo string


// (==) Comparando valores, (===) Comparando Valores e o Tipo.

console.log('\n')

console.log('Comparando igualdade \n');
console.log(a == b); // true, pois está comparando o conteúdo.
console.log(a === b); // false, está comparando o valor do conteúdo e também o tipo, que no caso é diferente. (comparação estrita)
console.log(b === c);// false, apesar de ser do mesmo tipo, o valor do conteúdo é diferente.
console.log(b == c); // false, valor do conteúdo é  diferente.

console.log('\n')

console.log('Comparando diferença \n');
console.log(a != b); //false não é diferente, pois tem o mesmo conteúdo.
console.log(a !== b); //true os tipos são diferentes.
console.log(b !== c);//true o tipo é igual, mas o conteúdo é diferente.