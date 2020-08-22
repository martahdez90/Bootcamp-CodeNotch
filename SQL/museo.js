
let mysql = require("mysql")
let con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: null,
    //database: "codenotchMysql"
    database: "museo_split"
});

con.connect(function (err) {
    if (err) {
        console.log(err);
    } else {
        console.log("Conexión correcta");
    }
});

let sql = ""

//AÑADIR RELACIONES

// 1. Obtener un listado de todos los objetos que el museo tiene en préstamo, su localización dentro de la exposición, la fecha de expiración de este, la información básica (nombre, apellidos y email) de la persona que los ha prestado.
let params = ['borrowed']
sql = "SELECT piece.name AS piece, location.place, status.return_date, owner.name AS OWNER, owner.last_name, owner.email FROM piece JOIN piece_owner ON piece.id = piece_owner.piece_id JOIN owner ON piece_owner.owner_id = OWNER.id JOIN location ON piece.id = location.piece_id JOIN status ON piece.id = status.piece_id WHERE status.status = ?"

con.query(sql, params, function (err, result) {
    if (err) throw err;
    console.log("----reto 1---");
    console.table(result);
})

//2. Obtener de forma ordenada de mayor a menor, el número total de objetos o piezas agrupados por su situación dentro de la organización, esto es, cuántos hay expuestos, cuántos en itinerancia y cuántos almacenados. Además, se pide saber el número total de los objetos que están en préstamo y cuáles no para todas y cada una de las categorías anteriormente seleccionadas.

sql = "SELECT collections.collection AS Collection,COUNT(collections.piece_id) AS cuenta, COUNT(status.piece_id) FROM piece JOIN collection ON piece.id = collection.piece_id JOIN status ON piece.id = status.piece_id WHERE status.status = 'borrowed' GROUP BY collections.collection"
con.query(sql, params, function (err, result) {
    if (err) throw err;
    console.log("----reto 2---");
    console.table(result);
})



// JOIN status ON collections.piece_id = status.piece_id
// WHERE status.status = "lended"
// GROUP BY collections.collection








