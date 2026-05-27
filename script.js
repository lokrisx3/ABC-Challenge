function aleatorio() {
    let color = ["Azul", "Rojo", "Verde"]
    let azar = Math.floor(Math.random() * color.length);
    let seleccion = color[azar]
    return seleccion;
}

console.log(aleatorio())

function cargarNavbar() {
    let contenedorNavbar = document.querySelector("#navbar-container");
    let paginaActual = window.location.pathname.split("/").pop() || "index.html";
    let paginas = [
        { nombre: "Home", url: "index.html" },
        { nombre: "About Us", url: "about-us.html" },
        { nombre: "Contact Us", url: "contact-us.html" }
    ];
    let botones = "";

    paginas.forEach(function (pagina) {
        if (pagina.url !== paginaActual) {
            botones += `<a class="btn btn-outline-primary" href="${pagina.url}">${pagina.nombre}</a>`;
        }
    });

    if (contenedorNavbar) {
        contenedorNavbar.innerHTML = `
            <nav class="navbar navbar-gris fixed-top border-bottom shadow-sm">
                <div class="container d-flex justify-content-between align-items-center gap-3 flex-wrap">
                    <a class="navbar-brand text-decoration-none" href="index.html">
                        <h5 class="mb-0">ABC-Challenge</h5>
                    </a>
                    <div class="d-flex gap-2 flex-wrap">
                        ${botones}
                    </div>
                </div>
            </nav>
        `;
    }
}

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

cargarNavbar();
cargarFooter();

let etiquetasH5 = document.querySelectorAll("h5");
let coloresCss = {
    Azul: "blue",
    Rojo: "red",
    Verde: "green"
};

etiquetasH5.forEach(function (etiqueta) {
    etiqueta.addEventListener("click", function (evento) {
        evento.preventDefault();
        let color = aleatorio();
        etiqueta.style.color = coloresCss[color];
    });
});
