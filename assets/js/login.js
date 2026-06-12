$(document).ready(function () {

    const emailValido = "admin@alkewallet.cl";
    const passwordValida = "abc123";

    $("#formLogin").submit(function (event) {

        event.preventDefault();

        const emailIngresado = $("#email").val().trim();
        const passwordIngresada = $("#password").val().trim();

        if (
            emailIngresado === emailValido &&
            passwordIngresada === passwordValida
        ) {

            $("body").fadeOut(500, function () {
                window.location.href = "./deposit.html";
            });

        } else {

            alert("Email o contraseña incorrectos");
        }

    });

});