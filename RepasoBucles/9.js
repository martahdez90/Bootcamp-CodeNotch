/* 9.	Realizar una función que te imprima por consola el siguiente mensaje:
o	“El numero es par”, si el numero introducido como parámetro de entrada es par
o	“El numero es impar”, si el numero introducido como parámetro de entrada es impar
 */
var parImpar = function (numero) {
    return (numero % 2 === 0);
};
console.log(parImpar(8));
console.log(parImpar(9));
