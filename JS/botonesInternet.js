
// seleccionamos el elemento de texto y el botón
const productoSubida = document.getElementById("producto-1s");
const productoBajada = document.getElementById("producto-1b");
const productoMes = document.getElementById("producto-1m");

const sumarProducto = document.getElementById("btn-mas");
const restarProducto = document.getElementById("btn-menos");

// creamos una lista de productos para cambiar
const productosSubida = ["-- MB subida","8 MB subida","20 MB subida", "100 MB subida", "200 MB subida ", "300 MB subida"];
const productosBajada = ["-- MB bajada", "2 MB bajada","5 MB bajada", "100 MB bajada (FIBRA)", "200 MB bajada (FIBRA)", "300 MB subida (FIBRA)"];
const productosMes = ["--€/mes","17,99€/mes","27,99€/mes", "24,90€/mes", "27,90€/mes", "29,90€/mes"];

// inicializamos un contador para saber en qué producto estamos
let contador = 0;

// agregamos un evento de clic al botón
sumarProducto.addEventListener("click", function() {
  // incrementamos el contador para que apunte al siguiente producto en la lista
  contador++;

  // si llegamos al final de la lista, volvemos al primer producto
  if (contador === productosSubida.length) {
    contador = 0;
  }
    // cambiamos el texto del elemento de texto al siguiente producto en la lista
    productoSubida.textContent = productosSubida[contador];
    productoBajada.textContent = productosBajada[contador];
    productoMes.textContent = productosMes[contador];
    cambiarBoton1();
});

restarProducto.addEventListener("click", function() {
    contador--; // restamos 1 al contador en lugar de sumar 1

    if (contador < 0) { // verificamos que el contador no sea menor que 0
    contador = productosSubida.length - 1; // si es menor, lo configuramos para que apunte al último elemento de la lista
    }
       // cambiamos el texto del elemento de texto al siguiente producto en la lista
       productoSubida.textContent = productosSubida[contador];
       productoBajada.textContent = productosBajada[contador];
       productoMes.textContent = productosMes[contador];
       cambiarBoton1();
});

function cambiarBoton1(){
  const addbtn1 = document.getElementById("addbutton1");
  if (contador === 0) {
  addbtn1.setAttribute("disabled", "");
  }else{
  addbtn1.removeAttribute("disabled");
  }
}