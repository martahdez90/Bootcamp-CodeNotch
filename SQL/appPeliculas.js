//Inicio el servidor con express
const express = require("express");
const bodyParser = require('body-parser');
const app = express();
const port = 3000;
const mysql = require("mysql")

//Crear conexión
let con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: null,
    database: "imdb"
});


//Conectar servidor SQL
con.connect(function (err) {
    if (err) {
        console.log(err);
    } else {
        console.log("Conexión correcta");
    }
});

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


//Pruebo si funciona:
app.get("/", function (req, resp) {
    let response = { error: true, code: 200, message: 'Welcome Home Lady' };
    resp.send(response)
})


//POST, GET, PUT, DELETE

//Subir profesional
app.post("/profesionales", (req, res) => {
    let name = req.body.name;
    let age = req.body.age;
    let genre = req.body.genre;
    let weight = req.body.weight;
    let height = req.body.height;
    let hairColor = req.body.hairColor;
    let eyeColor = req.body.eyeColor;
    let race = req.body.race;
    let isRetired = req.body.isRetired;
    let nationality = req.body.nationality;
    let oscarsNumber = req.body.oscarsNumber;
    let profession = req.body.profession
    let params = [name, age, genre, weight, height, hairColor, eyeColor, race, isRetired, nationality, oscarsNumber, profession]
    let sql = "INSERT INTO professionals (name, age, genre, weight, height, hairColor, eyeColor, race, isRetired, nationality, oscarsNumber, profession) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)"
    con.query(sql, params, (err, result) => {
        if (err) throw err;
        console.log(result);
        res.send(result)
    })
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
    "oscarsNumber": 0,
    "profession": "writer"
} */



//obtener profesional
app.get("/profesionales", (req, res) => {
    const id = req.query.id;
    console.log(id)
    if (id == null) {
        let sql = "SELECT * FROM professionals"
        con.query(sql, (err, results) => {
            if (err) throw err;
            console.log(results);
            res.send(results)
        })
    } else {
        let params = [id]
        let sql = "SELECT * FROM professionals WHERE professionals.id_professional = ?"
        con.query(sql, params, (err, result) => {
            if (err) throw err;
            console.log(result);
            res.send(result)
        })
        //localhost:3000/profesionales?id=2
    }
});

// //Update professional
app.put("/profesionales", (req, res) => {
    const id = req.body.id;
    let name = req.body.name;
    let age = req.body.age;
    let genre = req.body.genre;
    let weight = req.body.weight;
    let height = req.body.height;
    let hairColor = req.body.hairColor;
    let eyeColor = req.body.eyeColor;
    let race = req.body.race;
    let isRetired = req.body.isRetired;
    let nationality = req.body.nationality;
    let oscarsNumber = req.body.oscarsNumber;
    let profession = req.body.profession
    let params = [name, age, genre, weight, height, hairColor, eyeColor, race, isRetired, nationality, oscarsNumber, profession, id]
    let sql = "UPDATE professionals SET name = ? , age = ? , genre = ? , weight = ?, height = ?, hairColor = ?, eyeColor = ?, race = ?, isRetired = ?, nationality = ?, oscarsNumber = ?, profession = ? WHERE professionals.id_professional = ?";
    con.query(sql, params, (err, results) => {
        if (err) throw err;
        console.log(results);
        res.send(results)
    })
})

//Eliminar professionals
app.delete("/profesionales", (req, res) => {
    const id = req.body.id;
    let params = [id]
    let sql = "DELETE FROM professionals WHERE professionals.id_professional = ?";
    con.query(sql, params, (err, results) => {
        if (err) throw err;
        console.log(results);
        res.send(results)
    })
})

//Subir productor
app.post("/productores", (req, res) => {
    let name = req.body.name;
    let yearCreation = req.body.yearCreation;
    let country = req.body.country;
    let params = [name, yearCreation, country]
    let sql = "INSERT INTO producers (name, yearCreation, country) VALUES (?, ?, ?)"
    con.query(sql, params, (err, result) => {
        if (err) throw err;
        console.log(result);
        res.send("producer uploaded")
    })
});


/* {
    "name": "RTVE" ,
    "yearCreation": 1985 ,
    "country": "Spain"
} */


//obtener productor
app.get("/productores:id", (req, res) => {
    const id = req.query.id;
    if (id == null) {
        let sql = "SELECT * FROM producers"
        con.query(sql, (err, results) => {
            if (err) throw err;
            console.log(results);
            res.send(results)
        })
    } else {
        let params = [id]
        let sql = "SELECT * FROM producers WHERE producers.id_producer = ?"
        con.query(sql, params, (err, result) => {
            if (err) throw err;
            console.log(result);
            res.send(result)
        })
    }
});


// //Update producer
app.put("/productores", (req, res) => {
    const id = req.body.id;
    let name = req.body.name;
    let yearCreation = req.body.yearCreation;
    let country = req.body.country;
    let params = [name, yearCreation, country, id]
    let sql = "UPDATE producers SET name = ? , yearCreation = ? , country = ? WHERE producers.id_producer = ?";
    con.query(sql, params, (err, results) => {
        if (err) throw err;
        console.log(results);
        res.send(results)
    })
})

//Eliminar producers
app.delete("/productores", (req, res) => {
    const id = req.body.id;
    let params = [id]
    let sql = "DELETE FROM producers WHERE producers.id_producer = ?";
    con.query(sql, params, (err, results) => {
        if (err) throw err;
        console.log(results);
        res.send(results)
    })
})

//Subir pelicula
app.post("/peliculas", (req, res) => {
    let title = req.body.title;
    let releaseYear = req.body.releaseYear;
    let nationality = req.body.nationality;
    let language = req.body.language;
    let platform = req.body.platform;
    let isMcu = req.body.isMcu;
    let mainCharacter = req.body.mainCharacter;
    let distributor = req.body.distributor;
    let genre = req.body.genre
    let params = [title, releaseYear, nationality, language, platform, isMcu, mainCharacter, distributor, genre]
    let sql = "INSERT INTO movies (title, releaseYear, nationality, language, platform, isMcu, mainCharacter, distributor, genre) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)"
    con.query(sql, params, (err, result) => {
        if (err) throw err;
        console.log(result);
        res.send("movie uploaded")
    })
});


//Añadir un nuevo actor a la pelicula
app.post("/pelicula/actor", (req, res) => {
    let name = req.body.name;
    let age = req.body.age;
    let genre = req.body.genre;
    let weight = req.body.weight;
    let height = req.body.height;
    let hairColor = req.body.hairColor;
    let eyeColor = req.body.eyeColor;
    let race = req.body.race;
    let isRetired = req.body.isRetired;
    let nationality = req.body.nationality;
    let oscarsNumber = req.body.oscarsNumber;
    let profession = req.body.profession
    let movie_id = req.body.movie_id;
    let params = [name, age, genre, weight, height, hairColor, eyeColor, race, isRetired, nationality, oscarsNumber, profession]
    let sql = "INSERT INTO professionals (name, age, genre, weight, height, hairColor, eyeColor, race, isRetired, nationality, oscarsNumber, profession) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)"

    con.query(sql, params, (err, result) => {
        if (err) throw err;
        console.log(result);
        //res.send("actor created")
        let professional_id = result.insertId;
        let params2 = [professional_id, movie_id]
        let sql2 = "INSERT INTO professional_movie (professional_id, movie_id) VALUES (?, ?)"
        con.query(sql2, params2, (err, result) => {
            if (err) throw err;
            console.log(result);
            res.send("actor uploaded into movie")
        })
    });
})

//Añadir un nuevo director a la pelicula
app.post("/pelicula/director", (req, res) => {
    let name = req.body.name;
    let age = req.body.age;
    let genre = req.body.genre;
    let weight = req.body.weight;
    let height = req.body.height;
    let hairColor = req.body.hairColor;
    let eyeColor = req.body.eyeColor;
    let race = req.body.race;
    let isRetired = req.body.isRetired;
    let nationality = req.body.nationality;
    let oscarsNumber = req.body.oscarsNumber;
    let profession = req.body.profession
    let movie_id = req.body.movie_id;
    let params = [name, age, genre, weight, height, hairColor, eyeColor, race, isRetired, nationality, oscarsNumber, profession]
    let sql = "INSERT INTO professionals (name, age, genre, weight, height, hairColor, eyeColor, race, isRetired, nationality, oscarsNumber, profession) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)"

    con.query(sql, params, (err, result) => {
        if (err) throw err;
        console.log(result);
        //res.send("actor created")
        let professional_id = result.insertId;
        let params2 = [professional_id, movie_id]
        let sql2 = "INSERT INTO professional_movie (professional_id, movie_id) VALUES (?, ?)"
        con.query(sql2, params2, (err, result) => {
            if (err) throw err;
            console.log(result);
            res.send("actor uploaded into movie")
        })
    });
})

//Añadir un nuevo guionista a la pelicula
app.post("/pelicula/guionista", (req, res) => {
    let name = req.body.name;
    let age = req.body.age;
    let genre = req.body.genre;
    let weight = req.body.weight;
    let height = req.body.height;
    let hairColor = req.body.hairColor;
    let eyeColor = req.body.eyeColor;
    let race = req.body.race;
    let isRetired = req.body.isRetired;
    let nationality = req.body.nationality;
    let oscarsNumber = req.body.oscarsNumber;
    let profession = req.body.profession
    let movie_id = req.body.movie_id;
    let params = [name, age, genre, weight, height, hairColor, eyeColor, race, isRetired, nationality, oscarsNumber, profession]
    let sql = "INSERT INTO professionals (name, age, genre, weight, height, hairColor, eyeColor, race, isRetired, nationality, oscarsNumber, profession) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)"

    con.query(sql, params, (err, result) => {
        if (err) throw err;
        console.log(result);
        //res.send("actor created")
        let professional_id = result.insertId;
        let params2 = [professional_id, movie_id]
        let sql2 = "INSERT INTO professional_movie (professional_id, movie_id) VALUES (?, ?)"
        con.query(sql2, params2, (err, result) => {
            if (err) throw err;
            console.log(result);
            res.send("actor uploaded into movie")
        })
    });
})

/* {
    "title": "Fantastic Beast",
    "releaseYear": 2016,
    "nacionality": "US" ,
    "language": "english",
    "platform": "Prime Now",
    "isMCU": "no",
    "mainCharacterName": "Newt Scamander ",
    "distributor": "Walt Disney",
    "genre": "Adventures"
} */



//obtener pelicula
app.get("/peliculas:id", (req, res) => {
    const id = req.query.id;
    if (id == null) {
        let sql = "SELECT * FROM movies"
        con.query(sql, (err, results) => {
            if (err) throw err;
            console.log(results);
            res.send(results)
        })
    } else {
        let params = [id]
        let sql = "SELECT * FROM movies WHERE movies.id_movie = ?"
        con.query(sql, params, (err, result) => {
            if (err) throw err;
            console.log(result);
            res.send(result)
        })
    }
});

//Actores de una pelicula
app.get("/pelicula/actores:idPelicula", (req, res) => {
    const id = req.params.idPelicula;
    let params = [id]
    let sql = "SELECT professionals.name AS NAME, professionals.age AS age, professionals.genre AS GENRE, professionals.weight AS weight, professionals.height AS height, professionals.hairColor AS hairColor, professionals.eyeColor, professionals.race, professionals.isRetired, professionals.nationality, professionals.oscarsNumber, professionals.profession FROM professionals JOIN professional_movie ON( professional_movie.professional_id = professionals.id_professional ) WHERE professional_movie.movie_id = ?"
    con.query(sql, params, (err, result) => {
        if (err) throw err;
        console.log(result);
        res.send(result)
    })
});

//Director de una pelicula
app.get("/pelicula/director:idPelicula", (req, res) => {
    const id = req.params.idPelicula;
    let params = [id]
    let sql = "SELECT professionals.name AS NAME, professionals.age AS age, professionals.genre AS GENRE, professionals.weight AS weight, professionals.height AS height, professionals.hairColor AS hairColor, professionals.eyeColor, professionals.race, professionals.isRetired, professionals.nationality, professionals.oscarsNumber, professionals.profession FROM professionals JOIN professional_movie ON ( professional_movie.professional_id = professionals.id_professional ) WHERE professional_movie.movie_id = ?"
    con.query(sql, params, (err, result) => {
        if (err) throw err;
        console.log(result);
        res.send(result)
    })
});

//Guionista de una pelicula
app.get("/pelicula/guionista:idPelicula", (req, res) => {
    const id = req.params.idPelicula;
    let params = [id]
    let sql = "SELECT professionals.name AS NAME, professionals.age AS age, professionals.genre AS GENRE, professionals.weight AS weight, professionals.height AS height, professionals.hairColor AS hairColor, professionals.eyeColor, professionals.race, professionals.isRetired, professionals.nationality, professionals.oscarsNumber, professionals.profession FROM professionals JOIN professional_movie ON( professional_movie.professional_id = professionals.id_professional ) WHERE professional_movie.movie_id = ?"
    con.query(sql, params, (err, result) => {
        if (err) throw err;
        console.log(result);
        res.send(result)
    })
});

//Productor de una pelicula
app.get("/pelicula/productor:idPelicula", (req, res) => {
    const id = req.params.idPelicula;
    let params = [id]
    let sql = "SELECT professionals.name AS NAME, professionals.age AS age, professionals.genre AS GENRE, professionals.weight AS weight, professionals.height AS height, professionals.hairColor AS hairColor, professionals.eyeColor, professionals.race, professionals.isRetired, professionals.nationality, professionals.oscarsNumber, professionals.profession FROM professionals JOIN producer_movie ON( producer_movie.producer_id = professionals.id_professional ) WHERE producer_movie.movie_id = ?"
    con.query(sql, params, (err, result) => {
        if (err) throw err;
        console.log(result);
        res.send(result)
    })
});

// //Update movie
app.put("/peliculas/:id", (req, res) => {
    const id = req.params.id;
    let title = req.body.title;
    let releaseYear = req.body.releaseYear;
    let nationality = req.body.nationality;
    let language = req.body.language;
    let platform = req.body.platform;
    let isMcu = req.body.isMcu;
    let mainCharacter = req.body.mainCharacter;
    let distributor = req.body.distributor;
    let genre = req.body.genre
    let params = [title, releaseYear, nationality, language, platform, isMcu, mainCharacter, distributor, genre, id]
    let sql = "UPDATE movies SET title = ?, releaseYear = ?, nationality = ?, language = ?, platform = ?, isMcu = ?, mainCharacter = ?, distributor = ?, genre = ? WHERE movies.id_movie = ?";
    con.query(sql, params, (err, results) => {
        if (err) throw err;
        console.log(results);
        res.send(results)
    })
})

//Eliminar movies
app.delete("/peliculas/:id", (req, res) => {
    const id = req.params.id;
    let params = [id]
    let sql = "DELETE FROM movies WHERE movies.id_movie = ?";
    con.query(sql, params, (err, results) => {
        if (err) throw err;
        console.log(results);
        res.send(results)
    })
})

//Eliminar actor de la pelicula
app.delete("/pelicula/actor", (req, res) => {
    let professional_id = req.body.professional_id
    let movie_id = req.body.movie_id;
    let params = [professional_id, movie_id]
    let sql = "DELETE FROM professional_movie WHERE professional_movie.professional_id = ? AND professional_movie.movie_id = ?";
    con.query(sql, params, (err, results) => {
        if (err) throw err;
        console.log(results);
        res.send(`actor ${professional_id} deleted`)
    })
})


//Eliminar director de la pelicula
app.delete("/pelicula/guionista", (req, res) => {
    let professional_id = req.body.professional_id
    let movie_id = req.body.movie_id;
    let params = [professional_id, movie_id]
    let sql = "DELETE FROM professional_movie WHERE professional_movie.professional_id = ? AND professional_movie.movie_id = ?";
    con.query(sql, params, (err, results) => {
        if (err) throw err;
        console.log(results);
        res.send(results)
    })
})

//Eliminar guionista de la pelicula
app.delete("/pelicula/guionista", (req, res) => {
    let professional_id = req.body.professional_id
    let movie_id = req.body.movie_id;
    let params = [professional_id, movie_id]
    let sql = "DELETE FROM professional_movie WHERE professional_movie.professional_id = ? AND professional_movie.movie_id = ?";
    con.query(sql, params, (err, results) => {
        if (err) throw err;
        console.log(results);
        res.send(`writer ${professional_id} deleted`)
    })
})
