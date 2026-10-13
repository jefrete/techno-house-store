// Pre-entrega 3

// PRODUCTOS: TECNO ILUMINACIÓN
let codigoTiraLed = "TH001";
let productoTiraLed = "Tira LED";
let precioTiraLed = 15000;
let stockTiraLed = 5;

let codigoTiraNeon = "TH002";
let productoTiraNeon = "Tira Neón LED";
let precioTiraNeon = 20000;
let stockTiraNeon = 5;

let codigoGuirnaldaSolar = "TH003";
let productoGuirnaldaSolar = "Guirnalda solar";
let precioGuirnaldaSolar = 16000;
let stockGuirnaldaSolar = 5;

let codigoFloresSolar = "TH004";
let productoFloresSolar = "Flores solares";
let precioFloresSolar = 22000;
let stockFloresSolar = 5;

// PRODUCTOS: ENERGÍA Y CARGA
let codigoCargador = "TH005";
let productoCargador = "Cargador Fast Charge";
let precioCargador = 15000;
let stockCargador = 5;

let codigoPowerBank = "TH006";
let productoPowerBank = "Power Bank";
let precioPowerBank = 25000;
let stockPowerBank = 5;

let codigoCable = "TH007";
let productoCable = "Cable USB-C";
let precioCable = 8000;
let stockCable = 5;

// PRODUCTOS: BIENESTAR CORPORAL
let codigoMasajeador = "TH008";
let productoMasajeador = "Masajeador eléctrico";
let precioMasajeador = 150000;
let stockMasajeador = 5;

let codigoPistolaMasaje = "TH009";
let productoPistolaMasaje = "Pistola de masaje";
let precioPistolaMasaje = 40000;
let stockPistolaMasaje = 5;

let codigoAlmohada = "TH010";
let productoAlmohada = "Almohada cervical";
let precioAlmohada = 50000;
let stockAlmohada = 0;

// PRODUCTOS: AIRE LIBRE
let codigoKayakSimple = "TH011";
let productoKayakSimple = "Kayak Simple";
let precioKayakSimple = 650000;
let stockKayakSimple = 5;

let codigoKayakDoble = "TH012";
let productoKayakDoble = "Kayak Doble";
let precioKayakDoble = 1100000;
let stockKayakDoble = 5;

let codigoBicicletaAgua = "TH013";
let productoBicicletaAgua = "Bicicleta de Agua";
let precioBicicletaAgua = 3000000;
let stockBicicletaAgua = 5;

// VARIABLES DEL PRODUCTO SELECCIONADO
let codigo = "";
let producto = "";
let precio = 0;
let stock = 0;


// FUNCIONES
// FUNCION DECLARADA - guarda los datos del producto elegido.
function seleccionarProducto(
    codigoProducto,
    nombre,
    valor,
    cantidadDisponible
) {
    codigo = codigoProducto;
    producto = nombre;
    precio = valor;
    stock = cantidadDisponible;
}

// FUNCION EXPRESADA: muestra los datos del producto seleccionado.
const mostrarProducto = function(
    codigoProducto,
    nombre,
    valor,
    cantidadDisponible
) {
    alert(
        "PRODUCTO SELECCIONADO\n\n" +
        "Código: " + codigoProducto + "\n" +
        "Producto: " + nombre + "\n" +
        "Precio: $" + valor + "\n" +
        "Stock disponible: " + cantidadDisponible
    );

    console.log("Código:", codigoProducto);
    console.log("Producto:", nombre);
    console.log("Precio:", valor);
    console.log("Stock:", cantidadDisponible);
};

// FUNCION DECLARADA: calcula el precio total de la compra.
function calcularTotal(valor, cantidad) {
    return valor * cantidad;
}

// FUNCION FLECHA: verifica que la cantidad sea válida
// y que exista stock suficiente.

const verificarStock = (cantidad, cantidadDisponible) =>
    cantidad > 0 && cantidad <= cantidadDisponible;


// FUNCION DECLARADA: devuelve el stock restante.
function actualizarStock(cantidadDisponible, cantidad) {
    return cantidadDisponible - cantidad;
}

// INICIO DEL SIMULADOR
let nombreCliente = prompt("Ingresá tu nombre:");

alert("TECHNO HOUSE STORE\n\nBienvenido/a " + nombreCliente);

let seguirComprando = true;

// CICLO PRINCIPAL DE COMPRAS
while (seguirComprando) {

    // Limpiamos la selección anterior.
    codigo = "";
    producto = "";
    precio = 0;
    stock = 0;

    // Selección de categoría.
    let categoria = Number(
        prompt(
            "TECHNO HOUSE STORE\n\n" +
            "1 - Tecno Iluminación\n" +
            "2 - Energía y Carga\n" +
            "3 - Bienestar Corporal\n" +
            "4 - Aire Libre\n" +
            "0 - Salir"
        )
    );

    // Selección de producto según la categoría.
    switch (categoria) {

        case 1: {
            let productoIluminacion = Number(
                prompt(
                    "TECNO ILUMINACIÓN\n\n" +
                    "1 - Tira LED\n" +
                    "2 - Tira Neón LED\n" +
                    "3 - Guirnalda solar\n" +
                    "4 - Flores solares\n"
                )
            );

            switch (productoIluminacion) {

                case 1:
                    seleccionarProducto(
                        codigoTiraLed,
                        productoTiraLed,
                        precioTiraLed,
                        stockTiraLed
                    );
                    break;

                case 2:
                    seleccionarProducto(
                        codigoTiraNeon,
                        productoTiraNeon,
                        precioTiraNeon,
                        stockTiraNeon
                    );
                    break;

                case 3:
                    seleccionarProducto(
                        codigoGuirnaldaSolar,
                        productoGuirnaldaSolar,
                        precioGuirnaldaSolar,
                        stockGuirnaldaSolar
                    );
                    break;

                case 4:
                    seleccionarProducto(
                        codigoFloresSolar,
                        productoFloresSolar,
                        precioFloresSolar,
                        stockFloresSolar
                    );
                    break;

                default:
                    alert("Producto no válido.");
            }

            break;
        }

        case 2: {
            let productoEnergia = Number(
                prompt(
                    "ENERGÍA Y CARGA\n\n" +
                    "1 - Cargador Fast Charge\n" +
                    "2 - Power Bank\n" +
                    "3 - Cable USB-C\n"
                )
            );

            switch (productoEnergia) {

                case 1:
                    seleccionarProducto(
                        codigoCargador,
                        productoCargador,
                        precioCargador,
                        stockCargador
                    );
                    break;

                case 2:
                    seleccionarProducto(
                        codigoPowerBank,
                        productoPowerBank,
                        precioPowerBank,
                        stockPowerBank
                    );
                    break;

                case 3:
                    seleccionarProducto(
                        codigoCable,
                        productoCable,
                        precioCable,
                        stockCable
                    );
                    break;

                default:
                    alert("Producto no válido.");
            }

            break;
        }

        case 3: {
            let productoBienestar = Number(
                prompt(
                    "BIENESTAR CORPORAL\n\n" +
                    "1 - Masajeador eléctrico\n" +
                    "2 - Pistola de masaje\n" +
                    "3 - Almohada cervical\n"
                )
            );

            switch (productoBienestar) {

                case 1:
                    seleccionarProducto(
                        codigoMasajeador,
                        productoMasajeador,
                        precioMasajeador,
                        stockMasajeador
                    );
                    break;

                case 2:
                    seleccionarProducto(
                        codigoPistolaMasaje,
                        productoPistolaMasaje,
                        precioPistolaMasaje,
                        stockPistolaMasaje
                    );
                    break;

                case 3:
                    seleccionarProducto(
                        codigoAlmohada,
                        productoAlmohada,
                        precioAlmohada,
                        stockAlmohada
                    );
                    break;

                default:
                    alert("Producto no válido.");
            }

            break;
        }

        case 4: {
            let productoAireLibre = Number(
                prompt(
                    "AIRE LIBRE\n\n" +
                    "1 - Kayak Simple\n" +
                    "2 - Kayak Doble\n" +
                    "3 - Bicicleta de Agua\n"
                )
            );

            switch (productoAireLibre) {

                case 1:
                    seleccionarProducto(
                        codigoKayakSimple,
                        productoKayakSimple,
                        precioKayakSimple,
                        stockKayakSimple
                    );
                    break;

                case 2:
                    seleccionarProducto(
                        codigoKayakDoble,
                        productoKayakDoble,
                        precioKayakDoble,
                        stockKayakDoble
                    );
                    break;

                case 3:
                    seleccionarProducto(
                        codigoBicicletaAgua,
                        productoBicicletaAgua,
                        precioBicicletaAgua,
                        stockBicicletaAgua
                    );
                    break;

                default:
                    alert("Producto no válido.");
            }

            break;
        }

        case 0:
            seguirComprando = false;
            break;

        default:
            alert("Categoría no válida.");
    }

    // Si se seleccionó un producto, iniciamos la compra.
    if (producto !== "") {

        mostrarProducto(codigo, producto, precio, stock);

        let cantidad = Number(
            prompt("¿Cuántas unidades querés comprar?")
        );

        // Validamos la cantidad y el stock disponible.
        if (verificarStock(cantidad, stock)) {

            let total = calcularTotal(precio, cantidad);

            let confirmar = prompt(
                "RESUMEN DE COMPRA\n\n" +
                "Producto: " + producto + "\n" +
                "Código: " + codigo + "\n" +
                "Cantidad: " + cantidad + "\n" +
                "Total: $" + total + "\n\n" +
                "1 - Confirmar compra\n" +
                "2 - Cancelar"
            );

            // Solo descontamos stock si se confirma la compra.
            if (confirmar === "1") {

                stock = actualizarStock(stock, cantidad);

                // Guardamos el stock actualizado en el producto

                switch (codigo) {
                    case "TH001":
                        stockTiraLed = stock;
                        break;
                    case "TH002":
                        stockTiraNeon = stock;
                        break;
                    case "TH003":
                        stockGuirnaldaSolar = stock;
                        break;
                    case "TH004":
                        stockFloresSolar = stock;
                        break;
                    case "TH005":
                        stockCargador = stock;
                        break;
                    case "TH006":
                        stockPowerBank = stock;
                        break;
                    case "TH007":
                        stockCable = stock;
                        break;
                    case "TH008":
                        stockMasajeador = stock;
                        break;
                    case "TH009":
                        stockPistolaMasaje = stock;
                        break;
                    case "TH010":
                        stockAlmohada = stock;
                        break;
                    case "TH011":
                        stockKayakSimple = stock;
                        break;
                    case "TH012":
                        stockKayakDoble = stock;
                        break;
                    case "TH013":
                        stockBicicletaAgua = stock;
                        break;
                }

                // Confirmamos la operación y mostramos el comprobante.
                alert(
                    "COMPRA REALIZADA\n\n" +
                    "Producto: " + producto + "\n" +
                    "Cantidad: " + cantidad + "\n" +
                    "Total: $" + total + "\n\n" +
                    "Gracias por comprar en TECHNO HOUSE."
                );

                console.log("Compra realizada");
                console.log("Código:", codigo);
                console.log("Producto:", producto);
                console.log("Cantidad:", cantidad);
                console.log("Total:", total);
                console.log("Stock restante:", stock);

            } else {

                alert("Compra cancelada.");
            }

        } else {

            alert(
                "No hay stock suficiente o la cantidad ingresada no es válida."
            );
        }
    }

    // Preguntamos si el cliente desea realizar otra compra.
    if (seguirComprando) {

        let continuar = prompt(
            "¿Querés seguir comprando?\n\n" +
            "1 - Sí\n" +
            "2 - No"
        );

        if (continuar !== "1") {
            seguirComprando = false;
        }
    }
}

// FINAL
alert(
    "Gracias por visitar TECHNO HOUSE STORE, " +
    nombreCliente + "."
);