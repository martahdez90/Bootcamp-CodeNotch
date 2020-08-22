

let mysql = require("mysql")
let con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: null,
    //database: "codenotchMysql"
    database: "codenotchmysql"
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
// ALTER TABLE `groups` ADD FOREIGN KEY (`group_id`) REFERENCES `groups`(`group_id`) ON DELETE RESTRICT ON UPDATE RESTRICT;



// Reto 1  Obtén los nombres y apellidos de los alumnos y los nombres de las asignaturas en las que están apuntados.
sql = "SELECT students.name AS nombre, students.last_name AS apellido, subjects.title AS asignatura FROM subject_teacher JOIN students ON subject_teacher.group_id = students.group_id JOIN subjects ON subject_teacher.subject_id = subjects.subject_id ORDER BY nombre"
con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("reto 1");
    console.table(result);
})

//Reto 2 Obtén todos los nombres y apellidos de los profesores y los nombres de las asignaturas que imparten.

sql = "SELECT teachers.name AS profesor, subjects.title AS asignatura FROM subject_teacher JOIN subjects ON (subject_teacher.subject_id = subjects.subject_id) JOIN teachers ON (subject_teacher.teacher_id = teachers.teacher_id)"
con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("reto 2");
    console.table(result);
})

// RETO 3 Obtén el número total de alumnos por asignatura, el nombre de la asignatura y el nombre y apellidos del profesor que la imparte.

sql = "SELECT subjects.title AS asignatura, teachers.name AS profesor, COUNT(students.student_name) AS alumno FROM subject_teacher JOIN students ON subject_teacher.group_id = students.group_id JOIN subjects ON subject_teacher.subject_id = subjects.subject_id JOIN teachers ON subject_teacher.teacher_id = teachers.teacher_id GROUP BY asignatura"
con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("reto 3");
    console.table(result);
})


// RETO 4 Obtén el nombre y apellido de todos los profesores, la asignatura que imparten y la nota media de la asignatura que imparten.
sql = "SELECT teachers.name AS teacher, teachers.last_name, subjects.title AS asignatura, AVG(marks.mark) AS media FROM subject_teacher JOIN marks ON (subject_teacher.subject_id = marks.subject_id) JOIN subjects ON (subjects.subject_id = subject_teacher.subject_id) JOIN teachers ON (subject_teacher.teacher_id = teachers.teacher_id) GROUP BY teacher"
con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("reto 4");
    console.table(result);
})

//RETO 5 listar el nombre y apellidos del alumno, el número de asignaturas que ha cursado, la nota media de todas ellas, la nota más alta y la nota más baja conseguida.
sql = "SELECT students.name AS nombre, students.last_name AS apellido, COUNT(marks.mark) AS cuenta, AVG(marks.mark) AS media, MAX(marks.mark), MIN(marks.mark) FROM students RIGHT JOIN marks ON (marks.student_id = students.student_id) GROUP BY nombre"
con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("reto ");
    console.table(result);
})







