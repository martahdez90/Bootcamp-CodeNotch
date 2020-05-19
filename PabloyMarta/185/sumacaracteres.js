var array1 = ["Casa", "Coche", "Ciudad", "Cesta"];
var sumaArray = function (array) {
    var result = 0;
    for (var i = 0; i < array.length; i++) {
        result += array[i].length;
    }
    return result;
};
console.log(sumaArray(array1));
