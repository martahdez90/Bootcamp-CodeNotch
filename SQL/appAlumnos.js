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
    database: "codenotchmysql"
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

//Subir alumnos
app.post("/students", (req, res) => {
    let name = req.body.name;
    let last_name = req.body.last_name;
    let student_id = req.body.student_id;
    let year = req.body.year;
    let params = [name, last_name, student_id, year]
    let sql = "INSERT INTO students (name, last_name, student_id, year) VALUES (?, ?, ?, ?)"
    con.query(sql, params, (err, result) => {
        if (err) throw err;
        console.log(result);
        res.send(result)
    })
});

/* {
    "name": "Peter",
    "last_name": "Pan", 
    "student_id": "81",
    "year": "2020"
}  */


//obtener alumno
app.get("/students/:id", (req, res, next) => {
    const id = req.params.id;
    let params = [id]
    let sql = "SELECT * from students WHERE students.student_id = ?"
    con.query(sql, params, (err, result) => {
        if (err) throw err;
        console.log(result);
        res.send(result)
    })
});

//obtener alumnos
app.get("/students", (req, res) => {
    let sql = "SELECT * from students"
    con.query(sql, (err, results) => {
        if (err) throw err;
        console.log(results);
        res.send(results)
    })
});

// //Update student
app.put("/students/:id", (req, res, next) => {
    const id = req.params.id;
    let name = req.body.name;
    let last_name = req.body.last_name;
    let student_id = req.body.student_id;
    let year = req.body.year;
    let params = [name, last_name, student_id, year, id]
    let sql = "UPDATE students SET name = ? , last_name = ? , student_id = ? , year = ? WHERE students.student_id = ?";
    con.query(sql, params, (err, results) => {
        if (err) throw err;
        console.log(results);
        res.send(results)
    })
})

//Eliminar students
app.delete("/students/:id", (req, res, next) => {
    const id = req.params.id;
    let params = [id]
    let sql = "DELETE FROM students WHERE students.student_id = ?";
    con.query(sql, params, (err, results) => {
        if (err) throw err;
        console.log(results);
        res.send(results)
    })
})

//Subir profesor
app.post("/teachers", (req, res) => {
    let name = req.body.name;
    let last_name = req.body.last_name;
    let params = [name, last_name]
    let sql = "INSERT INTO teachers (name, last_name) VALUES (?, ?)"
    con.query(sql, params, (err, result) => {
        if (err) throw err;
        console.log(result);
        res.send(result)
    })
});

// {
//     "name": "Peter",
//     "last_name": "Pan"
// }

//obtener profesor
app.get("/teachers/:id", (req, res, next) => {
    const id = req.params.id;
    let params = [id];
    let sql = "SELECT * from teachers WHERE teachers.teacher_id = ?"
    con.query(sql, params, (err, result) => {
        if (err) throw err;
        console.log(result);
        res.send(result)
    })
});

//obtener profesores
app.get("/teachers", (req, res) => {
    let sql = "SELECT * from teachers"
    con.query(sql, (err, results) => {
        if (err) throw err;
        console.log(results);
        res.send(results)
    })
});

// //Update profesor
app.put("/teachers/:id", (req, res, next) => {
    const id = req.params.id;
    let name = req.body.name;
    let last_name = req.body.last_name;
    let params = [name, last_name, id]
    let sql = "UPDATE teachers SET name = ?, last_name = ? WHERE teachers.teacher_id = ?";
    con.query(sql, params, (err, results) => {
        if (err) throw err;
        console.log(results);
        res.send(results)
    })
})

//Eliminar profesores
app.delete("/teachers/:id", (req, res, next) => {
    const id = req.params.id;
    let params = [id]
    let sql = "DELETE FROM teachers WHERE teachers.teacher_id = ?";
    con.query(sql, params, (err, results) => {
        if (err) throw err;
        console.log(results);
        res.send(results)
    })
})

//Subir grupos
app.post("/groups", (req, res) => {
    let name = req.body.name;
    let params = [name]
    let sql = "INSERT INTO groups (name) VALUES (?)"
    con.query(sql, params, (err, result) => {
        if (err) throw err;
        console.log(result);
        res.send(result)
    })
});

// {
//     "name": "SPRING98"
// }

//obtener grupos
app.get("/groups/:id", (req, res, next) => {
    const id = req.params.id;
    let params = [id]
    let sql = "SELECT * from groups WHERE groups.group_id = ?"
    con.query(sql, params, (err, result) => {
        if (err) throw err;
        console.log(result);
        res.send(result)
    })
});

//obtener gruposs
app.get("/groups", (req, res) => {
    let sql = "SELECT * from groups"
    con.query(sql, (err, results) => {
        if (err) throw err;
        console.log(results);
        res.send(results)
    })
});

// //Update grupos
app.put("/groups/:id", (req, res, next) => {
    const id = req.params.id;
    let name = req.body.name;
    let params = [name, id]
    let sql = "UPDATE groups SET name = ? WHERE groups.group_id = ?";
    con.query(sql, params, (err, results) => {
        if (err) throw err;
        console.log(results);
        res.send(results)
    })
})

//Eliminar gruposs
app.delete("/groups/:id", (req, res, next) => {
    const id = req.params.id;
    let params = [id]
    let sql = "DELETE FROM groups WHERE groups.group_id = ?";
    con.query(sql, params, (err, results) => {
        if (err) throw err;
        console.log(results);
        res.send(results)
    })
})


//Subir asignaturas
app.post("/subjects", (req, res) => {
    let title = req.body.title;
    let params = [title]
    let sql = "INSERT INTO subjects (title) VALUES (?)"
    con.query(sql, params, (err, result) => {
        if (err) throw err;
        console.log(result);
        res.send(result)
    })
});

// {
//     "title": "MongoDB"
// }

//obtener asignaturas
app.get("/subjects/:id", (req, res, next) => {
    const id = req.params.id;
    let params = [id]
    let sql = "SELECT * from subjects WHERE subjects.subject_id = ?"
    con.query(sql, params, (err, result) => {
        if (err) throw err;
        console.log(result);
        res.send(result)
    })
});

//obtener asignaturass
app.get("/subjects", (req, res) => {
    let sql = "SELECT * from subjects"
    con.query(sql, (err, results) => {
        if (err) throw err;
        console.log(results);
        res.send(results)
    })
});

// //Update asignaturas
app.put("/subjects/:id", (req, res, next) => {
    const id = req.params.id;
    let title = req.body.title;
    let params = [title, id]
    let sql = "UPDATE subjects SET title = ? WHERE subjects.subject_id = ?";
    con.query(sql, params, (err, results) => {
        if (err) throw err;
        console.log(results);
        res.send(results)
    })
})

//Eliminar asignaturass
app.delete("/subjects/:id", (req, res, next) => {
    const id = req.params.id;
    let params = [id]
    let sql = "DELETE FROM subjects WHERE subjects.subject_id = ?";
    con.query(sql, params,  (err, results) => {
        if (err) throw err;
        console.log(results);
        res.send(results)
    })
})



//Subir notas
app.post("/marks", (req, res) => {
    let student_id = req.body.student_id;
    let subject_id = req.body.subject_id;
    let date = req.body.date;
    let mark = req.body.mark;
    let params = [student_id, subject_id, date, mark]
    let sql = "INSERT INTO marks (student_id, subject_id, date, mark) VALUES (?, ?, ?, ?)"
    con.query(sql, params, (err, result) => {
        if (err) throw err;
        console.log(result);
        res.send(result)
    })
});

/* {
    "student_id": "68",
    "subject_id": "51",
    "date": "2018-06-03",
    "mark": 8
} */

//obtener notas de un alumno
app.get("/marks/:id", (req, res, next) => {
    const id = req.params.id;
    let params = [id]
    let sql = "SELECT * from marks WHERE marks.student_id = ?"
    con.query(sql, params, (err, result) => {
        if (err) throw err;
        console.log(result);
        res.send(result)
    })
});

//obtener todas las  notas
app.get("/marks", (req, res) => {
    let sql = "SELECT * from marks"
    con.query(sql, (err, results) => {
        if (err) throw err;
        console.log(results);
        res.send(results)
    })
});

// //Update notas
app.put("/marks/:id", (req, res, next) => {
    const id = req.params.id;
    let student_id = req.body.student_id;
    let subject_id = req.body.subject_id;
    let date = req.body.date;
    let mark = req.body.mark;
    let params = [student_id, subject_id, date, mark, id]
    let sql = "UPDATE marks SET student_id = ?, subject_id = ?, date = ?, mark = ? WHERE marks.mark_id = ?";
    con.query(sql, params, (err, results) => {
        if (err) throw err;
        console.log(results);
        res.send(results)
    })
})

//Eliminar notass
app.delete("/marks/:id", (req, res, next) => {
    const id = req.params.id;
    let params = [id]
    let sql = "DELETE FROM marks WHERE marks.mark_id = ?";
    con.query(sql, params, (err, results) => {
        if (err) throw err;
        console.log(results);
        res.send(results)
    })
})

//Hacer la media de un alumno
app.get("/media/:id", (req, res, next) => {
    const id = req.params.id;
    let params = [id]
    let sql = "SELECT AVG(mark) FROM marks WHERE marks.student_id = ?"
    con.query(sql, params, (err, result) => {
        if (err) throw err;
        console.log(result);
        res.send(result)
    })
});

//Asignaturas en las que está matriculado un alumno
app.get("/apuntadas/:id", (req, res, next) => {
    const id = req.params.id;
    let params = [id]
    let sql = "SELECT students.name AS nombre, students.last_name AS apellido, subjects.title AS asignatura FROM subject_teacher JOIN students ON (subject_teacher.group_id = students.group_id) JOIN subjects ON (subject_teacher.subject_id = subjects.subject_id) WHERE students.student_id = ?"
    con.query(sql, params, (err, result) => {
        if (err) throw err;
        console.log(result);
        res.send(result)
    })
});

//Asignaturas en las que se matricularon los alumnos
app.get("/apuntadas", (req, res, next) => {
    let sql = "SELECT students.name AS nombre, students.last_name AS apellido, subjects.title AS asignatura FROM subject_teacher JOIN students ON (subject_teacher.group_id = students.group_id) JOIN subjects ON (subject_teacher.subject_id = subjects.subject_id) ORDER BY nombre"
    con.query(sql, (err, result) => {
        if (err) throw err;
        console.log(result);
        res.send(result)
    })
});

// Asignaturas que imparte un profesor
app.get("/impartidas/:id", (req, res, next) => {
    const id = req.params.id;
    let params = [id]
    let sql = "SELECT teachers.name AS profesor, subjects.title AS asignatura FROM subject_teacher JOIN subjects ON (subject_teacher.subject_id = subjects.subject_id) JOIN teachers ON (subject_teacher.teacher_id = teachers.teacher_id) WHERE teachers.teacher_id = ?"
    con.query(sql, params, (err, result) => {
        if (err) throw err;
        console.log(result);
        res.send(result)
    })
});

// Asignaturas que imparte cada profesor
app.get("/impartidas", (req, res, next) => {
    let sql = "SELECT teachers.name AS profesor, subjects.title AS asignatura FROM subject_teacher JOIN subjects ON (subject_teacher.subject_id = subjects.subject_id) JOIN teachers ON (subject_teacher.teacher_id = teachers.teacher_id) ORDER BY profesor"
    con.query(sql, (err, result) => {
        if (err) throw err;
        console.log(result);
        res.send(result)
    })
});














