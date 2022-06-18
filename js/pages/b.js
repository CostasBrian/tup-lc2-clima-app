for (i = 0; i <= lista.length; i++) {
    const select = document.querySelector('select') /*leo elemento html*/
    const opcion = document.createElement("option") /*creo elemento opcion */
    cityUpper = lista[i][0].toUpperCase() + lista[i].substring(1)
    console.log(lista[i][0])
    opcion.value = cityUpper
    opcion.textContent = cityUpper /*asigno valor a elemento opcion*/
    select.appendChild(opcion) /*coloco el opcion como child del select*/
}