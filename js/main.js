const notebook = 10000
const marcas = ["hp", "dell", "lenovo"]
const hp = {
    valor: 35000
}
const dell = {
    valor: 39000
}
const lenovo = {
    valor: 42000
}
const errores = ["hardware", "software"]
const hardware = 10000
const software = 15000

const conGarantia = 0
const sinGarantia = 10000


let nombreUsuario = prompt("Ingrese su nombre")
let email = prompt("Ingrese su direccion de correo electronico")
let id = parseInt(prompt("Ingrese su id de empleado"))
console.log(nombreUsuario, email, id)
alert("Bienvenido al sistema de tickets:"+nombreUsuario+" \n Correo:"+email+" \n Empleado N°"+id)
    
let continuar = true
while (continuar !==4){
    let menu = parseInt(prompt("Ingrese: \n 1 - Para realizar una cotizacion por reparación \n 2 - Para consultar el estado de un reparación iniciada \n 3 - Para hablar con un técnico \n Otra tecla para salir"))
    switch(menu){
        case 1:
            let tipoEquipo = parseInt(prompt("Que tipo de equipo tiene? \n 1 - Equipo de escritorio \n 2 - Notebook"))
            if (tipoEquipo == 1) {  
                function sumaPc(antiguedadPc, errorPc) {                  
                let antiguedadPc = parseInt(prompt("Hace cuantos años posee el equipo?"))
                let errorPc = parseInt(prompt("El tipo de error es de Hardware o Software? \n 1 - Hardware \n 2 - Software"))        
                    if (antiguedadPc >= 3) {
                        tieneGarantia = sinGarantia
                    } else {
                        tieneGarantia = conGarantia
                    }
                    if (errorPc == 1) {
                        tipoError = hardware
                    } else if (errorPc == 2) {
                        tipoError = software
                    }
                    let cotizacionPc = tieneGarantia + tipoError
                    return cotizacionPc
                }
                sumaPc()   
                alert("La cotización para la reparación de su Equipo de escritorio marca: "+marcas+", con una antigüedad de "+antiguedadPc+" año/s, y error de "+errores+" es de: $"+cotizacionPc)
            }                   
            else if (tipoEquipo = 2) {           
                let antiguedadNb = parseInt(prompt("Hace cuantos años posee el equipo?"))
                let errorNb = prompt("El tipo de error es de Hardware o Software?")
                let marcaNb = prompt("Que marca es su equipo?")           
            }                 
            break
        case 2:
            console.log("Ingrese el número de ticket que abrió con anterioridad")
            break
        case 3:
            console.log("Un técnico se contactará a la brevedad")
            break
        default:
            console.log("Volverá al Menú principal")
            break
    }

    let confirmar = prompt("Otra consulta? (SI/NO)").toLowerCase()
    if(confirmar == "no") {
        continuar = false
        console.log("Saludos")
    }
}
        


