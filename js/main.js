const notebook = 10000
const marcas = ["hp", "dell", "lenovo"]
const hp = 35000
const dell = 39000
const lenovo = 42000
const errores = ["hardware", "software"]
const hardware = 20000
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
                        let antiguedadPc = parseInt(prompt("Hace cuantos años posee el equipo?"))
                        let errores = prompt("el tipo de error es de Hardware o Software?")
                        let marcas = prompt("Ingrese la marca de su equipo (HP, Dell o Lenovo)")
                                                
                        function sumaPc (antiguedadPc, errores, marcas) {
                            let cotizacionPc
                            if (antiguedadPc >= 3){
                                cotizacionPc = sinGarantia + errores + marcas
                            }else { 
                                cotizacionPc = conGarantia + errores + marcas
                            }
                            alert("La cotización para la reparación de su Equipo de escritorio marca: "+marcas+", con una antigüedad de "+antiguedadPc+" año/s, y error de "+errores+" es de: $"+cotizacionPc)
                        }
                        sumaPc(antiguedadPc, errores, marcas)                                        
                    }
                    
                    else if (tipoEquipo = 2) {
                        let antiguedadNotebook = parseInt(prompt("Hace cuantos años posee el equipo?"))
                        let errorHoS = prompt("El tipo de error es de Hardware o Software?")
                        let marcaPc = prompt("Ingrese la marca de su equipo (HP, Dell o Lenovo)")
                                            
                        function sumaNotebook (notebook, marcas, antiguedadNotebook, errorHoS) {
                            let cotizacionNotebook
                            if (antiguedadNotebook >= 3) {
                            cotizacionNotebook = notebook + conGarantia + marcaPc + errorHoS
                            } else { 
                            cotizacionNotebook = notebook + sinGarantia + marcaPc + errorHoS
                            }
                            alert(" La cotización para la reparación de su Notebook marca: "+marcaPC+", con una antigüedad de "+antiguedadPc+" año/s, y error de "+errorHoS+" es de: $"+cotizacionNotebook)
                        }
                        sumaNotebook()                        
                        
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


