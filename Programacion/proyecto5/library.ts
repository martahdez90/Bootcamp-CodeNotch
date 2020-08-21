import { Book } from './book';

export class Library {
    //declaración de atributos
    private book: Book[];
    private adress: string;
    private manager: string;
    //Implementación del método constructor
    constructor(libros, direccion, manager) {
        this.book = libros;
        this.adress = direccion;
        this.manager = manager;
    }
    //Implementación de getter y setter
    public getAdress(): string {
        return this.adress;
    }

    public getManager(): string {
        return this.manager;
    }
    //Implementació de métodos propios
    public toString(): string {
        let result: string = ""
        for (let i = 0; i < this.book.length; i++) {
            result += ("\n" + "Libro" + [i+1] + ":" + "\n" + this.book[i].toString() + "\n")
        }
        return result;
    }
    public getNumberOfBooks(): number {
        return this.book.length
    }
    public findByAuthor(author: string): Book[] {
        let result: Book[] = []
        for (let i = 0; i < this.getNumberOfBooks(); i++) {
            if (this.book[i].getAuthor() === author)
                result.push(this.book[i]);
        }
        return result;
    }
    public findByEditorial(editorial: string): string[] {
        let result: string[] = []
        for (let i = 0; i < this.getNumberOfBooks(); i++) {
            if (this.book[i].getEditorial() === editorial) {
                result.push(this.book[i].getTitle());
            }
        }
        return result;
    }
}

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


