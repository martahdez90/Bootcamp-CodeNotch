export class Book {
    //declaración de atributos
    private title: string;
    private nPages: number;
    private issn: string;
    private author: string;
    private editorial: string;
    //Implementación del método constructor
    constructor(titulo, paginas, issn, autor, editorial) {
        this.title = titulo;
        this.nPages = paginas;
        this.issn = issn;
        this.author = autor;
        this.editorial = editorial;
    }
    //Implementación getter y setter
    public getTitle(): string {
        return this.title;
    }
    public getnPages(): number {
        return this.nPages;
    }
    public getIssn(): string {
        return this.issn;
    }
    public getAuthor(): string {
        return this.author;
    }
    public getEditorial(): string {
        return this.editorial;
    }
    public setTitle(nuevoTitle: string) {
        this.title = nuevoTitle;
    }
    public setnPages(nuevoNpages: number) {
        this.nPages = nuevoNpages;
    }
    public setIssn(nuevoIssn: string) {
        this.issn = nuevoIssn;
    }
    public setAuthor(nuevoAuthor: string) {
        this.author = nuevoAuthor
    }
    public setEditorial(nuevoEditorial: string) {
        this.editorial = nuevoEditorial;
    }
    //Implementación de métodos propios
    public toString(): string {
        return ("Title - " + this.getTitle() + "\n" + "Number of Pages - " + this.getnPages() + "\n" + "ISSN -  " + this.getIssn() + "\n" + "Author -  " + this.getAuthor() + "\n" + "Editorial -  " + this.getEditorial());
    }
}
/* let book1: Book = new Book("Harry Potter", 340, "a345b22", "J.K. Rowling", "Anaya");
let book2: Book = new Book("Pulgarcita", 50, "jdksm22", "Romalgo", "SM");

console.log(book1.toString() + "\n" + book2.toString())
console.log(book1.getAuthor() + "\n" + book1.getEditorial() + "\n" + book1.getIssn()) */