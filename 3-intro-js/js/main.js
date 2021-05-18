function init() {
    var grafica = document.getElementById("sec_grafica");
    grafica.style.display = "none";

    var mapa = document.getElementById("sec_mapa");
    mapa.style.display = "none";
}

function cambio(ref) {
    ocultar();
    var elemento =  document.getElementById(ref);
    elemento.style.display = "block";
}

function ocultar() {
    var texto = document.getElementById("sec_texto");
    texto.style.display = "none";

    var grafica = document.getElementById("sec_grafica");
    grafica.style.display = "none";

    var mapa = document.getElementById("sec_mapa");
    mapa.style.display = "none";
}