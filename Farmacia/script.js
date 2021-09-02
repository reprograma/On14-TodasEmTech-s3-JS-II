var produto1 = Number(prompt("Insira o codigo do primeiro produto: "));
var produto2 = Number(prompt("Insira o codigo do segundo produto: "));
if (produto1 == produto2) {
  alert("você ganhou um desconto de 5 reais na sua compra");
  var total = Number(prompt("Digite o valor total da compra: "));
  Totalfinal = total - 5;
  alert("O valor da sua compra COM DESCONTO é de: R$"+Totalfinal)
} else {
  alert("Fim da compra");
}

