function cifrarPalabra(texto, clave) {
    let alfabeto = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let textoCifrado = "";
    texto = texto.toUpperCase(); 

    for (let i = 0; i < texto.length; i++) {
        let letra = texto[i];
        let posicion = alfabeto.indexOf(letra); 

        if (posicion !== -1) { 
            let nuevaPosicion = (posicion + clave) % 26; 
            textoCifrado += alfabeto[nuevaPosicion];
        } else {
            textoCifrado += letra; 
        }
    }

    console.log("Palabra original: " + texto);
    console.log("Palabra cifrada: " + textoCifrado);
}

cifrarPalabra("alejandro", 3);