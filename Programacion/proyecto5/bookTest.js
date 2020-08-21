"use strict";
exports.__esModule = true;
var book_1 = require("./book");
console.clear();
var book1 = new book_1.Book("Harry Potter", 340, "a345b22", "J.K. Rowling", "Anaya");
var book2 = new book_1.Book("Pulgarcita", 50, "jdksm22", "Romalgo", "SM");
console.log(book1.toString() + " \n " + book2.toString());
console.log(book1.getAuthor() + "\n" + book1.getEditorial() + "\n" + book1.getIssn());
