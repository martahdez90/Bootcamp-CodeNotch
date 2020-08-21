var persona0 =
{
    "nombre": "Manuel",
    "apellido": "Rodriguez",
    "anyoNacimiento": 1957,
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

for (i = 0; i < personas.length; i++)
    if (personas[i].colorPelo === "castaño") {
        console.log(personas[i].nombre);
    }

for (i = 0; i < personas.length; i++)
    if (personas[i].anyoNacimiento <= 1990) {
        console.log(2020 - (personas[i].anyoNacimiento))
    }

for (i = 0; i < personas.length; i++)
    if ((personas[i].colorPelo == "negro" && (personas[i].dni.anyoExpedicion <= 2010)) || (personas[i].anyoNacimiento >= 2012 && (personas[i].aficiones == "comer" || ("dormir")))) {
        console.log(personas[i].dni.lugarNacimiento)
    }