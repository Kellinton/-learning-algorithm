let x = 10;
x = 6;

console.log(x); // valor é 6, pois está substiuindo o valor anterior. (atribuição ou uma "substiuição" do valor 10 para  o 6)

//------------------------------

let y = 10; 
y += 6;      // y += 6 ou y = y + 6;

console.log(y); // valor é 16, pois está adicionando o valor 6 ao valor 10. (atribuição aditiva, uma adição do valor 6 sobre o 10)

//---------------------------

let z = 10;

z += 2; // atribuição aditiva
console.log(z);
z -= 10; // atribuição subtrativa
console.log(z);
z *= 2; // atribuição multiplicativa
console.log(z);
z /= 2; // atribuição divisiva
console.log(z);
z %= 2; 
console.log(z);


//---------------------------


// atribuição concatenativa

let texto = 'Um Texto';
texto += ', outro Texto';
texto += '!!!';

console.log(texto);