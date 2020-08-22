const mongoose = require("mongoose");

const ProfesionalSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: String,
    age: Number,
    genre: String,
    weight: Number,
    height: Number,
    hairColor: String,
    eyeColor: String,
    race: String,
    isRetired: Boolean,
    nationality: String,
    oscarsNumber: Number,
    profession: String
})

module.exports = mongoose.model("Profesional", ProfesionalSchema, "profesionales")