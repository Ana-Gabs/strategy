const MetodoEnvio = require('./MetodoEnvio');

class EnvioExpress extends MetodoEnvio {
  constructor() {
    super();
  }

  calcularCostoEnvio(paquete) {
    // calculo ficticio del costo del envio express
    return paquete.getPeso() * 3 + 10;
  }
}

module.exports = EnvioExpress;
