/* Calcular el factorial de un numero dado, primero utilizando la sentencia for y luego con while. 
(5! = 5*4*3*2*1) */
var total = 1;
var n = 5;
for (var i = 1; i <= n; i++) {
    total = total * i;
}
console.log(total)

var p = 5;
var total2 = 1;
var j = 1;
while (j <= p) {
    total2 = total2 * j
    j++;
}
console.log(total2);

/* Dado un array de números, buscar si existe algún numero de ese
array que sea múltiplo de 2 utilizando la sentencia while.*/

var numbers = [4, 6, 5, 8, 9, 10];
var i = 0;
while (i < numbers.length) {
    if (numbers[i] % 2 == 0)
        console.log(numbers[i]);
    i++;
}

/*Realizar la suma de los 100 primeros números. Utilizar el bucle que
mejor se adapte al problema.*/

var total = 0;
for (let i = 1; i <= 100; i++) {
    total += i;
    console.log(total);
}

/*Dado un array de nombres mostrar el índice de la primera
ocurrencia del nombre “Pepe”. Utilizar el bucle que mejor se
adapte al problema.  */

var nombres = ["Pedro", "Miguel", "Pepe", "Juan", "Pepe"];

var j = true;
for (var i = 0; i < nombres.length; i++) {
    if (nombres[i] == "Pepe" && (j == true)) {
        console.log(i)
        j = false;
    }
}

var j = 0;
var k = true;
while (j < nombres.length) {
    if (nombres[j] == "Pepe" && (k == true)) {
        console.log(j)
        k = false;
    }
    j++;
}

//Generar dos vectores de 100 números aleatorios entre 0 y 20.

for (j = 0; j < 2; j++) {
    var array = [];
    for (i = 0; i < 100; i++) {
        array[i] = (Math.floor(Math.random() * (100 - 0) + 1));
    }
    console.log(array)
}

array1 = [8, 11, 10, 12, 15, 11, 14, 10, 20, 6, 6, 14, 4, 4, 4, 9, 3, 4, 11, 7, 7, 18, 14, 14, 1, 2, 18, 14, 11, 20, 1, 15, 20, 16, 13, 17, 5, 11, 19, 3, 13, 13, 13, 14, 13, 3, 20, 3, 1, 8, 7, 4, 10, 9, 15, 17, 16, 7, 1, 4, 19, 18, 8, 20, 4, 15, 16, 5, 7, 10, 3, 12, 4, 1, 1, 5, 4, 8, 7, 18, 16, 14, 20, 7, 11, 4, 18, 9, 12, 10, 11, 19, 6, 20, 6, 13, 18, 7, 12, 16];

array2 = [1, 15, 2, 12, 19, 3, 9, 4, 20, 18, 19, 3, 4, 11, 15, 7, 5, 1, 20, 6, 2, 16, 7, 2, 11, 4, 11, 12, 20, 19, 9, 11, 6, 8, 8, 2, 1, 16, 8, 14, 12, 1, 11, 10, 9, 3, 12, 20, 16, 6, 5, 3, 3, 10, 12, 7, 19, 6, 11, 7, 13, 4, 2, 11, 16, 7, 6, 9, 7, 15, 14, 18, 18, 13, 8, 7, 10, 3, 11, 6, 15, 5, 4, 5, 6, 19, 19, 5, 20, 15, 2, 2, 8, 13, 6, 3, 5, 14, 14, 1];

//suma de vectores
var i = 0;
var text = [];
while (i < array1.length) {
    text[i] = array1[i] + array2[i];
    i++;
}
console.log(text)


