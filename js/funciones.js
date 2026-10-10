function mostrarMensaje(){
    alert("¡Bienvenido al mundo del fútbol!")
}

let imagenes = document.querySelectorAll(".imagen-carrusel");
let indiceActual = 0;

imagenes.forEach(function(imagen, indice){
    if(indice !== 0){
        imagen.style.display = "none"; 
    }
});

document.getElementById("siguiente").addEventListener("click", function() {
    imagenes[indiceActual].style.display = "none";

    indiceActual ++;

    if(indiceActual >= imagenes.length){
        indiceActual = 0;
    }

    imagenes[indiceActual].style.display = "block";
});

document.getElementById("anterior").addEventListener("click", function() {
    imagenes[indiceActual].style.display = "none";

    indiceActual--;

    if(indiceActual < 0){
        indiceActual = imagenes.length - 1;
    }

    imagenes[indiceActual].style.display = "block";
});