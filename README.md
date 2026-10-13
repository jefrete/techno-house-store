# ⚙️ THE MACHINE

### CURATED COMMERCE SYSTEM

**Necesito → Quiero → Me tentó.**

```text
╔══════════════════════════════════════════════════════════════╗
║                                                              ║
║   ████████╗██╗  ██╗███████╗    ███╗   ███╗ █████╗  ██████╗  ║
║   ╚══██╔══╝██║  ██║██╔════╝    ████╗ ████║██╔══██╗██╔════╝  ║
║      ██║   ███████║█████╗      ██╔████╔██║███████║██║       ║
║      ██║   ██╔══██║██╔══╝      ██║╚██╔╝██║██╔══██║██║       ║
║      ██║   ██║  ██║███████╗    ██║ ╚═╝ ██║██║  ██║╚██████╗  ║
║      ╚═╝   ╚═╝  ╚═╝╚══════╝    ╚═╝     ╚═╝╚═╝  ╚═╝ ╚═════╝  ║
║                                                              ║
║   CURATED PRODUCTS. DELIBERATE ENGINEERING.                  ║
║   SYSTEM: UNDER CONSTRUCTION                                 ║
╚══════════════════════════════════════════════════════════════╝
```

> No vendemos de todo. Seleccionamos lo que vale la pena.

THE MACHINE es el proyecto de una tienda online de catálogo curado: una experiencia comercial que combina tecnología, precio/calidad, selección inteligente de productos y novedades constantes.

La visión es simple: reducir el ruido, encontrar productos interesantes y construir una tienda que ayude a descubrir qué necesitás, qué querés y qué todavía no sabías que te tentaba.

**THE MACHINE no nace terminada. Se construye por módulos, una etapa a la vez.**

---

## ◈ 00 — MANIFESTO

```text
NECESITO
   │
   ▼
QUIERO
   │
   ▼
ME TENTÓ
   │
   ▼
THE MACHINE
```

El catálogo no se llena por llenar.

Cada producto debe justificar su lugar mediante criterios de utilidad, precio/calidad, atractivo o potencial comercial.

### Principios del sistema

* **Curaduría:** pocos productos, seleccionados con criterio.
* **Precio/calidad:** buscar valor real, no solamente el precio más bajo.
* **Descubrimiento:** combinar necesidades concretas con productos interesantes.
* **Evolución:** incorporar funcionalidades cuando existan las bases técnicas.
* **Modularidad:** cada etapa amplía la anterior sin convertir el proyecto en un caos.
* **Transparencia:** distinguir las funcionalidades implementadas de las que todavía están planificadas.

---

## ◈ 01 — PRODUCT UNIVERSE

El catálogo futuro contempla trece sectores comerciales.

| ID      | Categoría            |
| ------- | -------------------- |
| `TM-01` | 💡 Tecno Iluminación |
| `TM-02` | 🔌 Energía & Carga   |
| `TM-03` | 🎮 Gaming            |
| `TM-04` | 🏠 Smart Home        |
| `TM-05` | 🛡️ Seguridad        |
| `TM-06` | 📡 Starlink          |
| `TM-07` | 🚗 Auto              |
| `TM-08` | 🌬️ Aire & Ambiente  |
| `TM-09` | 🧘 Bienestar         |
| `TM-10` | 💎 Joyería           |
| `TM-11` | 🏕️ Outdoor & Agua   |
| `TM-12` | 🛠️ Herramientas     |
| `TM-13` | 🧉 Mates & Termos    |

**Visión de catálogo:** una selección dinámica que pueda crecer, renovarse y organizarse según utilidad, tendencias, disponibilidad y relación precio/calidad.

Estas son las categorías previstas para la evolución del proyecto; no implica que todas estén implementadas en la versión actual.

---

# ◈ 02 — MASTER ROADMAP

```text
                     ┌─────────────────────┐
                     │     THE MACHINE     │
                     │   CURATED COMMERCE  │
                     └──────────┬──────────┘
                                │
               ┌────────────────┴────────────────┐
               ▼                                 ▼
       FOUNDATION                         FUTURE SYSTEM
               │                                 │
       ┌───────┴────────┐             ┌──────────┴─────────┐
       ▼                ▼             ▼                    ▼
   JAVASCRIPT        CATALOG       COMMERCE             PLATFORM
       │                │             │                    │
       ▼                ▼             ▼                    ▼
   CORE v0.1          ARRAYS        CART                BACK OFFICE
       │                │             │                    │
       ▼                ▼             ▼                    ▼
    FUNCTIONS        OBJECTS       PAYMENTS             DATABASE
       │                │             │                    │
       └────────────────┴─────────────┴────────────────────┘
                                │
                                ▼
                       E-COMMERCE PLATFORM
```

La hoja de ruta se organiza en etapas de aprendizaje. Cada módulo tiene un objetivo propio y se incorpora cuando los conocimientos y las herramientas necesarias estén disponibles.

---

## 🧱 ETAPA 0 — Concepto y arquitectura

**Objetivo:** definir qué estamos construyendo antes de construirlo.

* Identidad: THE MACHINE.
* Tipo: tienda online y catálogo curado.
* Filosofía: Necesito → Quiero → Me tentó.
* Criterios de selección de productos.
* Catálogo modular.
* Novedades y recomendaciones.
* Productos más vendidos y tendencias.
* Precio/calidad y compras por impulso.

**Estado:** concepto definido; arquitectura en evolución.

---

## 🧱 ETAPA 1 — THE MACHINE CORE v0.1

### ⚙️ JavaScript Purchase Engine

**Objetivo: construir la máquina.**

La primera versión es un simulador de compra por consola. No pretende ser todavía una tienda gráfica ni un sistema comercial conectado a una base de datos.

### Fundamentos utilizados

```text
INPUT
├── prompt()
└── Selección del usuario

PROCESSING
├── Variables
├── if / else
├── switch
├── while
├── Funciones
├── Parámetros y argumentos
├── return
└── Arrow functions

OUTPUT
├── alert()
└── console.log()
```

### Flujo de compra

```text
START
  │
  ▼
SELECT CATEGORY
  │
  ▼
SELECT PRODUCT
  │
  ▼
DISPLAY PRICE + STOCK
  │
  ▼
ENTER QUANTITY
  │
  ▼
VERIFY STOCK
  │
  ▼
CALCULATE TOTAL
  │
  ▼
CONFIRM PURCHASE
  │
  ├── CONFIRMED ──► UPDATE STOCK
  │
  └── CANCELLED ──► PRESERVE STOCK
                         │
                         ▼
                   CONTINUE / EXIT
```

### Funciones del núcleo

* `seleccionarProducto()` — registra los datos del producto elegido.
* `mostrarProducto()` — muestra su información.
* `calcularTotal()` — calcula el importe de la compra.
* `verificarStock()` — comprueba la cantidad solicitada.
* `actualizarStock()` — calcula las existencias restantes.

### Límites de esta versión

Para respetar el nivel de la preentrega:

* Sin arrays.
* Sin objetos.
* Sin DOM ni eventos.
* Sin almacenamiento persistente.
* Sin APIs ni backend.

El stock se mantiene mediante variables durante la ejecución del programa.

**Criterio de finalización:** seleccionar un producto, verificar existencias, calcular una compra, confirmar la operación y actualizar el stock.

**Frenamos acá. Primero, aprobar el núcleo.**

---

## 🧱 ETAPA 2 — Catálogo estructurado

### Arrays · Product Catalog

**Objetivo:** dejar de administrar cada producto mediante variables individuales.

```text
ANTES
├── producto1
├── producto2
├── producto3
└── producto4

DESPUÉS
└── CATALOGO[]
    ├── Producto
    ├── Producto
    ├── Producto
    └── ...
```

Cuando aprendamos arrays, podremos:

* Recorrer catálogos.
* Mostrar listas de productos.
* Buscar productos.
* Filtrar categorías.
* Ordenar resultados.
* Ampliar el catálogo sin duplicar tantos bloques de código.

**Resultado esperado:** una estructura de catálogo más fácil de mantener y ampliar.

---

## 🧱 ETAPA 3 — Productos inteligentes

### Objects · Product Model

**Objetivo:** representar cada producto como una unidad de información coherente.

```text
PRODUCTO
├── nombre
├── precio
├── stock
├── categoría
├── descripción
├── marca
└── imagen
```

Los objetos permitirán agrupar propiedades relacionadas en una misma estructura.

Con arrays y objetos podremos avanzar hacia un catálogo que se parezca más al modelo de datos de una tienda real.

---

## 🧱 ETAPA 4 — Catálogo visual

### DOM · Storefront Interface

**Objetivo:** transformar el cajero de consola en una vidriera.

```text
┌──────────────────────────────┐
│                              │
│         PRODUCT IMAGE        │
│                              │
├──────────────────────────────┤
│ Tira LED                     │
│ $12.990                      │
│ Disponibilidad: consultar    │
│                              │
│       [ VER PRODUCTO ]       │
└──────────────────────────────┘
```

Conceptos previstos:

* DOM.
* Eventos.
* Botones.
* Tarjetas de producto.
* Navegación entre categorías.
* Actualización de la interfaz.
* Presentación visual del catálogo.

El ejemplo es ilustrativo, no una captura de la versión actual.

---

## 🧱 ETAPA 5 — Carrito de compras

### Shopping Cart

**Objetivo:** permitir que el usuario reúna varios productos antes de confirmar el pedido.

```text
CART
├── Producto
│   ├── Precio
│   ├── Cantidad
│   └── Subtotal
├── Producto
│   ├── Precio
│   ├── Cantidad
│   └── Subtotal
└── TOTAL
```

Funcionalidades previstas:

* Agregar productos.
* Eliminar productos.
* Modificar cantidades.
* Calcular subtotales.
* Calcular el total.
* Vaciar el carrito.

---

## 🧱 ETAPA 6 — Sistema comercial

### Commerce Engine

**Objetivo:** incorporar reglas comerciales al proceso de compra.

**Descuentos**

* Porcentaje.
* Promociones.
* Descuentos por cantidad.

**Cupones**

* `THE10`
* `MACHINE15`

Los códigos son ejemplos de planificación, no cupones activos.

**Envíos**

* Retiro.
* Estándar.
* Express.

**Pagos**

* Transferencia.
* Tarjeta.
* Cuotas, según las condiciones disponibles.

**Packs comerciales**

Ejemplo conceptual:

`PACK AUTO = Iluminación + Cargador + Soporte`

La aplicación real de precios, descuentos, envíos y pagos requerirá reglas definidas y pruebas.

---

## 🧱 ETAPA 7 — Home comercial

### Discovery Interface

**Objetivo:** que la página de inicio sea una herramienta de descubrimiento, no un depósito de productos.

```text
THE MACHINE
│
├── 🔥 MÁS VENDIDOS
├── 🆕 RECIÉN LLEGADOS
├── 📈 EN TENDENCIA
├── ⭐ SELECCIÓN THE MACHINE
├── 💰 PRECIO / CALIDAD
├── 👀 PUEDE INTERESARTE
└── 💀 TENTACIONES
```

La interfaz buscará combinar utilidad, novedad y atractivo comercial, sin abrumar al visitante.

---

## 🧱 ETAPA 8 — Recomendaciones

### Recommendation Engine

**Objetivo:** conectar productos relacionados y facilitar el descubrimiento.

Ejemplo conceptual:

```text
USUARIO EXPLORA
       │
       ▼
   JOYSTICK PS5
       │
       ▼
TAMBIÉN PUEDE INTERESARTE
       │
       ├── Auriculares
       ├── Accesorios
       ├── Iluminación LED
       └── Soportes
```

Posibles criterios futuros:

* Categoría.
* Precio.
* Compras anteriores.
* Productos vistos.
* Relaciones entre productos.

El sistema comenzará con reglas sencillas si corresponde y evolucionará según los datos y conocimientos disponibles.

---

## 🧱 ETAPA 9 — Valor agregado

### Customer Experience

**Objetivo:** mejorar la experiencia antes y después de comprar.

**WhatsApp**

* Canal de consultas y asistencia.

**Seguimiento de pedidos**

```text
RECIBIDO
   ↓
PREPARANDO
   ↓
DESPACHADO
   ↓
EN CAMINO
   ↓
ENTREGADO
```

**Reseñas**

* Estrellas.
* Comentarios.
* Fotografías.

**Favoritos**

* Guardar productos para consultar después.

**Aviso de reposición**

* Notificar cuando vuelva a haber stock.

Estas funciones necesitarán una implementación específica y, en varios casos, almacenamiento persistente o servicios externos.

---

## 🧱 ETAPA 10 — Servicios y soluciones

### Beyond Products

**Objetivo:** explorar ingresos basados en productos, instalación y asistencia.

| Sector        | Solución potencial                     |
| ------------- | -------------------------------------- |
| 📡 Starlink   | Equipamiento, accesorios e instalación |
| 🛡️ Seguridad | Cámaras, sensores e instalación        |
| 🏠 Smart Home | Focos, enchufes y configuración        |
| 🚗 Auto       | Iluminación y servicios de instalación |

La propuesta es ampliar el valor ofrecido sin perder la identidad de catálogo curado.

---

## 🧱 ETAPA 11 — Back office

### Administrative System

**Objetivo:** administrar el negocio desde una interfaz interna.

```text
BACK OFFICE
├── PRODUCTOS
├── STOCK
├── PRECIOS
├── PEDIDOS
├── CLIENTES
├── PROMOCIONES
└── VENTAS
```

Operaciones previstas:

* Agregar productos.
* Modificar precios.
* Actualizar existencias.
* Desactivar productos.
* Crear promociones.
* Consultar pedidos y ventas.

El acceso administrativo deberá protegerse cuando el sistema se convierta en una aplicación real.

---

## 🧱 ETAPA 12 — Persistencia

### Storage & Data

**Objetivo:** conservar información más allá de una ejecución del programa.

**Primera posibilidad: `localStorage`**

* Carrito.
* Favoritos.
* Preferencias.

**Evolución posterior: base de datos**

* Productos.
* Clientes.
* Pedidos.
* Existencias.
* Ventas.

`localStorage` es almacenamiento del navegador; no reemplaza una base de datos compartida ni garantiza sincronización entre usuarios.

---

## 🧱 ETAPA 13 — E-commerce real

### Production Platform

**Objetivo:** pasar de un simulador académico a una plataforma comercial funcional.

Componentes posibles:

* Autenticación.
* Backend.
* Base de datos.
* Integración con Mercado Pago.
* APIs.
* Notificaciones por correo.
* Seguimiento de pedidos.
* Panel administrativo.
* Seguridad.
* Deployment.

Antes de operar comercialmente, será necesario definir controles de acceso, validaciones del lado del servidor, manejo de errores, protección de datos y pruebas de las operaciones críticas.

**Esta etapa representa una dirección futura, no una promesa de funcionalidades ya construidas.**

---

# ◈ 03 — ENGINEERING ROADMAP

```text
THE MACHINE
│
├── 00 / CONCEPT
│
├── 01 / CORE
│   └── JavaScript · Functions · Purchase Flow
│
├── 02 / ARRAYS
│   └── Catalog Structure
│
├── 03 / OBJECTS
│   └── Product Model
│
├── 04 / DOM
│   └── Visual Storefront
│
├── 05 / CART
│   └── Multi-product Purchases
│
├── 06 / COMMERCE
│   └── Discounts · Shipping · Payments
│
├── 07 / HOME
│   └── Curated Discovery
│
├── 08 / RECOMMENDATIONS
│
├── 09 / CUSTOMER EXPERIENCE
│
├── 10 / SERVICES
│
├── 11 / BACK OFFICE
│
├── 12 / PERSISTENCE
│
└── 13 / PRODUCTION E-COMMERCE
```

Cada etapa debe apoyarse en las anteriores. La hoja de ruta orienta el aprendizaje y el desarrollo; no obliga a implementar todo ni a adelantarse a los fundamentos.

---

# ◈ 04 — CURRENT RELEASE

## `THE MACHINE CORE v0.1`

```text
PROJECT TYPE    Academic JavaScript project
MILESTONE       Coderhouse · Pre-entrega 3
INTERACTION     Browser dialogs and console
CATALOG         13 products across 4 categories
PURCHASE FLOW   Selection → Validation → Total → Confirmation
STOCK           In-memory variables
PERSISTENCE     Not implemented
BACKEND         Not implemented
PAYMENTS        Not implemented
```

### Repository structure

```text
THE-MACHINE/
├── index.html
├── main.js
└── README.md
```

### Run locally

Clone the repository:

```bash
git clone https://github.com/jefrete/techno-house-store.git
```

Open `index.html` in a modern browser with JavaScript enabled.

The current implementation uses browser dialogs (`prompt()` and `alert()`) and the developer console (`console.log()`).

---

## ◈ 05 — DEVELOPMENT PRINCIPLES

**Build the foundation before the interface.**

Understand the logic before adding presentation.

**Structure before scale.**

Learn to model products before building a large catalog.

**Incremental complexity.**

Introduce each concept when it solves a real problem.

**Honest documentation.**

Separate current capabilities from planned features.

**Curated commerce.**

The objective is not to show everything. It is to make useful things easier to discover.

---

## ◈ 06 — PROJECT STATUS

```text
[✓] Concept and commercial direction defined
[✓] Initial product catalog
[✓] JavaScript purchase simulator
[✓] Stock verification and calculation
[✓] Purchase confirmation and stock update
[ ] Structured catalog with arrays
[ ] Product model with objects
[ ] Visual storefront
[ ] Shopping cart
[ ] Commercial rules
[ ] Persistent storage
[ ] Backend and production integrations
```

The roadmap will evolve alongside the project and the knowledge acquired at each stage.

---

## ◈ 07 — FINAL DIRECTIVE

```text
┌──────────────────────────────────────────────────────────┐
│                                                          │
│   DO NOT BUILD EVERYTHING AT ONCE.                       │
│                                                          │
│   BUILD THE NEXT THING CORRECTLY.                        │
│                                                          │
│   ONE MODULE. ONE MILESTONE. ONE ITERATION.              │
│                                                          │
└──────────────────────────────────────────────────────────┘
```

The immediate objective is deliberately small:

> **Build a machine capable of selecting a product, checking stock, calculating a purchase and updating the inventory.**

Once the core is working and the milestone is approved, the next module begins.

No premature architecture. No unnecessary complexity. No pretending that planned features already exist.

**THE MACHINE — Curated products. Deliberate engineering. Continuous evolution.**
