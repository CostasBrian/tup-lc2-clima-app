const botonAgregar = document.getElementById("agregar") /*recibo valor de boton*/
const ciudad = document.getElementById("ciudad_a_agregar") /*recibo valor de input de ciudad*/
    //----------------------------------------------------------------------------------------------------------------------------
    //funcion para comprobar el estado del localstorage
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
            limpiarInput()
            return found_mesage()
        }
    } else {
        lista = [] /*si esta vacia se crea la lista*/
    }
    return lista //devuelve la lista convertida en arreglo para agregarle la ciudad
}
//---------------------------------------------------------------------------------------------------------------------------
//funcion para cargar las ciudades al storage 
function cargarLocal() {
    let ciudades = leerLocal() /*leo la lista generada en otra funcion */
    ciudades.push(ciudad.value) /*agrego la ciudad a la lista*/
    localStorage.setItem("Lista_Ciudades", JSON.stringify(ciudades)); /*fijo los elementos al session storage */
    exito_mesage()
    limpiarInput()
}

//----------------------------------------------------------------------------------------------------------------------------
//funcion para limpiar el input
function limpiarInput() {
    ciudad.value = ""
}
//----------------------------------------------------------------------------------------------------------------------------
//funciones para mostrar mensajes y ocultarlos
function exito_mesage() {
    document.getElementById("succes").style.display = "block";


    setTimeout(() => {
        document.getElementById("succes").style.display = "none";
    }, 3000);
}

function found_mesage() {
    document.getElementById("found").style.display = "block";

    setTimeout(() => {
        document.getElementById("found").style.display = "none";
    }, 3000);
}

function error_mesage() {
    document.getElementById("error").style.display = "block";

    setTimeout(() => {
        document.getElementById("error").style.display = "none";
    }, 3000);
}
//----------------------------------------------------------------------------------------------------------------------------
botonAgregar.addEventListener("click", cargarLocal)
    /*escucho el click de agregar*/