console.clear();
var express = require("express");
var bodyParser = require('body-parser');
var fs = require('fs');
var app = express();
var port = 3000;
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
var Professional = /** @class */ (function () {
    //Implementación del método constructor
    function Professional(id, picture, name, age, genre, weight, height, hairColor, eyeColor, race, isRetired, nationality, oscarsNumber, profession) {
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
    Professional.prototype.print = function () {
        console.log("Name: " + this.name + " \n Age: " + this.genre + " \n Weight: " + this.genre + " \n Height: " + this.weight + " \n Color of the hair: " + this.hairColor + " \n Color of the eyes: " + this.eyeColor + " \n Race: " + this.race + " \n Is retired?: " + this.isRetired + " \n Nationality: " + this.nationality + " \n Number of Oscars: " + this.oscarsNumber + " \n Profession: " + this.profession + " \n");
    };
    return Professional;
}());
var Movie = /** @class */ (function () {
    //creo el constructor
    function Movie(id, title, releaseYear, nationality, genre) {
        this.id = id;
        this.title = title;
        this.releaseYear = releaseYear;
        this.nationality = nationality;
        this.genre = genre;
    }
    return Movie;
}());
var actor1 = new Professional(0, "foto.jpg", "Julia Roberts", 40, "female", 60, 170, "brown", "blue", "caucasian", "no", "USA", 2, "actress");
var actor2 = new Professional(1, "foto.jpg", "Halle Berry", 30, "female", 57, 174, "black", "brown", "african-american", "yes", "Canadian", 2, "actress");
var actor;
var actors = [];
var director;
/* new Professional(0, "foto.jpg", "Pedro Almodobar", 40, "male", 60, 170, "brown", "blue", "caucasian", "no", "Spanish", 2, "director")
new Professional(0, "foto.jpg", "Sara Martinez", 40, "female", 60, 170, "brown", "blue", "caucasian", "no", "Spanish", 2, "writer")
*/
var writer;
var seven = new Movie(0, "Seven", 1995, "EE.UU", "Crime");
seven.actors = [actor1, actor2];
seven.director = director;
seven.writer = writer;
seven.language = "english";
seven.plataform = "Netflix";
seven.isMCU = "no";
seven.mainCharacterName = actor1.name;
seven.producer = "Paul J.S";
seven.distributor = "Karma Films";
var peliculas = [seven];
app.get("/", function (req, resp) {
    var response = { error: true, code: 200, message: 'Start point' };
    resp.send(response);
});
app.get("/pelicula/actor/:id", function (req, resp) {
    var id = req.params.id;
    resp.send(actors[id]);
});
app.get("/pelicula/actors/", function (req, resp) {
    resp.send(actors);
});
app.get("/pelicula/director", function (req, resp) {
    resp.send(director);
});
app.get("/pelicula/guionista", function (req, resp) {
    resp.send(writer);
});
app.post("/pelicula/actor", function (req, resp) {
    var id = req.body.id;
    actor = new Professional(req.body.id, req.body.picture, req.body.name, req.body.age, req.body.genre, req.body.weight, req.body.height, req.body.hairColor, req.body.eyeColor, req.body.race, req.body.isRetired, req.body.nationality, req.body.oscarsNumber, req.body.profession);
    actors[id] = actor;
    var actorsS = JSON.stringify(actors, null, 2);
    fs.appendFileSync('profesionales.json', actorsS);
    var response = { error: true, code: 200, message: 'Actor created and added to actors' };
    resp.send(response);
});
/* {
    "id": 2,
    "picture": "daniel.jpg",
    "name": "Daniel Wild",
    "age": "18",
    "genre": "male",
    "weight": "80",
    "height": "180",
    "hairColor": "brown",
    "eyeColor": "green",
    "race": "white",
    "isRetired": "no",
    "nationality": "British",
    "oscarNumber": "2",
    "profession": "actor"
} */
app.post("/pelicula/director", function (req, resp) {
    director = new Professional(req.body.id, req.body.picture, req.body.name, req.body.age, req.body.genre, req.body.weight, req.body.height, req.body.hairColor, req.body.eyeColor, req.body.race, req.body.isRetired, req.body.nationality, req.body.oscarsNumber, req.body.profession);
    var directorS = JSON.stringify(director, null, 2);
    fs.appendFileSync('profesionales.json', directorS);
    var response = { error: true, code: 200, message: 'Director created' };
    resp.send(response);
});
/* {
    "id": 0,
    "picture": "daniel.jpg",
    "name": "Marco Martinez",
    "age": "38",
    "genre": "male",
    "weight": "80",
    "height": "180",
    "hairColor": "yellow",
    "eyeColor": "blue",
    "race": "white",
    "isRetired": "no",
    "nationality": "Portuguese",
    "oscarNumber": "0",
    "profession": "director"
} */
app.post("/pelicula/guionista", function (req, resp) {
    writer = new Professional(req.body.id, req.body.picture, req.body.name, req.body.age, req.body.genre, req.body.weight, req.body.height, req.body.hairColor, req.body.eyeColor, req.body.race, req.body.isRetired, req.body.nationality, req.body.oscarsNumber, req.body.profession);
    var writerS = JSON.stringify(writer, null, 2);
    fs.appendFileSync('profesionales.json', writerS);
    var response = { error: true, code: 200, message: 'Writer created' };
    resp.send(response);
});
/* {
    "id": 0,
    "picture": "daniel.jpg",
    "name": "Marina Sanchez",
    "age": "28",
    "genre": "female",
    "weight": "60",
    "height": "170",
    "hairColor": "red",
    "eyeColor": "blue",
    "race": "white",
    "isRetired": "no",
    "nationality": "Spanish",
    "oscarNumber": "0",
    "profession": "writer"
} */
app.put("/pelicula/actor", function (req, resp) {
    var id = req.body.id;
    actor.id = req.body.id,
        actor.picture = req.body.picture;
    actor.name = req.body.name;
    actor.age = req.body.age;
    actor.genre = req.body.genre;
    actor.weight = req.body.weight;
    actor.height = req.body.height;
    actor.hairColor = req.body.hairColor;
    actor.eyeColor = req.body.eyeColor;
    actor.race = req.body.race;
    actor.isRetired = req.body.isRetired;
    actor.nationality = req.body.nationality;
    actor.oscarsNumber = req.body.oscarsNumber;
    actor.profession = req.body.profession;
    var response = { error: true, code: 200, message: 'Actor updated' };
    resp.send(response);
    actors[id] = actor;
});
app.put("/pelicula/director", function (req, resp) {
    director.id = req.body.id,
        director.picture = req.body.picture;
    director.name = req.body.name;
    director.age = req.body.age;
    director.genre = req.body.genre;
    director.weight = req.body.weight;
    director.height = req.body.height;
    director.hairColor = req.body.hairColor;
    director.eyeColor = req.body.eyeColor;
    director.race = req.body.race;
    director.isRetired = req.body.isRetired;
    director.nationality = req.body.nationality;
    director.oscarsNumber = req.body.oscarsNumber;
    director.profession = req.body.profession;
    var response = { error: true, code: 200, message: 'Director updated' };
    resp.send(response);
});
app.put("/pelicula/guionista", function (req, resp) {
    writer.id = req.body.id,
        writer.picture = req.body.picture;
    writer.name = req.body.name;
    writer.age = req.body.age;
    writer.genre = req.body.genre;
    writer.weight = req.body.weight;
    writer.height = req.body.height;
    writer.hairColor = req.body.hairColor;
    writer.eyeColor = req.body.eyeColor;
    writer.race = req.body.race;
    writer.isRetired = req.body.isRetired;
    writer.nationality = req.body.nationality;
    writer.oscarsNumber = req.body.oscarsNumber;
    writer.profession = req.body.profession;
    var response = { error: true, code: 200, message: 'Writer updated' };
    resp.send(response);
});
app["delete"]("/pelicula/actor", function (req, resp) {
    var id = req.body.id;
    actor.picture = "";
    actor.name = "";
    actor.age = null;
    actor.genre = "";
    actor.weight = null;
    actor.height = null;
    actor.hairColor = "";
    actor.eyeColor = "";
    actor.race = "";
    actor.isRetired = "";
    actor.nationality = "";
    actor.oscarsNumber = null;
    actor.profession = "";
    var response = { error: true, code: 200, message: 'User deleted' };
    resp.send(response);
    actors[id] = actor;
});
app["delete"]("/pelicula/director", function (req, resp) {
    director.picture = "";
    director.name = "";
    director.age = null;
    director.genre = "";
    director.weight = null;
    director.height = null;
    director.hairColor = "";
    director.eyeColor = "";
    director.race = "";
    director.isRetired = "";
    director.nationality = "";
    director.oscarsNumber = null;
    director.profession = "";
    var response = { error: true, code: 200, message: 'User deleted' };
    resp.send(response);
});
app["delete"]("/pelicula/guionista", function (req, resp) {
    writer.picture = "";
    writer.name = "";
    writer.age = null;
    writer.genre = "";
    writer.weight = null;
    writer.height = null;
    writer.hairColor = "";
    writer.eyeColor = "";
    writer.race = "";
    writer.isRetired = "";
    writer.nationality = "";
    writer.oscarsNumber = null;
    writer.profession = "";
    var response = { error: true, code: 200, message: 'User deleted' };
    resp.send(response);
});
app.get("/peliculas/:id", function (req, resp) {
    var id = req.params.id;
    resp.send(peliculas[id]);
});
app.get("/peliculas", function (req, resp) {
    resp.send(peliculas);
});
var pelicula;
app.post("/peliculas", function (req, resp) {
    pelicula = new Movie(req.body.id, req.body.title, req.body.releaseYear, req.body.nationality, req.body.genre);
    pelicula.actors = actors;
    pelicula.director = director;
    pelicula.writer = writer;
    pelicula.language = req.body.language;
    pelicula.plataform = req.body.plataform;
    pelicula.isMCU = req.body.isMCU;
    pelicula.mainCharacterName = req.body.mainCharacterName;
    pelicula.producer = req.body.producer;
    pelicula.genre = req.body.genre;
    var id = req.body.id;
    peliculas[id] = pelicula;
    var peliculaS = JSON.stringify(pelicula, null, 2);
    fs.appendFileSync('pelicula.json', peliculaS);
    var response = { error: true, code: 200, message: 'Movie created' };
    resp.send(response);
});
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
    var id = req.body.id;
    peliculas[id] = pelicula;
    var response = { error: true, code: 200, message: 'Movie updated' };
    resp.send(response);
});
app["delete"]("/peliculas", function (req, resp) {
    pelicula.title = "";
    pelicula.releaseYear = null;
    pelicula.nationality = "";
    pelicula.genre = "";
    pelicula.actors = [];
    pelicula.director = null;
    pelicula.writer = null;
    pelicula.language = "";
    pelicula.plataform = "";
    pelicula.isMCU = "";
    pelicula.mainCharacterName = "";
    pelicula.producer = "";
    pelicula.genre = "";
    var id = req.body.id;
    peliculas[id] = pelicula;
    var response = { error: true, code: 200, message: 'User deleted' };
    resp.send(response);
});
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
        console.log("Something went wrong", error);
    }
    else {
        console.log("Server is listening on port " + port);
    }
});
