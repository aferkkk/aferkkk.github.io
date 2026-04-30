//diferentes pruebas
    //variables
    let num1=document.getElementById("numero1")
    let num2=document.getElementById("numero2")
    let boton = document.getElementById("run")
    let salida=document.getElementById("salida")

    //eventos
    boton.addEventListener("click", (e) => {
        console.log("Me han pulsado" + num1.value * num2.value)

        salida.innerHTML = "El resultado es: " + num1.value * num2.value
    })