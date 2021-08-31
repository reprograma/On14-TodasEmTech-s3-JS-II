//EXERCICIOS PAR O LAR:
//TRANSFORMAR EXERCICIOS DA AULA PARA SWITCH
//Receba uma letra pelo prompt e verifique se é uma vogal ou consoante. Se for vogal, imprime SIM,
// se for consoante imprima Não

var letraRecebida = (prompt('Digite uma letra vogal: ').toLowerCase());
function casePositivo() {
    alert("A letra " + letraRecebida + " é uma vogal");
}

switch (letraRecebida) {
    case 'a': casePositivo();
        break;
    case 'e':  casePositivo();
        break;
    case 'i':  casePositivo();
        break;
    case 'o':  casePositivo();
        break;
    case 'u':  casePositivo();
        break;
    default: alert("Você não digitou uma vogal");

}

//Exercicios Extra COM funcção
//Crie uma função que recebe o ano de nascimento da pessoa informando se ela é maior de idade ou menor

function verificaIdade() {
    let anoNascimento = document.getElementById('ano-de-nascimento').valueAsNumber;
    hoje = new Date();
    let anoAtual = hoje.getFullYear();
    let idade = anoAtual - anoNascimento;

    if(idade >= 18) {
        alert('Você é maior de idade.')
    } else {
        let anoDeMaiorIdade = 18 - idade;
        alert('Você ainda não é maior de idade, falta ' + anoDeMaiorIdade + ' anos para chegar a Maioridade')
    }

}


/*
//EXERCICIOS:
//Receba uma letra pelo prompt e verifique se é uma vogal ou consoante. Se for vogal, imprime SIM,
// se for consoante imprima Não

var letraRecebida = prompt('Digite uma letra vogal: ');

if (letraRecebida == 'a', 'A', 'e', 'E', 'i', 'I', 'o', 'O', 'u', 'U') {
    alert('SIM');
} else {
    alert('NÃO');
}

*/




