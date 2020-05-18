import { Book } from "./book"

console.clear();
let book1: Book = new Book("Harry Potter", 340, "a345b22", "J.K. Rowling", "Anaya");
let book2: Book = new Book("Pulgarcita", 50, "jdksm22", "Romalgo", "SM");

console.log(`${book1.toString()} \n ${book2.toString()}`)
console.log(book1.getAuthor() + "\n" + book1.getEditorial() + "\n" + book1.getIssn())