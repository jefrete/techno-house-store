// ENTREGA 6 - TECHNO HOUSE STORE
// La clase define qué datos tiene cada producto
class Producto {
  constructor(codigo, nombre, categoria, precio, stock) {
    this.codigo = codigo;
    this.nombre = nombre;
    this.categoria = categoria;
    this.precio = precio;
    this.stock = stock;
  }

  // Descuenta unidades si la cantidad es válida y hay stock.
  vender(cantidad) {
    // Solo aceptamos cantidades enteras positivas que no superen el stock.
    if (!Number.isInteger(cantidad) || cantidad <= 0 || cantidad > this.stock) {
      return false;
    }

    // La venta es válida: actualizamos el stock y avisamos que tuvo éxito.
    this.stock -= cantidad;
    return true;
  }

  // Devuelve unidades al stock.
  reponer(cantidad) {
    // No se pueden reponer cantidades inválidas o menores que una unidad.
    if (!Number.isInteger(cantidad) || cantidad <= 0) {
      return false;
    }

    this.stock += cantidad;
    return true;
  }
}

// Cada elemento del catálogo es una instancia de Producto.
const productos = [
  new Producto("TH001", "Tapo C260 4K 8MP", "Interior", 180000, 5),
  new Producto("TH002", "Tapo C245D Dual 2K + 2K", "Interior", 150000, 5),
  new Producto("TH003", "Tapo C220 2K QHD", "Interior", 100000, 5),
  new Producto("TH004", "Tapo C560WS 4K 8MP", "Exterior", 220000, 5),
  new Producto("TH005", "Tapo C545D Dual 2K + 2K", "Exterior", 180000, 5),
  new Producto("TH006", "Tapo C530WS 3K 5MP", "Exterior", 140000, 5),
  new Producto("TH007", "EZVIZ H6c G1 4K 8MP", "Interior", 170000, 5),
  new Producto("TH008", "EZVIZ H7c Dual 2K+", "Interior", 130000, 5),
  new Producto("TH009", "EZVIZ H1c Full HD", "Interior", 80000, 5),
  new Producto("TH010", "EZVIZ H8c Pro 4K", "Exterior", 200000, 5),
  new Producto("TH011", "EZVIZ H9c Dual 3K", "Exterior", 240000, 5),
  new Producto("TH012", "EZVIZ C8c 3K", "Exterior", 160000, 5)
];

// Guardamos algunos productos como destacados.
const destacados = [productos[0], productos[3], productos[6], productos[9]];

const carrito = [];

// LOGICA DE NEGOCIO

// Agrega un producto al carrito
function agregarAlCarrito(producto, cantidad) {
  // vender() valida la cantidad y descuenta el stock.
  if (!producto.vender(cantidad)) {
    return false;
  }
  // find() busca si el producto ya tiene una entrada en el carrito.
  const itemExistente = carrito.find(item => item.producto.codigo === producto.codigo);

  if (itemExistente) {
    // Si ya estaba, acumulamos las unidades
    itemExistente.cantidad += cantidad;
  } else {
    // Si no estaba, creamos una nueva entrada en el carrito
    carrito.push({ producto, cantidad });
  }

  return true;
}

// Quita último ingreso y devuelve su stock.
function quitarDelCarrito() {
  // validamos si el carrito está vacío.
  if (carrito.length === 0) {
    return null;
  }

  // quita el último elemento agregado.
  const item = carrito.pop();
  item.producto.reponer(item.cantidad);

  return item;
}

// Suma el precio de los productos del carrito.
function calcularTotal() {
  // reduce() acumula los importes; 0 es el valor inicial del acumulador.
  return carrito.reduce((total, item) => total + (item.producto.precio * item.cantidad), 0);
}

// Suma las cantidades
const contarUnidades = () => carrito.reduce((unidades, item) => unidades + item.cantidad, 0);

// guarda la compra confirmada y vacía el carrito.
function confirmarCompra() {
  // valida si hay productos en el carrito
  if (carrito.length === 0) {
    return null;
  }

  // Guardamos los datos antes de vaciar el carrito.
  const compra = {
    total: calcularTotal(),
    unidades: contarUnidades()
  };

  // El stock ya se descontó al agregar productos y queda vendido.
  carrito.length = 0;
  return compra;
}

// OPCION 4
// Busca productos por código y luego por nombre
function buscarProductos(texto) {
  // normaliza
  const buscado = texto.trim().toLowerCase();

  // Primero intentamos encontrar un código completo.
  const porCodigo = productos.find(producto => producto.codigo.trim().toLowerCase() === buscado);
  if (porCodigo) return [porCodigo];

  // Si no hubo código exacto, buscamos el texto dentro de los nombres.
  return productos.filter(producto => producto.nombre.trim().toLowerCase().includes(buscado));
}

// OPCION 2 y 3
// Filtrar por categoría
function filtrarPorCategoria(categoria) {
  return productos.filter(producto => producto.categoria === categoria);
}

function mostrarCarrito() {
  if (carrito.length === 0) {
    return "CARRITO\nEl carrito está vacío.\nTOTAL: $0";
  }

  let texto = "CARRITO\n";

  // Recorremos las entradas para mostrar cantidad e importe por producto.
  carrito.forEach((item, indice) => {
    const subtotal = item.producto.precio * item.cantidad;
    texto += (indice + 1) + ". " + item.producto.nombre +
      " - Cant: " + item.cantidad + " - Subtotal: $" +
      subtotal + "\n";
  });

  // Al final mostramos el total general, calculado por calcularTotal().
  return texto + "TOTAL: $" + calcularTotal();
}

// Permite elegir y comprar un producto de la lista recibida.
function comprarProducto(lista) {
  // Evitamos pedir una opción si la lista no contiene productos.
  if (lista.length === 0) {
    alert("No hay productos para mostrar.");
    return;
  }

  while (true) {
    // Armamos el listado cada vez para reflejar el stock actualizado.
    let textoLista = "PRODUCTOS DISPONIBLES\n";
    lista.forEach((producto, indice) => {
      textoLista += (indice + 1) + ". " + producto.codigo + " - " +
        producto.nombre + " (" + producto.categoria + ") - $" +
        producto.precio + " - Stock: " + producto.stock + "\n";
    });

    const productoSeleccionado = prompt(
      textoLista +
      "Ingrese el número del producto deseado:\n0. Volver"
    );

    if (!productoSeleccionado || productoSeleccionado.trim() === "0") return;

    const numeroElegido = Number(productoSeleccionado);

    if (!Number.isInteger(numeroElegido) || numeroElegido < 1 || numeroElegido > lista.length) {
      alert("Seleccione un número válido.");
      continue;
    }

    // Las opciones empiezan en 1, pero el array empieza en 0.
    const producto = lista[numeroElegido - 1];

    if (!(producto.stock > 0)) {
      alert("No hay stock disponible de " + producto.nombre + ".");
      continue;
    }

    // Repetimos la solicitud hasta que se ingrese una cantidad válida.
    while (true) {
      const cantidadSeleccionada = prompt(
        "Producto: " + producto.nombre + " ($" + producto.precio + ")\n" +
        "Stock disponible: " + producto.stock + "\n" +
        "Ingrese la cantidad que desea comprar:"
      );

      if (cantidadSeleccionada === null) break;

      const cantidad = Number(cantidadSeleccionada);
      if (agregarAlCarrito(producto, cantidad)) {
        alert(
          "Agregado al carrito:\n" + producto.nombre +
          "\nCantidad: " + cantidad +
          "\nStock restante: " + producto.stock
        );
        break;
      }

      alert("Ingrese una cantidad entera entre 1 y " + producto.stock + ".");
    }
  }
}

// OPCION 5 - ver carrito
function verCarrito() {
  let opcion;

  // El menú sigue apareciendo hasta elegir volver o cancelar.
  while (opcion !== "0" && opcion !== null) {
    opcion = prompt(
      mostrarCarrito() + "\n\n" +
      "1. Finalizar compra\n" +
      "2. Quitar el último producto\n" +
      "0. Volver"
    );

    // switch dirige el flujo según la opción elegida.
    switch (opcion) {
      case "1": {
        if (carrito.length === 0) {
          alert("El carrito está vacío.");
        } else if (confirm(mostrarCarrito() + "\n\n¿Desea confirmar la compra?")) {
          // confirmarCompra() guarda el total y vacía el carrito.
          const compra = confirmarCompra();
          alert(
            "Compra confirmada.\nUnidades: " + compra.unidades +
            "\nTotal: $" + compra.total
          );
          return;
        }
        break;
      }

      case "2": {
        // quitarDelCarrito() también repone el stock del producto quitado.
        const item = quitarDelCarrito();
        if (!item) {
          alert("El carrito está vacío.");
        } else {
          alert("Se quitó " + item.producto.nombre + " y se devolvió al stock.");
        }
        break;
      }

      case "0":
      case null:
        break;

      default:
        // Las opciones distintas de 0, 1, 2 o cancelar no son válidas.
        alert("Seleccione una opción válida.");
    }
  }
}

// OPCION 7
function administrarDestacados() {
  let opcion;

  // El menú se repite hasta volver o cancelar.
  while (opcion !== "0" && opcion !== null) {
    opcion = prompt(
      "ADMINISTRAR DESTACADOS\n" +
      "1. Agregar producto\n" +
      "2. Fijar producto al comienzo\n" +
      "3. Quitar el último producto\n" +
      "4. Reemplazar un producto por posición\n" +
      "5. Ver destacados\n" +
      "0. Volver"
    );

    switch (opcion) {
      case "1": {
        // elegir un producto del catálogo para agregarlo a destacados.
        let textoCatalogo = "CATÁLOGO";
        productos.forEach((producto, indice) => {
          textoCatalogo += (indice + 1) + ". " + producto.codigo + " - " +
            producto.nombre + " (" + producto.categoria + ") - $" +
            producto.precio + " - Stock: " + producto.stock + "\n";
        });

        const entrada = prompt(
          textoCatalogo +
          "\n\nIngrese el número del producto:\n0. Volver"
        );
        // Cancelar o elegir 0 vuelve al menú de destacados.
        if (!entrada || entrada.trim() === "0") break;

        // Validamos
        const productoSeleccionado = Number(entrada);

        if (!Number.isInteger(productoSeleccionado) || productoSeleccionado < 1 || productoSeleccionado > productos.length) {
          alert("Seleccione un número válido.");
          break;
        }

        // Convertimos la opción visible al índice correspondiente del array
        const producto = productos[productoSeleccionado - 1];

        // some() comprueba si ya existe un producto con ese código.
        if (destacados.some(destacado => destacado.codigo === producto.codigo)) {
          alert("Ese producto ya está en destacados.");
        } else {
          destacados.push(producto);
          alert(producto.nombre + " se agregó a destacados.");
        }
        break;
      }

      case "2": {
        // elegir un producto para colocarlo al principio
        let textoCatalogo = "CATÁLOGO\n";
        productos.forEach((producto, indice) => {
          textoCatalogo += (indice + 1) + ". " + producto.codigo + " - " +
            producto.nombre + " (" + producto.categoria + ") - $" +
            producto.precio + " - Stock: " + producto.stock + "\n";
        });

        const entrada = prompt(
          textoCatalogo +
          "\n\nIngrese el número del producto:\n0. Volver"
        );
        if (!entrada || entrada.trim() === "0") break;

        const productoSeleccionado = Number(entrada);
        //validamos
        if (!Number.isInteger(productoSeleccionado) || productoSeleccionado < 1 || productoSeleccionado > productos.length) {
          alert("Seleccione un número válido.");
          break;
        }

        const producto = productos[productoSeleccionado - 1];
        // Si ya estaba destacado, lo quitamos de su ubicación anterior.
        const posActual = destacados.indexOf(producto);
        if (posActual !== -1) {
          destacados.splice(posActual, 1);
        }

        // unshift() lo coloca en la primera posición del array.
        destacados.unshift(producto);
        alert(producto.nombre + " quedó primero en destacados.");
        break;
      }

      case "3": {
        // quita el último destacado y lo devuelve.
        const quitado = destacados.pop();
        if (quitado) {
          alert(quitado.nombre + " se quitó de destacados.");
        } else {
          alert("No hay destacados para quitar.");
        }
        break;
      }

      case "4": {
        // reemplazar un destacado por otro producto del catálogo.
        if (destacados.length === 0) {
          alert("No hay destacados para reemplazar.");
          break;
        }

        // solicitamos qué posición reemplazar
        let textoDestacados = "DESTACADOS\n";
        destacados.forEach((producto, indice) => {
          textoDestacados += (indice + 1) + ". " + producto.codigo + " - " +
            producto.nombre + " (" + producto.categoria + ") - $" +
            producto.precio + " - Stock: " + producto.stock + "\n";
        });

        const posicion = prompt(
          textoDestacados +
          "\n\n¿Qué número desea reemplazar?\n0. Volver"
        );

        if (!posicion || posicion.trim() === "0") break;

        // Validamos que la posición elegida exista en destacados.
        const pos = Number(posicion);
        if (!Number.isInteger(pos) || pos < 1 || pos > destacados.length) {
          alert("Seleccione una posición válida.");
          break;
        }

        // pedimos el producto nuevo desde el catálogo
        let textoCatalogo = "CATÁLOGO\n";
        productos.forEach((producto, indice) => {
          textoCatalogo += (indice + 1) + ". " + producto.codigo + " - " +
            producto.nombre + " (" + producto.categoria + ") - $" +
            producto.precio + " - Stock: " + producto.stock + "\n";
        });

        const entradaProducto = prompt(
          textoCatalogo +
          "\n\nIngrese el número del producto nuevo:\n0. Volver"
        );

        if (!entradaProducto || entradaProducto.trim() === "0") break;

        // Validamos el número del producto nuevo.
        const numProd = Number(entradaProducto);

        if (!Number.isInteger(numProd) || numProd < 1 || numProd > productos.length) {
          alert("Seleccione un producto válido.");
          break;
        }

        // Evitamos duplicados, pero permitimos dejar el producto en su misma posición.
        const productoNuevo = productos[numProd - 1];
        const posExistente = destacados.indexOf(productoNuevo);
        if (posExistente !== -1 && posExistente !== pos - 1) {
          alert("Ese producto ya está en otra posición de destacados.");
          break;
        }

        // splice() reemplaza un elemento a partir del índice indicado.
        destacados.splice(pos - 1, 1, productoNuevo);
        alert("Se reemplazó el producto de la posición " + pos + ".");
        break;
      }

      case "5":
        // mostrar destacados
        if (destacados.length > 0) {
          let textoDestacados = "PRODUCTOS DESTACADOS\n";
          destacados.forEach((producto, indice) => {
            textoDestacados += (indice + 1) + ". " + producto.codigo + " - " +
              producto.nombre + " (" + producto.categoria + ") - $" +
              producto.precio + " - Stock: " + producto.stock + "\n";
          });
          alert(textoDestacados);
        } else {
          alert("No hay destacados.");
        }
        break;

      case "0":
      case null:
        break;

      default:
        alert("Seleccione una opción válida.");
    }
  }
}

// MENÚ PRINCIPAL
function iniciarTienda() {
  const nombre = prompt("Bienvenido a TECHNO HOUSE STORE.\nIngrese su nombre:");
  let opcion = "";

  // Repetimos el menú principal hasta que el usuario salga o cancele.
  while (opcion !== "0" && opcion !== null) {
    opcion = prompt(
      "TECHNO HOUSE STORE - Hola, " + nombre + ".\n" +
      "1. Ver catálogo completo\n" +
      "2. Ver cámaras de interior\n" +
      "3. Ver cámaras de exterior\n" +
      "4. Buscar producto por nombre o código\n" +
      "5. Ver carrito\n" +
      "6. Ver productos destacados\n" +
      "7. Administrar destacados\n" +
      "8. Imprimir catálogo en la consola\n" +
      "0. Salir"
    );
    switch (opcion) {
      case "1":
        // Comprar desde el catalogo completo
        comprarProducto(productos);
        break;

      case "2":
        // Filtrar catalogo por categoria
        comprarProducto(filtrarPorCategoria("Interior"));
        break;

      case "3":
        comprarProducto(filtrarPorCategoria("Exterior"));
        break;

      case "4": {
        // Buscar coincidencias por código o nombre.
        const texto = prompt("Ingrese el nombre o código del producto:");

        if (texto && texto.trim() !== "") {
          const resultados = buscarProductos(texto);
          comprarProducto(resultados);
        }
        break;
      }

      case "5":
        verCarrito();
        break;

      case "6":
        comprarProducto(destacados);
        break;

      case "7":
        // agregar, quitar o reemplazar destacados
        administrarDestacados();
        break;
      case "8":
        // Mostrar catalogo en la consola
        let textoCatalogo = "CATÁLOGO DE PRODUCTOS\n";
        productos.forEach((producto, indice) => {
          textoCatalogo += (indice + 1) + ". " + producto.codigo + " - " +
            producto.nombre + " (" + producto.categoria + ") - $" +
            producto.precio + " - Stock: " + producto.stock + "\n";
        });
        console.log(textoCatalogo);
        break;
      case "0":
      case null:
        // El ciclo terminará al comprobar esta opción.
        break;
      default:
        // Informar cualquier opción que no esté contemplada en el menú.
        alert("Seleccione una opción válida.");
    }
  }

  // Mensaje de despedida al salir del menú principal.
  alert("Gracias por visitar TECHNO HOUSE STORE, " + nombre + ".");
}

// PRUEBA EN CONSOLA
// Vendemos y reponemos la misma cantidad para comprobar los métodos sin cambiar el stock final.
console.log("TEST: probando vender() y reponer().");
const productoPrueba = productos[0];
console.log("Producto:", productoPrueba.nombre, "| Stock inicial:", productoPrueba.stock, "| ¿Tiene stock?:", productoPrueba.stock > 0);
productoPrueba.vender(2);
console.log("Stock después de vender 2:", productoPrueba.stock);
productoPrueba.reponer(2);
console.log("Stock después de reponer 2:", productoPrueba.stock);

// Inicia la interacción con el usuario.
iniciarTienda();
