// AND  &&  , e
// XOR  !=    , ou exclusivo, usado quando opções iguais dao falso, quando sao diferentes da verdadeiro. (Pode ser usado o != diferente)
// OR   ||  , ou
// NOT  !   , negação

let temDinheiro = true;
let estaSol = true;
let carroEstaNaGaragem = true;

resultadoAND = '1# Vai pro Shopping? (AND) '; // Ir para o Shopping a pé (AND)

resultadoAND += temDinheiro && estaSol; // precisa ter dinheiro e estar sol para ir

console.log(resultadoAND);

//-----------------------------------------

let resultadoOR = '2# Vai para o Shopping? (OR) '; // Ir para o Shopping a pé ou de carro (OR)

resultadoOR += estaSol || carroEstaNaGaragem; // ou vai a pé (se estiver sol) ou vai de carro (se o carro estiver na garagem)

console.log(resultadoOR);


//-----------------------------------------


console.log(true ^ false); // OU exclusivo bit a bit, retorna valor binário assim como | e &
console.log(!true); // negação, "não verdadeiro" a resposta é falso



