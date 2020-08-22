const express = require("express");
const bodyParser = require('body-parser');
const app = express();
const port = 3000;
const mongoose = require("mongoose");


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
        //mongoose.disconnect();
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
    photos: [{ type: mongoose.Schema.Types.ObjectId, ref: "PhotoMany" }]
})

let UserModel = mongoose.model("UserMany", UserSchema)

const PhotoSchema = mongoose.Schema({
    usernames: [{ type: mongoose.Types.ObjectId, ref: "UserMany" }],
    photoUrl: String,
    title: String,
    description: String,
})

let PhotoModel = mongoose.model("PhotoMany", PhotoSchema);

let photo = new PhotoModel({
    usernames: [], photoUrl: "miliki.jpg", title: "en el circo", description: "con los amigos en el circo",
})
photo.save(savePhotos)

/*
let photo2 = new PhotoModel({
    usernames: [], photoUrl: "martiruli.jpg", title: "amigas", description: "con los amigos en el circo",
})
photo2.save(savePhotos)

let photo3 = new PhotoModel({
    usernames: [], photoUrl: "leoncitos.jpg", title: "leoncitos", description: "con los amigos en el circo",
})
photo3.save(savePhotos)

let user = new UserModel({ name: "Miliki", age: 35, photos: ["5ee7c1fc264a86434085b647", "5ee7c1fc264a86434085b648"] })
user.save(CheckRespuesta);
*/
user = new UserModel({ name: "Martiruli", age: 35, photos: ["5ee7c1fc264a86434085b648", "5ee7c1fc264a86434085b649"] })
user.save(CheckRespuesta);

PhotoModel.updateOne({ _id: "5ee7c522958b4642dc065d3d" }, { usernames: ["5ee7c522958b4642dc065d3e", "5ee7c522958b4642dc065d3f"] }, CheckRespuesta)
PhotoModel.updateOne({ _id: "5ee7c522958b4642dc065d3e" }, { usernames: ["5ee7c522958b4642dc065d3e", "5ee7c522958b4642dc065d3f"] }, CheckRespuesta)
PhotoModel.updateOne({ _id: "5ee7c522958b4642dc065d3f" }, { usernames: ["5ee7c522958b4642dc065d3e", "5ee7c522958b4642dc065d3f"] }, CheckRespuesta)

UserModel.findOne({ name: "Martiruli" })
    .populate("photos")
    .exec(function (err, user) {
        if (err)
            console.log(err);
        //process.exit(-1);
        console.log(`The user ${user.name} has ${user.photos.length} photos`);
        console.log(user);
        mongoose.disconnect();
    })
PhotoModel.findOne({title: "leoncitos"})
    .populate("users")
    .exec(function (err, photo) {
        if (err)
            console.log(err);
        //process.exit(-1);
        console.log(`The photo ${photo.title} has ${photo.usernames.length} users`);
        console.log(photo);
        mongoose.disconnect();
    })

