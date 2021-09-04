//  receber letras que sejam vogais, se for: imprimir sim se nao for imprimir não 

let letras = prompt('insira uma vogal').toLowerCase();

switch (letras){
    case 'a':
    case 'e':
    case 'i':        
    case 'o':
    case 'u':     
        alert('Esta letra é uma vogal')
        break;        
    default:
        alert('Esta letra não é uma vogal');

}

