    //variables
    let num1=document.getElementById("numero1")
    let num2=document.getElementById("numero2")
    let boton = document.getElementById("run")
    let salida=document.getElementById("salida")
    let indice = 0

    //eventos
  boton.addEventListener("click", (e) => {
    console.log("Han clicado sobre: " + e.target.id)
    indice++
    let texto= ""
    texto += '<input type="button" value="borrar" id=${indice} >'+ num1.value +"<br>"
    salida.innerHTML += texto

    //apunto al id
    borrar1 = document.getElementById(indice)
    borrar1.addEventListener("click", (ev) =>{
      console.log("Aqui")
      alert("Soy yo")
    })
  })

//main