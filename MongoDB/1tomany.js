const express = require("express");
const bodyParser = require('body-parser');
const app = express();
const port = 3000;
const mongoose = require("mongoose");
const { SSL_OP_NO_SESSION_RESUMPTION_ON_RENEGOTIATION } = require("constants");

let MyPhotos = [];

//Conectar servidor mongo
mongoose.connect("mongodb+srv://wert:wert@cluster0-qswuq.mongodb.net", { dbName: "codenotch", useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log("Connection to the Atlas Cluster is successful!")
    })
    .catch((err) => console.log(err));

//Middlewares
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.listen(port, function (error) {
    if (error) {
        console.log("Something went wrong", error);
    }
    else {
        console.log("Server is listening on port " + port);
    }
});

//CheckRespuesta
function CheckRespuesta(err, res) {
    if (err)
        console.log(`Error ${err}`);
    else {
        console.log(`OMG! El método funcionó!!`);
        mongoose.disconnect();
    }
}

//Guardar photos
function savePhotos(err, res) {
    if (err)
        console.log(`Error ${err}`);
    else {
        console.log(`Photo saved`);
        MyPhotos.push(res._id)
    }
}

//Esquemas y modelos
const UserSchema = new mongoose.Schema({
    name: String,
    age: Number,
    photos: [{ type: mongoose.Schema.Types.ObjectId, ref: "Photo" }]
})

let UserModel = mongoose.model("UserR2", UserSchema)

const PhotoSchema = mongoose.Schema({
    username: String,
    photoUrl: String,
    title: String,
    description: String,
})

let PhotoModel = mongoose.model("Photo", PhotoSchema);

let photo1 = new PhotoModel({
    username: "Miliki", photoUrl: "miliki.jpg", title: "en el circo", description: "con los amigos en el circo",
})
photo1.save(savePhotos)

let photo2 = new PhotoModel({
    username: "Miliki", photoUrl: "martiruli.jpg", title: "amigas", description: "con los amigos en el circo",
})
photo2.save(savePhotos)

let photo3 = new PhotoModel({
    username: "Miliki", photoUrl: "leoncitos.jpg", title: "leoncitos", description: "con los amigos en el circo",
})

photo3.save(function (err, res) {
    if (err)
        console.log(`Error + ${err}`)
    else {
        console.log(`Photo saved`)
        console.log(res)
        MyPhotos.push(res._id);
        let user = new UserModel({ name: "Miliki", age: 35, photos: MyPhotos })
        user.save(CheckRespuesta);
    }
})

/* UserModel.findOne({ name: "miliki" })
    .populate("photos")
    .exec(function (err, user) {
        if (err)
            console.log(err);
            //process.exit(-1);
        console.log(`The user ${user.name} has ${user.photos.length} photos`);
        console.log(user);
        mongoose.disconnect();
    }) */

