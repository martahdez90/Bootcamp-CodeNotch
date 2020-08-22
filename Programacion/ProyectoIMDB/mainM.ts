// importo la clase Movie
import { Movie } from "./movie"
import { Imdb } from "./imdb"
import { Professional } from "./professional"
const fs = require('fs')

//Profesionales
let actor1: Professional = new Professional("Julia Roberts", 40, "female", 60, 170, "brown", "blue", "caucasian", "no", "USA", 2, "actress")
let actor2: Professional = new Professional("Halle Berry", 30, "female", 57, 174, "black", "brown", "african-american", "yes", "Canadian", 2, "actress")
let actor3: Professional = new Professional("Paul Williams", 30, "male", 80, 170, "brown", "blue", "caucasian", "yes", "USA", 2, "actor")
let actor4: Professional = new Professional("Mario Guevara", 30, "male", 80, 180, "brown", "blue", "hispanic", "yes", "Mexican", 2, "actor")
let actor5: Professional = new Professional("Xing Xung", 25, "male", 80, 180, "black", "brown", "asian", "yes", "China", 0, "actor")
let director2: Professional = new Professional("Alejandro Amenabar", 40, "male", 80, 175, "white", "brown", "hispanic", "no", "Spanish", 1, "director")
let director1: Professional = new Professional("Pedro Almodovar", 70, "male", 90, 167, "white", "brown", "hispanic", "no", "Spanish", 1, "director")
let writer1: Professional = new Professional("Alan Ball", 50, "male", 70, 177, "white", "brown", "caucasian", "no", "USA", 3, "writer")

//Películas
let seven: Movie = new Movie("Seven", 1995, "EE.UU", "Crime")
let lamb: Movie = new Movie("EL silencio de los corderos", 1991, "EE.UU", "Thriler")
let matilda: Movie = new Movie("Matilda", 1998, "EE.UU", "Infantil")


seven.actors = [actor1, actor2, actor3]
seven.director = director1;
seven.writer = writer1;
seven.language = "english"
seven.plataform = "Netflix"
seven.isMCU = "no"
seven.mainCharacterName = actor1.name
seven.producer = "Paul J.S"
seven.distributor = "Karma Films"

lamb.actors = [actor4, actor5, actor3]
lamb.director = director2;
lamb.writer = writer1;
lamb.language = "spanish"
lamb.plataform = "Movistar +"
lamb.isMCU = "no"
lamb.mainCharacterName = actor5.name
lamb.producer = "Paul J.S"
lamb.distributor = "OK Films"


let pelis: Movie[] = new Array(seven, lamb)
let pelis2: Imdb = new Imdb(pelis)


pelis2.escribirEnFicheroJSON("imdbBBDD.json")
console.log(pelis2.obtenerInstanciaIMDB("ImdbBBDD.json"));
console.log(pelis2.peliculas[0].actors)

