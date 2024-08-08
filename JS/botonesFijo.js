// seleccionamos el elemento de texto y el botón
const productoFijo = document.getElementById("producto-fij");
const productoTarifa = document.getElementById("producto-tarifa");
const productoMovil = document.getElementById("producto-mov");

const sumarProductoFijo = document.getElementById("btn-mas-fijo");
const restarProductoFijo = document.getElementById("btn-menos-fijo");

// creamos una lista de productos para cambiar
const productosFijo = ["-- min a fijos nacionales","1000 min a fijos nacionales","1000 min a fijos nacionales"];
const productosMovil = ["-- min a móviles nacionales","0 min a móviles nacionales","100 min a móviles nacionales"];
const productosTarifa = ["--€/mes","5,90€/mes","7,90€/mes"];


// inicializamos un contador para saber en qué producto estamos
let contadorFijo = 0;

// agregamos un evento de clic al botón
sumarProductoFijo.addEventListener("click", function() {
  // incrementamos el contador para que apunte al siguiente producto en la lista
  contadorFijo++;

  // si llegamos al final de la lista, volvemos al primer producto
  if (contadorFijo === productosFijo.length) {
    contadorFijo = 0;
  }
    // cambiamos el texto del elemento de texto al siguiente producto en la lista
    productoFijo.textContent = productosFijo[contadorFijo];
    productoTarifa.textContent = productosTarifa[contadorFijo];
    productoMovil.textContent = productosMovil[contadorFijo];
    cambiarBoton3();
});

restarProductoFijo.addEventListener("click", function() {
    contadorFijo--; // restamos 1 al contador en lugar de sumar 1

    if (contadorFijo < 0) { // verificamos que el contador no sea menor que 0
    contadorFijo = productosFijo.length - 1; // si es menor, lo configuramos para que apunte al último elemento de la lista
    }
       // cambiamos el texto del elemento de texto al siguiente producto en la lista
       productoFijo.textContent = productosFijo[contadorFijo]
       productoTarifa.textContent = productosTarifa[contadorFijo];
       productoMovil.textContent = productosMovil[contadorFijo];
       cambiarBoton3();
});

function cambiarBoton3(){
    const addbtn3 = document.getElementById("addbutton3");
    if (contadorFijo === 0) {
    addbtn3.setAttribute("disabled", "");
    }else{
    addbtn3.removeAttribute("disabled");
    }
}