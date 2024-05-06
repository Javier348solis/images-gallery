var input1 = document.getElementById("input1")
var input2 = document.getElementById("input2")
var input3 = document.getElementById("input3")
var btn4 = document.getElementById("btn4")

btn4.addEventListener("click", (e) => {
    if (input1.value === "javiersolisretana@gmail.com" && input2.value === "Javier12pxc56" && input3.value === "123456") {
       e.preventDefault()
        window.location.href="crear-cuenta.html"
    } else {
        alert("Datos incorectos")
    }
})