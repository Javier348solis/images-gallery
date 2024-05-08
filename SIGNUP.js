const boton3 = document.getElementById("boton3")
boton3.addEventListener("click", (e)=>{
    e.preventDefault()
    const Nombre = document.getElementById("Nombre").value
    const Correo = document.getElementById("Correo").value
    const Contrasenia = document.getElementById("Contraseña").value
    const Confirmar = document.getElementById("Confirmar").value

    const Users = JSON.parse(localStorage.getItem("users")) || []
    let usuarios = {
    nombre: Nombre,
    correo: Correo,
    contrasenia: Contrasenia,
    confirmar:Confirmar
    }
    
    const isUsersRegistered = Users.find(user => user.correo === Correo.value)
    if (isUsersRegistered) {
        return alert("El usuario ya esta registrado")
    }
    Users.push(usuarios)
    localStorage.setItem("users",JSON.stringify(Users))
   
})