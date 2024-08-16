let totalCarrito = 0;

function actualizarCarrito(precio) {
    let valorNumerico = parseFloat(precio.replace("€/mes", "").replace(",", "."));
    totalCarrito += valorNumerico;
    document.getElementById("total-carrito").textContent = totalCarrito.toFixed(2) + "€/mes";
}

// MOVIL
const productoMinutos = document.getElementById("minutosMovil");
const productoEuros = document.getElementById("eurosMovil");
const productoGigas = document.getElementById("gigasMovil");

const sumarProductoMovil = document.getElementById("btn-mas-movil");
const restarProductoMovil = document.getElementById("btn-menos-movil");

const productosMinutos = ["-- minutos","150 minutos","∞ minutos", "∞ minutos", "∞ minutos ", "∞ minutos","∞ minutos","∞ minutos"];
const productosGigas = ["-- GB datos","1 GB datos","12 GB datos", "20 GB datos", "25 GB datos", "50 GB datos", "150 GB datos", "150 GB DATOS (compartida)"];
const productosEuros = ["--€/mes","4,90€/mes","7,90€/mes", "9,90€/mes", "10,90€/mes", "14,90€/mes","24,90€/mes","35,90€/mes"];

let contadorMovil = 0;

sumarProductoMovil.addEventListener("click", function() {
    contadorMovil++;
    if (contadorMovil === productosMinutos.length) {
        contadorMovil = 0;
    }
    productoMinutos.textContent = productosMinutos[contadorMovil];
    productoEuros.textContent = productosEuros[contadorMovil];
    productoGigas.textContent = productosGigas[contadorMovil];
    cambiarBoton2();
});

restarProductoMovil.addEventListener("click", function() {
    contadorMovil--;
    if (contadorMovil < 0) {
        contadorMovil = productosMinutos.length - 1;
    }
    productoMinutos.textContent = productosMinutos[contadorMovil];
    productoEuros.textContent = productosEuros[contadorMovil];
    productoGigas.textContent = productosGigas[contadorMovil];
    cambiarBoton2();
});

document.getElementById("addbutton2").addEventListener("click", function() {
    actualizarCarrito(productoEuros.textContent);
});

function cambiarBoton2(){
    const addbtn2 = document.getElementById("addbutton2");
    if (contadorMovil === 0) {
        addbtn2.setAttribute("disabled", "");
    } else {
        addbtn2.removeAttribute("disabled");
    }
}

// FIJO
const productoFijo = document.getElementById("producto-fij");
const productoTarifa = document.getElementById("producto-tarifa");
const productoMovil = document.getElementById("producto-mov");

const sumarProductoFijo = document.getElementById("btn-mas-fijo");
const restarProductoFijo = document.getElementById("btn-menos-fijo");

const productosFijo = ["-- min a fijos nacionales","1000 min a fijos nacionales","1000 min a fijos nacionales"];
const productosMovil = ["-- min a móviles nacionales","0 min a móviles nacionales","100 min a móviles nacionales"];
const productosTarifa = ["--€/mes","5,90€/mes","7,90€/mes"];

let contadorFijo = 0;

sumarProductoFijo.addEventListener("click", function() {
    contadorFijo++;
    if (contadorFijo === productosFijo.length) {
        contadorFijo = 0;
    }
    productoFijo.textContent = productosFijo[contadorFijo];
    productoTarifa.textContent = productosTarifa[contadorFijo];
    productoMovil.textContent = productosMovil[contadorFijo];
    cambiarBoton3();
});

restarProductoFijo.addEventListener("click", function() {
    contadorFijo--;
    if (contadorFijo < 0) {
        contadorFijo = productosFijo.length - 1;
    }
    productoFijo.textContent = productosFijo[contadorFijo];
    productoTarifa.textContent = productosTarifa[contadorFijo];
    productoMovil.textContent = productosMovil[contadorFijo];
    cambiarBoton3();
});

document.getElementById("addbutton3").addEventListener("click", function() {
    actualizarCarrito(productoTarifa.textContent);
});

function cambiarBoton3(){
    const addbtn3 = document.getElementById("addbutton3");
    if (contadorFijo === 0) {
        addbtn3.setAttribute("disabled", "");
    } else {
        addbtn3.removeAttribute("disabled");
    }
}

// INTERNET
const productoSubida = document.getElementById("producto-1s");
const productoBajada = document.getElementById("producto-1b");
const productoMes = document.getElementById("producto-1m");

const sumarProducto = document.getElementById("btn-mas");
const restarProducto = document.getElementById("btn-menos");

const productosSubida = ["-- MB subida","8 MB subida","20 MB subida", "100 MB subida", "200 MB subida ", "300 MB subida"];
const productosBajada = ["-- MB bajada", "2 MB bajada","5 MB bajada", "100 MB bajada (FIBRA)", "200 MB bajada (FIBRA)", "300 MB subida (FIBRA)"];
const productosMes = ["--€/mes","17,99€/mes","27,99€/mes", "24,90€/mes", "27,90€/mes", "29,90€/mes"];

let contador = 0;

sumarProducto.addEventListener("click", function() {
    contador++;
    if (contador === productosSubida.length) {
        contador = 0;
    }
    productoSubida.textContent = productosSubida[contador];
    productoBajada.textContent = productosBajada[contador];
    productoMes.textContent = productosMes[contador];
    cambiarBoton1();
});

restarProducto.addEventListener("click", function() {
    contador--;
    if (contador < 0) {
        contador = productosSubida.length - 1;
    }
    productoSubida.textContent = productosSubida[contador];
    productoBajada.textContent = productosBajada[contador];
    productoMes.textContent = productosMes[contador];
    cambiarBoton1();
});

document.getElementById("addbutton1").addEventListener("click", function() {
    actualizarCarrito(productoMes.textContent);
});

function cambiarBoton1(){
    const addbtn1 = document.getElementById("addbutton1");
    if (contador === 0) {
        addbtn1.setAttribute("disabled", "");
    } else {
        addbtn1.removeAttribute("disabled");
    }
}
