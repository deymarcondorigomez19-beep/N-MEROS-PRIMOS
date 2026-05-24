// Devuelve un ícono de seguridad según el tamaño del código, me ayude con la IA Lice jeje
function obtenerIcono(numero) {
    if (numero <= 10)    return "🔑";
    if (numero <= 100)   return "🔓";
    if (numero <= 1000)  return "🛡️";
    if (numero <= 9999)  return "🔒";
    return "🏰";
}
 
// Función principal del validador
function validarCodigo() {
 
    // 1. Capturamos el valor ingresado por el usuario
    var numero = parseInt(document.getElementById('codigo').value);
    var divResultado = document.getElementById('resultado');
 
    // 2. Validación: debe ser un número entre 2 y 999999
    if (isNaN(numero) || numero < 2 || numero > 999999) {
        divResultado.innerHTML =
            "<span class='error-msg'>⚠ Por favor, ingresa un número entre 2 y 999 999.</span>";
        return;
    }
 
    // 3. Iniciamos el contador de divisores en cero
    var contador = 0;
 
    // 4. Ciclo for: recorremos desde 1 hasta el propio número
    //    y contamos cuántos divisores exactos tiene
    for (var i = 1; i <= numero; i++) {
 
        // Si el residuo es 0, encontramos un divisor exacto
        if (numero % i == 0) {
            contador = contador + 1;
        }
    }
 
    // 5. Un número primo tiene exactamente 2 divisores: 1 y él mismo
    var esPrimo = (contador == 2);
 
    // 6. Mostramos el resultado en la página con su clasificación
    if (esPrimo) {
        divResultado.innerHTML =
            "<div class='res-valido'>" +
            "  <div class='res-icono'>" + obtenerIcono(numero) + "</div>" +
            "  <div class='res-titulo'>✔ Código Válido</div>" +
            "  <div class='res-numero'>" + numero + "</div>" +
            "  <div class='res-detalle'>Es un número primo — Código SEGURO</div>" +
            "  <div class='res-extra'>Divisores: solo 1 y " + numero + "</div>" +
            "</div>";
    } else {
        divResultado.innerHTML =
            "<div class='res-invalido'>" +
            "  <div class='res-icono'>⚠</div>" +
            "  <div class='res-titulo'>✘ Código No Válido</div>" +
            "  <div class='res-numero'>" + numero + "</div>" +
            "  <div class='res-detalle'>No es primo — Código NO SEGURO</div>" +
            "  <div class='res-extra'>Tiene " + contador + " divisores</div>" +
            "</div>";
    }
}