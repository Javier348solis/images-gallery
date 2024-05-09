const boton3 = document.getElementById("boton3")

const nombre = document.getElementById("Nombre")
const correo = document.getElementById("Correo")
const contrasena = document.getElementById("Contrasena")
const confirmar = document.getElementById("Confirmar")

//recordar la info al array 
let listaUsuarios=[]

boton3.addEventListener("click", (e)=>{
    e.preventDefault()
  
  

    let usuarios = {
    nombre: nombre.value,
    correo: correo.value,
    contrasenia: contrasena.value,
    confirmar:confirmar.value,
    }



    listaUsuarios.push(usuarios)


    localStorage.setItem("listaUsuarios",JSON.stringify(listaUsuarios));

    
   /* const isUsersRegistered = Users.find(user => user.correo === Correo.value)
    if (isUsersRegistered) {
        return alert("El usuario ya esta registrado")
    }
    Users.push(usuarios)
    localStorage.setItem("users",JSON.stringify(Users))
    */
})