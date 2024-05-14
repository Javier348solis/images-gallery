let contenedorimgbox = document.getElementById("contenedorimgbox") //la linea 1 y2 son para "llamar" a ese id para darle la funcion a las fotos
let fullimagen = document.getElementById("fullimagen")

function abririmg(reference) {            //Funcion para hacer las fotos mas grandes del tamaño establecido
    contenedorimgbox.style.display= "flex"
    fullimagen.src=reference
}
function cerrarimg() {                    //Este "function se utiliza para darle la funcion a la x que se utilizara para cerrar la foto que desea abrir o biem, hacer mas grande"
    contenedorimgbox.style.display= "none"
}
