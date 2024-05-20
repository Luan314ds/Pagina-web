document.querySelector(".boton").addEventListener("click", Menu);

function Menu() {
    document.querySelector(".navegacion").classList.toggle("show");
}

// numero random
let captcha = document.getElementById("captchatexto");
captcha.textContent = Math.floor(100000 + Math.random() * 900000);



let form = document.querySelector("#form");
let resultado = document.getElementById("resultado");

form.addEventListener("submit", agregar);
function agregar(e) {
    e.preventDefault();


    let entradausuario = document.getElementById("captcha").value;
    let valorCaptcha = captcha.textContent;

    if (entradausuario == valorCaptcha) {
        resultado.textContent = "El numero  es correcto. Formulario enviado";
    } else {
        resultado.textContent = "El numero  es incorrecto, acceso invalidado";

    }
}

