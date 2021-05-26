let Electrodomestico = require("./electrodomestico") ;
let Televisor = require("./televisor") ;
let Nevera = require("./nevera") ;
let Inventario = require('./Inventario');
let ElectrodomesticoStock = require('./electrodomesticoStock');


Inventario = new Inventario();

var nuevoObjeto = new Electrodomestico ("A", "Nacional");
var NoExiste = true;
prueba: while(NoExiste){
    for (var elemento of Inventario.lista) {
        if (JSON.stringify(elemento) === JSON.stringify(nuevoObjeto)){
            console.log("Si son iguales")
            NoExiste = false       
            break prueba;    
        }
    }
    console.log("Aqui se hace push")
    Inventario.lista.push(nuevoObjeto);
    NoExiste = false
    break prueba;
}
var nuevoObjeto2 = new Electrodomestico ("A", "Nacional");
var NoExiste = true;
prueba2:while(NoExiste){
    for (var elemento of Inventario.lista) {
        if (JSON.stringify(elemento) === JSON.stringify(nuevoObjeto2)){
            console.log("Si son iguales")
            NoExiste = false
            break prueba2;
        }
    }
    console.log("Aqui se hace push")
    Inventario.lista.push(nuevoObjeto);
    NoExiste = false
    break prueba2;
}



/*const agregar = (objeto, consumo, procedencia, cantidad) => {
  for (let index = 0; index < cantidad; index++) {
    const element = new objeto(consumo, procedencia);
    arregloElectro.push(element)
  }
}
agregar(Electrodomestico, "A", "Importado",3);
agregar(Nevera, "A", "Importado",3);

console.log(arregloElectro);
*/

/*const obtenerConsumo = async () => {
  const { consumo } = await inquirer.prompt({
    type: "input",
    name: "consumo",
    message: `Ingrese el tipo de consumo`,
  });
  return consumo;
};

const main = async () => {
  const resultado = await obtenerConsumo();
  console.log(resultado);
};

main();*/
Inventario.lista.push(new Televisor ("A", "Nacional",35,true));
Inventario.lista.push(new Nevera("A", "Nacional",140));


Inventario.mostrarInventario()
