// 6.	Realizar una función que te devuelva si existe un numero par en el array de números que introduces como parámetro de entrada.
var tienempar = function (array) {
    var condi = true;
    var i = 0;
    while (i < array.length && condi) {
        if (array[i] % 2 == 0) {
            console.log("su array tiene un numero par");
            condi = false;
        }
        i++;
    }
};
tienempar([3, 4, 6]);
