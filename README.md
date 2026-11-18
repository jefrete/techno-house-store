https://jefrete.github.io/techno-house-store/
# TECHNO HOUSE STORE

Tienda interactiva de cámaras de seguridad hecha con HTML y JavaScript. Desde los menús del navegador se pueden consultar productos, agregarlos al carrito y administrar los productos destacados.

## Cómo ejecutar el proyecto
1. Descargá o cloná este repositorio.
2. Abrí el archivo `index.html` en un navegador web.
3. Respondé a los cuadros de diálogo para navegar por la tienda.

> La aplicación usa cuadros de diálogo del navegador (`prompt`, `alert` y `confirm`). El carrito, el stock y los cambios en productos destacados se guardan en memoria, por lo que vuelven a sus valores iniciales al recargar la página.

## Funcionalidades
- Consultar el catálogo completo o filtrar cámaras por categoría.
- Buscar productos por código o por parte del nombre.
- Agregar productos al carrito y validar la cantidad según el stock disponible.
- Ver el carrito, quitar el último producto agregado o confirmar la compra.
- Consultar y administrar los productos destacados: agregar, fijar al comienzo, quitar y reemplazar.

## Menú principal
Al iniciar la página, el menú permite elegir entre estas opciones:

1. Ver el catálogo completo.
2. Ver cámaras de interior.
3. Ver cámaras de exterior.
4. Buscar un producto por nombre o código.
5. Ver y administrar el carrito.
6. Ver productos destacados.
7. Administrar productos destacados.
8. Imprimir el catálogo en la consola del navegador.
0. Salir.

## Estructura del proyecto

```text
.
├── index.html
├── js/
│   └── main.js
└── README.md
```

- `index.html`: página de entrada y vínculo al archivo JavaScript.
- `js/main.js`: catálogo, lógica del carrito, búsquedas, menús e interacción con el usuario.

## Tecnologías
- HTML5
- JavaScript (sin dependencias externas)
