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


function ConsultarDatos(city) {
    const key = 'cf3c32eca5c309cab34ab9b732fd66a3'
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&units=metric&lang=es`)
        .then(response => response.json())
        .then(data => mostrarDatos(data))
}

function mostrarDatos(datos) {
    let temp = datos.main.temp
    let sens = datos.main.feels_like
    let hum = datos.main.humidity
    let pres = datos.main.pressure
    let vel_viento = datos.wind.speed
        //------------------
    document.getElementById("temp").innerHTML = `Temperatura: ${temp}`
    document.getElementById("sensacion").innerHTML = `Sensacion térmica: ${sens}`
    document.getElementById("humedad").innerHTML = `Humedad: ${hum}`
    document.getElementById("viento").innerHTML = `velocidad_viento: ${vel_viento}`
    document.getElementById("presion").innerHTML = `presion: ${pres}`
}

botonConsultar.addEventListener("click", async() => {
    const ciudad = seleccionCiudad.value
    const resultadoClima = await ConsultarDatos(ciudad)
})