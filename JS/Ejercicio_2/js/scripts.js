function numeroAleatorio(max) {
    let numero = Math.floor(Math.random() * max) + 1;
    return numero;
}

function generarPrimitiva() {
    let numeros = [];

    while (numeros.length < 6) {
        let numero = numeroAleatorio(49);

        if (numeros.indexOf(numero) > -1) {
            console.log("El número estaba en lista: " + numero);
        } else {
            numeros.push(numero);
        }
    }

    console.log("Tu boleto es: " + numeros);
}