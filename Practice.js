var input1 = document.getElementById("input1")
var input2 = document.getElementById("input2")    // en estas lineas se llama los id declarados en el HTML
var input3 = document.getElementById("input3")
var btn4 = document.getElementById("btn4")

const listaUsuarios = JSON.parse(localStorage.getItem("listaUsuarios")) //Aqui se utiliza el JSON parse para recorrer los datos del localStorage 
btn4.addEventListener("click", () => {
      let usuarioEncontrado = listaUsuarios.find(u=> u.correo === input1.value && u.contrasenia===input2.value && u.confirmar===input3.value)
       if (usuarioEncontrado) {                                        //Find se utiliza con un for para encontrar las posiciones que necesita cada input
        alert("Datos correctos")  
        window.location.href="pagina-principal.html"                  //Esta se utiliza para redireccionar de la pagina de registro a inicio de sesion
      }else{
        alert("Usuario o contraseña incorrectos, METASE EN LA VARA!!!") //Alerta que se utiliza para indicar si los datos que estan en el local son incorrectos
      }
     
   } 
)
