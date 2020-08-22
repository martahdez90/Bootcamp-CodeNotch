//Inicio el servidor con express
const express = require("express");
const bodyParser = require('body-parser');
const fs = require('fs');
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
const Photo = require("./models/photos")
const User = require("./models/user")


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


//Clases que voy a usar
/* class Photo {
    constructor(userName, photoUrl, title, description) {
        this.userName = userName;
        this.photoUrl = photoUrl;
        this.title = title;
        this.description = description;
    }
}

class User {
    constructor(uspassword, name, surName, yearOfBirth, adress, phone, email, comments, rol) {
        this.password = password;
        this.name = name;
        this.title = title;
        this.surName = surName;
        this.yearOfBirth = yearOfBirth;
        this.adress = adress;
        this.phone = phone;
        this.email = email;
        this.comments = comments;
        this.rol = rol;
    }
} */

//Pruebo si funciona:
app.get("/", function (req, resp) {
    let response = { error: true, code: 200, message: 'Welcome Home Lady' };
    resp.send(response)
})

//let photo;
//let photos = []

//POST, GET, PUT, DELETE
//Subir foto
app.post("/photos", function (req, res) {
    /* photo = new Photo(req.body.userName, req.body.photoUrl, req.body.title, req.body.description);
    console.log(photo)
    photos.push(photo);
    let photosSt = JSON.stringify(photos, null, 2);
    fs.writeFileSync('photos.json', photosSt); */
    const photo = new Photo({
        _id: new mongoose.Types.ObjectId(),
        username: req.body.userName,
        photoUrl: req.body.photoUrl,
        title: req.body.title,
        description: req.body.description
    });
    photo
        .save()
        .then(result => {
            console.log(result);
            //mongoose.disconnect()
            res.status(201).json({
                message: "saved to /photos",
                createdProduct: result
            })
                .catch(function () {
                    console.log("Error " + err)
                })

        });
    /* photos.push(photo);
    let photosSt = JSON.stringify(photos, null, 2);
    fs.writeFileSync('photos.json', photosSt); */
    // let response = { error: true, code: 200, message: 'Photo uploaded' };
    // res.send(response);
});

//obtener foto
app.get("/photos/:photoId", (req, res, next) => {
    const id = req.params.photoId;
    Photo.findById(id)
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

//obtener fotos
app.get("/photos", (req, res, next) => {
    Photo.find()
        .exec()
        .then(docs => {
            console.log(docs);
            //   if (docs.length >= 0) {
            res.status(200).json(docs);
            //   } else {
            //       res.status(404).json({
            //           message: 'No entries found'
            //       });
            //   }
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({
                error: err
            });
        });
});


/* {
    "userName": "marianita90",
    "photoUrl": "marianita.jpg", 
    "title": "verano 2020",
    "description": "en la playita"
} */

//Update foto
app.put("/photo/:photoId", (req, res, next) => {
    const id = req.params.photoId;

    Photo.findByIdAndUpdate(id, { $set: { title: req.body.newTitle, description: req.body.newDescription } })
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


//Eliminar foto
app.delete("/photo/:id", (req, res, next) => {
    const id = req.params.id;
    Photo.findOneAndDelete({ _id: id })
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
    /* fs.writeFileSync("photos.json", photosSt);
    let response = { error: true, code: 200, message: 'Photo deleted' }; */
    //resp.send(response);
})

//Eliminar fotos
app.delete("/photos", (req, res, next) => {
    const userName = req.body.userName;
    Photo.deleteMany({ username: userName })
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

//Subir Usuario
app.post("/user", (req, res, next) => {
    const user = new User({
        _id: new mongoose.Types.ObjectId(),
        username: req.body.userName,
        password: req.body.password,
        name: req.body.name,
        surName: req.body.surName,
        yearOfBirth: req.body.yearOfBirth,
        adress: req.body.adress,
        phone: req.body.phone,
        email: req.body.email,
        comments: req.body.comments,
        rol: req.body.rol,
        follow: req.body.follow,
        followers: req.body.followers,
    });
    user
        .save()
        .then(result => {
            console.log(result);
            res.status(201).json({
                message: "Handling POST requests to /user",
                createdProduct: result
            });
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({
                error: err
            });
        });
});

/* {
    "userName": "Elena90",
    "password": "tralarito86",
    "name": "Maria Teresa",
    "surName": "Gonzalez",
    "yearOfBirth": 2000,
    "adress": "C.Platano, 6",
    "phone": 690345678,
    "email": "teresita@gmail.com",
    "comments": "alta",
    "rol": "user",
    "follow": "",
    "followers": []
} */

//Seguir un usuario
app.put("/user/follow/:UserId", (req, res, next) => {
    const id = req.params.UserId;

    User.findByIdAndUpdate(id, { $set: { follow: req.body.newFollow } })
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

//Dejar de seguir un usuario
app.put("/user/unfollow/:UserId", (req, res, next) => {
    const id = req.params.UserId;

    User.findByIdAndUpdate(id, { $set: { follow: req.body.unFollow } })
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
