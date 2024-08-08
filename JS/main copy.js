
//
// MOVIL
//
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
//
// FIJO
//
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

//
// INTERNET
//
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

//
//CARRITO
// 
function agregarAlCarrito(id) {
  // Buscar el producto seleccionado en la lista de productos
  const productoSeleccionado = productos.find(producto => producto.id === id);
  // Agregar el producto al carrito
  carrito.push(productoSeleccionado);
  // Mostrar el carrito actualizado en la página web
  mostrarCarrito();
}

// Función para mostrar el contenido del carrito en la página
function mostrarCarrito() {
  const listaCarrito = document.getElementById("lista-carrito");
  listaCarrito.innerHTML = "";
  
  carrito.forEach(producto => {
    const li = document.createElement("li");
    li.innerHTML = `
      <span>${producto.nombre}</span>
      <span>$${producto.precio}</span>
    `;
    
    listaCarrito.appendChild(li);
  });
  
  //Actualizar el total del carrito
  const totalCarrito = document.getElementById("total-carrito");
  const total = carrito.reduce((total, producto) => total + producto.precio, 0);
  totalCarrito.textContent = total.toFixed(2);


} 

 //Función para actualizar el carrito en el HTML
function actualizarCarritoHTML() {
// Obtener el elemento del carrito en el HTML
const carrito = document.querySelector('#lista-carrito');
// Limpiar el contenido previo del carrito
while (carrito.firstChild) {
    carrito.removeChild(carrito.firstChild);
const totalHTML = document.querySelector('#total-carrito');
let total= 0;
carritoArray.forEach(producto => {
total += producto.precio * producto.cantidad;
});
if (carrito.length === 0) {
total = 0;
}
totalHTML.textContent = total.toFixed(2);
}
} 

// Función para vaciar el carrito por completo
function vaciarCarrito() {
// Asignamos un arreglo vacío al carrito
carrito.splice(0, carrito.length);
  // Actualizamos el carrito en el HTML
  actualizarCarritoHTML();
  actualizarTotalHTML();
}


function actualizarTotalHTML() {
const totalHTML = document.querySelector('#total-carrito');
let total = 0;
carritoArray.forEach(producto => {
    total += producto.precio * producto.cantidad;
});
if (carrito.length === 0) {
  total = 0;
totalHTML.textContent = total.toFixed(2);
}
}
