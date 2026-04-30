function tirarDado(caras) {
    let resultado = Math.floor(Math.random() * caras) + 1;
    
    console.log("Ha salido:  " + resultado);
    return resultado;
}
tirarDado(6);