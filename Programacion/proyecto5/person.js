"use strict";
exports.__esModule = true;
exports.Person = void 0;
var Person = /** @class */ (function () {
    //Implementación del método constructor
    function Person(nombre, edad, direccion) {
        this.name = nombre;
        this.age = edad;
        this.adress = direccion;
    }
    //Getter
    Person.prototype.getAdress = function () {
        return this.adress;
    };
    //setter
    Person.prototype.setAdress = function (nuevadireccion) {
        this.adress = nuevadireccion;
    };
    //Implementacion Métodos públicos
    Person.prototype.printName = function () {
        console.log(this.name);
    };
    Person.prototype.yearOfBirth = function (currentYear) {
        return (currentYear - this.age);
    };
    Person.prototype.mostrarTodos = function () {
        return ("Nombre : " + this.name + "\n" + "Edad: " + this.age + "\n" + "Dirección: " + this.getAdress());
    };
    return Person;
}());
exports.Person = Person;
//matriz.js
// module.exports = Persona;
