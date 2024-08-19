const notebook = 10000
const marcas = ["hp", "dell", "lenovo"]
const hp = 35000
const dell = 39000
const lenovo = 42000
const errores = ["hardware", "software"]
const hardware = 20000
const software = 15000
const conGarantía = 0
const sinGarantía = 10000


let nombreUsuario = prompt("Ingrese su nombre")
let email = prompt("Ingrese su direccion de correo electronico")
let sector = prompt("Ingrese su sector")
let id = parseInt(prompt("Ingrese su id de empleado"))
console.log(nombreUsuario, email, sector, id)
alert("Bienvenido al sistema de tickets "+nombreUsuario+",\n "+email+",\n "+sector+",\n "+id)
    
        let continuar = true
        while (continuar){
            let menu = parseInt(prompt("Ingrese 1 Para realizar una cotizacion por reparación, \n 2 Para consultar el estado de un reparación iniciada, \n 3 Para hablar con un técnico, \n otra tecla para salir"))
            switch(menu){
                case 1:
                    let tipoEquipo = parseInt(prompt("Que tipo de equipo tiene? \n 1 Equipo de escritorio, \n 2 Notebook"))
                    for (tipoEquipo == 1) { 
                        let antiguedadPc = parseInt(prompt("Hace cuantos años posee el equipo?"))
                        let errorHoS = prompt("el tipo de error es de Hardware o Software?")
                        let marcaPc = prompt("Ingrese la marca de su equipo (HP, Dell o Lenovo)")
                        alert("La cotización para la reparación de su Equipo de escritorio marca: "+marcaPC+", con una antigüedad de "+antiguedadPC+" año/s, y error de "+errorHoS+" es de: $ ")
                        
                        function sumaPc (antiguedadPc, errorHoS, marcaPC) {
                            if (antiguedadPc >= 3){
                                let cotizacionPc =  sinGarantía + marcaPc + errores
                            } else { 
                                let cotizacionPc = conGarantía + marcaPc + errores
                            }
                            
                        }
                    }
                    
                    for (tipoEquipo == 2) {
                        let antiguedadNotebook = parseInt(prompt("Hace cuantos años posee el equipo?"))
                        let errorHoS = prompt("El tipo de error es de Hardware o Software?")
                        let marcaPc = prompt("Ingrese la marca de su equipo (HP, Dell o Lenovo)")
                                            
                        function sumaNotebook (notebook, marcas, antiguedadNotebook, errorHoS) {
                            if (antiguedadNotebook >= 3) {
                            let cotizacionNotebook = notebook + conGarantía + marcaPc + errorHoS
                            } else { 
                            let cotizacionNotebook = notebook + sinGarantía + marcaPc + errorHoS
                            }
                            alert("La cotización para la reparación de su Notebook marca: "+marcaPC+", con una antigüedad de "+antiguedadPC+" año/s, y error de "+errorHoS+" es de: $ ")
                        }
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


