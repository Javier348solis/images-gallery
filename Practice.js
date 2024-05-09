var input1 = document.getElementById("input1")
var input2 = document.getElementById("input2")
var input3 = document.getElementById("input3")
var btn4 = document.getElementById("btn4")
    
btn4.addEventListener("click", (e) => {



    const Users = JSON.parse(localStorage.getItem("listaUsuarios"))

   console.log(Users[1].correo)

   if (input1.value ==Users[1].correo) {
    
   
   }else{
    console.log('correo invalido')

    const validacionUsuario = Users.find(user => user.correo === input1.value && user.contrasenia === input2.value)
 
    if(validacionUsuario){
     alert("datos correctos")
    
    }else{
     alert("DATOS INCORRECTOS, METASE EN LA VARA")
    }
 
     // if (input1.value === "javiersolisretana@gmail.com" && input2.value === "Javier12pxc56" && input3.value === "123456") {
     //    e.preventDefault()
     // } else {
         
     // }  
   }
 
 
})


//users[index].correo   