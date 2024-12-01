const Paquete = require('./Paquete');
const CarritoCompras = require('./CarritoCompras');
const EnvioEstandar = require('./EnvioEstandar');
const EnvioExpress = require('./EnvioExpress');
const EnvioSuscripcion = require('./EnvioSuscripcion');

class PatronStrategy {
  static main() {
    // Crear paquetes
    const paquete1 = new Paquete('Laptop', 3, [50, 30, 20]);
    const paquete2 = new Paquete('Tablet', 1, [30, 20, 10]);

    // Crear carrito
    const carrito = new CarritoCompras();
    carrito.agregarPaquete(paquete1);
    carrito.agregarPaquete(paquete2);

    // Aplicar envío estándar
    carrito.setMetodoEnvio(new EnvioEstandar());
    console.log(`Total con envío estándar: $${carrito.calcularTotal()}`);

    // Aplicar envío express
    carrito.setMetodoEnvio(new EnvioExpress());
    console.log(`Total con envío express: $${carrito.calcularTotal()}`);

    // Aplicar envío con suscripción
    carrito.setMetodoEnvio(new EnvioSuscripcion());
    console.log(`Total con envío suscripción: $${carrito.calcularTotal()}`);
  }
}

PatronStrategy.main();
