console.clear();

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

let prof: Professional;
let actor1: Professional = new Professional(0, "foto.jpg", "Julia Roberts", 40, "female", 60, 170, "brown", "blue", "caucasian", "no", "USA", 2, "actress");
let actor2: Professional = new Professional(1, "foto.jpg", "Halle Berry", 30, "female", 57, 174, "black", "brown", "african-american", "yes", "Canadian", 2, "actress");

let lectura = fs.readFileSync("profesionales.json", 'utf8');

//let profs = new Array(Professional)
let profs = JSON.parse(lectura);

app.get("/", function (req, resp) {
    let response = { error: true, code: 200, message: 'Start point' };
    resp.send(response)
})

app.get("/profesionales/:id", function (req, resp) {
    let id: number = req.params.id
    resp.send(profs[id])
})
app.get("/profesionales/", function (req, resp) {
    resp.send(profs)

})
app.post("/profesionales", function (req, resp) {
    prof = new Professional(req.body.id, req.body.picture, req.body.nombre, req.body.edad, req.body.genre, req.body.weight, req.body.height, req.body.hairColor, req.body.eyeColor, req.body.race, req.body.isRetired, req.body.nationality, req.body.oscarsNumber, req.body.profession)
    profs.push(prof);

    let profSt = JSON.stringify(profs, null, 2)
    fs.writeFileSync('profesionales.json', profSt)

    let response = { error: true, code: 200, message: 'User created' };
    resp.send(response)
})

/* {
    "id": "2",
    "picture": "daniel.jpg",
    "nombre": "Daniel Wild",
    "edad": "18",
    "genre": "male",
    "weight": "80",
    "height": "180",
    "hairColor": "brown",
    "eyeColor": "green",
    "race": "white",
    "isRetired": "no",
    "nacionality": "British",
    "oscarNumber": "2",
    "profession": "director"
} */

app.put("/profesionales", function (req, resp) {
    let id: number = req.body.id;
    prof = new Professional(req.body.id, req.body.picture, req.body.nombre, req.body.edad, req.body.genre, req.body.weight, req.body.height, req.body.hairColor, req.body.eyeColor, req.body.race, req.body.isRetired, req.body.nationality, req.body.oscarsNumber, req.body.profession)
    profs[id] = prof
    let profSt = JSON.stringify(profs, null, 2)
    fs.writeFileSync("profesionales.json", profSt);

    let response = { error: true, code: 200, message: 'User updated' };
    resp.send(response)
})

app.delete("/profesionales", function (req, resp) {
    let id: number = req.body.id;
    profs.splice(id, 1)

    let profSt = JSON.stringify(profs, null, 2)
    fs.writeFileSync("profesionales.json", profSt);
    let response = { error: true, code: 200, message: 'User deleted' };
    resp.send(response)

})

class Movie {
    public id: string
    public title: string
    public releaseYear: string
    public actors: string
    public nacionality: string
    public director: string
    public writer: string
    public language: string
    public plataform: string
    public isMCU: string
    public mainCharacterName: string
    public producer: string
    public distributor: string
    public genre: string
    //creo el constructor
    constructor(id: string, title: string, releaseYear: string, nacionality: string, genre: string) {
        this.id = id
        this.title = title
        this.releaseYear = releaseYear
        this.nacionality = nacionality
        this.genre = genre
    }
}

let pelicula: Movie = null;

app.get("/pelicula", function (req, resp) {
    resp.send(pelicula)
})

app.post("/pelicula", function (req, resp) {
    pelicula = new Movie(req.body.id, req.body.title, req.body.releaseYear, req.body.nationality, req.body.genre)
    pelicula.actors = req.body.actors;
    pelicula.director = req.body.director;
    pelicula.writer = req.body.writer;
    pelicula.language = req.body.language;
    pelicula.plataform = req.body.plataform;
    pelicula.isMCU = req.body.isMCU;
    pelicula.mainCharacterName = req.body.mainCharacterName;
    pelicula.producer = req.body.producer;
    pelicula.genre = req.body.genre;

    let response = { error: true, code: 200, message: 'Movie created' };
    resp.send(response)
})

/* picture = {
    "id": "2",
    "title": "Harry Potter",
    "releaseYear": "2008",
    "actors": "Daniel Racliffe",
    "nacionality": "British",
    "director": "Paul W",
    "writer": "Maria E",
    "language": "english",
    "platform": "HBO",
    "isMCU": "no",
    "mainCharacterName": "Harry Potter",
    "producer": "Mike S",
    "distributor": "Jane Do",
    "genre": "comedy"
} */

app.put("/pelicula", function (req, resp) {
    pelicula.id = req.body.id;
    pelicula.title = req.body.title;
    pelicula.releaseYear = req.body.releaseYear;
    pelicula.nacionality = req.body.nationality;
    pelicula.genre = req.body.genre;
    pelicula.actors = req.body.actors;
    pelicula.director = req.body.director;
    pelicula.writer = req.body.writer;
    pelicula.language = req.body.language;
    pelicula.plataform = req.body.plataform;
    pelicula.isMCU = req.body.isMCU;
    pelicula.mainCharacterName = req.body.mainCharacterName;
    pelicula.producer = req.body.producer;
    pelicula.genre = req.body.genre;
    let response = { error: true, code: 200, message: 'Movie updated' };
    resp.send(response)
})


app.delete("/pelicula", function (req, resp) {
    pelicula.id = ""
    pelicula.title = ""
    pelicula.releaseYear = ""
    pelicula.nacionality = ""
    pelicula.genre = ""
    pelicula.actors = ""
    pelicula.director = ""
    pelicula.writer = ""
    pelicula.language = ""
    pelicula.plataform = ""
    pelicula.isMCU = ""
    pelicula.mainCharacterName = ""
    pelicula.producer = ""
    pelicula.genre = ""
    let response = { error: true, code: 200, message: 'User deleted' };
    resp.send(response)
})

app.use(function (req, resp, next) {
    resp = { error: true, code: 200, message: 'missing url' }
    resp.status(404).send(resp)
})

app.listen(port, function (error) {
    if (error) {
        console.log("Something went wrong", error)
    } else {
        console.log("Server is listening on port " + port);
    }
})


