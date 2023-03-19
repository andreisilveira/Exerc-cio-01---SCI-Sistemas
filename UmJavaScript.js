function calcular() {
    // Obter os valores dos campos de texto
    var numero1 = parseInt(document.getElementById("numero1").value);
    var numero2 = parseInt(document.getElementById("numero2").value);
    var numero3 = parseInt(document.getElementById("numero3").value);
    var numero4 = parseInt(document.getElementById("numero4").value);
    var numero5 = parseInt(document.getElementById("numero5").value);

    // Calcular a média geral
    var media = (numero1 + numero2 + numero3 + numero4 + numero5) / 5;

    // Exibir a média geral
    document.getElementById("resultado").innerHTML = "Média geral: " + media.toFixed(2);

    // Inicializar as variáveis para os números pares e ímpares
    var pares = "";
    var impares = "";

    // Verificar se cada número é par ou ímpar e adicioná-lo à respectiva lista
    if (numero1 % 2 == 0) {
        pares += numero1 + ", ";
    } else {
        impares += numero1 + " ";
    }
    if (numero2 % 2 == 0) {
        pares += numero2 + " ";
    } else {
        impares += numero2 + " ";
    }
    if (numero3 % 2 == 0) {
        pares += numero3 + " ";
    } else {
        impares += numero3 + " ";
    }
    if (numero4 % 2 == 0) {
        pares += numero4 + " ";
    } else {
        impares += numero4 + " ";
    }
    if (numero5 % 2 == 0) {
        pares += numero5 + " ";
    } else {
        impares += numero5 + " ";
    }

    // Exibir os números pares e ímpares
    document.getElementById("resultado").innerHTML += "<br>Números pares: " + pares;
    document.getElementById("resultado").innerHTML += "<br>Números ímpares: " + impares;
}