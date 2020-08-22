console.clear();

import { Person } from "./person"
import { Agenda } from "./calendar"

let persona1: Person = new Person("Pablo", "22", "calle Isla, 4");
let persona2: Person = new Person("Marta", "28", "calle Flor, 5");
let persona3: Person = new Person("Sara", "35", "calle Palmera, 24");


let agenda: Agenda = new Agenda([persona1, persona2, persona3]);

console.log("Sus nombre es: " + persona1.name);
console.log("Los datos de su agenda son: " + agenda.printCalendar())