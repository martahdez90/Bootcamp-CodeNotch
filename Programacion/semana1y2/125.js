console.clear();
class Persona {
    constructor(nombre, peso, altura, anyoNacimiento, array1) {
        this.nombre = nombre;
        this.peso = peso;
        this.altura = altura;
        this.anyoNacimiento = anyoNacimiento;
        this.aficiones = array1;
    }
    //Getter
    getNombre() {
        return this.nombre;
    }
    getPeso() {
        return this.peso;
    }
    getAltura() {
        return this.altura;
    }
    getAnyonacimiento() {
        return this.anyoNacimiento;
    }
    getAficiones() {
        return this.aficiones;
    }
    getmostrarAficiones(persona) {
        return this.motrarAficiones(persona);
    }
    //setter
    setNombre(nuevonombre) {
        this.nombre = nuevonombre;
    }
    setPeso(nuevopeso) {
        this.peso = nuevopeso;
    }
    setaltura(nuevaAltura) {
        this.peso = nuevaAltura;
    }
    setAnacimiento(nuevoanyo) {
        this.anyoNacimiento = nuevoanyo;
    }
    setAficiones(nuevaAficion) {
        this.aficiones = nuevaAficion;
    }
    //Método IMC
    calcIMC() {
        var resultado = (this.peso / (this.altura * this.altura) * 10000);
        var miresultado = resultado.toFixed(2);
        var final = parseFloat(miresultado)
        return final;
    }
    //Método edad
    calcEdad(date) {
        return date - this.anyoNacimiento;
    }
    //Metodo mostrarTodos
    mostrarTodos() {
        console.log("Nombre : " + this.nombre + "\n" + "Peso: " + this.peso + "\n" + "Altura: " + this.altura + "\n" + "anyoNacimiento: " + this.anyoNacimiento + "\n" + "aficiones: " + this.aficiones);
    }
    //Metodo mostrar aficiones
    mostrarAficiones() {
        console.log(this.aficiones);
    }
}

var persona1 = new Persona("Carmen", 60, 167, 1990, ["correr", "saltar"])
console.log(persona1.getAltura(), persona1.getPeso(), "IMC = " + persona1.calcIMC());
console.log("Edad : " + persona1.calcEdad(2020));
persona1.mostrarTodos();
persona1.mostrarAficiones();
var persona2 = new Persona("María", 80, 170, 1986, ["jugar", "leer"]);

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

var agenda1 = new Agenda([persona1, persona2]);

agenda1.printPersona();

