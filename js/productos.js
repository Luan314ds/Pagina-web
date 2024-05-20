// Menu hamburguesa
document.querySelector(".boton").addEventListener("click", Menu);

function Menu() {
    document.querySelector(".navegacion").classList.toggle("show");
}

// Menu lateral
const nav = document.querySelector("#nav");
const abrir = document.querySelector("#abrir");
const cerrar = document.querySelector("#cerrar");
const tarjeta = document.querySelectorAll(".tarjeta");

abrir.addEventListener("click", mostrar);
function mostrar() {
    nav.classList.add("visible");
   tarjeta.forEach(element => {
    element.classList.remove("tarjeta-sinnav")
   });
}
cerrar.addEventListener("click", ocultar);

function ocultar() {
    nav.classList.remove("visible");
    tarjeta.forEach(element => {
        element.classList.add("tarjeta-sinnav")
       });
}

tarjeta.forEach(element => {
    element.classList.add("tarjeta-sinnav")
   });
