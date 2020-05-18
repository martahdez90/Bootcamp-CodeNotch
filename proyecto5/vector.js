"use strict";
exports.__esModule = true;
exports.Vector = void 0;
var Vector = /** @class */ (function () {
    //public nombre: string;
    //Implementación del método constructor
    function Vector(n, k) {
        var i;
        this.elements = new Array;
        for (i = 0; i < n; i++) {
            this.elements[i] = Math.floor(Math.random() * (k - 0) + 1);
        }
        // this.nombre = nombre;  
    }
    //Implementación getter y setter
    Vector.prototype.getVector = function () {
        return this.elements;
    };
    //Implementación de métodos propios
    //Imprime por consola el vector
    Vector.prototype.print = function () {
        console.log(this.elements);
    };
    // suma de elements con v1
    Vector.prototype.add = function (v2) {
        var i;
        var elementv1 = this.elements;
        var elementv2 = v2.elements;
        var result = new Vector(this.elements.length, -1);
        for (i = 0; i < this.elements.length; i++) {
            result.elements[i] = elementv1[i] + elementv2[i];
        }
        return result;
    };
    //resta de elements con v2
    Vector.prototype.subs = function (v2) {
        var elementv1 = this.getVector();
        var elementv2 = v2.getVector();
        var result = new Vector(this.elements.length, -1);
        var elementresult = result.getVector();
        for (var i = 0; i < this.elements.length; i++) {
            elementresult[i] += elementv1[i] - elementv2[i];
        }
        return result;
    };
    //multiplicacion de elements von v2
    Vector.prototype.mult = function (v2) {
        var elementv1 = this.getVector();
        var elementv2 = v2.getVector();
        var result = new Vector(this.elements.length, -1);
        var elementresult = result.getVector();
        for (var i = 0; i < this.elements.length; i++) {
            elementresult[i] += elementv1[i] * elementv2[i];
        }
        return result;
    };
    //multiplicación de elements por n
    Vector.prototype.mulNumber = function (n) {
        var elementv1 = this.getVector();
        var result = new Vector(this.elements.length, -1);
        var elementresult = result.getVector();
        for (var i = 0; i < this.elements.length; i++) {
            elementresult[i] += elementv1[i] * n;
        }
        return result;
    };
    return Vector;
}());
exports.Vector = Vector;
// let vector1: Vector = new Vector(5, 10);
// let vector2: Vector = new Vector(5, 10);
// vector1.print();
// vector2.print();
// console.log((vector1.add(vector2)));
// console.log((vector1.subs(vector2)));
// console.log((vector1.mult(vector2)));
// console.log((vector1.mulNumber(10)));
/* let arrayadd: number[] = (vector1.add(vector2)).getVector();
console.log(arrayadd);
let arraysubs: number[] = (vector1.add(vector2)).getVector();
console.log(arraysubs);
let arraymult: number[] = (vector1.add(vector2)).getVector();
console.log(arraymult); */
