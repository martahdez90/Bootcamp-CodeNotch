function calculadora(operacion, operador1, operador2) {
    if (operacion === "sum") {
        return (operador1 + operador2);
    } else if (operacion === "subs") {
        return (operador1 - operador2);
    } else if (operacion === "mult") {
        return (operador1 * operador2);
    } else if (operacion === "div") {
        return (operador1 / operador2);
    } else {
        alert("¿Has escrito bien los números?")
    }
}

var suma = calculadora("sum", 2, 6);
var resta = calculadora("subs", 30, 12);
var multiplicacion = calculadora("mult", 5, 6);
var division = calculadora("div", 80, 20);
console.log(suma, resta, multiplicacion, division)