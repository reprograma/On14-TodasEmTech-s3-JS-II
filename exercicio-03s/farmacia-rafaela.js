// EXERCICIO: 
// Farmacia JS está em promoção. A cada 2 produtos iguais comprados, receba 5 reais de desconto.
// Escreva um programa para auxiliar a farmacia a calcular o valor final do produto.

//Produtos nomeados por variaveis. 
var carrinhoCompras = [];
var produtoDesejado = document.getElementById("prduto-selecionado");
var valorDoProduto = document.getElementById("valor-venda");
var demonstraLista = document.getElementById("lista-compras");
var mostraTotal = document.getElementById("total");
var total = 0;



function comprar() {    
    total += valorDoProduto.valueAsNumber;
    let contador = 0;

    for (let i = 0; i < carrinhoCompras.length; i++) {
        if (carrinhoCompras[i] == produtoDesejado.value)
        contador++    
    }

    if (carrinhoCompras.indexOf(produtoDesejado.value) != -1 && contador%2 != 0) {
        total -= 5.00; 
    }
    carrinhoCompras.push(produtoDesejado.value); 
    demonstraLista.textContent = carrinhoCompras;
    mostraTotal.textContent = total.toFixed(2);
}

// Array de variaveis ?  produtos compratos
// Variaveis de produtos com valores 
// For para verificar produtos e ver se já possuí ou indexOf
// If para se possuir, incluir desconto. 


// Operadores

/*
 = 
 == comparação
 total += 5 > total = total + 5
*/