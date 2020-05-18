console.clear();

var Matrizlyb = require("./matriz.js");

//Crear matris de nxm desde 0 a k
mimatriz1 = Matrizlyb.createMatriz(10, 10, 50);
mimatriz2 = Matrizlyb.createMatriz(10, 10, 30);
mimatriz3 = Matrizlyb.createMatriz(3, 3, 10)
console.table(mimatriz1);
console.table(mimatriz2);
console.table(mimatriz3);


//Suma matrices: Suma dos matrices si y solo si tienen el mismo numero de elementos
var Suma1 = Matrizlyb.sumaMatrices(mimatriz1, mimatriz2);
var Suma2 = Matrizlyb.sumaMatrices(mimatriz1, mimatriz3);
console.table(Suma1);
console.table(Suma2);

//Producto numero matriz: Multiplica la matriz por un numero n
var multi1 = Matrizlyb.multiMatrices(Suma1, 10);
console.table(multi1);

//Resta matriz: Resta dos matrices si y solo si tienen el mismo numero de elementos
var Resta1 = Matrizlyb.restaMatrices(mimatriz1, mimatriz2);
var Resta2 = Matrizlyb.restaMatrices(mimatriz1, mimatriz3);
console.table(Resta1);
console.table(Resta2);

//Producto matrices: Multiplica dos matrices si y solo si tienen el mismo numero de elementos
var producto1 = Matrizlyb.productoMatrices(mimatriz1, mimatriz2);
var producto2 = Matrizlyb.productoMatrices(mimatriz1, mimatriz3);
console.table(producto1);
console.table(producto2);
