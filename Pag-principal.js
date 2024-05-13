let contenedorimgbox = document.getElementById("contenedorimgbox")
let fullimagen = document.getElementById("fullimagen")

function abririmg(reference) {
    contenedorimgbox.style.display= "flex"
    fullimagen.src=reference
}
function cerrarimg() {
    contenedorimgbox.style.display= "none"
}