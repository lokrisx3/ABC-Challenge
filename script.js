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

function cargarFooter() {
    let contenedorFooter = document.querySelector("#footer-container");
    let autores = [
        "Cristian Fritz",
        "Catalina Olave",
        "Maria de los angeles farias",
        "Gustavo Soto"
    ];
    let listaAutores = "";

    autores.forEach(function (autor) {
        listaAutores += `<li class="nav-item"><span class="nav-link px-0 px-sm-2 text-body-secondary">${autor}</span></li>`;
    });

    if (contenedorFooter) {
        contenedorFooter.innerHTML = `
            <div class="container">
                <footer class="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
                    <p class="col-md-4 mb-0 text-body-secondary">&copy; 2025 ABC-Challenge</p>

                    <a href="index.html" class="col-md-4 d-flex align-items-center justify-content-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none" aria-label="ABC-Challenge">
                        <h5 class="mb-0">ABC-Challenge</h5>
                    </a>

                    <div class="col-md-4 text-md-end">
                        <a href="mailto:contacto@abc-challenge.cl" class="d-block mb-2 link-secondary text-decoration-none">contacto@abc-challenge.cl</a>
                        <ul class="nav justify-content-md-end justify-content-start flex-column flex-sm-row flex-wrap">
                            ${listaAutores}
                        </ul>
                    </div>
                </footer>
            </div>
        `;
    }
}

cargarFooter();