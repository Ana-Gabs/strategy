const MetodoEnvio = require('./MetodoEnvio');

class EnvioSuscripcion extends MetodoEnvio {
  constructor() {
    super();
  }

  calcularCostoEnvio(paquete) {
    // calculo ficticio del costo de envio con descuento
    return paquete.getPeso() * 2 + 2; //descuento
  }
}

module.exports = EnvioSuscripcion;
