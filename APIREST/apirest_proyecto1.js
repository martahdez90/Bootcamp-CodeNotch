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
var prof = null;
var actor1 = new Professional(0, "foto.jpg", "Julia Roberts", 40, "female", 60, 170, "brown", "blue", "caucasian", "no", "USA", 2, "actress");
var actor2 = new Professional(1, "foto.jpg", "Halle Berry", 30, "female", 57, 174, "black", "brown", "african-american", "yes", "Canadian", 2, "actress");
var profs = [actor1, actor2];
//new Professional("Julia Roberts", 40, "female", 60, 170, "brown", "blue", "caucasian", "no", "USA", 2, "actress")
app.get("/", function (req, resp) {
    var response = { error: true, code: 200, message: 'Start point' };
    resp.send(response);
});
app.get("/profesionales/:id", function (req, resp) {
    var id = req.params.id;
    console.log(id);
    resp.send(profs[id]);
});
app.get("/profesionales/", function (req, resp) {
    resp.send(profs);
});
app.post("/profesionales", function (req, resp) {
    var id = req.body.id;
    prof = new Professional(prof.id = req.body.id, prof.picture = req.body.picture, prof.name = req.body.nombre, prof.age = req.body.edad, prof.genre = req.body.genre, prof.weight = req.body.weight, prof.height = req.body.height, prof.hairColor = req.body.hairColor, prof.eyeColor = req.body.eyeColor, prof.race = req.body.race, prof.isRetired = req.body.isRetired, prof.nationality = req.body.nationality, prof.oscarsNumber = req.body.oscarsNumber, prof.profession = req.body.profession);
    //let profS = JSON.stringify(prof, null, 2)
    //fs.writeFileSync('profesionales.json', prof)
    profs[id] = prof;
    var response = { error: true, code: 200, message: 'User created' };
    resp.send(response);
});
/* picture = {
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
    var id = req.body.id;
    prof.id = req.body.id,
        prof.picture = req.body.picture;
    prof.name = req.body.nombre;
    prof.age = req.body.edad;
    prof.genre = req.body.genre;
    prof.weight = req.body.weight;
    prof.height = req.body.height;
    prof.hairColor = req.body.hairColor;
    prof.eyeColor = req.body.eyeColor;
    prof.race = req.body.race;
    prof.isRetired = req.body.isRetired;
    prof.nationality = req.body.nationality;
    prof.oscarsNumber = req.body.oscarsNumber;
    prof.profession = req.body.profession;
    var response = { error: true, code: 200, message: 'User updated' };
    resp.send(response);
    profs[id] = prof;
});
/* {
    "picture": "foto.jpg",
    "nombre": "Mariana Fernandez",
    "edad": "20",
    "genre": "female",
    "weight": "60",
    "height": "160"
} */
app["delete"]("/profesionales", function (req, resp) {
    var id = req.body.id;
    prof.picture = "";
    prof.name = "";
    prof.age = "";
    prof.genre = "";
    prof.weight = "";
    prof.height = "";
    prof.hairColor = "";
    prof.eyeColor = "";
    prof.race = "";
    prof.isRetired = "";
    prof.nationality = "";
    prof.oscarsNumber = "";
    prof.profession = "";
    var response = { error: true, code: 200, message: 'User deleted' };
    resp.send(response);
    profs[id] = prof;
});
app.use(function (req, res, next) {
    res = { error: true, code: 200, message: 'missing url' };
    res.status(404).send(res);
});
app.listen(port, function (error) {
    if (error) {
        console.log("Something went wrong", error);
    }
    else {
        console.log("Server is listening on port " + port);
    }
});
