const botonAgregar = document.getElementById("agregar") /*recibo valor de boton*/
const ciudad = document.getElementById("ciudad_a_agregar") /*recibo valor de input de ciudad*/
    //----------------------------------------------------------------------------------------------------------------------------
    //funcion para comprobar el estado del storage
function leerLocal() {
    let lista = localStorage.getItem("Lista_Ciudades") /*leo el contenido de sessionstorage y lo ingreso en una lista*/
    lista = JSON.parse(lista) /*convierte a array*/
    let band = true
    if (lista) {
        for (let i = 0; i < lista.length; i++) {
            if (lista[i] == ciudad.value) {
                band = false
                break;
            }
        }
        if (band == false) {
            return found_mesage()
        }
    } else {
        lista = [] /*sino se crea la lista*/
    }
    return lista //devuelve la lista convertida para en arreglo para agregarle la ciudad
}
//---------------------------------------------------------------------------------------------------------------------------
//fubcion para cargar las ciudades al storage 
function cargarLocal() {
    let ciudades = leerLocal() /*leo la lista generada en otra funcion */
    ciudades.push(ciudad.value) /*agrego la ciudad a la lista*/
    localStorage.setItem("Lista_Ciudades", JSON.stringify(ciudades)); /*fijo los elementos al session storage */
    console.log("123")
    exito_mesage()
    time()
    limpiarInput()
}

//----------------------------------------------------------------------------------------------------------------------------
//funcion para limpiar el input
function limpiarInput() {
    ciudad.value = ""
}
//----------------------------------------------------------------------------------------------------------------------------
function error_mesage() {
    document.getElementById("error").style.display = "block"
}

function hide_error_mesage() {
    document.getElementById("error").style.display = "none"
}
//----------------------------------------------------------------------------------------------------------------------------
function exito_mesage() {
    document.getElementById("succes").style.display = "block"
}

function hide_exito_mesage() {
    document.getElementById("succes").style.display = "none"
}
//----------------------------------------------------------------------------------------------------------------------------
function found_mesage() {
    document.getElementById("found").style.display = "block"

}

function hide_found_mesage() {
    document.getElementById("found").style.display = "none"

}
//----------------------------------------------------------------------------------------------------------------------------
function exito_mesage() {
    setTimeout(function() {
        document.getElementById("succes").style.display = "block";
    }, 0);

    setTimeout(function() {
        document.getElementById("succes").style.display = "none";
    }, 2000);
}


function time() {
    setTimeout(hide_exito_mesage(), 2000)
}
//----------------------------------------------------------------------------------------------------------------------------
botonAgregar.addEventListener("click", cargarLocal)
    /*escucho el click de agregar*/