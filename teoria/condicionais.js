<html>
    <script>

//ESTRUTURA CONDICIONAL

//O que é uma estrutura condicional?

/* Estruturas condicionais são utilizadas para criar condições em cenários diferentes ao decorrer do código.

Existem diversas maneiras de criar uma estrutura de condição, as principais são */

if(CONDICAO){
EXECUCAO
}

if(nome == 'Keyla'){
alert('Olá Keyla')
}


if(nome === 'Keyla'){  // SE SIM 
    execução 
}

 else if(nome === 'Ana'){ //MAS SE
    execução2
}

else{ //SE NÃO
    
}




// O que são os simbolos usados para fazer a comparação?

if(CONDICAO){
    alert('ME PAGA')
}
/*

Operadores Relacionais:

== IGUAL
=== IGUAL E DO MESMO TIPO
!= DIFERENTE
> MAIOR QUE
< MENOR QUE
<= MENOR OU IGUAL A
>= MAIOR OU IGUAL A

                Operadores Lógicos:
! NÃO
&& E
|| OU

/*Imagine que uma mensagem deva ser exibida caso os números 1, 2, || 3 seja inserido pelo usuário no nosso programa.

Como faremos isso apenas com IF e ELSE?

*/
var programaJS = prompt('Digite um número')
if(programaJS == 1 ||programaJS == 2 || programaJS == 3){
    alert('O número digitado está dentro do previsto')
}else{
    alert('O número digitado está fora do previsto')
}

/* Agora imagine que para cada número digitado, uma mensagem diferente precise ser exibida

*/

var programaJS = prompt('Digite um número')

if(programaJS == 1){ // SE for igual a 1
    alert('Olá seu número é 1')
}else if(programaJS == 2){ // MAS SE for igual a 2
    alert('Olá, seu número é 2')
}else if(programaJS == 3){ // MAS se for igual a 3
    alert('Olá seu número é 3')
}else{
    alert('O número esta fora do previsto')
}

// E se quisermos que uma mensagem seja alertada caso o número digitado NÃO SEJA 8

if(programaJS != 8){
    alert('Seu número é diferente de 8')
}

//E se quisermos que uma mensagem seja alertada se o número for 10 OU 15?

if(programaJS == 10 || programaJS == 20){
    alert('Seu número é 10 OU 20')
}

//E se quisermos que uma mensagem seja alertada quando o número É 4 E 5

if(programaJS == 4 && segundoProgramaJS == 5){
    alert('Seu número digitado é 4 e 5')
}

// COMO FUNCIONA o ===?


var programaJS = Number(prompt('Digite um número'));
        if(programaJS === 4){
    alert('Seu número digitado é 4');
}

// Se o número digitado no prompt for IGUAL e DO MESMO TIPO DE 4 (OU SEJA, UM NUMERO), a mensagem sera exibida



var x
if(x == a || x == e || x == i){
    console.log('Sim')
}else{
    console.log

}

//EXERCICIOS:
//Receba uma letra pelo prompt e verifique se é uma vogal ou consoante. Se for vogal, imprime SIM,
// se for consoante imprima Não

//Exercicios Extra COM funcção
//Crie uma função que recebe o ano de nascimento da pessoa informando se ela é maior de idade ou menor



// OUTRAS MANEIRAS DE CRIAR CONDIÇÕES

//Podemos também utilizar SWITCH e CASE para criar uma estrutura de condições

//COMO FUNCIONA?

/*
SWITCH = serve para setar a condição que sera verificada
CASE =  CASO que sera avaliado pelo SWITH
*/

let idade = Number(prompt('Insira sua Idade'));




if(idade == 18){
    x
}

switch(idade){

case CODICAO: EXECUCAO


case CODICAO2: EXECUCAO2

case CONDICAO3: EXECUCAO3

}


switch(x){
    case 1: alert("Você tem 18 anos");
    break;
    break
    break



    case 2: alert("Você tem 17");
    break;


    case i: alert("Você tem 20 anos");
    break


    default: alert("TUDO ACIMA É FALSO")
}

if(){
x
}else{
y
}




// Sintaxe:
if(x == 2){ // SE
 EXECUCAO1
}else if (x == 3){ // MAS SE
EXECUCAO2
}else{
    EXECUCAO3
}
    


switch(IDADE){
    case idade > 18: ("Faça Login");
    case idade < 18: ("Você não pode fazer login");
    default: ("Faça Login tambem");
    
}



switch(condicao){
CASO FOR "VALOR": EXECUTA;
CASO FOR "VALOR2": EXECUTA2
}

var trabalhos = 3
switch(trabalhos){ //Entrada
    case 1: alert('Seu número é 1'); // SE FOR 1
    break;
    case 2: alert('Seu número é 2'); // SE FOR 2
    break;
    case 3: alert('Seu número é 3'); //SE FOR 3
    break;
    default:
        alert('Seu número não está dentro do previsto') // SE NÃO FOR NENHUM DOS CASOS, EXECUTE ESTE PADRÃO

} //Saida

//Porque utilizados BREAK?

/*

Ao contrário do IF, ELSE IF e ELSE, o SWITCH é uma condição completa, com uma unica saída. Sem o break ele irá executar
tudo até o sim. 

//Este código funciona?

//Como o SWITCH não tem os simbolos de comparação (==,===, !=. && e ||), você precisa garantir que o valor de comparação
do CASE sera igual ao valor inserido na condição SWITCH

//Utilize o método Number para garantir que o programaJS converta o valor digitado pelo usuário em NUMERO


//TENTE EM CASA
Altere os exercicios para SWITCH



</script>

</html>