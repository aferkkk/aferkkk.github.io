let caracteres = "abcdefghijklmnopqrstuvwxyz";
let caracteresMayusculas = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let caracteresNumeros = "0123456789";
let caracteresEspeciales = "!@#$%^&*()_+|~-={}[]:;'<>?,./";

function numeroAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function generarContrasena(longitud) {
    if (longitud < 8) {
        longitud = 8;
    } 
    if (longitud > 50) {
        longitud = 50;
    }
    let password = "";

    let numNumeros = numeroAleatorio(1, 2);
    for (let i = 0; i < numNumeros; i++) {
        let posicion = numeroAleatorio(0, caracteresNumeros.length - 1);
        password += caracteresNumeros[posicion];
    }

    let numEspeciales = numeroAleatorio(1, 2);
    for (let i = 0; i < numEspeciales; i++) {
        let posicion = numeroAleatorio(0, caracteresEspeciales.length - 1);
        password += caracteresEspeciales[posicion];
    }

    let posicionMayuscula = numeroAleatorio(0, caracteresMayusculas.length - 1);
    password += caracteresMayusculas[posicionMayuscula];

    let caracteresFaltantes = longitud - password.length;
    for (let i = 0; i < caracteresFaltantes; i++) {
        let posicionLetra = numeroAleatorio(0, caracteres.length - 1);
        password += caracteres[posicionLetra];
    }

    password = password.split('').sort(() => Math.random() - 0.5).join('');

    console.log("Contraseña generada (" + longitud + " caracteres): " + password);
    return password;
}

generarContrasena(12);