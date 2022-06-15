ciudad_get = localStorage.getItem("Lista_Ciudades") /*leo sessionstorge*/
lista = JSON.parse(ciudad_get)
if (lista) {
    document.getElementById("empty").style.display = "none";
}

/*bucle para crear las opciones a medida q se ingresa una ciudad*/
for (i = 0; i <= lista.length; i++) {
    const select = document.querySelector('select') /*leo elemento html*/
    const opcion = document.createElement("option") /*creo elemento opcion */
    opcion.value = lista[i]
    opcion.textContent = lista[i] /*asigno valor a elemento opcion*/
    select.appendChild(opcion) /*coloco el opcion como child del select*/
}
//---------------------------------------------------------------------------------------------
//solicitud a la API

const botonConsultar = document.getElementById("consultar")
const seleccionCiudad = document.getElementById("seleccionable")


async function ConsultarDatos() {
    const key = 'cf3c32eca5c309cab34ab9b732fd66a3'
    const respApi = await fetch('http://api.openweathermap.org/data/2.5/weather?q={seleccionCiudad.value}&appid={key}&units=metric&lang=es', {
        method: "get"
    })
    return respApi
}

botonConsultar.addEventListener("click", async() => {
    const ciudad = seleccionCiudad.value
    const resultadoClima = await ConsultarDatos(ciudad)
})