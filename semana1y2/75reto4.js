var persona0 =
{
    "nombre": "Manuel",
    "apellido": "Rodriguez",
    "anyoNacimiento": 1987,
    "aficiones": ["futbol", "baloncesto", "hockey"],
    "dni": {
        "anyoExpedicion": 2002,
        "lugarNacimiento": "Lugo"
    },
    "colorPelo": "castaño"
}
var persona1 =
{
    "nombre": "Juana",
    "apellido": "Rodriguez",
    "anyoNacimiento": 1989,
    "aficiones": ["baloncesto", "danza", "pintar"],
    "dni": {
        "anyoExpedicion": 2000,
        "lugarNacimiento": "Madrid"
    },
    "colorPelo": "negro"
}
var persona2 =
{
    "nombre": "Pablo",
    "apellido": "Fernandez",
    "anyoNacimiento": 2010,
    "aficiones": ["escribir", "dormir", "judo"],
    "dni": {
        "anyoExpedicion": 2018,
        "lugarNacimiento": "Burgos"
    },
    "colorPelo": "castaño"
}
var persona3 =
{
    "nombre": "Maribel",
    "apellido": "Sanchez",
    "anyoNacimiento": 2015,
    "aficiones": ["comer", "tenis", "leer"],
    "dni": {
        "anyoExpedicion": 2005,
        "lugarNacimiento": "León"
    },
    "colorPelo": "pelirroja"
}

var personas = [persona0, persona1, persona2, persona3];

/*Mostrar todos los elementos del array personas en la consola de javascript con un bucle for y con un bucle
while.*/

for (i = 0; i < personas.length; i++)
    console.log(personas[i]);

var i = 0;
while (i < personas.length) {
    console.log(personas[i]);
    i++;
}
/* Mostrar en la consola javascript los elementos del array persona que cumplan que su año de nacimiento esté
entre 1978 y 2000.*/

for (i = 0; i < personas.length; i++)
    if (personas[i].anyoNacimiento > 1978 && (personas[i].anyoNacimiento < 2000)) {
        console.log(personas[i].nombre);
    }
var i = 0;
while (i < personas.length) {
    if (personas[i].anyoNacimiento > 1978 && (personas[i].anyoNacimiento < 2000))
        console.log(personas[i].nombre);
    i++;
}
//Mostrar mensaje edad
var i;
for (i = 0; i < personas.length; i++)
    if (personas[i].anyoNacimiento > 1978 && (personas[i].anyoNacimiento < 2000)) {
        console.log("Tu edad está entre 40 y 20 años");
    } else {
        console.log("Tu edad es menor de 20")
    }

//Añadir la aficcion jugar a la play
var i;
for (i = 0; i < personas.length; i++) {
    personas[i].aficiones.push("jugar a la play");
}
console.log(personas);