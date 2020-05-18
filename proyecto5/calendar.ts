console.clear();
import { Person } from "./person"

export class Agenda {
    //declaración de atributos
    public people: Person[];
    //Implementación del método constructor
    constructor(arrayperson) {
        this.people = arrayperson;
    }
    //Implementacion Métodos públicos
    public printCalendar() {
        var result = "";
        for (var i = 0; i < this.people.length; i++) {
            result = result + "\n" + this.people[i].mostrarTodos();
        }
        return result;
    }
}





