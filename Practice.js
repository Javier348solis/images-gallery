var input1 = document.getElementById("input1")
var input2 = document.getElementById("input2")
var input3 = document.getElementById("input3")
var btn4 = document.getElementById("btn4")
    
btn4.addEventListener("click", (e) => {
    const Users = JSON.parse(localStorage.getItem("users")) || []
    console.log(input1.value,input2.value,input3.value)
    console.log(Users)
   console.log(Users[1].correo)

   const validacionUsuario = Users.find(user => user.correo === input1.value && user.contrasenia === input2.value)

   if(validacionUsuario){
    alert("datos correctos")
    window.location.href="pagina-principal.html"
   }else{
    alert("DATOS INCORRECTOS, METASE EN LA VARA")
   }

    // if (input1.value === "javiersolisretana@gmail.com" && input2.value === "Javier12pxc56" && input3.value === "123456") {
    //    e.preventDefault()
    // } else {
        
    // }   
})


//users[index].correo   