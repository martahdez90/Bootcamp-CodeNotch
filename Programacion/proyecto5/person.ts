export class Person {
    //declaración de atributos
    public name: string;
    public age: number;
    private adress: string;

    //Implementación del método constructor
    constructor(nombre, edad, direccion) {
        this.name = nombre;
        this.age = edad;
        this.adress = direccion;
    }
    //Getter
    public getAdress(): string {
        return this.adress;
    }
    //setter
    public setAdress(nuevadireccion) {
        this.adress = nuevadireccion;
    }
    //Implementacion Métodos públicos
    public printName() {
        console.log(this.name);
    }
    public yearOfBirth(currentYear: number): number {
        return (currentYear - this.age);
    }
    public mostrarTodos() {
        return ("Nombre : " + this.name + "\n" + "Edad: " + this.age + "\n" + "Dirección: " + this.getAdress());
    }
}




//matriz.js
// module.exports = Persona;