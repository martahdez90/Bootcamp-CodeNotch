var Persona = require("./testPersona")

var Agenda = require("./testAgenda")

//Crear persona1 y persona2
var persona1 = new Persona("Carmen", 60, 167, 1990, ["correr", "saltar"])
var persona2 = new Persona("María", 80, 170, 1986, ["jugar", "leer"]);

//Mostrar peso, altura, IMC y edad
console.log(persona1.getAltura(), persona1.getPeso(), "IMC = " + persona1.calcIMC());
console.log("Edad : " + persona1.calcEdad(2020));

//mostrarTodos  y MostrarAficiones
persona1.mostrarTodos();
persona1.mostrarAficiones();

//Crear agenda e imprimir printPersonas

var agenda1 = new Agenda([persona1, persona2]);

agenda1.printPersona();

console.log(persona1.nombre);


