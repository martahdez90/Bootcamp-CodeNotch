console.clear();

import { Person } from "./person"

let persona1: Person = new Person("Pablo", "22", "calle Isla, 4");
console.log(persona1.age)
console.log(persona1.name);
console.log(persona1.getAdress());
console.log(persona1.yearOfBirth(2020));
persona1.setAdress("Calle Platano, 2");
console.log(persona1.getAdress())
console.log("Nombre : " + persona1.name + "\n" + "Edad: " + persona1.age + "\n" + "Dirección: " + persona1.getAdress())
