var qtd1=0;
var qtd2=0;
var qtd3=0;

var valorTotal = 0;

var desconto1 = 0;
var desconto2 = 0;
var desconto3 = 0;

var descontoTotal = 0;
var valorFinal = 0;

do {
    var codigoBarras = prompt("Bem vinda a Farmácia JS! \n Digite um codigo de barras ou 0 pra sair. \n 123 - Dipirona R$ 20,00 \n 456 - Advil R$ 25,00 \n 789 - Piroxan R$ 35,00");
    
    switch (codigoBarras) {
        case '123': qtd1++;
            break;
        case '456': qtd2++;
            break;
        case '789': qtd3++;
            break;
        case '0': 
            break;    
        default:alert("Produto não cadastrado.");            
    } 
}

while (codigoBarras != 0);

/*

Enquanto o usuário não digitar o número 0 para sair da repetição,
o programa vai continuar pedindo para ele digitar o código de barras do prduto.
Se o usuário digitar um código de barras que não está no sistema, o programa informará 
e pedirá um código válido.
E cada vez que o usuário digitar um código de barras válido, 
ele vai adicionando a quantidade na variável daquele produto.

*/

valorTotal = (qtd1 * 20) + (qtd2 * 25) + (qtd3 * 35);          // calculo para saber o valor total. variável da quanidade x valor do produto

    /* Aqui, enquanto a quantidade de produtos nas variáveis for maior ou igual a 2, ele vai descontando
       - 2 produtos na variável de quantidade, e adicionando + 5 na variável do desconto 
    */
    
    while (qtd1 >= 2){
        qtd1 -= 2;
        desconto1 += 5;
    }

    while (qtd2 >= 2){
        qtd2 -= 2;
        desconto2 += 5;
    }

    while (qtd3 >= 2){
        qtd3 -= 2;
        desconto3 += 5;
    }

descontoTotal = desconto1 + desconto2 + desconto3;

valorFinal = valorTotal - descontoTotal;

alert("O valor total da compra é de: " + valorTotal + " reais. \n O valor do desconto é de " + descontoTotal + " reais. \n O valor final da compra é de " + valorFinal + " reais.");