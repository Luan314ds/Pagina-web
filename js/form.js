document.querySelector(".boton").addEventListener("click", toggleMenu);

function toggleMenu() {
    document.querySelector(".navegacion").classList.toggle("show");
}

let form = document.querySelector ("#form");
form.addEventListener("submit", agregar);
function agregar(e) {
    e.preventDefault();
    console.log("iniciado")
}

let enviar = document.querySelector("#enviar");
enviar.addEventListener("click", iniciar);
function iniciar(){
    window.location.href = 'index.html';
}
