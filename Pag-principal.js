window.addEventListener("load", function () {
    var imagenes = this.document.querySelectorAll("img"); //Declaramos una variable que recoja todos la coleccion de imagenes
    
    var mostrarFotoGrande = (f) => {
        switch(f.target.id) {             //capturar el metodo de imagen seleccionado
        case "1":break;
        case "2":break;
        case "3":break;
        case "4":break;
        case "5":break;
        case "6":break;
        case "7":break;
        case "8":break;
        case "9":break;
        case "10":break;
        case "11":break;
        case "12":break;
        case "13":break;
        case "14":break;
        case "15":break;
        case "16":break;
        }
    }
    
    
    imagenes.forEach((i) => {
     i.addEventListener("click", mostrarFotoGrande)
    });
})