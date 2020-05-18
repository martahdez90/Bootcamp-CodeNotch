"use strict";
exports.__esModule = true;
console.clear();
var matrix_1 = require("./matrix");
function multSpecial(m1, n) {
    var result = new matrix_1.Matrix(0, 0, -1);
    for (var i = 0; i < m1.getMatrix().length; i++) {
        if (m1.getMatrix()[0].getVector()[0] % 2 == 0) {
            result.getMatrix()[i] = m1.getMatrix()[i].mulNumber(n);
        }
        else {
            result.getMatrix()[i] = m1.getMatrix()[i].mulNumber(n - 1);
        }
    }
    return result;
}
var matrix1 = new matrix_1.Matrix(5, 4, 10);
var matrix2 = new matrix_1.Matrix(5, 4, 10);
console.log(matrix1.getMatrix());
console.log(matrix2.getMatrix());
/* console.log("Ahora la suma de indices")
console.log(matrix1.getMatrix()[0].getVector()[0] + matrix2.getMatrix()[0].getVector()[0]); */
var matrix3 = multSpecial(matrix1, 2);
console.log(matrix3.getMatrix());
