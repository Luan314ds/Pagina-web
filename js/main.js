// Comienzo del menu hamburgueza
document.querySelector(".boton").addEventListener("click", Menu);

function Menu() {
    document.querySelector(".navegacion").classList.toggle("show");
}
// fin del menu hamburguesa


// Comienzo del slide
let btnizquierda = document.querySelector(".boton-izquierda");
let btnderecha = document.querySelector(".boton-derecha");
let slider = document.querySelector("#sliders");
let slidersection = document.querySelectorAll(".slider-section");


btnizquierda.addEventListener("click", moverizquierda);
btnderecha.addEventListener("click", moverderecha);

let operacion = 0,
    counter = 0,
    widthImg = 100 / slidersection.length;

function moverderecha() {
    if (counter >= slidersection.length-1) {
        counter = 0;
        operacion = 0;
        slider.style.transform = `translate(-${operacion}%)`;
        slider.style.transition = "none";
        return;
    } 
    counter++;
    operacion = operacion + widthImg;
    slider.style.transform = `translate(-${operacion}%)`;
    slider.style.transition = "all ease .6s"
    
}  

function moverizquierda() {
    counter--;
    if (counter < 0 ) {
        counter = slidersection.length-1;
        operacion = widthImg * (slidersection.length-1)
        slider.style.transform = `translate(-${operacion}%)`;
        slider.style.transition = "none";
        return;
    } 
    operacion = operacion - widthImg;
    slider.style.transform = `translate(-${operacion}%)`;
    slider.style.transition = "all ease .6s"
    
    
}   
// fin del slide

