//operador ternário dentro de outro operador ternário

const hora = 11;
const saudacao = hora <= 11 ? 'Bom dia' : (hora <= 17 ? 'Boa Tarde' : 'Boa Noite');

console.log(saudacao);
