
// EXERCICIO: 
// Farmacia JS está em promoção. A cada 2 produtos iguais comprados, receba 5 reais de desconto. Escreva um programa para auxiliar a farmacia a calcular o valor final do produto.


let produto1 = Number(prompt ("Insira o valor do seu primeio produto"));
let produto2 = Number(prompt ("Insira o valor do seu segundo produto"));
let valor = produto1 + produto2
farmacia (valor, produto1,produto2);
function farmacia (valor, produto1,produto2) {
  
    if (produto1==produto2) {
     alert (valor-5);

   }else{
     alert (valor);
    }
    
}
