//Atividade Farmacia JS em promoção 
//Compre dois produtos iguais e ganhe desconto de R$5,00 reais

var produto1 = Number(prompt("Digite o valor do produto: "))
var produto2 = Number(prompt("Digite o valor do outro produto: "))
var desconto = 5

if(produto1 == produto2){
    alert(produto1 + produto2 - desconto)}
    else if(produto2 == produto1){
        alert(produto1 + produto - desconto)
    }
    else{
        alert(produto1+produto2)
    }