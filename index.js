let Electrodomestico = require("./electrodomestico") ;
let Televisor = require("./televisor") ;
let Nevera = require("./nevera") ;

ele = new Electrodomestico ("A", "Nacional");
ele.calcularPrecio();
console.log(ele);


tvSinTdt = new Televisor("A", "Nacional", 35,true);
tvSinTdt.calcularPrecio();
console.log(tvSinTdt);

nuevaNevera = new Nevera("A", "Nacional",140);
nuevaNevera.calcularPrecio();
console.log(nuevaNevera);
