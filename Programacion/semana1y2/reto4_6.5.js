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

if (personas[0].colorPelo == "castaño") {
    console.log(personas[0].nombre)
}
if (personas[1].colorPelo == "castaño") {
    console.log(personas[1].nombre)
}
if (personas[2].colorPelo == "castaño") {
    console.log(personas[2].nombre)
}
if (personas[3].colorPelo == "castaño") {
    console.log(personas[3].nombre)
}

if ((personas[0].anyoNacimiento) <= 1990) {
    console.log(2020 - (personas[0].anyoNacimiento))
}
if ((personas[1].anyoNacimiento) <= 1990) {
    console.log(2020 - (personas[1].anyoNacimiento))
}
if ((personas[2].anyoNacimiento) <= 1990) {
    console.log(2020 - (personas[2].anyoNacimiento))
}
if ((personas[3].anyoNacimiento) <= 1990) {
    console.log(2020 - (personas[3].anyoNacimiento))
}



if ((personas[0].colorPelo == "negro" && (personas[0].dni.anyoExpedicion <= 2010)) || (personas[0].anyoNacimiento >= 2012 && (personas[0].aficiones == "comer" || ("dormir")))) {
    console.log(personas[0].dni.lugarNacimiento)
}
if ((personas[1].colorPelo == "negro" && (personas[1].dni.anyoExpedicion <= 2010)) || (personas[1].anyoNacimiento >= 2012 && (personas[1].aficiones == "comer" || ("dormir")))) {
    console.log(personas[1].dni.lugarNacimiento)
}
if ((personas[2].colorPelo == "negro" && (personas[2].dni.anyoExpedicion <= 2010)) || (personas[2].anyoNacimiento >= 2012 && (personas[2].aficiones == "comer" || ("dormir")))) {
    console.log(personas[2].dni.lugarNacimiento)
}
if ((personas[3].colorPelo == "negro" && (personas[3].dni.anyoExpedicion <= 2010)) || (personas[3].anyoNacimiento >= 2012 && (personas[3].aficiones == "comer" || ("dormir")))) {
    console.log(personas[3].dni.lugarNacimiento)
}

