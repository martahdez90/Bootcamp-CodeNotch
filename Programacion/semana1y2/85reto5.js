//Crear una matriz (vector de vectores) de 10 x 10 es decir 10 elementos y cada uno de ellos es un vector de 10 números.
var matriz1 = [];
for (j = 0; j < 10; j++) {
    var array = [];
    for (i = 0; i < 10; i++) {
        array[i] = (Math.floor(Math.random() * (50 - 0) + 1));
    matriz1[j] = (array);
    
    }  
}    
console.table(matriz1);

var matriz2 = [];
for (j = 0; j < 10; j++) {
    var array = [];
    for (i = 0; i < 10; i++) {
        array[i] = (Math.floor(Math.random() * (50 - 0) + 1));
    matriz2[j] = (array);
    }
    
}    
console.table(matriz2);


var suma = [];
for (i = 0; i < 10; i++) {
    suma[i] = new Array(10);
    for (j = 0; j < 10; j++) {
        suma[i][j] = matriz1[i][j] + matriz2[i][j];
    }
}
console.table(suma);

var multi = [];
for (i = 0; i < suma.length; i++) {
    multi[i] = new Array(10);
    for (j = 0; j < 10; j++) {
        multi[i][j] = suma[i][j] * 2;
    }
}
console.table(multi);



