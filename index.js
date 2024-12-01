const Paquete = require('./envio/Paquete');
const CarritoCompras = require('./envio/CarritoCompras');
const EnvioEstandar = require('./envio/EnvioEstandar');
const EnvioExpress = require('./envio/EnvioExpress');
const EnvioSuscripcion = require('./envio/EnvioSuscripcion');

// agregar algunos paquetes para agregar al carrito
const paquete1 = new Paquete('Laptop', 3, [50, 30, 20]);
const paquete2 = new Paquete('Tablet', 1, [30, 20, 10]);

// crear un carrito de compras
const carrito = new CarritoCompras();

// agregar paquetes al carrito
carrito.agregarPaquete(paquete1);
carrito.agregarPaquete(paquete2);

// Aplicar diferentes métodos de envio y calcular el total

// envio estandar
carrito.setMetodoEnvio(new EnvioEstandar());
console.log(`Total con envio estándar: $${carrito.calcularTotal()}`);

// envio express
carrito.setMetodoEnvio(new EnvioExpress());
console.log(`Total con envio express: $${carrito.calcularTotal()}`);

// envio con suscripción
carrito.setMetodoEnvio(new EnvioSuscripcion());
console.log(`Total con envio suscripción: $${carrito.calcularTotal()}`);
