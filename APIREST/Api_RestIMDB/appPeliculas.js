//Inicio el servidor con express
const express = require("express");
const bodyParser = require('body-parser');
const app = express();
const port = 3000;
const mongoose = require("mongoose");

//Conectar servidor mongo
mongoose.connect("mongodb+srv://wert:wert@cluster0-qswuq.mongodb.net", { dbName: "codenotch", useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log("Connection to the Atlas Cluster is successful!")
    })
    .catch((err) => console.log(err));

//Importar esquemas
const Profesional = require("./models/profesional")
const Pelicula = require("./models/pelicula")


//Middlewares
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


//Dar acceso a los clientes
/* app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*"); //si solo quiero acceder yo cambiar * por mi url
    res.header("Access-Control-Allow-Headers", "*");
    if (req.method === "OPTIONS") {
        res.header("Access-Control-Allow-Methods", "PUT, POST, PATCH, DELETE, GET")
        return res.status(200).json({})
    }
}) */

app.listen(port, function (error) {
    if (error) {
        console.log("Something went wrong", error);
    }
    else {
        console.log("Server is listening on port " + port);
    }
});


//Pruebo si funciona:
app.get("/", function (req, resp) {
    let response = { error: true, code: 200, message: 'Welcome Home Lady' };
    resp.send(response)
})

//POST, GET, PUT, DELETE

//Subir profesional
app.post("/profesionales", function (req, res) {
    const profesional = new Profesional({
        _id: new mongoose.Types.ObjectId(),
        name: req.body.name,
        age: req.body.age,
        genre: req.body.genre,
        weight: req.body.weight,
        height: req.body.height,
        hairColor: req.body.hairColor,
        eyeColor: req.body.eyeColor,
        race: req.body.race,
        isRetired: req.body.isRetired,
        nationality: req.body.nationality,
        oscarsNumber: req.body.oscarsNumber,
        profession: req.body.profession
    });
    profesional
        .save()
        .then(result => {
            console.log(result);
            //mongoose.disconnect()
            res.status(201).json({
                message: "Saved request to /profesionales",
                createdProduct: result
            })
                .catch(function () {
                    console.log("Error " + err)
                })
        });
});

/* {
    "name": "Paula Rodriguez" ,
    "age": 28 ,
    "genre": "female",
    "weight": 60,
    "height": 160,
    "hairColor": "brown",
    "eyeColor": "green",
    "race": "caucasian",
    "isRetired": false,
    "nationality": "Spanish",
    "oscars": 0,
    "profession": "writer"
} */

//obtener profesional
app.get("/profesionales/:id", (req, res, next) => {
    const id = req.params.id;
    Profesional.findById(id)
        .exec()
        .then(doc => {
            console.log("From database", doc);
            if (doc) {
                res.status(200).json(doc);
            } else {
                res
                    .status(404)
                    .json({ message: "No valid entry found for provided ID" });
            }
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({ error: err })
        })
});

//obtener profesionales
app.get("/profesionales", (req, res, next) => {
    Profesional.find()
        .exec()
        .then(docs => {
            console.log(docs);
            res.status(200).json(docs);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({
                error: err
            });
        });
});

//Update profesionales
app.put("/profesionales/:id", (req, res, next) => {
    const id = req.params.id;

    Profesional.findByIdAndUpdate(id, { $set: { name: req.body.name, age: req.body.age, genre: req.body.genre, weight: req.body.weight, height: req.body.height, hairColor: req.body.hairColor, eyeColor: req.body.eyeColor, race: req.body.race, isRetired: req.body.isRetired, nationality: req.body.nationality, oscarsNumber: req.body.oscarsNumber, profession: req.body.profession } })
        .exec()
        .then(result => {
            console.log(result);
            res.status(200).json(result);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({
                error: err
            });
        });
})


//Eliminar profesional
app.delete("/profesionales/:id", (req, res, next) => {
    const id = req.params.id;
    Profesional.deleteOne({ id: id })
        .exec()
        .then(result => {
            res.status(200).json(result);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({
                error: err
            });
        });
})

//Subir peliculas
app.post("/peliculas", function (req, res) {
    const pelicula = new Pelicula({
        _id: new mongoose.Types.ObjectId(),
        title: req.body.title,
        releaseYear: req.body.releaseYear,
        actors: req.body.actors,
        nacionality: req.body.nationality,
        director: req.body.director,
        writer: req.body.writer,
        language: req.body.language,
        plataform: req.body.plataform,
        isMCU: req.body.isMCU,
        mainCharacterName: req.body.mainCharacterName,
        producer: req.body.producer,
        distributor: req.body.distributor,
        genre: req.body.genre
    });
    pelicula
        .save()
        .then(result => {
            console.log(result);
            //mongoose.disconnect()
        })
        .catch(function () {
            console.log("Error " + err)
        })
    res.status(201).json({
        message: "Handling POST request to /pelicula",
        createdProduct: pelicula
    });
});

/* {
    "title": "Fantastic Beast",
    "releaseYear": 2016,
    "actors": ["Eddie Redmayne"],
    "nacionality": "US" ,
   "directors": ["David Yates"],
    "writers": ["J.K. Rowling"],
    "language": "english",
    "plataform": "Prime Now",
    "isMCU": "no",
    "mainCharacterName": "Newt Scamander ",
    "producer": "Warner Bros",
    "distributor": "Walt Disney",
    "genre": "Adventures"
} */

//obtener pelicula
app.get("/peliculas/:id", (req, res, next) => {
    const id = req.params.id;
    Pelicula.findById(id)
        .exec()
        .then(doc => {
            console.log("From database", doc);
            if (doc) {
                res.status(200).json(doc);
            } else {
                res
                    .status(404)
                    .json({ message: "No valid entry found for provided ID" });
            }
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({ error: err })
        })
});

//obtener pelicula
app.get("/peliculas", (req, res, next) => {
    Pelicula.find()
        .exec()
        .then(docs => {
            console.log(docs);
            res.status(200).json(docs);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({
                error: err
            });
        });
});

/* //Update pelicula
app.put("/peliculas/:id", (req, res, next) => {
    const id = req.params.id;

    Pelicula.findByIdAndUpdate(_id, { $set: { title: req.body.title, releaseYear: req.body.releaseYear, actors: req.body.actors, nacionality: req.body.nationality, director: req.body.director, writer: req.body.writer, language: req.body.language, plataform: req.body.plataform, isMCU: req.body.isMCU, mainCharacterName: req.body.mainCharacterName, producer: req.body.producer, distributor: req.body.distributor, genre: req.body.genre } })
        .exec()
        .then(result => {
            console.log(result);
            res.status(200).json(result);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({
                error: err
            });
        });
}) */

//Subir actor ------- NO FUNCIONA
app.put("/peliculas/actor", (req, res) => {
    let actor = req.body.actor;
    Pelicula.findOneAndUpdate({ title: req.body.title }, { $push: { actors: actor } })
        .exec()
        .then(result => {
            console.log(result);
            res.status(200).json(result);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({
                error: err
            });
        });
})

//Subir director 
app.put("/peliculas/director", (req, res, next) => {
    let director = req.body.director;
    Pelicula.findOneAndUpdate({ _id: req.body.id }, { $push: { directors: director }, done })
        .exec()
        .then(result => {
            console.log(result);
            res.status(200).json(result);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({
                error: err
            });
        });
})

//Eliminar Pelicula
app.delete("/peliculas/:id", (req, res, next) => {
    const id = req.params.id;
    Pelicula.findOneAndDelete({ _id: id })
        .exec()
        .then(result => {
            res.status(200).json(result);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({
                error: err
            });
        });
})
