// ENTREGA 5 - TECHNO HOUSE STORE
// CLASE PRODUCTO
// Producto es el molde para crear cada cámara.
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
        if (!Number.isInteger(cantidad) || cantidad <= 0 || cantidad > this.stock) {
            return false;
        }
        this.stock -= cantidad;
        return true;
    }
    // Devuelve unidades al stock.
    reponer(cantidad) {
        if (!Number.isInteger(cantidad) || cantidad <= 0) {
            return false;
        }
        this.stock += cantidad;
        return true;
    }
}

// FUNCIÓN FLECHA: comprueba si un producto tiene stock.
const tieneStock = producto => producto.stock > 0;
// FUNCIÓN EXPRESADA: prepara un texto para hacer búsquedas.
const normalizarTexto = function (texto) {
    return texto.trim().toLowerCase();
};

// Catálogo completo de productos.
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

const destacados = [
    productos[0],
    productos[3],
    productos[6],
    productos[9]
];

const carrito = [];

// CARRITO-Agrega un producto al carrito y descuenta el stock.
function agregarAlCarrito(producto, cantidad) {
    const ventaRealizada = producto.vender(cantidad);
    // Si no se pudo realizar la venta, terminamos la función.
    if (ventaRealizada === false) {
        return false;
    }
    // Creamos un objeto para guardar la compra.
    const nuevoItem = {
        producto: producto,
        cantidad: cantidad
    };
    // Agregamos ese objeto al carrito.
    carrito.push(nuevoItem);
    // Informamos que todo salió bien.
    return true;
}

// Quita el último ingreso del carrito y devuelve su stock.
function quitarDelCarrito() {
    if (carrito.length === 0) {
        return null;
    }
    const item = carrito.pop();
    item.producto.reponer(item.cantidad);
    return item;
}

// Calcula el importe total del carrito.
function calcularTotal() {
    let total = 0;
    for (const item of carrito) {
        total += item.producto.precio * item.cantidad;
    }
    return total;
}

// Cuenta las unidades que hay en el carrito.
function contarUnidades() {
    let unidades = 0;
    for (const item of carrito) {
        unidades += item.cantidad;
    }
    return unidades;
}

// Guarda los datos de la compra y vacía el carrito.
function confirmarCompra() {
    if (carrito.length === 0) {
        return null;
    }
    const compra = {
        total: calcularTotal(),
        unidades: contarUnidades()
    };
    // El stock queda descontado porque la compra fue confirmada.
    carrito.length = 0;
    return compra;
}

// BÚSQUEDA DE PRODUCTOS
function buscarPorNombre(nombre) {
    const textoBuscado = normalizarTexto(nombre);
    const resultados = [];
    if (textoBuscado === "") {
        return resultados;
    }
    for (const producto of productos) {
        if (normalizarTexto(producto.nombre).includes(textoBuscado)) {
            resultados.push(producto);
        }
    }
    return resultados;
}

// MOSTRAR CARRITO
function mostrarCarrito() {
    if (carrito.length === 0) {
        return "CARRITO\nEl carrito está vacío.\nTOTAL: $0";
    }
    let texto = "CARRITO\n";
    let numero = 1;
    for (const item of carrito) {
        texto += numero + ". " + item.producto.nombre +
            " - Cantidad: " + item.cantidad +
            " - Subtotal: $" + (item.producto.precio * item.cantidad) + "\n";
        numero++;
    }
    return texto + "TOTAL: $" + calcularTotal();
}

// COMPRAR PRODUCTOS: Recibe un producto, pide la cantidad y lo agrega al carrito.
function comprarProducto(producto) {
    if (producto.stock <= 0) {
        alert("No hay stock disponible de " + producto.nombre + ".");
        return;
    }
    let cantidad;
    let cantidadValida = false;
    // Repetimos el pedido mientras la cantidad no sea válida.
    while (cantidadValida === false) {
        // Pedimos al usuario cuántas unidades quiere comprar.
        const entrada = prompt(
            "Producto: " + producto.nombre + "\n" +
            "Stock disponible: " + producto.stock + "\n" +
            "Ingrese la cantidad que desea comprar:"
        );
        // Si cancela, terminamos la función.
        if (entrada === null) {
            return;
        }
        // Convertimos el texto ingresado a número.
        cantidad = Number(entrada);
        // Comprobamos que sea un entero entre 1 y el stock disponible.
        if (
            Number.isInteger(cantidad) &&
            cantidad >= 1 &&
            cantidad <= producto.stock
        ) {
            cantidadValida = true;
        } else {
            alert("Ingrese una cantidad entera entre 1 y " + producto.stock + ".");
        }
    }
    // Intentamos agregar el producto al carrito.
    const agregado = agregarAlCarrito(producto, cantidad);
    // Si se agregó correctamente, mostramos los datos de la compra.
    if (agregado === true) {
        alert(
            "Producto agregado al carrito.\n" +
            producto.nombre + "\n" +
            "Unidades: " + cantidad + "\n" +
            "Stock restante: " + producto.stock
        );
    }
}

// Opción 1: muestra el catálogo y permite comprar.
function verCatalogoYComprar() {
    let texto = "CATÁLOGO DE PRODUCTOS\n";
    let numero = 1;
    // Armamos directamente la lista del catálogo.
    for (const producto of productos) {
        texto += numero + ". " + producto.codigo + " - " +
            producto.nombre + " - " + producto.categoria +
            " - $" + producto.precio + " - Stock: " + producto.stock + "\n";
        numero++;
    }
    // Mostramos la lista y pedimos el número del producto.
    const entrada = prompt(texto + "\nIngrese el número del producto:\n0. Volver");
    if (entrada === null || entrada.trim() === "") {
        return;
    }
    const numeroElegido = Number(entrada);
    if (numeroElegido === 0) {
        return;
    }
    if (!Number.isInteger(numeroElegido) || numeroElegido < 1 || numeroElegido > productos.length) {
        alert("Seleccione un número válido del catálogo.");
        return;
    }
    comprarProducto(productos[numeroElegido - 1]);
}

// Opción 2: busca por nombre y permite comprar.
function buscarYComprar() {
    const nombre = prompt("Ingrese el nombre o característica que desea buscar:");
    // Si se cancela el prompt o solo se ingresan espacios, no hay nada que buscar.
    if (nombre === null || normalizarTexto(nombre) === "") {
        return;
    }
    // La función de búsqueda devuelve un arreglo con los productos coincidentes.
    const resultados = buscarPorNombre(nombre);
    // Avisamos y terminamos si la búsqueda no encontró coincidencias.
    if (resultados.length === 0) {
        alert("No se encontraron productos.");
        return;
    }
    // Preparamos el texto que mostrará los resultados numerados.
    let texto = "RESULTADOS DE LA BÚSQUEDA\n";
    let numero = 1;
    // Agregamos los datos de cada producto y aumentamos su número en la lista.
    for (const producto of resultados) {
        texto += numero + ". " + producto.codigo + " - " +
            producto.nombre + " - " + producto.categoria +
            " - $" + producto.precio + " - Stock: " + producto.stock + "\n";
        numero++;
    }
    // Mostramos los resultados y pedimos el número del producto que se quiere comprar.
    const entrada = prompt(texto + "\nIngrese el número del producto:\n0. Volver");
    // Si se cancela o se deja vacío el prompt, volvemos al menú anterior.
    if (entrada === null || entrada.trim() === "") {
        return;
    }
    // prompt devuelve texto; lo convertimos a número para validar la opción elegida.
    const numeroElegido = Number(entrada);
    // La opción 0 permite volver sin seleccionar un producto.
    if (numeroElegido === 0) {
        return;
    }
    // Rechazamos valores que no sean enteros o que estén fuera de la lista mostrada.
    if (!Number.isInteger(numeroElegido) || numeroElegido < 1 || numeroElegido > resultados.length) {
        alert("Seleccione un número válido de los resultados.");
        return;
    }
    // La lista visible empieza en 1, pero los arreglos usan índices desde 0.
    // Restamos 1 para obtener el producto elegido y pasarlo al flujo de compra.
    comprarProducto(resultados[numeroElegido - 1]);
}

// Opción 4: muestra los destacados y permite comprar.
function verDestacadosYComprar() {
    if (destacados.length === 0) {
        alert("No hay productos destacados.");
        return;
    }
    let texto = "PRODUCTOS DESTACADOS\n";
    let numero = 1;
    // Armamos directamente la lista de productos destacados.
    for (const producto of destacados) {
        texto += numero + ". " + producto.codigo + " - " +
            producto.nombre + " - " + producto.categoria +
            " - $" + producto.precio + " - Stock: " + producto.stock + "\n";
        numero++;
    }
    const entrada = prompt(texto + "\nIngrese el número del producto:\n0. Volver");
    if (entrada === null || entrada.trim() === "") {
        return;
    }
    const numeroElegido = Number(entrada);
    if (numeroElegido === 0) {
        return;
    }
    if (!Number.isInteger(numeroElegido) || numeroElegido < 1 || numeroElegido > destacados.length) {
        alert("Seleccione un número válido de destacados.");
        return;
    }
    comprarProducto(destacados[numeroElegido - 1]);
}
// Opcion 3: muestra el carrito y permite finalizar la compra o quitar productos.
function verCarrito() {
    let opcion;
    while (opcion !== "0" && opcion !== null) {
        opcion = prompt(
            mostrarCarrito() + "\n\n" +
            "1. Finalizar compra\n" +
            "2. Quitar el último producto\n" +
            "0. Volver"
        );
        if (opcion === "1") {
            if (carrito.length === 0) {
                alert("El carrito está vacío.");
            } else if (confirm(mostrarCarrito() + "\n¿Desea confirmar la compra?")) {
                const compra = confirmarCompra();
                alert(
                    "Compra confirmada.\n" +
                    "Unidades: " + compra.unidades + "\n" +
                    "Total: $" + compra.total
                );
                // Terminamos verCarrito() para que no vuelva a aparecer el menú vacío.
                return;
            }
        } else if (opcion === "2") {
            if (carrito.length === 0) {
                alert("El carrito está vacío.");
            } else {
                const item = quitarDelCarrito();
                alert("Se quitó " + item.producto.nombre + " y se devolvió al stock.");
            }
        } else if (opcion !== "0" && opcion !== null) {
            alert("Seleccione una opción válida.");
        }
    }
}
// Opción 5: permite administrar los productos destacados. 
function administrarDestacados() {
    let opcion;
    // El menú se repite hasta elegir "0" o cancelar el prompt.
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
        // Según la opción elegida, ejecutamos una acción distinta sobre destacados.
        switch (opcion) {
            //agregar un producto al final de destacados.
            case "1": {
                let texto = "CATÁLOGO DE PRODUCTOS\n";
                let numero = 1;
                // Recorremos el catálogo para armar el listado.
                for (const producto of productos) {
                    texto += numero + ". " + producto.codigo + " - " +
                        producto.nombre + " - " + producto.categoria +
                        " - $" + producto.precio + " - Stock: " + producto.stock + "\n";
                    numero++;
                }
                // Pedimos qué producto queremos agregar.
                const entrada = prompt(texto + "\nIngrese el número del producto:\n0. Volver");
                // Si cancela o deja vacío, volvemos al menú.
                if (entrada === null || entrada.trim() === "") {
                    break;
                }
                const numeroElegido = Number(entrada);
                // El 0 permite volver al menú.
                if (numeroElegido === 0) {
                    break;
                }
                // Validamos que el número corresponda a un producto.
                if (!Number.isInteger(numeroElegido) ||
                    numeroElegido < 1 ||
                    numeroElegido > productos.length) {
                    alert("Seleccione un número válido.");
                    break;
                }
                // Obtenemos el producto elegido.
                const producto = productos[numeroElegido - 1];
                // Comprobamos si ya está en destacados.
                if (destacados.includes(producto)) {
                    alert("Ese producto ya está en destacados.");
                } else {
                    // Agregamos el producto al final del array.
                    destacados.push(producto);
                    alert(producto.nombre + " se agregó a destacados.");
                }
                break;
            }
            // Fijar un producto al comienzo de destacados.
            case "2": {
                let texto = "CATÁLOGO DE PRODUCTOS\n";
                let numero = 1;
                // Recorremos el catálogo para armar el listado.
                for (const producto of productos) {
                    texto += numero + ". " + producto.codigo + " - " +
                        producto.nombre + " - " + producto.categoria +
                        " - $" + producto.precio + " - Stock: " + producto.stock + "\n";
                    numero++;
                }
                // Pedimos qué producto queremos colocar al comienzo.
                const entrada = prompt(texto + "\nIngrese el número del producto:\n0. Volver");
                // Si cancela o deja vacío, volvemos al menú.
                if (entrada === null || entrada.trim() === "") {
                    break;
                }
                const numeroElegido = Number(entrada);
                // El 0 permite volver al menú.
                if (numeroElegido === 0) {
                    break;
                }
                // Validamos que el número corresponda a un producto.
                if (!Number.isInteger(numeroElegido) ||
                    numeroElegido < 1 ||
                    numeroElegido > productos.length) {
                    alert("Seleccione un número válido.");
                    break;
                }
                // Obtenemos el producto elegido.
                const producto = productos[numeroElegido - 1];
                // Buscamos si el producto ya está en destacados.
                const posicionActual = destacados.indexOf(producto);
                // Si ya existe, lo quitamos de su posición anterior.
                if (posicionActual !== -1) {
                    destacados.splice(posicionActual, 1);
                }
                // Colocamos el producto al comienzo.
                destacados.unshift(producto);
                alert(producto.nombre + " quedó primero en destacados.");
                break;
            }
            // Quitar el último producto de destacados.
            case "3": {
                // Quitamos el último producto del array.
                const quitado = destacados.pop();
                // Comprobamos si pop() encontró un producto.
                if (quitado !== undefined) {
                    alert(quitado.nombre + " se quitó de destacados.");
                } else {
                    alert("No hay productos destacados para quitar.");
                }
                break;
            }
            // REEMPLAZAR UN PRODUCTO POR POSICIÓN
            case "4": {
                if (destacados.length === 0) {
                    alert("No hay destacados para reemplazar.");
                    continue;
                }
                let textoDestacados = "PRODUCTOS DESTACADOS\n";
                let numero = 1;
                // Mostramos los destacados numerados para elegir cuál será reemplazado.
                for (const producto of destacados) {
                    textoDestacados += numero + ". " + producto.codigo + " - " +
                        producto.nombre + " - " + producto.categoria +
                        " - $" + producto.precio + " - Stock: " + producto.stock + "\n";
                    numero++;
                }
                // Pedimos la posición actual del destacado que se quiere cambiar.
                const entradaPosicion = prompt(
                    textoDestacados + "\n¿Qué número desea reemplazar?\n0. Volver"
                );
                // Cancelar o dejar vacío vuelve al menú sin hacer cambios.
                if (entradaPosicion === null || entradaPosicion.trim() === "") {
                    continue;
                }
                // Convertimos la posición ingresada para validarla y usarla como índice.
                const posicion = Number(entradaPosicion);
                // El 0 cancela la operación y regresa al menú de administración.
                if (posicion === 0) {
                    continue;
                }
                // La posición debe ser un entero dentro de los destacados actuales.
                if (!Number.isInteger(posicion) ||
                    posicion < 1 ||
                    posicion > destacados.length) {
                    alert("Seleccione una posición válida.");
                    continue;
                }
                // Mostramos el catálogo completo para elegir el producto que ocupará esa posición.
                let textoCatalogo = "CATÁLOGO DE PRODUCTOS\n";
                numero = 1;
                for (const producto of productos) {
                    textoCatalogo += numero + ". " + producto.codigo + " - " +
                        producto.nombre + " - " + producto.categoria +
                        " - $" + producto.precio + " - Stock: " + producto.stock + "\n";
                    numero++;
                }
                // Pedimos el producto nuevo; 0 permite cancelar el reemplazo.
                const entradaProducto = prompt(
                    textoCatalogo + "\nIngrese el número del producto nuevo:\n0. Volver"
                );
                // Cancelar o dejar vacío no cambia la lista de destacados.
                if (entradaProducto === null || entradaProducto.trim() === "") {
                    continue;
                }
                // Convertimos el número elegido para validar que corresponda al catálogo.
                const numeroProducto = Number(entradaProducto);
                // Si se ingresa 0, no se realiza el reemplazo.
                if (numeroProducto === 0) {
                    continue;
                }
                // Rechazamos valores no enteros o fuera de las opciones del catálogo.
                if (!Number.isInteger(numeroProducto) ||
                    numeroProducto < 1 ||
                    numeroProducto > productos.length) {
                    alert("Seleccione un producto válido.");
                    continue;
                }
                // Convertimos el número visible (que empieza en 1) a índice (que empieza en 0).
                const productoNuevo = productos[numeroProducto - 1];
                // Comprobamos si el producto ya ocupa una posición en destacados.
                const posicionExistente = destacados.indexOf(productoNuevo);
                // Se permite elegir el mismo producto que ya ocupa la posición a reemplazar,
                // pero no duplicar uno que esté en otra posición.
                if (posicionExistente !== -1 && posicionExistente !== posicion - 1) {
                    alert("Ese producto ya está en otra posición de destacados.");
                    continue;
                }
                // splice reemplaza un elemento: índice, cantidad a quitar, elemento nuevo.
                destacados.splice(posicion - 1, 1, productoNuevo);
                alert("Se reemplazó el producto de la posición " + posicion + ".");
                // Salimos del switch; el menú vuelve a mostrarse en la siguiente vuelta.
                break;
            }
            // ver destacados
            case "5": {
                let texto = "PRODUCTOS DESTACADOS\n";
                let numero = 1;
                // Preparamos un listado numerado con los datos actuales de cada destacado.
                for (const producto of destacados) {
                    texto += numero + ". " + producto.codigo + " - " +
                        producto.nombre + " - " + producto.categoria +
                        " - $" + producto.precio + " - Stock: " + producto.stock + "\n";
                    numero++;
                }
                alert(texto);
                // Salimos del switch; el menú vuelve a mostrarse en la siguiente vuelta.
                break;
            }
            // VOLVER O CANCELAR
            case "0":
            case null:
                // finaliza el menú.
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
    while (opcion !== "0" && opcion !== null) {
        opcion = prompt(
            "TECHNO HOUSE STORE\n" +
            "Hola, " + nombre + ".\n" +
            "1. Ver catálogo completo\n" +
            "2. Buscar producto por nombre\n" +
            "3. Ver carrito\n" +
            "4. Ver productos destacados\n" +
            "5. Administrar destacados\n" +
            "6. Imprimir catálogo en la consola\n" +
            "0. Salir"
        );
        if (opcion === "1") {
            verCatalogoYComprar();
        } else if (opcion === "2") {
            buscarYComprar();
        } else if (opcion === "3") {
            verCarrito();
        } else if (opcion === "4") {
            verDestacadosYComprar();
        } else if (opcion === "5") {
            administrarDestacados();
        } else if (opcion === "6") {
            let texto = "CATÁLOGO DE PRODUCTOS\n";
            let numero = 1;
            // Armamos el catálogo directamente para mostrarlo en consola.
            for (const producto of productos) {
                texto += numero + ". " + producto.codigo + " - " +
                    producto.nombre + " - " + producto.categoria +
                    " - $" + producto.precio + " - Stock: " + producto.stock + "\n";
                numero++;
            }
            console.log(texto);
        } else if (opcion !== "0" && opcion !== null) {
            alert("Seleccione una opción válida.");
        }
    }
    alert("Gracias por visitar TECHNO HOUSE STORE, " + nombre + ".");
}
// TEST EN CONSOLA
// quita y suma stock de un producto para comprobar que vender() y reponer() funcionan correctamente.
console.log("TEST: probando vender() y reponer().");
const productoPrueba = productos[0];
console.log("Producto:", productoPrueba.nombre);
console.log("Stock inicial:", productoPrueba.stock);
console.log("¿Tiene stock?:", tieneStock(productoPrueba));
// Vendemos 2 unidades.
productoPrueba.vender(2);
console.log("Stock después de vender 2:", productoPrueba.stock);
// Reponemos las mismas 2 unidades.
productoPrueba.reponer(2);
console.log("Stock después de reponer 2:", productoPrueba.stock);
//iniciar simulador de tienda.
iniciarTienda();