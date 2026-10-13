# CODER-HOUSE

### La casa del código

Proyecto académico desarrollado en el marco del curso de **JavaScript** de Coderhouse.

## Descripción

Aplicación interactiva de consola que simula el flujo básico de compra de una tienda de productos tecnológicos. Permite seleccionar categorías y productos, consultar precios y stock, ingresar cantidades, calcular totales, confirmar operaciones y actualizar las existencias durante la sesión.

## Objetivos

* Aplicar variables y estructuras de control.
* Implementar funciones con parámetros y valores de retorno.
* Utilizar estructuras condicionales y ciclos para controlar el flujo del programa.
* Validar la disponibilidad de productos antes de confirmar una compra.
* Separar las responsabilidades mediante funciones reutilizables.
* Practicar el uso de Git y GitHub para el control de versiones.

## Tecnologías

* **HTML5:** estructura del documento.
* **JavaScript:** lógica de la aplicación.
* **Git:** control de versiones.
* **GitHub:** alojamiento del repositorio.

## Requisitos

* Navegador web moderno con JavaScript habilitado.
* Editor de código fuente, como Visual Studio Code (opcional para ejecutar el proyecto).

No requiere dependencias externas ni un proceso de compilación.

## Ejecución

1. Clonar el repositorio:

   ```bash
   git clone https://github.com/jefrete/techno-house-store.git
   ```

2. Ingresar al directorio del proyecto:

   ```bash
   cd techno-house-store
   ```

3. Abrir `index.html` en un navegador web.

La aplicación utiliza cuadros de diálogo del navegador para interactuar con el usuario. Los mensajes de depuración y seguimiento pueden consultarse desde la consola de desarrollador.

## Funcionalidades

* Selección de categorías y productos.
* Visualización de código, nombre, precio y stock disponible.
* Ingreso de la cantidad deseada.
* Verificación de disponibilidad.
* Cálculo del importe total.
* Confirmación de la compra.
* Actualización del stock en memoria.
* Opción de continuar comprando o finalizar la sesión.

## Estructura del proyecto

```text
techno-house-store/
├── index.html
├── main.js
└── README.md
```

* `index.html`: documento HTML e inclusión del script.
* `main.js`: lógica de interacción, funciones, selección de productos y control de stock.
* `README.md`: documentación del proyecto.

## Alcance y limitaciones

Esta versión tiene fines educativos y ejecuta la lógica de compra en el navegador.

* El stock se mantiene únicamente durante la ejecución.
* No existe persistencia de datos entre sesiones.
* No incluye servidor, base de datos ni autenticación.
* No procesa pagos reales.
* La interfaz se basa en cuadros de diálogo y mensajes de consola.

## Estado del proyecto

**Versión:** 0.1.0
**Estado:** prototipo académico
**Etapa:** tercera entrega — JavaScript

## Próximas mejoras

Las siguientes funcionalidades quedan sujetas a futuras iteraciones:

* Catálogo basado en estructuras de datos.
* Renderizado dinámico mediante el DOM.
* Carrito de compras.
* Persistencia de datos.
* Interfaz gráfica y experiencia de usuario mejoradas.
* Integración con servicios externos.

## Autoría y propósito

Proyecto realizado con fines educativos para consolidar los fundamentos de JavaScript y las prácticas iniciales de desarrollo web.

---

*CODER-HOUSE — La casa del código.*
