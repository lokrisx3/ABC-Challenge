function aleatorio(){
    let color = ["Azul","Rojo","Blanco"]
    let azar = Math.floor(Math.random() * color.length);
    let seleccion= color[azar]
    return seleccion;
}

console.log(aleatorio())