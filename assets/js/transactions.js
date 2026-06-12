//CREAMOS UNA VARIABLE CON UN MONTO SIMULANDO EL BALANCE DE CUENTA DE UNA BASE DE DATOS

let balanceDB = 100_000;

//CAPTURAMOS EL ELEMENTO CON EL ID INDICADO Y LO GUARDAMOS EN UNA CONST
const balanceEl = document.getElementById("balance");

//ASIGNAMOS EL VALOR DEL BALANCE DE LA BASE DE DATOS SIMULADA AL ELEMENTO
balanceEl.innerText = balanceDB.toLocaleString("es-CL");


//CREAMOS UNA COLECCIÓN DE TRANSACCIONES SIMULANDO LOS REGISTROS DE UNA BASE DE DATOS

const transacciones = [
    { id: 1, glosa: "Compra en línea", monto: 5000, ingreso: false },
    { id: 2, glosa: "Depósito", monto: 100000, ingreso: true },
    { id: 3, glosa: "Transferencia recibida", monto: 30000, ingreso: true },
    { id: 4, glosa: "Compra en Mercado Libre", monto: 26000, ingreso: false }
];

//CREAMOS UN CICLO QUE PERMITA RECORRER LA COLECCIÓN

//<li class="list-group-item list-group-item-action list-group-item-danger">Compra en línea - $50.00</li>


const listaTransaccionesEl = document.getElementById("listaTransacciones");

for (const transaccion of transacciones) {

    //CREAMOS UN ELEMENTO HTML POR CADA TRANSACCIÓN DE LA COLECCIÓN
    const liElement = document.createElement("li");

    let montoString = transaccion.monto.toLocaleString("es-CL");

    liElement.innerText = `${transaccion.glosa} - $ ${montoString}`;

    //LE ASIGMANOS LAS CLASES DE BOOSTRAP
    liElement.classList = "list-group-item list-group-item-action";

    //DEPENDE SI ES UN INGRESO O NO, LE ASIGNAMOS LA CLASE CORRESPONDIENTE

    if (transaccion.ingreso) {
        //SE EJECUTA ESTO SI ES VERDADERO
        liElement.classList.add("list-group-item-success");

    } else {
        //SE EJECUTA ESTO SI ES FALSO
        liElement.classList.add("list-group-item-danger");
    }

    //LE AGREGAMOS A LA LISTA LOS HIJOS RECIÉN CREADOS.
    listaTransaccionesEl.appendChild(liElement);
};