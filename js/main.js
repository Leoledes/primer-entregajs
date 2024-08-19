let nombreUsuario = prompt("Ingrese su nombre")
let email = prompt("Ingrese su direccion de correo electronico")
let sector = prompt("Ingrese su sector")
let id = parseInt(prompt("Ingrese su id de empleado"))
console.log(nombreUsuario, email, sector, id)
alert("Bienvenido al sistema de tickets, confirme si los datos ingresados son correctos: \n "+nombreUsuario+" \n "+email+" \n "+sector+" \n "+id)

let menu = parseInt(prompt("Ingrese 1 Para realizar un ticket nuevo, 2 Para consultar el estado de un ticket abierto, 3 Para hablar con un técnico, * para salir"))
switch(menu){
    case 1:
        console.log("Que tipo de incidente afecta su equipo?")
    case 2:
        console.log("Ingrese el número de ticket que abrió con anterioridad")
    case 3:
        console.log("Un técnico se contactará a la brevedad")
    case 4:
        console.log("Volverá el Menú principal")
}