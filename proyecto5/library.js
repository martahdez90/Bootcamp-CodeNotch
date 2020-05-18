"use strict";
exports.__esModule = true;
exports.Library = void 0;
var Library = /** @class */ (function () {
    //Implementación del método constructor
    function Library(libros, direccion, manager) {
        this.book = libros;
        this.adress = direccion;
        this.manager = manager;
    }
    //Implementación de getter y setter
    Library.prototype.getAdress = function () {
        return this.adress;
    };
    Library.prototype.getManager = function () {
        return this.manager;
    };
    //Implementació de métodos propios
    Library.prototype.toString = function () {
        var result = "";
        for (var i = 0; i < this.book.length; i++) {
            result += ("\n" + "Libro" + [i + 1] + ":" + "\n" + this.book[i].toString() + "\n");
        }
        return result;
    };
    Library.prototype.getNumberOfBooks = function () {
        return this.book.length;
    };
    Library.prototype.findByAuthor = function (author) {
        var result = [];
        for (var i = 0; i < this.getNumberOfBooks(); i++) {
            if (this.book[i].getAuthor() === author)
                result.push(this.book[i]);
        }
        return result;
    };
    Library.prototype.findByEditorial = function (editorial) {
        var result = [];
        for (var i = 0; i < this.getNumberOfBooks(); i++) {
            if (this.book[i].getEditorial() === editorial) {
                result.push(this.book[i].getTitle());
            }
        }
        return result;
    };
    return Library;
}());
exports.Library = Library;
// let book1: Book = new Book("Introducción a Javascript", 233, "2344433-BC23333", "Joseph Smith", "Now Editions");
// let book2: Book = new Book("Pulgarcita", 50, "2343477473-BD23333", "Romalgo", "SM");
// let book3: Book = new Book("Bambi", 50, "23473743-BD23333", "Pedro Jimenez", "SM");
// let book4: Book = new Book("Peter Pan", 50, "23473743-BD23333", "Joseph Smith", "SM");
// let library1: Library = new Library([book1, book2, book3, book4], "calle Fin del Mundo, 3, Madrid", "Miguel Cebrera")
// //console.log(library1);
// console.log(library1.getAdress() + "\n" + library1.getManager() + "\n" + library1.getNumberOfBooks());
// console.log(library1.toString());
// console.log(library1.findByAuthor("Joseph Smith"))
// console.log(library1.findByEditorial("SM"))
