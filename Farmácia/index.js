let digiteOProduto1 = Number(prompt("Informe o valor do primeiro produto:"));
let digiteOProduto2 = Number(prompt("Informe o valor do segundo produto:"));

if(digiteOProduto1 == digiteOProduto2){
    let desconto = (digiteOProduto1 + digiteOProduto2) - 5;
    alert("Seu valor total com desconto é de: " + desconto + " reais");
} else {
    let desconto1 = digiteOProduto2 + digiteOProduto1;
    alert("O valor total do seu produto é: " + desconto1 + " reais");
}