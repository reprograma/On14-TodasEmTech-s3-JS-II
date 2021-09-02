var produtos = Number(prompt("Deseja levar quantos produtos? "));

if (produtos >= 4) {
  var valor1 = Number(prompt("Digite o valor do primeiro produto: "));
  var valor2 = Number(prompt("Digite o valor do segundo produto: "));
  var valor3 = Number(prompt("Digite o valor do terceiro produto: "));
  var valor4 = Number(prompt("Digite o valor do quarto produto: "));

  var soma = valor1 + valor2 + valor3;
  var desconto = valor4 / 2;
  var total = soma + desconto;

  alert("O total da sua compra COM DESCONTO foi de: R$"+total)
} else {
  alert("Compra finalizada. SEM DESCONTO");
}
