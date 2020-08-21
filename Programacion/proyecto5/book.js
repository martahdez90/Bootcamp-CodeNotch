"use strict";
exports.__esModule = true;
exports.Book = void 0;
var Book = /** @class */ (function () {
    //Implementación del método constructor
    function Book(titulo, paginas, issn, autor, editorial) {
        this.title = titulo;
        this.nPages = paginas;
        this.issn = issn;
        this.author = autor;
        this.editorial = editorial;
    }
    //Implementación getter y setter
    Book.prototype.getTitle = function () {
        return this.title;
    };
    Book.prototype.getnPages = function () {
        return this.nPages;
    };
    Book.prototype.getIssn = function () {
        return this.issn;
    };
    Book.prototype.getAuthor = function () {
        return this.author;
    };
    Book.prototype.getEditorial = function () {
        return this.editorial;
    };
    Book.prototype.setTitle = function (nuevoTitle) {
        this.title = nuevoTitle;
    };
    Book.prototype.setnPages = function (nuevoNpages) {
        this.nPages = nuevoNpages;
    };
    Book.prototype.setIssn = function (nuevoIssn) {
        this.issn = nuevoIssn;
    };
    Book.prototype.setAuthor = function (nuevoAuthor) {
        this.author = nuevoAuthor;
    };
    Book.prototype.setEditorial = function (nuevoEditorial) {
        this.editorial = nuevoEditorial;
    };
    //Implementación de métodos propios
    Book.prototype.toString = function () {
        return ("Title - " + this.getTitle() + "\n" + "Number of Pages - " + this.getnPages() + "\n" + "ISSN -  " + this.getIssn() + "\n" + "Author -  " + this.getAuthor() + "\n" + "Editorial -  " + this.getEditorial());
    };
    return Book;
}());
exports.Book = Book;
/* let book1: Book = new Book("Harry Potter", 340, "a345b22", "J.K. Rowling", "Anaya");
let book2: Book = new Book("Pulgarcita", 50, "jdksm22", "Romalgo", "SM");

console.log(book1.toString() + "\n" + book2.toString())
console.log(book1.getAuthor() + "\n" + book1.getEditorial() + "\n" + book1.getIssn()) */ 
