"use strict";
exports.__esModule = true;
exports.Agenda = void 0;
console.clear();
var Agenda = /** @class */ (function () {
    //Implementación del método constructor
    function Agenda(arrayperson) {
        this.people = arrayperson;
    }
    //Implementacion Métodos públicos
    Agenda.prototype.printCalendar = function () {
        var result = "";
        for (var i = 0; i < this.people.length; i++) {
            result = result + "\n" + this.people[i].mostrarTodos();
        }
        return result;
    };
    return Agenda;
}());
exports.Agenda = Agenda;
