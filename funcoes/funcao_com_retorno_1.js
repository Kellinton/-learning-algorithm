// sem retorno

function semRetorno(){ // void (vazio)

}

console.log(semRetorno()); // undefined 


// com retorno

function comRetorno(){ // number
    return 1;
}

console.log(comRetorno()); // retorna 1


// outros return

function retornaString(){ // string
    return "Texto";
}
let textoRetornado = retornaString();
console.log(retornaString());
console.log(textoRetornado);



// outros exemplos

function verdadeiroOUfalso(verdadeiro){
    if(verdadeiro){
        return "Verdadeiro"; // return sai da função. não precisa do else
    }

    return "Falso";
}

let resultadoDaFuncao = verdadeiroOUfalso(true); 

console.log(resultadoDaFuncao); // guardando em uma variável e retornando como true, exibindo "Verdadeiro".
console.log(verdadeiroOUfalso(true))// retornando "Verdadeiro" e exibindo no console
console.log(verdadeiroOUfalso(false)) //  retornando "Falso" e exibindo no console




// return é  parecido com o break do switch.
// a partir do momento que for executado um dos return, 
//ele sairá da função, e o código abaixo será ignorado

function saindoReturn(){
    return 1;
    console.log(1); // não será atingido
}


