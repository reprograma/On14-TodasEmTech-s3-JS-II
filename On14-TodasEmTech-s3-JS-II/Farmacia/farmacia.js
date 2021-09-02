//Farmacia JS está em promoção. A cada 2 produtos iguais comprados, receba 5 reais de desconto. Escreva um programa para auxiliar a 
//farmacia a calcular o valor final do produto.

let produto1 = Number(prompt("Insira valor do primeiro produto:"));
let produto2 = Number(prompt("Insira valor do segundo produto:"));
let desconto = 5;

let soma = produto1 + produto2;

if(produto1 == produto2){
    alert("Parabéns!!! Você ganhou desconto de R$ 5,00! \n Total: R$ "+(soma-desconto))
}else{
    alert("Total à pagar = R$" + soma)
};