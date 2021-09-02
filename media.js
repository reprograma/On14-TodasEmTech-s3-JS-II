/*let nota1 = prompt("Qual foi sua nota da 1ª avaliação?");
let nota2 = prompt("E a nota da 2ª avaliação?");
let nota3 = prompt("Agora insira a última nota:");

let soma = parseFloat(nota1 + nota2 + nota3);

let media = parseFloat(soma/3);

if(media >= 7){
    alert ("Parabéns, Aluno(a)!Você está aprovado(a)! \n Sua média é: " media)
}else{
    alert ("Infelizmente você não alcançou média para aprovação... \n Sua média é: " media)
}*/

function media(){
    let nota1 = parseFloat(document.getElementById("nota1").value);
    let nota2 = parseFloat(document.getElementById("nota2").value);
    let nota3 = parseFloat(document.getElementById("nota3").value);

    let media = (nota1 + nota2 + nota3)/3;

    if(media >= 7){
        alert("Parabéns, Aluno(a)!Você está aprovado(a)! \n Sua média é:"+media);
    }
    else{
     alert("Infelizmente você não alcançou média para aprovação... \n Sua média é: "+media)

   }