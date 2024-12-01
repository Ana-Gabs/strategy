# Proyecto de Carrito de Compras con el Patrón Strategy en Node.js
Este proyecto implementa el **patrón de diseño Strategy** en Node.js para un carrito de compras. En este sistema, se utilizan diferentes estrategias para calcular el costo del envío de los paquetes, permitiendo que el comportamiento del cálculo del envío cambie de manera flexible sin alterar la lógica interna del carrito de compras.

## Estructura del Proyecto



## Ejecute el programa 
Para correr el programa escriba **node index.js** sobre la terminal donde esta abierto el programa.

## Flujo de ejecución
Total con envio estándar: $19
Total con envio express: $27
Total con envio suscripción: $16

## Clases principales y métodos
1. Clase Paquete (envio/Paquete.js)  --> Esta clase representa los paquetes que se agregarán al carrito de compras y que pueden tener diferentes atributos (nombre, peso, dimensiones).
**Métodos principales**
    1. getPrecio() --> Devuelve el precio del paquete.
    2. getPeso() --> Devuelve el peso del paquete.
2. Clase CarritoCompras (envio/CarritoCompras.js) --> El carrito de compras es donde se agregan los paquetes y se calculan los totales.
**Métodos principales**
    1. agregarPaquete(paquete) --> Agrega un paquete al carrito.
    2. setMetodoEnvio(metodoEnvio) --> Establece la estrategia de envío que se va a utilizar.
    3. calcularTotal() --> Calcula el total de los paquetes más el costo del envío basado en la estrategia seleccionada.
    3. Interfaz MetodoEnvio (envio/MetodoEnvio.js) --> Define el contrato común para todas las estrategias de envío.
**Método principal**
    1. calcularEnvio(paquete) --> Calcula el costo de envío para un paquete dado.
4. Clase EnvioEstandar (envio/EnvioEstandar.js) --> Estrategia de envío estándar, que calcula el costo de envío según el peso del paquete.
**Método principal**
    1. calcularEnvio(paquete) --> Calcula el costo de envío estándar.

5. Clase EnvioExpress (envio/EnvioExpress.js) --> Estrategia de envío express, que incluye un recargo adicional por el envío rápido.
**Método principal**
1. calcularEnvio(paquete) --> Calcula el costo de envío express, con un recargo adicional.

6. Clase EnvioSuscripcion (envio/EnvioSuscripcion.js) --> Estrategia de envío con descuento para clientes con suscripción activa.
**Método principal**
    1. calcularEnvio(paquete) --> Calcula el costo de envío con descuento para suscriptores.

## Implementación del Patrón Strategy
El patron Strategy es utilizado para definir una familia de algoritmos de cálculo de envío (como envío estándar, express o con suscripción), los cuales pueden ser intercambiados de manera flexible. Cada estrategia se implementa como una clase separada que implementa la interfaz MetodoEnvio.
El beneficio principal de este patrón es la capacidad de cambiar el comportamiento del cálculo del costo de envío sin modificar las clases existentes. De esta manera, el sistema es fácil de extender con nuevas estrategias de envío si fuera necesario en el futuro.
