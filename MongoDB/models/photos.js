const mongoose = require("mongoose");

const PhotoSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    username: {
        type: String,
        required: true,
    },
    photoUrl: String,
    title: String,
    description: String,
})


module.exports = mongoose.model("Photo", PhotoSchema, "photo")