// ATIVIDADE 1 - Farmácia JS está em promoção. 
// A cada 2 produtos iguais comprados, receba 5 reais de desconto.

let produto1 = Number (prompt("Insira o valor do primeiro produto:"));
    alert ("AVISO: Caro cliente, caso leve outro produto igual a este \nterá R$ 5,00 de desconto.")

let produto2 = Number (prompt("Insira o valor do segundo produto:"));
let desconto = 5

soma = produto1 + produto2

if (produto1 == produto2){
alert ("Parabéns você ganhou R$ 5,00 de desconto. \n\nValor à Pagar: R$ " + (soma - desconto))
} else{
    alert ("Valor à pagar: R$ " + soma)
}

// ATIVIDADE 2 - //Receba uma letra pelo prompt e verifique se é uma vogal ou consoante.

let vogais = prompt ("Insira um letra: ");

switch (vogais.toLocaleLowerCase()) {
    case "a": alert ("Sua letra é uma vogal");
    break;
    case "e": alert ("Sua letra é uma vogal");
    break;
    case "i": alert ("Sua letra é uma vogal");
    break;
    case "o": alert ("Sua letra é uma vogal");
    break;
    case "o": alert ("Sua letra é uma vogal");
    break;
    default: alert ("Sua letra é uma consoante!")
    break;
};