
const express = require("express")
const bodyParser = require('body-parser')
const fs = require('fs');
const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json())

class Professional {
    public name: string;
    public age: number;
    public genre: string;
    public weight: number;
    public height: number;
    public hairColor: string;
    public eyeColor: string;
    public race: string;
    public isRetired: string;
    public nationality: string;
    public oscarsNumber: number;
    public profession: string;
    public id: number;
    public picture: string;
    //Implementación del método constructor
    constructor(id: number, picture: string, name: string, age: number, genre: string, weight: number, height: number, hairColor: string, eyeColor: string, race: string, isRetired: string, nationality: string, oscarsNumber: number, profession: string) {
        this.id = id;
        this.picture = picture;
        this.name = name;
        this.age = age;
        this.genre = genre;
        this.weight = weight;
        this.height = height;
        this.hairColor = hairColor;
        this.eyeColor = eyeColor;
        this.race = race;
        this.isRetired = isRetired;
        this.nationality = nationality;
        this.oscarsNumber = oscarsNumber;
        this.profession = profession;
    }
    //Método propio imprimir valor atributos
    public print() {
        console.log(`Name: ${this.name} \n Age: ${this.genre} \n Weight: ${this.genre} \n Height: ${this.weight} \n Color of the hair: ${this.hairColor} \n Color of the eyes: ${this.eyeColor} \n Race: ${this.race} \n Is retired?: ${this.isRetired} \n Nationality: ${this.nationality} \n Number of Oscars: ${this.oscarsNumber} \n Profession: ${this.profession} \n`)
    }
}

class Movie {
    public id: number
    public title: string
    public releaseYear: number
    public actors: Professional[]
    public nationality: string
    public director: Professional
    public writer: Professional
    public language: string
    public plataform: string
    public isMCU: string
    public mainCharacterName: string
    public producer: string
    public distributor: string
    public genre: string
    //creo el constructor
    constructor(id: number, title: string, releaseYear: number, nationality: string, genre: string) {
        this.id = id
        this.title = title
        this.releaseYear = releaseYear
        this.nationality = nationality
        this.genre = genre
    }
}
let actor1: Professional = new Professional(0, "foto.jpg", "Julia Roberts", 40, "female", 60, 170, "brown", "blue", "caucasian", "no", "USA", 2, "actress");
let actor2: Professional = new Professional(1, "foto.jpg", "Halle Berry", 30, "female", 57, 174, "black", "brown", "african-american", "yes", "Canadian", 2, "actress");
let actor: Professional;
let actors: Professional[] = []
let director: Professional
/* new Professional(0, "foto.jpg", "Pedro Almodobar", 40, "male", 60, 170, "brown", "blue", "caucasian", "no", "Spanish", 2, "director")
new Professional(0, "foto.jpg", "Sara Martinez", 40, "female", 60, 170, "brown", "blue", "caucasian", "no", "Spanish", 2, "writer")
*/

let writer: Professional;

let seven: Movie = new Movie(0,"Seven", 1995, "EE.UU", "Crime")
seven.actors = [actor1, actor2]
seven.director = director;
seven.writer = writer;
seven.language = "english"
seven.plataform = "Netflix"
seven.isMCU = "no"
seven.mainCharacterName = actor1.name
seven.producer = "Paul J.S"
seven.distributor = "Karma Films" 

let peliculas: Movie[] = [seven]

app.get("/", function (req, resp) {
    let response = { error: true, code: 200, message: 'Start point' };
    resp.send(response)
})


app.get("/peliculas/:id", function (req, resp) {
    let id: number = req.params.id
    resp.send(peliculas[id])
})
app.get("/peliculas", function (req, resp) {
    resp.send(peliculas)
})

let pelicula: Movie;


app.post("/peliculas", function (req, resp) {
   pelicula = new Movie(req.body.id, req.body.title, req.body.releaseYear, req.body.nationality, req.body.genre)
    pelicula.actors = actors;
    pelicula.director = director;
    pelicula.writer = writer;
    pelicula.language = req.body.language;
    pelicula.plataform = req.body.plataform;
    pelicula.isMCU = req.body.isMCU;
    pelicula.mainCharacterName = req.body.mainCharacterName;
    pelicula.producer = req.body.producer;
    pelicula.genre = req.body.genre;
    peliculas.push(pelicula);
    let peliculaS = JSON.stringify(pelicula, null, 2)
    fs.appendFileSync('pelicula.json', peliculaS)
    let response = { error: true, code: 200, message: 'Movie created' };
    resp.send(response)
})

/*{
    "id": "0",
    "title": "Harry Potter",
    "releaseYear": "2008",
    "nationality": "British",
    "language": "english",
    "platform": "HBO",
    "isMCU": "no",
    "mainCharacterName": "Harry Potter",
    "producer": "Mike S",
    "distributor": "Jane Do",
    "genre": "comedy"
} */

app.put("/peliculas", function (req, resp) {
    pelicula.id = req.body.id;
    pelicula.title = req.body.title;
    pelicula.releaseYear = req.body.releaseYear;
    pelicula.nationality = req.body.nationality;
    pelicula.genre = req.body.genre;
    pelicula.actors = actors;
    pelicula.director = director;
    pelicula.writer = writer;
    pelicula.language = req.body.language;
    pelicula.plataform = req.body.plataform;
    pelicula.isMCU = req.body.isMCU;
    pelicula.mainCharacterName = req.body.mainCharacterName;
    pelicula.producer = req.body.producer;
    pelicula.genre = req.body.genre;
    let id = req.body.id;
    peliculas[id] = pelicula;
    let response = { error: true, code: 200, message: 'Movie updated' };
    resp.send(response)
})


app.delete("/peliculas", function (req, resp) {
    pelicula.title = ""
    pelicula.releaseYear = null
    pelicula.nationality = ""
    pelicula.genre = ""
    pelicula.actors = []
    pelicula.director = null
    pelicula.writer = null
    pelicula.language = ""
    pelicula.plataform = ""
    pelicula.isMCU = ""
    pelicula.mainCharacterName = ""
    pelicula.producer = ""
    pelicula.genre = ""
    let id: number = req.body.id;
    peliculas[id] = pelicula;
    let response = { error: true, code: 200, message: 'User deleted' };
    resp.send(response)
})

/* {
    "id": "0",
    "title": "",
    "releaseYear": "",
    "actors": "",
    "nationality": "",
    "director": "",
    "writer": "",
    "language": "",
    "platform": "",
    "isMCU": "",
    "mainCharacterName": "r",
    "producer": "",
    "distributor": "",
    "genre": ""
} */

/* app.use(function (req, resp, next) {
    resp = { error: true, code: 200, message: 'missing url' }
    resp.status(404).send(resp)
}) */

app.listen(port, function (error) {
    if (error) {
        console.log("Something went wrong", error)
    } else {
        console.log("Server is listening on port " + port);
    }
})


