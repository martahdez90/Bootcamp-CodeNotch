let mongoose = require("mongoose");
const UserSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    username: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required:true,
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
    follow: new Array(mongoose.Schema.Types.ObjectId),
    followers: new Array(mongoose.Schema.Types.ObjectId)
})

module.exports = mongoose.model("User", UserSchema, "user")