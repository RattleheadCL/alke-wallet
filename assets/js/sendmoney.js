// ================================
// BALANCE SIMULADO
// ================================

let balanceDB = 100000;

const balanceEl = document.getElementById("balance");

balanceEl.innerText = balanceDB.toLocaleString("es-CL");

// ================================
// CONTACTOS SIMULADOS
// ================================

const contactos = [
    {
        id: 1,
        nombre: "John Doe",
        cbu: "123456789",
        alias: "john.doe",
        banco: "ABC Bank",
    },
    {
        id: 2,
        nombre: "Jane Smith",
        cbu: "987654321",
        alias: "jane.smith",
        banco: "XYZ Bank",
    },
];

// ================================
// DIBUJAR CONTACTOS
// ================================

function dibujarContactos(listaContactos) {

    let elementosLista = "";

    for (const contacto of listaContactos) {

        let { id, nombre, cbu, alias, banco } = contacto;

        elementosLista += `
            <li class="list-group-item">
                <input
                    class="form-check-input me-1"
                    type="radio"
                    name="contacto"
                    value="${id}"
                    id="contacto${id}"
                >

                <label
                    class="form-check-label"
                    for="contacto${id}"
                >
                    ${nombre}
                    <br>
                    Alias: ${alias}
                    <br>
                    Banco: ${banco}
                </label>
            </li>
        `;
    }

    document.getElementById("listaContactos").innerHTML =
        elementosLista;
}

// ================================
// INICIO
// ================================

dibujarContactos(contactos);

// ================================
// FILTRO DE CONTACTOS
// ================================

const buscarContactoEl =
    document.getElementById("buscarContacto");

buscarContactoEl.addEventListener("input", function () {

    let textoBusqueda =
        buscarContactoEl.value.toLowerCase();

    const contactosFiltrados =
        contactos.filter(contacto => {

            return (
                contacto.nombre.toLowerCase().includes(textoBusqueda) ||
                contacto.alias.toLowerCase().includes(textoBusqueda) ||
                contacto.cbu.includes(textoBusqueda) ||
                contacto.banco.toLowerCase().includes(textoBusqueda)
            );

        });

    dibujarContactos(contactosFiltrados);

});

// ================================
// JQUERY
// ================================

$(document).ready(function () {

    console.log("jQuery funcionando");

    $("#formSendMoney").submit(function (event) {

        event.preventDefault();

        const contactoSeleccionado =
            $('input[name="contacto"]:checked');

        const monto =
            Number($("#monto").val());

        // VALIDAR CONTACTO

        if (contactoSeleccionado.length === 0) {

            $("#mensajeTransferencia")
                .hide()
                .html(`
                    <div class="alert alert-danger">
                        Debe seleccionar un contacto.
                    </div>
                `)
                .fadeIn();

            return;
        }

        // VALIDAR MONTO

        if (isNaN(monto) || monto < 500) {

            $("#mensajeTransferencia")
                .hide()
                .html(`
                    <div class="alert alert-danger">
                        El monto mínimo es $500.
                    </div>
                `)
                .fadeIn();

            return;
        }

        // VALIDAR SALDO

        if (monto > balanceDB) {

            $("#mensajeTransferencia")
                .hide()
                .html(`
                    <div class="alert alert-danger">
                        Saldo insuficiente.
                    </div>
                `)
                .fadeIn();

            return;
        }

        // DESCONTAR SALDO

        balanceDB -= monto;

        // ACTUALIZAR BALANCE

        $("#balance").text(
            balanceDB.toLocaleString("es-CL")
        );

        // OBTENER NOMBRE DEL CONTACTO

        const idContacto =
            Number(contactoSeleccionado.val());

        const contacto =
            contactos.find(c => c.id === idContacto);

        // MENSAJE DE ÉXITO

        $("#mensajeTransferencia")
            .hide()
            .html(`
                <div class="alert alert-danger">
                    Transferencia realizada a
                    <strong>${contacto.nombre}</strong>
                    por
                    <strong>$${monto.toLocaleString("es-CL")}</strong>.
                </div>
            `)
            .fadeIn();

        // LIMPIAR CAMPO

        $("#monto").val("");

    });

});