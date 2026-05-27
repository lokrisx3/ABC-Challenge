function aleatorio() {
    let color = ["Azul", "Rojo", "Verde"]
    let azar = Math.floor(Math.random() * color.length);
    let seleccion = color[azar]
    return seleccion;
}

console.log(aleatorio())

let etiquetasH5 = document.querySelectorAll("h5");
let coloresCss = {
    Azul: "blue",
    Rojo: "red",
    Verde: "green"
};

etiquetasH5.forEach(function (etiqueta) {
    etiqueta.addEventListener("click", function () {
        let color = aleatorio();
        etiqueta.style.color = coloresCss[color];
    });
});
