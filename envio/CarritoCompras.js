class CarritoCompras {
    constructor() {
      this.paquetes = [];
      this.metodoEnvio = null;
    }
  
    agregarPaquete(paquete) {
      this.paquetes.push(paquete);
    }
  
    setMetodoEnvio(metodoEnvio) {
      this.metodoEnvio = metodoEnvio;
    }
  
    calcularTotal() {
      let total = this.paquetes.reduce((acum, paquete) => acum + (paquete.getPeso() * 2), 0);
      if (this.metodoEnvio) {
        total += this.metodoEnvio.calcularCostoEnvio(this.paquetes[0]); 
      }
      return total;
    }
  }
  
  module.exports = CarritoCompras;
  