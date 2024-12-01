const MetodoEnvio = require('./MetodoEnvio');

class EnvioEstandar extends MetodoEnvio {
  constructor() {
    super();
  }

  calcularCostoEnvio(paquete) {
    // calculo ficticio del costo del envio estandar
    return paquete.getPeso() * 2 + 5;
  }
}

module.exports = EnvioEstandar;
