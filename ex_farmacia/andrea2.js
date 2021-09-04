var numremedio = Number (prompt('insira a quantidade de produtos'))
const preco = Number(prompt('insira o preço')) //preço do medicamento paracetamol
const desconto = 5
var totalcustoP = numremedio*preco
var duplasP = Math.floor(numremedio/2)
var descontototalP = duplasP*desconto
var precoComdescontoP = totalcustoP-descontototalP
console.log (`desconto total foi de ${descontototalP}`)
console.log(`o preço final com desconto ${precoComdescontoP}`)
//
function calculoDesconto(totalcustoP){
    let descontototalP = Math.floor(totalcustoP/2)*5 // cada quantidade dividida p 2 e *5 que é o desconto
    return descontoTotal
    //
}

alert ("O meu preço final com desconto é " + precoComdescontoP)
console.log 