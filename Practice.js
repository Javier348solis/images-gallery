var input1 = document.getElementById("input1")
var input2 = document.getElementById("input2")
var input3 = document.getElementById("input3")
var btn4 = document.getElementById("btn4")
    
btn4.addEventListener("click", (e) => {

    const listaUsuarios = JSON.parse(localStorage.getItem("listaUsuarios"))
    let usuarios = {
      nombre: input1.value,
      correo: input2.value,
      contrasenia: input3.value,
      }
      
      let usuarioEncontrado = listaUsuarios.find(u=>input1.value === nombre.value && input2.value===correo.value)
      if (usuarioEncontrado) {
        alert("INGRESA")  
      }
 
   } 
)
