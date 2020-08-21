//Crear vector: Crea un vector de n numeros aleatorios que van desde 0 hasta m

function array(n, m) {
    var vector = [];
    for (i = 0; i < n; i++) {
        vector[i] = Math.floor(Math.random() * (m - 0) + 1);
    }
    return (vector)
}

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

//Producto numero vector: Multiplica el vector por un numero n

function multi(array, numero) {
    var totalMulti = [];
    for (i = 0; i < array.length; i++) {
        totalMulti[i] = array[i] * numero;
    }
    return (totalMulti);
}

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

// index.js
module.exports = { array, sumaArrays, restaArrays, multi, multiArrays };

