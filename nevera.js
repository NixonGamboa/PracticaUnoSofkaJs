let Electrodomestico = require("./electrodomestico") ;

module.exports = class Nevera extends Electrodomestico {

    constructor(consumo, procedencia, volumen) {
        super(consumo, procedencia);
        this.volumen = volumen;
        this.calcularPrecioNevera();
    }

    calcularPrecioNevera(){
        this.sobrecostoVolumen();
    } 
    sobrecostoVolumen(){
        let sobreVolumen = this.volumen - 120 ;
        if (sobreVolumen > 0){
            let incrementos = sobreVolumen/10;
            let adicional = incrementos*0.05;
            super.precioAdicional(this.precio*adicional);

        }
    }
}