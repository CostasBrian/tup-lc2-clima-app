const botonAgregar = document.getElementById("agregar") /*recibo valor de boton*/
const ciudad = document.getElementById("ciudad_a_agregar") /*recibo valor de input de ciudad*/

function leerLocal() {
    let lista = localStorage.getItem("Lista_Ciudades")
    if (lista) {
        lista = JSON.parse(lista)
    } else {
        lista = []
    }
    return lista
}

function cargarLocal() { /*guardo en local storage*/
    let ciudades = leerLocal()
    ciudades.push(ciudad.value)
    localStorage.setItem("Lista_Ciudades", JSON.stringify(ciudades));
}



botonAgregar.addEventListener("click", cargarLocal) /*escucho el click de agregar*/