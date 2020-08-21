console.clear();
const VectorLib = require("./vector.js");

//Crear matriz: Crea una matriz de nxm numeros aleatorios que van desde 0 hasta k

function createMatriz(n, m, k) {
    matriz2 = [];
    for (j = 0; j < m; j++) {
        matriz2[j] = VectorLib.array(n, k);
    }
    return (matriz2);
}

//Suma matrices: Suma dos matrices si y solo si tienen el mismo numero de elementos

function sumaMatrices(matriz1, matriz2) {
    if (matriz1.length === matriz2.length) {
        var suma = [];
        for (i = 0; i < matriz1.length; i++) {
            suma[i] = new Array(10);
            for (j = 0; j < 10; j++) {
                suma[i][j] = matriz1[i][j] + matriz2[i][j];
            }
        }
        return suma;
    } else {
        return ("No se pueden sumar estas matrices");
    }
}

//Producto numero matriz: Multiplica la matriz por un numero n

function multiMatrices(matriz1, n) {
    var multi = [];
    for (i = 0; i < matriz1.length; i++) {
        multi[i] = new Array(10);
        for (j = 0; j < 10; j++) {
            multi[i][j] = matriz1[i][j] * n;
        }
    }
    return multi;
}

//Resta matriz: Resta dos matrices si y solo si tienen el mismo numero de elementos

function restaMatrices(matriz1, matriz2) {
    if (matriz1.length === matriz2.length) {
        var resta = [];
        for (i = 0; i < matriz1.length; i++) {
            resta[i] = new Array(10);
            for (j = 0; j < 10; j++) {
                resta[i][j] = matriz1[i][j] - matriz2[i][j];
            }
        }
        return resta;
    } else {
        return ("No se pueden restar estas matrices");
    }
}

//Producto matrices: Multiplica dos matrices si y solo si tienen el mismo numero de elementos

function productoMatrices(matriz1, matriz2) {
    if (matriz1.length === matriz2.length) {
        var producto = [];
        for (i = 0; i < matriz1.length; i++) {
            producto[i] = new Array(10);
            for (j = 0; j < 10; j++) {
                producto[i][j] = matriz1[i][j] * matriz2[i][j];
            }
        }
        return producto;
    } else {
        return ("No se pueden multiplicar estas matrices");
    }
}

// matriz.js
module.exports = { createMatriz, sumaMatrices, restaMatrices, multiMatrices, productoMatrices };


