//CREAMOS UNA VARIABLE CON UN MONTO SIMULANDO EL BALANCE DE LA CUENTA EN UNA BASE DE DAOS

let balanceDB = 100_000;

//CAPTURAMOS EL ELEMENTO CON EL ID INDICADO Y LO GUARDAMOS EN UNA CONSTANTE
const balanceEL = document.getElementById("balance");

// ASIGNAMOS EL VALOR DEL BALANCE DE LA BASE DE DATOS SIMULADA AL ELEMENTO
balanceEL.innerText = balanceDB.toLocaleString("es-CL");


// CAPTURAMOS EL FORMULARIO Y LO GUARDAMOS EN UNA VARIABLE
const formDepositoEL = document.getElementById("formDeposito");

// CAPTURAMOS EEL EVENTO SUBMITQUE HACE EL FORMULARIO DE DEPOSITO

formDepositoEL.addEventListener("submit", function (event) {
    // PREVENIMOS EL COMPORTAMIENTO POR DEFECTO DEL FORMULARIO
    event.preventDefault();

    // CAPTURAMOS EL VALOR DEL INPUT DONDE SE INGRESA EL MONTO A DEPOSITAR
    let montoDeposito = document.getElementById("monto").value;

    montoDeposito = Number(montoDeposito);

    // ACTUALIZAR MONTO DE LA BASE DE DATOS SIMULADA SUMANDO EL MONTO DE DEPOSITO se debe realizar conversion de tipo a numero para que no se concatene el valor sino que se sume
    balanceDB += montoDeposito;

    // ACTUALIZAR EL VALOR DEL BALANCE EN EL DOM CON EL NUEVO VALOR DE LA BASE DE DATOS SIMULADA
    balanceEL.innerText = balanceDB.toLocaleString("es-CL");

    //LIMPIAMOS EL FORMULARIO
    formDepositoEL.reset();

    alert("Depósito de $" + montoDeposito.toLocaleString("es-CL") + " realizado con éxito");
}); 