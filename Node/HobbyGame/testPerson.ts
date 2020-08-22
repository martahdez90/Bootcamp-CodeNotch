import { Person } from "./person";

enum profesiones {
    developer = "developer",
    tester = "tester",
    manager = "manager",
    director = "director"
}

let persona1: Person = new Person("Marcos", "Spanish", profesiones.developer, 8)
let persona2: Person = new Person("Paula", "French", profesiones.director, 2)


console.log(persona1.esIgual(persona2));
console.log(persona1.getNationality(), persona1.getExperience(), persona1.getProfession());
console.log(persona1.esIgual(persona1));
console.log(persona1.printValor())
persona1.printstring()
persona2.setName("Matilda")
console.log(persona2);