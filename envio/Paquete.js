class Paquete {
    constructor(nombre, peso, dimensiones) {
      this.nombre = nombre;
      this.peso = peso;
      this.dimensiones = dimensiones; 
    }
  
    getPeso() {
      return this.peso;
    }
  
    getDimensiones() {
      return this.dimensiones;
    }
  }
  
  module.exports = Paquete;
  