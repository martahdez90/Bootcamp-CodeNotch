const mongoose = require("mongoose");

const PeliculaSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    title: {
        type: String,
        required: true,
    },
    releaseYear: Number,
    actors: [],
    nacionality: String,
    directors: [],
    writers: [],
    language: String,
    plataform: String,
    isMCU: Boolean,
    mainCharacterName: String,
    producer: String,
    distributor: String,
    genre: String
})

module.exports = mongoose.model("Pelicula", PeliculaSchema, "peliculas")