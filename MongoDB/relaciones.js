const express = require("express");
const bodyParser = require('body-parser');
const app = express();
const port = 3000;
const mongoose = require("mongoose");
const { response } = require("express");

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
    password: {
        type: String,
        required: true,
        validate: [
            function (password) {
                return password.length >= 8;
            },
            "Your password should be longer"
        ]
    },
    name: String,
    surName: String,
    yearOfBirth: {
        type: Number,
        required: "date of birth can't be empty",
        max: 2002,
    },
    adress: String,
    phone: {
        type: Number,
        validate: [
            function (phone) {
                return phone.toString().length = 9;
            },
            "Your phone has to have 9 digits"
        ]
    },
    email: String,
    comments: {
        type: String,
        enum: ["alta", "baja", "suspensión"]
    },
    rol: {
        type: String,
        enum: ["user", "admin"]
    },
    follow: [{ type: mongoose.Types.ObjectId, ref: "UserApp" }],
    followers: [{ type: mongoose.Types.ObjectId, ref: "UserApp" }],
    photos: [{ type: mongoose.Schema.Types.ObjectId, ref: "PhotoApp" }]
})

let UserModel = mongoose.model("UserApp", UserSchema)

const PhotoSchema = mongoose.Schema({
    usernames: [{ type: mongoose.Types.ObjectId, ref: "UserApp" }],
    photoUrl: String,
    title: String,
    description: String,
})

let PhotoModel = mongoose.model("PhotoApp", PhotoSchema);

/* let photo = new PhotoModel({
    usernames: ["5ee7f089f3f1205900491fe6", "5ee7f089f3f1205900491fe7"], photoUrl: "miliki.jpg", title: "en el circo", description: "con los amigos en el circo",
})
photo.save(savePhotos)


let photo2 = new PhotoModel({
    usernames: ["5ee7f089f3f1205900491fe6", "5ee7f089f3f1205900491fe7"], photoUrl: "sergiruli.jpg", title: "amigas", description: "con los amigos en el circo",
})
photo2.save(savePhotos)

let photo3 = new PhotoModel({
    usernames: ["5ee7f089f3f1205900491fe7", "5ee7f089f3f1205900491fe7"], photoUrl: "trigre.jpg", title: "leoncitos", description: "con los amigos en el circo",
})
photo3.save(savePhotos) 

let user1 = new UserModel({ username: "miliki",
    password: "tralarito555",
    name: "Ana",
    surName: "Garcia",
    yearOfBirth: 2000,
    adress: "C/direccion, 4",
    phone: 690252623,
    email: "algo@helado.es",
    comments: "alta",
    rol: "user",
    follow: [],
    followers: [],
    photos: ["5ee7ef6084a9044c500b4998", "5ee7ef6084a9044c500b4999"]
})
user1.save(CheckRespuesta);

let user = new UserModel({ username: "Pichiruli98",
password: "tralarito555",
name: "Manoli",
surName: "Garcia",
yearOfBirth: 2000,
adress: "C/direccion, 4",
phone: 690252623,
email: "algo@helado.es",
comments: "alta",
rol: "user",
follow: [],
followers: [],
photos: ["5ee7ef6084a9044c500b4998", "5ee7ef6084a9044c500b4999"]
})
user.save(CheckRespuesta);  */

/* PhotoModel.updateOne({ _id: "5ee7ef6084a9044c500b4998" }, { usernames: ["5ee7f089f3f1205900491fe6", "5ee7f089f3f1205900491fe7"] }, CheckRespuesta)
PhotoModel.updateOne({ _id: "5ee7ef6084a9044c500b4999" }, { usernames: ["5ee7f089f3f1205900491fe6", "5ee7f089f3f1205900491fe7"] }, CheckRespuesta)
PhotoModel.updateOne({ _id: "5ee7ef6084a9044c500b499a" }, { usernames: ["5ee7f089f3f1205900491fe6", "5ee7f089f3f1205900491fe7"] }, CheckRespuesta) */

/* UserModel.findOne({ name: "Roberto" })
    .populate("photos")
    .exec(function (err, user) {
        if (err)
            console.log(err);
        //process.exit(-1);
        console.log(`The user ${user.name} has ${user.photos.length} photos`);
        console.log("user photos : " + user.photos)
        
        for (j = 0; j < user.photos.length; j++) {
            let length = user.photos[j].usernames.length;
            for (i = 0; i < length; i++) {
                let picture = user.photos[j]._id
                console.log("la foto " + i + " es" + picture)
                let id = user.photos[j].usernames[i]._id
                console.log("el id del usuario es " + id)
                UserModel.findOne({ _id: id })
                    .exec(function (err, user) {
                        if (err)
                            console.log(err);
                        console.log(`The picture ${picture} was posted by ${id} with the following data ${user}`);
                    })
            }
        }

    })
 */

/* UserModel.updateOne({ _id: "5ee7fbec285f405058a85876" }, { followers: ["5ee7f089f3f1205900491fe6", "5ee7f089f3f1205900491fe7"] }, CheckRespuesta)
UserModel.updateOne({ _id: "5ee7fbec285f405058a85877" }, { followers: ["5ee7f089f3f1205900491fe6", "5ee7f089f3f1205900491fe7"] }, CheckRespuesta)
UserModel.updateOne({ _id: "5ee7fbec285f405058a85876" }, { follow: ["5ee7f089f3f1205900491fe6", "5ee7f089f3f1205900491fe7"] }, CheckRespuesta)
UserModel.updateOne({ _id: "5ee7fbec285f405058a85877" }, { follow: ["5ee7f089f3f1205900491fe6", "5ee7f089f3f1205900491fe7"] }, CheckRespuesta) */


function timeline(id, res) {
    UserModel.findById(id)
        .populate("photos follow")
        .exec(function (err, user) {
            if (err)
                console.log(err);
            else {
                console.log(user);
                let result =
                {   "user": user,
                    "id": id,
                    "photos": user.photos,
                    "follow": user.follow
                }
                console.log(result)
                res.send(result)
            }
        })
}

    //timeline("5ee7f089f3f1205900491fe6")

    app.get("/user/timeline/:id", (req, res) => {
        id = req.params.id;
        timeline(id, res)
    });


    /* PhotoModel.findOne({ title: "leoncitos" })
        .populate("users")
        .exec(function (err, photo) {
            if (err)
                console.log(err);
            //process.exit(-1);
            console.log(`The photo ${photo.title} has ${photo.usernames.length} users`);
            console.log(photo);
            mongoose.disconnect();
        }) 
    */





