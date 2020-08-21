"use strict";
exports.__esModule = true;
exports.Matrix = void 0;
var vector_1 = require("./vector");
var Matrix = /** @class */ (function () {
    //Implementación del método constructor
    function Matrix(n, m, k) {
        this.elements = new Array;
        for (var i = 0; i < m; i++) {
            this.elements.push(new vector_1.Vector(n, k));
        }
    }
    //Implementación de getter y setter
    Matrix.prototype.getMatrix = function () {
        return this.elements;
    };
    //Implementación de métodos propios. Imprimir por consola la matriz
    Matrix.prototype.print = function () {
        console.log(this.elements);
    };
    //Suma de elementos con m1
    Matrix.prototype.add = function (m1) {
        var result = new Matrix(0, 0, -1);
        for (var i = 0; i < m1.getMatrix().length; i++) {
            result.elements[i] = this.elements[i].add(m1.elements[i]);
        }
        return result;
    };
    Matrix.prototype.multNumber = function (n) {
        var result = new Matrix(0, 0, -1);
        for (var i = 0; i < this.getMatrix().length; i++) {
            result.elements[i] = this.elements[i].mulNumber(n);
        }
        return result;
    };
    Matrix.prototype.multSpecial = function (n) {
        var result = new Matrix(0, 0, -1);
        for (var i = 0; i < this.elements.length; i++) {
            if (this.elements[0][0] % 2 == 0) {
                result.elements[i] = this.elements[i].mulNumber(n);
            }
            else {
                result.elements[i] = this.elements[i].mulNumber(n - 1);
            }
        }
        return result;
    };
    return Matrix;
}());
exports.Matrix = Matrix;
/* let matrix1: Matrix = new Matrix(5, 4, 10);
let matrix2: Matrix = new Matrix(5, 4, 10);
let matrix3: Matrix;
console.log(matrix1.getMatrix());
console.log(matrix2.getMatrix());
matrix3 = matrix1.add(matrix2);
console.log(matrix3.getMatrix());
let matrix4: Matrix = matrix1.multNumber(10);
console.log(matrix4.getMatrix());
let matrix5: Matrix = matrix1.multSpecial(2);
console.log(matrix5.getMatrix()) */ 
