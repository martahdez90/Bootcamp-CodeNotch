//Crear vector: Crea un vector de n numeros aleatorios que van desde 0 hasta m
console.clear();

function array(n, k) {
    var vector = [];
    for (i = 0; i < n; i++) {
        vector[i] = Math.floor(Math.random() * (k - 0) + 1);
    }
    return (vector);
}




/* var matriz2 = [];
for (j = 0; j < 10; j++) {
    var array = [];
    for (i = 0; i < 10; i++) {
        array[i] = (Math.floor(Math.random() * (50 - 0) + 1));
        matriz2[j] = (array);
    }

}
console.table(matriz2);
*/

//matriz.js
module.exports = { array };

