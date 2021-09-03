// EXERCICIO: 
// Farmacia JS está em promoção. A cada 2 produtos iguais comprados, receba 5 reais de desconto. 
// Escreva um programa para auxiliar a farmacia a calcular o valor final do produto.

    let produto1 = Number(prompt("Insira o valor do produto 1: "));
    let produto2 = Number(prompt("Insira o valor do produto 2: "));
    let desconto = 5;

    valorFinal = produto1 + produto2;

    if(produto1 == produto2){
    alert ("Valor final: R$ " + (valorFinal - desconto))
    }else{
    alert ("Valor final: R$ " + valorFinal)
    }

    alert ("A farmácia do povo.");