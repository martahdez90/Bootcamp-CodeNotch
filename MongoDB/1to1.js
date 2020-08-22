const express = require("express");
const bodyParser = require('body-parser');
const app = express();
const port = 3000;
const mongoose = require("mongoose");
const { SSL_OP_NO_SESSION_RESUMPTION_ON_RENEGOTIATION } = require("constants");


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
        console.log("Error: " + err);
    else {
        console.log("Success!!");
        mongoose.disconnect();
    }
}

//Esquemas y modelos
const AvatarSchema = mongoose.Schema({
    eyesColor: String,
    hairColor: String,
    skin: String,
})

let AvatarModel = mongoose.model("Avatar", AvatarSchema);

let avatar = new AvatarModel({
    eyesColor: "brown",
    hairColor: "green",
    skin: "pink"
})

const UserSchema = new mongoose.Schema({
    name: String,
    age: Number,
    avatar: { type: mongoose.Schema.Types.ObjectId, ref: "Avatar" }
})

let UserModel = mongoose.model("UserUno", UserSchema)

avatar.save(function (err, res){
    if (err)
        console.log("Error: " + err);
    else {
        console.log("Avatar saved");
        console.log(res);
        let user = new UserModel({ name: "piruli1", age: 25, avatar: res._id })
        user.save(CheckRespuesta)
    }
})

UserModel.findOne({ name: "piruli1" })
    .populate("avatar")
    .exec((err, user) => {
    if (err) {
        console.log(err);
        process.exit(-1);
    }
    console.log(`The user ${user.name} has an avatar called ${user.avatar.id}`);
    console.log(user);
    })

