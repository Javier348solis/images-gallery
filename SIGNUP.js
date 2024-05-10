const boton3 = document.getElementById("boton3")
const nombre = document.getElementById("Nombre")
const correo = document.getElementById("Correo")
const contrasena = document.getElementById("Contrasena")
const confirmar = document.getElementById("Confirmar")
//recordar la info al array 
let listaUsuarios=JSON.parse(localStorage.getItem("listaUsuarios")) || [] // Usamos un arreglo para traer los datos del localStorage. Si no hay datos, el arreglo estará vacío

    boton3.addEventListener("click", (e)=>{
        e.preventDefault()
        let usuarios = {
        nombre: nombre.value,
        correo: correo.value,
        contrasenia: contrasena.value,
        confirmar:confirmar.value,
        } // Usamos un objeto, para guardar más de un dato, dentro del nombre de una misma variable
    
        if(listaUsuarios.length>0){ // Usamos el if, para validar si el arreglo tiene datos, si tiene datos comprobará si el usuario existe, si no tiene datos únicamnete creará el usuario.
            for(let i = 0; i < listaUsuarios.length; i++) {
            if (nombre.value == listaUsuarios[i].nombre) {
            alert("EL USUARIO YA ESTÁ REGISTRADO")
            window.location.href="index.html"
            return;
            }
        }
    }
    listaUsuarios.push(usuarios)
    localStorage.setItem("listaUsuarios",JSON.stringify(listaUsuarios))
    //Acá hacemos la creación del usuario, primero utilizamos el push, para insertar al array que tendrá todos los datos
    // El localStorage se encarga de guardar sobre el nombre de llave listaUsuarios, el dato convertido de JavaScript, que sería el array a un formato JSON
    })
