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
        })
        .catch(function () {
            console.log("Error " + err)
        })
    res.status(201).json({
        message: "Handling POST request to /profesionales",
        createdProduct: profesional
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