//Realizar un procedimiento que reciba un array de nombres y te devuelva verdadero si y solo si todos los nombres empiezan por M.    
var names = function (array) {
    var a = true;
    var i = 0;
    var result = true;
    while (i < array.length && a) {
        if (array[i][0] === "M") {
        }
        else {
            a = false;
        }
        i++;
    }
    return a;
};
var array1 = ["Maria", "Maula", "Mristina"];
var array2 = ["Pablo", "Marta", "Cristina"];
console.log(names(array1));
console.log(names(array2));
