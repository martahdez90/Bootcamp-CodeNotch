
console.clear();

var myLib = require("./index.js");

//Crear vector: Crea un vector de n numeros aleatorios que van desde 0 hasta m
var arrayA = myLib.array(10, 20);
console.log(arrayA);
var arrayB = myLib.array(10, 30);
console.log(arrayB);
var arrayC = myLib.array(4, 50);
console.log(arrayC);


//Suma vector: Suma dos vectores si y solo si tienen el mismo numero de elementos
var totalSuma1 = myLib.sumaArrays(arrayA, arrayB);
console.log(totalSuma1);
var totalSuma2 = myLib.sumaArrays(arrayA, arrayC);
console.log(totalSuma2);

//Resta vector: Resta dos vectores si y solo si tienen el mismo numero de elementos

var totalResta1 = myLib.restaArrays(arrayB, arrayA);
console.log(totalResta1);
var totalResta2 = myLib.restaArrays(arrayA, arrayC);
console.log(totalResta2);


//Producto vector: Multiplica dos vectores si y solo si tienen el mismo numero de elementos
var totalMultiArray1 = myLib.multiArrays(arrayB, arrayA);
console.log(totalMultiArray1);
var totalMultiArray2 = myLib.multiArrays(arrayA, arrayC);
console.log(totalMultiArray2);

//Producto numero vector: Multiplica el vector por un numero n
var totalMulti1 = myLib.multi(arrayA, 5);
var totalMulti2 = myLib.multi(arrayC, 10);
console.log(totalMulti1);
console.log(totalMulti2);



