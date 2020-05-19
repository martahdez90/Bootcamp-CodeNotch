//10.	Utilizando las dos funciones anteriores indicar si es par o impar la suma de los caracteres de cada uno de los siguientes arrays:
var array1 = ["Casa", "Coche", "Ciudad", "Cesta"];
var array2 = ["Barco", "Baca", "Bicicleta", "Balon", "Bisiesto", "Brasil"];
var array3 = ["Venezuela", "Veneno", "Voltaje"];
var sumaArray = function (array) {
    var result = 0;
    for (var i = 0; i < array.length; i++) {
        result += array[i].length;
    }
    if (result % 2 === 0) {
        return ("par");
    }
    else {
        return ("impar");
    }
};
console.log(sumaArray(array1));
console.log(sumaArray(array2));
console.log(sumaArray(array3));
