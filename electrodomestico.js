module.exports = class Electrodomestico{
    constructor(consumo, procedencia){
        this.consumo = consumo;
        this.procedencia = procedencia;
        this.precio= 0;
        this.calcularPrecio();
    }

    calcularPrecio(){
        this.precioPorProcedencia();
        this.precioPorConsumo();
    }

    precioAdicional(recargo){
        this.precio = this.precio + recargo;
    }


    precioPorProcedencia(){
        if (this.procedencia === "Nacional"){
            this.precio = this.precio+250000;
        }else if(this.procedencia === "Importado"){
            this.precio = this.precio+350000;
        }
    }
    precioPorConsumo(){
        switch (this.consumo){
            case "A":
                this.precio += 450000;
                break;
            case "B":
                this.precio += 350000;
                break;
            case "C":
                this.precio += 250000;
                break;
            default:
                console.log("Consumo no definido");
        }
    }

   
}
