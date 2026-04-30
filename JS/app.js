let alfabeto = "abcdefghijklmnopqrstuvwxyz"
let frase="casa"
let paso= 3

for (let i= 0; i<frase.length; i++){
    let posicion = alfabeto.indexOf(frase[i])
    let letraCifrada = frase[posision + paso]
    console.log("la letra: "+ frase[i+paso] + "está en la posición: " + posicion + "y es: " + letraCifrada)
}
console.log(alfabeto[8])