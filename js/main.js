// ENTREGA 5
// CLASES
// PRODUCTO: representa cada producto y administra su stock.
class Producto {
    // El constructor recibe los datos y los guarda en el objeto nuevo.
    constructor(codigo, nombre, categoria, precio, stock) {
        this.codigo = codigo;
        this.nombre = nombre;
        this.categoria = categoria;
        this.precio = precio;
        this.stock = stock;
    }
    // "this" representa este producto en particular.
    vender(cantidad) {
        this.stock -= cantidad;
        return true;
    }
    // Devuelve al stock las unidades que se habían apartado para una compra.
    reponer(cantidad) {
        this.stock += cantidad;
        return true;
    }
}
// CARRITO: administra los productos de la compra actual.
class Carrito {
    // Cada carrito empieza vacío. Cada elemento guardará un producto y su cantidad.
    constructor() {
        this.productos = [];
    }
    // Agrega un producto o suma unidades si ya existe.
    agregar(producto, cantidad) {

        producto.vender(cantidad);
        // Buscamos si este producto ya tiene una línea en el carrito.
        let productoExistente = null;
        for (const item of this.productos) {
            if (item.producto.codigo === producto.codigo) {
                productoExistente = item;
                break;
            }
        }
        if (productoExistente) {
            // Si ya estaba, actualizamos su cantidad en lugar de crear otra línea.
            productoExistente.cantidad += cantidad;
        } else {
            // Si es la primera vez, agregamos una nueva línea.
            this.productos.push({
                producto: producto,
                cantidad: cantidad
            });
        }
        return true;
    }

    // Quita el último producto y devuelve sus unidades al stock.
    quitarUltimo() {
        // pop quita y devuelve el último elemento del arreglo.
        const item = this.productos.pop();
        item.producto.reponer(item.cantidad);
        return item;
    }

    // Calcula el importe total.
    calcularTotal() {
        let total = 0;
        // Sumamos precio por cantidad para cada línea del carrito.
        for (const item of this.productos) {
            total += item.producto.precio * item.cantidad;
        }
        return total;
    }

    // Cuenta las unidades compradas.
    contarUnidades() {
        let total = 0;
        // Sumamos las cantidades, no los precios.
        for (const item of this.productos) {
            total += item.cantidad;
        }
        return total;
    }

    // Arma el listado del carrito.
    listar() {
        let listado = "CARRITO";
        let numero = 0;
        // Creamos una línea legible para cada artículo.
        for (const item of this.productos) {
            numero++;
            const subtotal = item.producto.precio * item.cantidad;
            listado += "\n"
                + numero + ". " + item.producto.nombre +
                " | Cantidad: " + item.cantidad +
                " | Subtotal: $" + subtotal;
        }
        return listado +
            "\nTOTAL: $" + this.calcularTotal();
    }

    // Confirma la compra y vacía el carrito.
    confirmar() {
        // Primero guardamos el resultado porque luego se vacía el carrito.
        const total = this.calcularTotal();
        const unidades = this.contarUnidades();
        // Una compra confirmada no devuelve el stock.
        this.productos = [];
        return {
            total: total,
            unidades: unidades
        };
    }
}


// INSTANCIAS: PRODUCTOS
const productos = [
    // TP-LINK TAPO - INTERIOR
    new Producto("TH001", "Tapo C260 4K 8MP", "Interior", 180000, 5),
    new Producto("TH002", "Tapo C245D Dual 2K + 2K", "Interior", 150000, 5),
    new Producto("TH003", "Tapo C220 2K QHD", "Interior", 100000, 5),
    // TP-LINK TAPO - EXTERIOR
    new Producto("TH004", "Tapo C560WS 4K 8MP", "Exterior", 220000, 5),
    new Producto("TH005", "Tapo C545D Dual 2K + 2K", "Exterior", 180000, 5),
    new Producto("TH006", "Tapo C530WS 3K 5MP", "Exterior", 140000, 5),
    // EZVIZ - INTERIOR
    new Producto("TH007", "EZVIZ H6c G1 4K 8MP", "Interior", 170000, 5),
    new Producto("TH008", "EZVIZ H7c Dual 2K+", "Interior", 130000, 5),
    new Producto("TH009", "EZVIZ H1c Full HD", "Interior", 80000, 5),
    // EZVIZ - EXTERIOR
    new Producto("TH010", "EZVIZ H8c Pro 4K", "Exterior", 200000, 5),
    new Producto("TH011", "EZVIZ H9c Dual 3K", "Exterior", 240000, 5),
    new Producto("TH012", "EZVIZ C8c 3K", "Exterior", 160000, 5)
];

// Guardamos los códigos de los productos que aparecen en la sección destacados.
const destacados = ["TH001", "TH004", "TH007", "TH010"];
// Creamos un carrito para guardar la compra actual.
const carrito = new Carrito();

// PRUEBA DE MÉTODOS DE PRODUCTO
// Este producto es solo para mostrar cómo cambian el stock vender() y reponer().
// No forma parte del catálogo de la tienda.
const productoPrueba = new Producto(
    "TEST",
    "Producto de prueba",
    "Interior",
    1000,
    5
);

console.log("Stock inicial:", productoPrueba.stock);
console.log("Resultado de venta:", productoPrueba.vender(2));
console.log("Stock después de vender:", productoPrueba.stock);
console.log("Resultado de reposición:", productoPrueba.reponer(2));
console.log("Stock después de reponer:", productoPrueba.stock);

// FUNCIONES GENERALES: buscan productos o preparan textos para mostrar.

// Busca un producto por su código.
function buscarPorCodigo(codigo) {
    // Convertimos el código a mayúsculas para que la búsqueda no dependa de eso.
    const codigoBuscado = String(codigo).trim().toUpperCase();
    // Recorremos el catálogo hasta encontrar el código.
    for (const producto of productos) {
        if (producto.codigo === codigoBuscado) {
            return producto;
        }
    }
    return null;
}

// Busca coincidencias en el nombre.
function buscarPorNombre(nombre) {
    // Convertimos ambos textos a minúsculas para buscar sin distinguir mayúsculas.
    const nombreBuscado = String(nombre).trim().toLowerCase();
    const resultados = [];
    // indexOf devuelve -1 si no encuentra el texto buscado.
    for (const producto of productos) {
        if (producto.nombre.toLowerCase().indexOf(nombreBuscado) !== -1) {
            resultados.push(producto);
        }
    }
    return resultados;
}

// Arma el listado del catálogo.
function listarCatalogo() {
    let listado = "CATÁLOGO";
    let numero = 0;
    // Agregamos los datos de cada producto al texto del catálogo.
    for (const producto of productos) {
        numero++;
        listado += "\n" + numero + ". " + producto.codigo +
            " | " + producto.nombre +
            " | " + producto.categoria +
            " | $" + producto.precio +
            " | Stock " + producto.stock;
    }
    return listado;
}
// Arma el listado de productos destacados.
function listarDestacados() {
    let listado = "PRODUCTOS DESTACADOS";
    let numero = 0;
    // La lista destacados guarda códigos; buscamos el objeto para mostrar sus datos.
    for (const codigo of destacados) {
        const producto = buscarPorCodigo(codigo);
        numero++;
        listado += "\n" + numero + ". " + producto.codigo +
            " | " + producto.nombre +
            " | $" + producto.precio;
    }
    return listado;
}

// FUNCIONES DE COMPRA: conectan la selección del usuario con el carrito.
// Agrega el producto seleccionado al carrito.
function comprarProducto(producto) {
    // prompt devuelve texto; Number convierte ese texto en una cantidad numérica.
    const cantidadIngresada = prompt(
        "Producto: " + producto.nombre + "\n" +
        "Stock disponible: " + producto.stock + "\n" +
        "Ingrese la cantidad que desea comprar:"
    );
    if (cantidadIngresada === null) {
        return;
    }
    const cantidad = Number(cantidadIngresada);

    // Evitamos cantidades decimales, cero, negativas o mayores al stock.
    // Sin esta comprobación, el stock podría quedar negativo.
    if (!Number.isInteger(cantidad) || cantidad <= 0 || cantidad > producto.stock) {
        alert("Ingrese una cantidad entera mayor que cero y no superior al stock.");
        return;
    }

    // Guardamos el stock anterior para comparar los datos en la consola.
    const stockAnterior = producto.stock;
    // El método del carrito descuenta el stock y guarda la compra.
    const resultado = carrito.agregar(producto, cantidad);
    console.log("Resultado de la compra:", {
        producto: producto.nombre,
        cantidad: cantidad,
        stockAnterior: stockAnterior,
        stockFinal: producto.stock,
        compraExitosa: resultado
    });
    alert(
        "Producto agregado al carrito.\n" +
        producto.nombre + "\n" +
        "Unidades: " + cantidad + "\n" +
        "Stock restante: " + producto.stock
    );
}


// MENÚ PRINCIPAL
// OPCIÓN 1: muestra el catálogo y permite elegir un producto.
function verCatalogoYComprar() {
    const numeroIngresado = prompt(
        listarCatalogo() +
        "\nIngrese el número de producto que desea comprar (0 para volver):"
    );
    if (numeroIngresado === null || numeroIngresado === "0") {
        return;
    }

    // El usuario cuenta desde 1; los arreglos cuentan sus posiciones desde 0.
    const numero = Number(numeroIngresado);
    comprarProducto(productos[numero - 1]);
}

// OPCIÓN 2: busca productos por nombre y permite elegir un resultado.
function buscarProductosPorNombre() {
    const nombre = prompt("Ingrese el nombre o característica que desea buscar:");
    if (nombre === null) {
        return;
    }
    const resultados = buscarPorNombre(nombre);
    let productosFormateados = "";
    let numeroResultado = 0;
    // Preparamos el texto numerado para que el usuario elija un resultado.
    for (const producto of resultados) {
        numeroResultado++;
        productosFormateados += numeroResultado + ". " +
            producto.codigo + " | " +
            producto.nombre + " | " +
            producto.categoria + " | $" +
            producto.precio + " | Stock " +
            producto.stock + "\n";
    }
    const numeroIngresado = prompt(
        "RESULTADOS DE BÚSQUEDA\n" +
        productosFormateados +
        "\nIngrese el número del producto que desea comprar (0 para volver):"
    );
    if (numeroIngresado === null || numeroIngresado === "0") {
        // Cancelar o elegir 0 vuelve al menú sin comprar.
        return;
    }
    const numero = Number(numeroIngresado);
    comprarProducto(resultados[numero - 1]);
}

// OPCIÓN 3: muestra el carrito y permite elegir una acción.
function verCarrito() {
    if (carrito.productos.length === 0) {
        alert("El carrito está vacío.");
        return;
    }
    let opcion = "";
    while (opcion !== "0") {
        opcion = prompt(
            carrito.listar() + "\n" +
            "1. Finalizar compra\n" +
            "2. Quitar último producto\n" +
            "0. Volver"
        );
        if (opcion === null || opcion === "0") {
            return;
        }
        if (opcion === "1") {
            finalizarCompra();
            if (carrito.productos.length === 0) {
                // confirmar() vacía el carrito; por eso ya no hay nada más que administrar.
                return;
            }
        } else if (opcion === "2") {
            const item = carrito.quitarUltimo();
            alert(
                "Se ha eliminado " + item.producto.nombre + " del carrito.\n" +
                "Unidades devueltas al stock: " + item.cantidad
            );
            if (carrito.productos.length === 0) {
                // Si quitamos el único artículo, cerramos el submenú.
                alert("El carrito está vacío.");
                return;
            }
        }
    }
}

// FINALIZAR COMPRA
function finalizarCompra() {
    // confirm deja que el usuario decida si confirma o vuelve atrás.
    const confirmar = confirm(
        carrito.listar() + "\n¿Desea confirmar la compra?"
    );
    if (!confirmar) {
        // No se cambia el carrito si el usuario elige cancelar este diálogo.
        return;
    }
    const compra = carrito.confirmar();
    alert(
        "¡Compra confirmada!\n" +
        "Unidades: " + compra.unidades + "\n" +
        "Total: $" + compra.total
    );
}

// OPCIÓN 4: busca los objetos destacados y permite elegir uno para comprar.
function verDestacadosYComprar() {
    const productosDestacados = [];
    let listado = "PRODUCTOS DESTACADOS";
    let numeroListado = 0;
    for (const codigo of destacados) {
        // Convertimos cada código destacado en el objeto Producto correspondiente.
        const producto = buscarPorCodigo(codigo);
        productosDestacados.push(producto);
        numeroListado++;
        listado += "\n" + numeroListado + ". " +
            producto.codigo + " | " +
            producto.nombre + " | $" +
            producto.precio + " | Stock " +
            producto.stock;
    }
    const numeroIngresado = prompt(
        listado +
        "\nIngrese el número del producto que desea comprar (0 para volver):"
    );
    if (numeroIngresado === null || numeroIngresado === "0") {
        return;
    }
    const numero = Number(numeroIngresado);
    comprarProducto(productosDestacados[numero - 1]);
}

// OPCIÓN 5: permite agregar, quitar, reemplazar o mostrar destacados.
function verDestacados() {
    alert(listarDestacados());
}

// Devuelve la posición del producto si ya está destacado.
// Si no lo encuentra, devuelve -1.
function buscarPosicionDestacado(codigo) {
    let posicion = 0;

    for (const codigoDestacado of destacados) {
        if (codigoDestacado === codigo) {
            return posicion;
        }
        posicion++;
    }

    return -1;
}

function administrarDestacados() {
    let opcion = "";
    while (opcion !== "0") {
        // El submenú se repite hasta volver o cancelar el diálogo.
        opcion = prompt(
            "ADMINISTRAR DESTACADOS\n" +
            "1. Agregar producto destacado\n" +
            "2. Fijar producto destacado al comienzo\n" +
            "3. Quitar último producto destacado\n" +
            "4. Reemplazar producto destacado\n" +
            "5. Ver destacados\n" +
            "0. Volver"
        );
        if (opcion === null) {
            break;
        }
        switch (opcion) {
            // Agrega al final.
            case "1": {
                let productoAgregado = false;
                while (!productoAgregado) {
                    // Convertimos el número elegido en el producto de esa posición.
                    const numeroIngresado = prompt(
                        listarCatalogo() +
                        "\nIngrese el número del producto que desea agregar:"
                    );
                    if (numeroIngresado === null) {
                        break;
                    }
                    const numero = Number(numeroIngresado);
                    const producto = productos[numero - 1];
                    const posicion = buscarPosicionDestacado(producto.codigo);

                    if (posicion !== -1) {
                        alert("Ese producto ya está en destacados. Elija otro.");
                    } else {
                        destacados.push(producto.codigo);
                        alert("Producto agregado a destacados.");
                        productoAgregado = true;
                    }
                }
                break;
            }
            // Fija al principio.
            case "2": {
                const numero = Number(prompt(
                    listarCatalogo() +
                    "\nIngrese el número del producto que desea fijar:"
                ));
                const producto = productos[numero - 1];

                // Si ya estaba destacado, lo quitamos de su posición anterior.
                const posicion = buscarPosicionDestacado(producto.codigo);
                if (posicion !== -1) {
                    destacados.splice(posicion, 1);
                }

                // unshift lo agrega al comienzo sin crear un duplicado.
                destacados.unshift(producto.codigo);
                alert("Producto fijado al comienzo de destacados.");
                break;
            }
            // Quita el último.
            case "3": {
                // pop quita el último código destacado.
                const eliminado = destacados.pop();
                const producto = buscarPorCodigo(eliminado);
                alert("Se eliminó " + producto.nombre + " de destacados.");
                break;
            }
            // Reemplaza un destacado.
            case "4": {
                // Los números mostrados empiezan en 1, por eso restamos 1 para usarlos como índices.
                const posicionIngresada = prompt(
                    listarDestacados() +
                    "\nIngrese el número del destacado que desea reemplazar:"
                );
                if (posicionIngresada === null) {
                    break;
                }
                const posicion = Number(posicionIngresada) - 1;
                let reemplazoRealizado = false;

                while (!reemplazoRealizado) {
                    const numeroIngresado = prompt(
                        listarCatalogo() +
                        "\nIngrese el número del producto que lo reemplazará:"
                    );
                    if (numeroIngresado === null) {
                        break;
                    }

                    const numeroProducto = Number(numeroIngresado);
                    const nuevoProducto = productos[numeroProducto - 1];
                    const posicionExistente = buscarPosicionDestacado(nuevoProducto.codigo);

                    if (posicionExistente !== -1 && posicionExistente !== posicion) {
                        alert("Ese producto ya está en destacados. Elija otro.");
                    } else {
                        // splice cambia el destacado elegido por el nuevo producto.
                        destacados.splice(posicion, 1, nuevoProducto.codigo);
                        alert("Destacado reemplazado correctamente.");
                        reemplazoRealizado = true;
                    }
                }
                break;
            }
            // Muestra los destacados.
            case "5":
                verDestacados();
                break;
            case "0":
                break;
        }
    }
}

// OPCIÓN 6: IMPRIMIR CATÁLOGO EN CONSOLA
const imprimirCatalogoEnConsola = () => {
    console.log(listarCatalogo());
};

// MENÚ PRINCIPAL: punto desde donde el usuario accede a las funciones.
function iniciarTienda() {
    const nombreIngresado = prompt(
        "Bienvenido a TECHNO HOUSE STORE.\nIngrese su nombre:"
    );
    const nombre = nombreIngresado;
    let opcion = "";
    while (opcion !== "0") {
        opcion = prompt(
            "TECHNO HOUSE STORE\n" +
            "Bienvenido, " + nombre + ".\n" +
            "1. Ver catálogo completo\n" +
            "2. Buscar producto por nombre\n" +
            "3. Ver carrito\n" +
            "4. Ver destacados\n" +
            "5. Administrar destacados\n" +
            "6. Imprimir catálogo completo en la consola\n" +
            "0. Salir"
        );
        if (opcion === null) {
            break;
        }

        switch (opcion) {
            case "1":
                verCatalogoYComprar();
                break;
            case "2":
                buscarProductosPorNombre();
                break;
            case "3":
                verCarrito();
                break;
            case "4":
                verDestacadosYComprar();
                break;
            case "5":
                administrarDestacados();
                break;
            case "6":
                imprimirCatalogoEnConsola();
                break;
            case "0":
                break;
        }
    }
    alert("Gracias por visitar TECHNO HOUSE STORE, " + nombre + ".");
}

iniciarTienda();