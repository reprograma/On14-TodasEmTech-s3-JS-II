/* 

CÓDIGO USANDO IF - ELSE IF - ELSE

var letra = prompt("Insira uma letra:").toLowerCase();

if (letra.length > 1) {
    alert("Você digitou mais de um caracter!");
}

else if (letra == "a" || letra == "e" || letra == "i" || letra == "o" || letra == "u") {
    alert("Você digitou uma letra vogal!");
}

else if (letra == "0" || letra == "1" || letra == "2" || letra == "3" || letra == "4" || letra == "5" || letra == "6" || letra == "7" || letra == "8" || letra == "9") {
    alert("Você digitou um número!");
}

else if (letra == "!" || letra == "?" || letra == "@" || letra == "#" || letra == "%" || letra == "&") {
    alert("Você digitou um simbolo!");
}

else {
    alert("Você digitou uma letra consoante!");
}

*/

var letra = prompt("Insira uma letra:").toLowerCase();

if (letra.length > 1) {
    alert("Você digitou mais de um caracter!");
}

else {
    switch (letra) {
        case "a": case "e": case "i": case "o": case "u": alert("Você digitou uma vogal!");
            break;
        default: alert("Você digitou uma consoante!");
    }
}