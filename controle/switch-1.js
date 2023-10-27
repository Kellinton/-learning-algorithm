let nota = 7.2;
//math.ceil vai arredondar o valor
switch(Math.ceil(nota)) { //diferrente de outras estruturas de controle, o swtich não tem experessão verdadeira ou falsa
    case 10: 
    case 9: 
    case 8: 
    case 7:
    case 6:
    case 5:
        console.log('Aprovado!');
        break; //para encerrar o código ao entrar nesse CASO. Senão, ele vai acabr reproduzindo outros CASOS abaixo
    case 4:
        console.log('Recuperação!');
        break;
    case 3:
    case 2:     
    case 1:
    case 0: 
        console.log('Reprovado!');
        break;
    default: // último caso
        console.log('Nota inválida!');                
}