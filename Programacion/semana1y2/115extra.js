//Crear vector: Crea un vector de n numeros aleatorios que van desde 0 hasta m
console.clear();

function array(n, m) {
    var vector = [];
    for (i = 0; i < n; i++) {
        vector[i] = Math.floor(Math.random() * (m - 0) + 1);
    }
    return (vector)
}

var arrayA = array(10, 20);
console.log(arrayA);
var arrayB = array(10, 30);
console.log(arrayB);
var arrayC = array(4, 50);
console.log(arrayC);

//Suma vector: Suma dos vectores si y solo si tienen el mismo numero de elementos

function sumaArrays(array1, array2) {
    if (array1.length === array2.length) {
        var totalSuma = [];
        for (i = 0; i < array1.length; i++) {
            totalSuma[i] = array1[i] + array2[i];
        }
        return (totalSuma);
    } else {
        return ("No se puede sumar este array");
    }
}
var totalSuma1 = sumaArrays(arrayA, arrayB);
console.log(totalSuma1);
var totalSuma2 = sumaArrays(arrayA, arrayC);
console.log(totalSuma2);

//Resta vector: Resta dos vectores si y solo si tienen el mismo numero de elementos

function restaArrays(array1, array2) {
    if (array1.length === array2.length) {
        var totalResta = [];
        for (i = 0; i < array1.length; i++) {
            totalResta[i] = array1[i] - array2[i];
        }
        return (totalResta);
    } else {
        return ("No se puede restar este array");
    }
}

var totalResta1 = restaArrays(arrayB, arrayA);
console.log(totalResta1);
var totalResta2 = restaArrays(arrayA, arrayC);
console.log(totalResta2);

//Producto numero vector: Multiplica el vector por un numero n

function multi(array, numero) {
    var totalMulti = [];
    for (i = 0; i < array.length; i++) {
        totalMulti[i] = array[i] * numero;
    }
    return (totalMulti);
}

var totalMulti1 = multi(arrayA, 5);
var totalMulti2 = multi(arrayC, 10);
console.log(totalMulti1);
console.log(totalMulti2);

//Producto vector: Multiplica dos vectores si y solo si tienen el mismo numero de elementos
function multiArrays(array1, array2) {
    if (array1.length === array2.length) {
        var totalMultiArray = [];
        for (i = 0; i < array1.length; i++) {
            totalMultiArray[i] = array1[i] * array2[i];
        }
        return (totalMultiArray);
    } else {
        return ("No se puede multiplicar este array");
    }
}

var totalMultiArray1 = multiArrays(arrayB, arrayA);
console.log(totalMultiArray1);
var totalMultiArray2 = multiArrays(arrayA, arrayC);
console.log(totalMultiArray2);