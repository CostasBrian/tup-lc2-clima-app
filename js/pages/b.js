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
function OcultarContenedores1() {
    setTimeout(function() {
        $("#succes").hide(6000);
    }, 3000);
}


function time() {
    setTimeout(hide_exito_mesage(), 2000)
}