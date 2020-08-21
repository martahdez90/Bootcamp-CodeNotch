console.clear();
import { Library } from './library'
import { Book } from './book';

let book1: Book = new Book("Introducción a Javascript", 233, "2344433-BC23333", "Joseph Smith", "Now Editions");
let book2: Book = new Book("Pulgarcita", 50, "2343477473-BD23333", "Romalgo", "SM");
let book3: Book = new Book("Bambi", 50, "23473743-BD23333", "Pedro Jimenez", "SM");
let book4: Book = new Book("Peter Pan", 50, "23473743-BD23333", "Joseph Smith", "SM");


let library1: Library = new Library([book1, book2, book3, book4], "calle Fin del Mundo, 3, Madrid", "Miguel Cebrera")

//console.log(library1);
console.log(library1.getAdress() + "\n" + library1.getManager() + "\n" + library1.getNumberOfBooks());

console.log(library1.toString());
console.log("Los libros que contienen el autor Joseph Smith son: " + "\n" + library1.findByAuthor("Joseph Smith") + "\n")
console.log("Los libros de la editorial SM son: \n" + library1.findByEditorial("SM"))