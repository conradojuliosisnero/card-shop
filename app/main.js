const flechaDerecha = document.querySelector('.right');
const flechaIzquierda = document.querySelector('.left');
const slaider = document.querySelector('.card__img');

flechaDerecha.addEventListener("click",e => moverDerecha());
flechaIzquierda.addEventListener("click",e => moverIzquierda());

let index = 0; 
counter = 0;


function moverDerecha() {
    // funcion 
    counter++;
    index = index + 100;
    slaider.style.transform = `translate(-${index}%)`;
}

function moverIzquierda() {
    index = index - 100;
    slaider.style.transform = `translate(-${index}%)`;
}
