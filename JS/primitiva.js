function numerosAleatorios(max){
    let numero = (Math.random() * max) +1
    return numero
}

let numero = 0

let cantidad = 0
let numeros = []

while (cantidad <=6){
    cantidad++
    numero = numerosAleatorios(49)
    if (numeros.indexOf(numero) > -1){
        console.log("El número estaba en lista" + numero)
    } else
        numeros.push(numero)
}
console.log(numeros)