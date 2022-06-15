ciudad_get = localStorage.getItem("Lista_Ciudades") /*leo sessionstorge*/
lista = JSON.parse(ciudad_get)
console.log(lista)

/*bucle para crear las opciones a medida q se ingresa una ciudad*/
for (i = 0; i <= lista.length; i++) {
    const select = document.querySelector('select') /*leo elemento html*/
    const opcion = document.createElement("option") /*creo elemento opcion */
    opcion.value = lista[i]
    opcion.textContent = lista[i] /*asigno valor a elemento opcion*/
    select.appendChild(opcion) /*coloco el opcion como child del select*/
}