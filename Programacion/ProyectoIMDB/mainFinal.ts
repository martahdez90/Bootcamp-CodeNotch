import { Movie } from "./movie"
import { Imdb } from "./imdb"
import { Professional } from "./professional"
const readlineSync = require("readline-Sync");
const fs = require('fs')

let actor1: Professional = new Professional("Julia Roberts", 40, "female", 60, 170, "brown", "blue", "caucasian", "no", "USA", 2, "actress")
let actor2: Professional = new Professional("Halle Berry", 30, "female", 57, 174, "black", "brown", "african-american", "yes", "Canadian", 2, "actress")
let actor3: Professional = new Professional("Paul Williams", 30, "male", 80, 170, "brown", "blue", "caucasian", "yes", "USA", 2, "actor")
let actor4: Professional = new Professional("Mario Guevara", 30, "male", 80, 180, "brown", "blue", "hispanic", "yes", "Mexican", 2, "actor")
let actor5: Professional = new Professional("Xing Xung", 25, "male", 80, 180, "black", "brown", "asian", "yes", "China", 0, "actor")
let director2: Professional = new Professional("Alejandro Amenabar", 40, "male", 80, 175, "white", "brown", "hispanic", "no", "Spanish", 1, "director")
let director1: Professional = new Professional("Pedro Almodovar", 70, "male", 90, 167, "white", "brown", "hispanic", "no", "Spanish", 1, "director")
let writer1: Professional = new Professional("Alan Ball", 50, "male", 70, 177, "white", "brown", "caucasian", "no", "USA", 3, "writer")


//Pedimos los parámetros
let title = readlineSync.question('Titulo:');
let releaseYear = readlineSync.question('Anyo de emision: ');
let nationality = readlineSync.question('Nacionalidad: ');
let genre = readlineSync.question('Genero:');

let newMovie: Movie = new Movie(title, releaseYear, nationality, genre)

newMovie.language = readlineSync.question('Idioma:');
newMovie.plataform = readlineSync.question('Plataforma: ');
newMovie.isMCU = readlineSync.question('Es del Universo Marvel: ');
newMovie.mainCharacterName = readlineSync.question('Nombre del actor principal: ');
newMovie.producer = readlineSync.question('Productor: ');
newMovie.distributor = readlineSync.question('Distribuidor: ');

//Primer actor
let nombre = readlineSync.question('Nombre del actor: ');
let age = readlineSync.question('Edad: ');
let genreP = readlineSync.question('Genero: ');
let weight = readlineSync.question('Peso: ');
let height = readlineSync.question('Altura: ');
let hairColor = readlineSync.question('Color de pelo: ');
let eyeColor = readlineSync.question('Color de ojos: ');
let race = readlineSync.question('Raza: ');
let isRetired = readlineSync.question('Retirado: ');
let nationalityP = readlineSync.question('Nacionalidad: ');
let oscarsNumber = readlineSync.question('Numero de Oscars ganado: ');
let profession = readlineSync.question('Profesion: ');

let actorA: Professional = new Professional(nombre, age, genreP, weight, height, hairColor, eyeColor, race, isRetired, nationality, oscarsNumber, profession)

newMovie.actors = new Array(actorA)

//Completar actores
let completar: string = readlineSync.question('Si quieres completar otro actor escribe si: ');


if (completar === "si" || completar === "Si") {
    //Segundo actor
    nombre = readlineSync.question('Nombre del actor: ');
    age = readlineSync.question('Edad: ');
    genreP = readlineSync.question('Genero: ');
    weight = readlineSync.question('Peso: ');
    height = readlineSync.question('Altura: ');
    hairColor = readlineSync.question('Color de pelo: ');
    eyeColor = readlineSync.question('Color de ojos: ');
    race = readlineSync.question('Raza: ');
    isRetired = readlineSync.question('Retirado: ');
    nationalityP = readlineSync.question('Nacionalidad: ');
    oscarsNumber = readlineSync.question('Numero de Oscars ganado: ');
    profession = readlineSync.question('Profesion: ')

    let actorB: Professional = new Professional(nombre, age, genreP, weight, height, hairColor, eyeColor, race, isRetired, nationality, oscarsNumber, profession)

    newMovie.actors.push(actorB)
}

//Director
nombre = readlineSync.question('Nombre del director: ');
age = readlineSync.question('Edad: ');
genreP = readlineSync.question('Genero: ');
weight = readlineSync.question('Peso: ');
height = readlineSync.question('Altura: ');
hairColor = readlineSync.question('Color de pelo: ');
eyeColor = readlineSync.question('Color de ojos: ');
race = readlineSync.question('Raza: ');
isRetired = readlineSync.question('Retirado: ');
nationalityP = readlineSync.question('Nacionalidad: ');
oscarsNumber = readlineSync.question('Numero de Oscars ganado: ');
profession = readlineSync.question('Profesion: ')

let directorB: Professional = new Professional(nombre, age, genreP, weight, height, hairColor, eyeColor, race, isRetired, nationality, oscarsNumber, profession)

newMovie.director = directorB;

//Escritor
nombre = readlineSync.question('Nombre del director: ');
age = readlineSync.question('Edad: ');
genreP = readlineSync.question('Genero: ');
weight = readlineSync.question('Peso: ');
height = readlineSync.question('Altura: ');
hairColor = readlineSync.question('Color de pelo: ');
eyeColor = readlineSync.question('Color de ojos: ');
race = readlineSync.question('Raza: ');
isRetired = readlineSync.question('Retirado: ');
nationalityP = readlineSync.question('Nacionalidad: ');
oscarsNumber = readlineSync.question('Numero de Oscars ganado: ');
profession = readlineSync.question('Profesion: ')

let escritorB: Professional = new Professional(nombre, age, genreP, weight, height, hairColor, eyeColor, race, isRetired, nationality, oscarsNumber, profession)

newMovie.writer = escritorB;

function escribirEnFicheroJSON(nombreFichero: string, movie: Movie) {
    let result = "\n \n"
    result += JSON.stringify(movie)
    return fs.appendFileSync(nombreFichero, result);
}

escribirEnFicheroJSON("ImdbBBDD.json", newMovie)







