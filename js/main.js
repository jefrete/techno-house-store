// PRODUCTOS - ARRAYS PARALELOS
const codigos = [
  "TH001",
  "TH002",
  "TH003",
  "TH004",
  "TH005",
  "TH006",
  "TH007",
  "TH008",
];

const productos = [
  "Tira LED RGB",
  "Tira de neon LED",
  "Guirnalda LED",
  "Lampara LED RGB",
  "Panel LED de techo",
  "Lampara LED de escritorio",
  "Luz LED con sensor de movimiento",
  "Barra LED USB",
];

const precios = [15000, 20000, 16000, 12000, 25000, 18000, 14000, 10000];

let stock = [5, 5, 5, 5, 5, 5, 5, 5];

// PRODUCTOS DESTACADOS
let destacados = ["TH001", "TH004", "TH008"];

// CARRITO: guarda los índices de los productos
let carrito = [];

//FUNCIONES AUXILIARES

// BUSCAR POSICIÓN POR CÓDIGO
const buscarIndice = (codigo) => codigos.indexOf(codigo.toUpperCase());


// LISTAR PRODUCTOS DESTACADOS
const listarDestacados = function () {
  let mensaje = "PRODUCTOS DESTACADOS:\n";
  let posicion = 1;

  for (const codigo of destacados) {
    let indice = buscarIndice(codigo);

    mensaje = mensaje + posicion + ". " + productos[indice] + " - Código: " + codigo + "\n";

    posicion++;
  }

  return mensaje;
};


// FINALIZAR COMPRA
function finalizarCompra() {
  if (carrito.length === 0) {
    alert("No hay productos en el carrito.");
    return;
  }

  let confirmar = confirm(mostrarCarrito() + "\n\n¿Desea confirmar la compra?");

  if (confirmar) {
    // limpiamos el carrito
    carrito = [];

    alert("Compra realizada correctamente. ¡Gracias!");

  } else {

    for (const indice of carrito) {
      stock[indice]++;
    }

    carrito = [];
    alert("Compra cancelada. Se devolvieron los productos al stock.");
  }
}

// LISTAR CATÁLOGO DE PRODUCTOS
function listarCatalogo() {
  let mensaje = "CATÁLOGO DE PRODUCTOS:\n";
  let posicion = 1;

  for (const codigo of codigos) {
    let indice = buscarIndice(codigo);

    let linea = posicion + ". " + codigo + " - " + productos[indice] +
      " - Precio: $" + precios[indice] +
      " - Stock: " + stock[indice];

    mensaje = mensaje + linea + "\n";
    posicion++;
  }

  return mensaje;
}

// MOSTRAR CATALOGO EN CONSOLA
function mostrarCatalogoEnConsola() {
  console.log(listarCatalogo());
}

// COMPRAR PRODUCTO
function comprarProducto(indice) {

  let respuesta = prompt(
    "Producto: " + productos[indice] +
    "\nPrecio: $" + precios[indice] +
    "\nStock disponible: " + stock[indice] +
    "\nIngrese la cantidad que desea comprar:"
  );

  // Si cancela, salimos de la función
  if (respuesta === null) {
    return;
  }

  let cantidad = parseInt(respuesta);

  // Validamos que ingrese una cantidad válida
  while (cantidad <= 0 || cantidad > stock[indice]) {
    alert("Cantidad inválida o stock insuficiente.");

    respuesta = prompt(
      "Stock disponible: " + stock[indice] +
      "\nIngrese otra cantidad:"
    );

    // Si cancela, salimos de la función
    if (respuesta === null) {
      return;
    }

    cantidad = parseInt(respuesta);
  }

  // Agregamos la cantidad de productos al carrito
  // Aca uso for en lugar de for of porque me parece mas claro
  for (let i = 0; i < cantidad; i++) {
    carrito.push(indice);
  }

  // Descontamos del stock las unidades compradas
  stock[indice] = stock[indice] - cantidad;

  alert("Producto agregado al carrito.");
}


// VER PRODUCTOS Y COMPRAR
function verProductos() {

  let catalogo = listarCatalogo();
  let opcion = prompt(catalogo + "\nIngrese el número del producto que desea comprar\n0. Volver");

  if (opcion === null || opcion === "0") {
    return;
  }

  let indice = Number(opcion) - 1;

  comprarProducto(indice);
}


// VER CARRITO
function verCarrito() {
  let opcion = "";

  while (opcion !== "0") {
    opcion = prompt(
      mostrarCarrito() +
      "\n1. Eliminar producto" +
      "\n2. Finalizar compra" +
      "\n0. Volver"
    );

    switch (opcion) {
      case "1":
        if (carrito.length === 0) {
          alert("El carrito está vacío.");
        } else {
          // Guardamos el índice del último producto del carrito.
          let indice = carrito[carrito.length - 1];

          // Buscamos el nombre del producto.
          let producto = productos[indice];

          // Eliminamos el último producto del carrito.
          carrito.pop();

          // Devolvemos una unidad al stock.
          stock[indice]++;

          alert("Se quitó el producto: " + producto);
        }
        break;

      case "2":
        finalizarCompra();
        break;

      case "0":
      case null:
        opcion = "0";
        break;

      default:
        alert("Opción no válida.");
    }
  }
}

// MOSTRAR CARRITO
// arma un mensaje con los productos del carrito y el total a pagar
function mostrarCarrito() {

  let mensaje = "MI CARRITO\n";
  let total = 0;

  if (carrito.length === 0) {
    return "El carrito esta vacio.";
  }

  for (const indice of carrito) {
    mensaje = mensaje + " - " + productos[indice] + " - $" + precios[indice] + "\n";

    total = total + precios[indice];
  }

  mensaje += "Total: $" + total;

  return mensaje;

}

// BUSCAR PRODUCTOS
function buscarProducto() {
  let nombreBuscado = prompt("Ingrese el nombre del producto que busca:");

  if (nombreBuscado === null || nombreBuscado.trim() === "") {
    return;
  }

  nombreBuscado = nombreBuscado.toLowerCase();

  let encontrado = false;

  for (const producto of productos) {
    if (producto.toLowerCase().includes(nombreBuscado)) {

      let indice = productos.indexOf(producto);

      alert(
        "PRODUCTO ENCONTRADO\n" +
        codigos[indice] + " - " + producto +
        "\nPrecio: $" + precios[indice] +
        "\nStock: " + stock[indice]
      );

      encontrado = true;

      // Pregunta si desea agregarlo al carrito
      let opcion = prompt(
        "¿Desea agregarlo al carrito?\n" +
        "1. Sí\n" +
        "0. No"
      );

      if (opcion === "1") {
        comprarProducto(indice);
      }
    }
  }

  if (!encontrado) {
    alert("No se encontraron productos.");
  }
}


// VER PRODUCTOS DESTACADOS
function verDestacados() {
  if (destacados.length === 0) {
    alert("No hay productos destacados.");
    return;
  }

  // Mostramos los productos destacados y elegimos uno.
  let respuesta = prompt(
    listarDestacados() +
    "\nIngrese el número del producto que desea comprar:"
  );

  if (respuesta === null || respuesta.trim() === "") {
    return;
  }

  let posicion = Number(respuesta);

  // Validamos el número ingresado.
  if (posicion < 1 || posicion > destacados.length
  ) {
    alert("Número de producto no válido.");
    return;
  }

  // Buscamos el producto elegido.
  let codigo = destacados[posicion - 1];
  let indice = buscarIndice(codigo);

  // Enviamos el producto a la función de compra.
  if (indice !== -1) {
    comprarProducto(indice);
  }
}


// ADMINISTRAR PRODUCTOS DESTACADOS
function administrarDestacados() {
  let opcion = prompt(
    "ADMINISTRACION DE DESTACADOS\n" +
    "1. Agregar producto destacado\n" +
    "2. Quitar producto destacado\n" +
    "3. Quitar primer destacado\n" +
    "4. Reemplazar un destacado\n" +
    "0. Volver",
  );

  switch (opcion) {
    case "1": {
      let respuesta;
      let posicion;
      let codigo;

      while (true) {
        respuesta = prompt(
          listarCatalogo() +
          "\nIngrese el número del producto para destacar:"
        );

        if (respuesta === null) break;

        posicion = Number(respuesta);

        if (posicion < 1 || posicion > productos.length) {
          alert("Número no válido.");
          continue;
        }

        codigo = codigos[posicion - 1];

        if (destacados.includes(codigo)) {
          alert("Ese producto ya está destacado. Elija otro.");
          continue;
        }

        destacados.push(codigo);
        alert("Producto agregado a destacados.");
        break;
      }

      break;
    }
    case "2":


      if (destacados.length > 0) {

        // Guardamos el código del último destacado.
        let codigo = destacados[destacados.length - 1];

        // Buscamos su índice en el catálogo.
        let indice = buscarIndice(codigo);

        // Guardamos el nombre antes de quitarlo.
        let producto = productos[indice];

        destacados.pop();

        alert("Se quitó el producto: " + producto);

      } else {
        alert("No hay destacados para quitar.");
      }
      break;

    case "3":
      if (destacados.length > 0) {

        // Buscamos el nombre del primer destacado.
        let indice = buscarIndice(destacados[0]);

        let producto = productos[indice];

        // Quitamos el primer destacado.
        destacados.shift();

        alert("Se quitó el producto: " + producto);

      } else {
        alert("No hay destacados para quitar.");
      }
      break;


    case "4": {
      if (destacados.length === 0) {
        alert("No hay destacados para reemplazar.");
        break;
      }

      // Elegimos qué destacado reemplazar.
      let respuesta = prompt(
        listarDestacados() +
        "\nIngrese el número del destacado que desea reemplazar:"
      );

      if (respuesta === null) {
        break;
      }

      let posicion = Number(respuesta);

      // Validamos la posición elegida.
      if (posicion < 1 || posicion > destacados.length
      ) {
        alert("Posición no válida.");
        break;
      }

      // Elegimos el nuevo producto del catálogo.
      respuesta = prompt(
        listarCatalogo() +
        "\nIngrese el número del nuevo producto:"
      );

      if (respuesta === null) {
        break;
      }

      let nuevoIndice = Number(respuesta);

      // Validamos el producto elegido.
      if (nuevoIndice < 1 || nuevoIndice > productos.length
      ) {
        alert("Número no válido.");
        break;
      }

      let codigoNuevo = codigos[nuevoIndice - 1];

      // Evitamos repetir productos destacados.
      if (
        destacados.includes(codigoNuevo) &&
        destacados[posicion - 1] !== codigoNuevo
      ) {
        alert("Ese producto ya está destacado.");
      } else {
        destacados.splice(posicion - 1, 1, codigoNuevo);
        alert("Destacado reemplazado correctamente.");
      }

      break;
    }

    case "0":
    case null:
      break;

    default:
      alert("Opción no válida.");
  }
}

// MENU PRINCIPAL

let nombre = prompt("Bienvenido a TECHNO HOUSE STORE.\nIngrese su nombre:");

if (nombre === null || nombre.trim() === "") {
  nombre = "Cliente";
}

let opcion = "";

while (opcion !== "0") {
  opcion = prompt(
    "TECHNO HOUSE STORE\n" +
    "Bienvenido, " + nombre + ". Elija una opcion:\n" +
    "1. Ver tienda\n" +
    "2. Ver carrito\n" +
    "3. Buscar producto\n" +
    "4. Ver catalogo completo\n" +
    "5. Ver productos destacados\n" +
    "6. Administrar productos destacados(ADMIN)\n" +
    "0. Salir\n");

  switch (opcion) {
    case "1":
      verProductos();
      break;

    case "2":
      verCarrito();
      break;

    case "3":
      buscarProducto();
      break;

    case "4":
      alert(listarCatalogo());
      mostrarCatalogoEnConsola();
      break;

    case "5":
      verDestacados();
      break;

    case "6":
      administrarDestacados();
      break;

    case "0":
    case null:
      opcion = "0";
      alert("Hasta pronto, " + nombre + ". Gracias por su visita.");
      break;

    default:
      alert("Opcion no valida.");
  }
}
