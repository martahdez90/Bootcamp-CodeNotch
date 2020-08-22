let express = require("express");
let bodyParser = require("body-parser");
let app = express();
let cors = require("cors");
let mysql = require("mysql");

let connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: null,
  database: "angular",
});

connection.connect(function (error) {
  if (error) {
    console.log(error);
  } else {
    console.log("Conection worked fine");
  }
});

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.listen("3000", () => {
  console.log("Server started on port 3000");
});

app.get("/discos/", function (req, res) {
  let id = req.query.id;
  let sql;
    if (req.query.id == null)
        sql = "SELECT * FROM discos";
    else
        sql = `SELECT * FROM discos WHERE id = ${id}`;
        connection.query(sql, function (err, result) {
    if (err) console.log(err);
    else {
      res.send(result);
    }
  });
});
app.get("/discos/:id", function (req, res) {
    let id = req.params.id;
    let params = [id]
  let sql = "SELECT * FROM discos WHERE id = ?";
    connection.query(sql, params, function (err, result) {
    if (err)
        console.log(err);
    else {
        res.send(result);
    }
  });
});

app.post("/discos", function (req, resp) {
    let params = [req.body.title, req.body.singer, req.body.yearPublication]
    let sql = "INSERT INTO Discos (title, singer, yearPublication) VALUES (?, ?, ?)";
    connection.query(sql, params, function (err, result) {
        if (err)
            console.log(err);
        else {
            resp.send(result);
        }
      });
});

app.put("/discos/", function (req, resp) {
  let params = [req.body.title, req.body.singer, req.body.yearPublication, req.body.id]
  let sql = "UPDATE Discos SET title = ?, singer = ?, yearPublication = ? WHERE discos.id = ?";
  connection.query(sql, params, function (err, result) {
      if (err)
          console.log(err);
      else {
          resp.send(result);
      }
    });
});
app.delete("/discos/", function (req, resp) {
  let params = [req.body.id]
  let sql = "DELETE FROM discos WHERE discos.id = ?";
  connection.query(sql, params, function (err, result) {
      if (err)
          console.log(err);
      else {
          resp.send(result);
      }
    });
});

app.get("/", function (req, resp) {
  let response = { error: true, code: 200, message: "Start point" };
  resp.send(response);
});
