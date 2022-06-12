const botonConsultar = document.getElementById("consultar")
const seleccionCiudad = document.getElementById("seleccionable")


async function ConsultarDatos() {
    const key = '6fe1747fb7fbab6df55a5fb305828534'
    const respApi = await fetch('api.openweathermap.org/data/2.5/weather?q={seleccionCiudad.value}&appid={key}&units=metric&lang=es', {
        method: "get",
        headers: new header({
            'Autorization': bearer
        })
    })
    return respApi
}

botonConsultar.addEventListener("click", async() => {
    const ciudad = seleccionCiudad.value
    const resultadoClima = await ConsultarDatos(ciudad)
})


//---------------------------------------------