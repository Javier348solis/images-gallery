var input1 = document.getElementById("input1")
var input2 = document.getElementById("input2")
var input3 = document.getElementById("input3")
var btn4 = document.getElementById("btn4")

const listaUsuarios = JSON.parse(localStorage.getItem("listaUsuarios"))
btn4.addEventListener("click", () => {
      let usuarioEncontrado = listaUsuarios.find(u=> u.correo === input1.value && u.contrasenia===input2.value && u.confirmar===input3.value)
       if (usuarioEncontrado) {
        alert("Datos correctos")  
        window.location.href="pagina-principal.html"
      }else{
        alert("Usuario o contraseña incorrectos, METASE EN LA VARA!!!")
      }
     
   } 
)
