// Tiempo de espera en milisegundos
let tiempoEspera = 60000; // 2 minuto

// Variable para almacenar el temporizador
let temporizador;

// Función para reiniciar el temporizador
function reiniciarTemporizador() {
    clearTimeout(temporizador);
    temporizador = setTimeout(recargarPantalla, tiempoEspera);
}

// Función para recargar la pantalla
function recargarPantalla() {
    window.location.href = '../../index.html';
}

// Evento que se dispara cuando la página se carga
window.onload = function () {
    reiniciarTemporizador();
};

// Eventos que se disparan cuando el usuario interactúa con la pantalla
window.onmousemove = function () {
    reiniciarTemporizador();
};

window.onkeypress = function () {
    reiniciarTemporizador();
};
