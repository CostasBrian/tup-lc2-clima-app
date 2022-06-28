const botonAgregar = document.getElementById("agregar") /*recibo valor de boton*/
const ciudad = document.getElementById("ciudad_a_agregar") /*recibo valor de input de ciudad*/
const exitoMensaje = document.getElementById("succes")
const errorMensaje = document.getElementById("error")
const encontradaMensaje = document.getElementById("found")
const loader = document.getElementById("loader")

//-------------------Comprobar el estado del localstorage--------------------------------
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
            ciudad.value = ""
            loader.style.display = "flex";
            setTimeout(() => {
                loader.style.display = "none";
            }, 2000);
            setTimeout(() => {
                found_mesage()
            }, 2000);
            return false
        }
    } else {
        lista = [] /*si esta vacia se crea la lista*/
    }
    return lista //devuelve la lista convertida en arreglo para agregarle la ciudad
}

//--------------------Cargar las ciudades al storage-----------------------------
function cargarLocal() {
    let ciudades = leerLocal() /*leo la lista generada en otra funcion */
    ciudades.push(ciudad.value) /*agrego la ciudad a la lista*/
    localStorage.setItem("Lista_Ciudades", JSON.stringify(ciudades)); /*fijo los elementos al session storage */
    ciudad.value = ""
    loader.style.display = "flex";
    setTimeout(() => {
        loader.style.display = "none";
    }, 2000);
    setTimeout(() => {
        exito_mesage()
    }, 2000);
}
//--------------------Mostrar mensajes y ocultarlos-------------------------------
function exito_mesage() {
    exitoMensaje.style.display = "block";
    setTimeout(() => {
        exitoMensaje.style.display = "none";
    }, 3000);
}

function found_mesage() {
    encontradaMensaje.style.display = "block";
    setTimeout(() => {
        encontradaMensaje.style.display = "none";
    }, 3000);
}

function error_mesage() {
    errorMensaje.style.display = "block";
    setTimeout(() => {
        errorMensaje.style.display = "none";
    }, 3000);
}

//------------------------Escucho el click de agregar-----------------------------------
botonAgregar.addEventListener("click", function() {
    ConsultarDatos(ciudad.value)
})


//-------------------Extra: comprobar existencia de ciudad-------------------------------
function ConsultarDatos(city) {
    const key = 'cf3c32eca5c309cab34ab9b732fd66a3'
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&units=metric&lang=es`)
        .then(response => response.json())
        .then(data => validar(data))
}

function validar(datos) {
    let codigo = datos.cod
    if (codigo == "404") {
        ciudad.value = ""
        loader.style.display = "flex";
        setTimeout(() => {
            loader.style.display = "none";
        }, 2000);
        setTimeout(() => {
            error_mesage()
        }, 2000);
    } else {
        cargarLocal()
    }
}