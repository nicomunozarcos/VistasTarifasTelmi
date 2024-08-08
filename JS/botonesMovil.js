// seleccionamos el elemento de texto y el botón
const productoMinutos = document.getElementById("minutosMovil");
const productoEuros = document.getElementById("eurosMovil");
const productoGigas = document.getElementById("gigasMovil");

const sumarProductoMovil = document.getElementById("btn-mas-movil");
const restarProductoMovil = document.getElementById("btn-menos-movil");

// creamos una lista de productos para cambiar
const productosMinutos = ["-- minutos","150 minutos","∞ minutos", "∞ minutos", "∞ minutos ", "∞ minutos","∞ minutos","∞ minutos"];
const productosGigas = ["-- GB datos","1 GB datos","12 GB datos", "20 GB datos", "25 GB datos", "50 GB datos", "150 GB datos", "150 GB DATOS (compartida)"];
const productosEuros = ["--€/mes","4,90€/mes","7,90€/mes", "9,90€/mes", "10,90€/mes", "14,90€/mes","24,90€/mes","35,90€/mes"];


// inicializamos un contador para saber en qué producto estamos
let contadorMovil = 0;

// agregamos un evento de clic al botón
sumarProductoMovil.addEventListener("click", function() {
  // incrementamos el contador para que apunte al siguiente producto en la lista
  contadorMovil++;

  // si llegamos al final de la lista, volvemos al primer producto
  if (contadorMovil === productosMinutos.length) {
    contadorMovil = 0;
  }
    // cambiamos el texto del elemento de texto al siguiente producto en la lista
    productoMinutos.textContent = productosMinutos[contadorMovil];
    productoEuros.textContent = productosEuros[contadorMovil];
    productoGigas.textContent = productosGigas[contadorMovil];
    cambiarBoton2();
});

restarProductoMovil.addEventListener("click", function() {
    contadorMovil--; // restamos 1 al contador en lugar de sumar 1

    if (contadorMovil < 0) { // verificamos que el contador no sea menor que 0
    contadorMovil = productosMinutos.length - 1; // si es menor, lo configuramos para que apunte al último elemento de la lista
    }
       // cambiamos el texto del elemento de texto al siguiente producto en la lista
       productoMinutos.textContent = productosMinutos[contadorMovil]
       productoEuros.textContent = productosEuros[contadorMovil];
       productoGigas.textContent = productosGigas[contadorMovil];
       cambiarBoton2();
});

function cambiarBoton2(){
  const addbtn2 = document.getElementById("addbutton2");
  if (contadorMovil === 0) {
  addbtn2.setAttribute("disabled", "");
  }else{
  addbtn2.removeAttribute("disabled");
  }
}
