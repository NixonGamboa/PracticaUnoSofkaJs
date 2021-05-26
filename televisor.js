let Electrodomestico = require("./electrodomestico") ;

module.exports = class Televisor extends Electrodomestico {

   constructor(consumo, procedencia, tamano, tdt) {
        super(consumo, procedencia);
        this.tamano = tamano;
        this.poseeTDT = tdt;
    }

    
    calcularPrecio(){
        super.calcularPrecio();
        this.sobrecostoTamano();
        this.sobrecostoTDT();
    }
    sobrecostoTamano(){
        let adicional = this.tamano <= 40? 0: 0.3 ;
        super.precioAdicional(this.precio*adicional);
    }
    sobrecostoTDT(){
        if (this.poseeTDT) {
            super.precioAdicional(250000);
            console.log("Televisor con tdt");
        }
    }
}