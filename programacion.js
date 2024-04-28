// Configurar la fecha de vencimiento
var countDownDate = new Date("Jun 23, 2024 17:00:00").getTime();

// Actualizar el contador cada segundo
var x = setInterval(function() {

    // Obtener la fecha y hora actual
    var now = new Date().getTime();

    // Calcular el tiempo restante
    var distance = countDownDate - now;

    // Calcular días, horas, minutos y segundos
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Mostrar el contador
    document.getElementById("dias").innerHTML = days + ":";
    document.getElementById("horas").innerHTML = hours + ":";
    document.getElementById("minutos").innerHTML = minutes + ":";
    document.getElementById("segundos").innerHTML = seconds + "";

    // Si el contador llega a cero, mostrar un mensaje
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("countdown").innerHTML = "EXPIRADO";
    }
}, 1000);



                     