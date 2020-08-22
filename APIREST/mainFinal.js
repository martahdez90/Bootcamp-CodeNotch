"use strict";
exports.__esModule = true;
var movie_1 = require("./movie");
var professional_1 = require("./professional");
var readlineSync = require("readline-Sync");
var fs = require('fs');
var actor1 = new professional_1.Professional("Julia Roberts", 40, "female", 60, 170, "brown", "blue", "caucasian", "no", "USA", 2, "actress");
var actor2 = new professional_1.Professional("Halle Berry", 30, "female", 57, 174, "black", "brown", "african-american", "yes", "Canadian", 2, "actress");
var actor3 = new professional_1.Professional("Paul Williams", 30, "male", 80, 170, "brown", "blue", "caucasian", "yes", "USA", 2, "actor");
var actor4 = new professional_1.Professional("Mario Guevara", 30, "male", 80, 180, "brown", "blue", "hispanic", "yes", "Mexican", 2, "actor");
var actor5 = new professional_1.Professional("Xing Xung", 25, "male", 80, 180, "black", "brown", "asian", "yes", "China", 0, "actor");
var director2 = new professional_1.Professional("Alejandro Amenabar", 40, "male", 80, 175, "white", "brown", "hispanic", "no", "Spanish", 1, "director");
var director1 = new professional_1.Professional("Pedro Almodovar", 70, "male", 90, 167, "white", "brown", "hispanic", "no", "Spanish", 1, "director");
var writer1 = new professional_1.Professional("Alan Ball", 50, "male", 70, 177, "white", "brown", "caucasian", "no", "USA", 3, "writer");
//Pedimos los parámetros
var title = readlineSync.question('Titulo:');
var releaseYear = readlineSync.question('Anyo de emision: ');
var nationality = readlineSync.question('Nacionalidad: ');
var genre = readlineSync.question('Genero:');
var newMovie = new movie_1.Movie(title, releaseYear, nationality, genre);
newMovie.language = readlineSync.question('Idioma:');
newMovie.plataform = readlineSync.question('Plataforma: ');
newMovie.isMCU = readlineSync.question('Es del Universo Marvel: ');
newMovie.mainCharacterName = readlineSync.question('Nombre del actor principal: ');
newMovie.producer = readlineSync.question('Productor: ');
newMovie.distributor = readlineSync.question('Distribuidor: ');
//Primer actor
var nombre = readlineSync.question('Nombre del actor: ');
var age = readlineSync.question('Edad: ');
var genreP = readlineSync.question('Genero: ');
var weight = readlineSync.question('Peso: ');
var height = readlineSync.question('Altura: ');
var hairColor = readlineSync.question('Color de pelo: ');
var eyeColor = readlineSync.question('Color de ojos: ');
var race = readlineSync.question('Raza: ');
var isRetired = readlineSync.question('Retirado: ');
var nationalityP = readlineSync.question('Nacionalidad: ');
var oscarsNumber = readlineSync.question('Numero de Oscars ganado: ');
var profession = readlineSync.question('Profesion: ');
var actorA = new professional_1.Professional(nombre, age, genreP, weight, height, hairColor, eyeColor, race, isRetired, nationality, oscarsNumber, profession);
newMovie.actors = new Array(actorA);
//Completar actores
var completar = readlineSync.question('Si quieres completar otro actor escribe si: ');
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
    profession = readlineSync.question('Profesion: ');
    var actorB = new professional_1.Professional(nombre, age, genreP, weight, height, hairColor, eyeColor, race, isRetired, nationality, oscarsNumber, profession);
    newMovie.actors.push(actorB);
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
profession = readlineSync.question('Profesion: ');
var directorB = new professional_1.Professional(nombre, age, genreP, weight, height, hairColor, eyeColor, race, isRetired, nationality, oscarsNumber, profession);
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
profession = readlineSync.question('Profesion: ');
var escritorB = new professional_1.Professional(nombre, age, genreP, weight, height, hairColor, eyeColor, race, isRetired, nationality, oscarsNumber, profession);
newMovie.writer = escritorB;
function escribirEnFicheroJSON(nombreFichero, movie) {
    var result = "\n \n";
    result += JSON.stringify(movie);
    return fs.appendFileSync(nombreFichero, result);
}
escribirEnFicheroJSON("ImdbBBDD.json", newMovie);
