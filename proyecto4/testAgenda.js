
class Agenda {
    constructor(personas) {
        this.personas = personas;
    }
    //metodo printpersona
    printPersona() {
        var result;
        for (var i = 0; i < this.personas.length; i++) {
            result = result + this.personas[i].mostrarTodos();
        }
        return result;
    }
}

// matriz.js
module.exports = Agenda;


