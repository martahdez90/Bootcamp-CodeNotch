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
let values = []

/* let sql = "let sql = " Asignatura(id INT AUTO_INCREMENT PRIMARY KEY, nombre VARCHAR(200), curso INT)"
connection.query(sql, function (err, result) {
    if (err)
        console.log(err);
    else {
        console.log("Tabla creada");
        console.log(result);
    }
}) */


/* let sql = "ALTER TABLE alumno ADD prueba VARCHAR(100) AFTER id_profesores";
connection.query(sql, function (err, result) {
    if (err)
        console.log(err);
    else {
        console.log("valor creado");
        console.log(result);
    }
}) */

/* let sql = "ALTER TABLE alumno DROP prueba;"
connection.query(sql, function (err, result) {
    if (err)
        console.log(err);
    else {
        console.log("Columna borrada");
        console.log(result);
    }
}) */

//crear tablas
// let sql = "CREATE TABLE students(student_id INT(5) AUTO_INCREMENT PRIMARY KEY, name VARCHAR(50), last_name VARCHAR(50), group_id INT(1))";
// con.query(sql, function (err, result) {
//     if (err) throw err;
//     console.log("Table created");
//   });


// let sql = "CREATE TABLE groups (group_id INT(1) AUTO_INCREMENT , name VARCHAR(50) , PRIMARY KEY (group_id))";
// con.query(sql, function (err, result) {
//     if (err) throw err;
//     console.log("Table created");
//   });

// let sql = "CREATE TABLE marks(mark_id INT(5) AUTO_INCREMENT PRIMARY KEY, student_id INT(5), subject_id INT(5), date DATE, mark INT(5)";
// con.query(sql, function (err, result) {
//     if (err) throw err;
//     console.log("Table created");
//     console.log(result);
// });

// sql = "CREATE TABLE subjects(subject_id INT(5) AUTO_INCREMENT, title VARCHAR(50), PRIMARY KEY (subject_id))";
// con.query(sql, function (err, result) {
//     if (err) throw err;
//     console.log("Table created");
//     console.log(result);
// });

// sql = "CREATE TABLE subject_teacher(subject_id INT(5) AUTO_INCREMENT, teacher_id INT(5), group_id INT(1), PRIMARY KEY (subject_id))";
// con.query(sql, function (err, result) {
//     if (err) throw err;
//     console.log("Table created");
//     console.log(result);
// });

// sql = "CREATE TABLE teachers(teacher_id INT(5) AUTO_INCREMENT PRIMARY KEY, name VARCHAR(50), last_name VARCHAR(50))";
// con.query(sql, function (err, result) {
//     if (err) throw err;
//     console.log("Table created");
//     console.log(result);
// });



// console.log("------METER LOS DATOS DE LAS TABLAS ------");

// INSERTAR profesor
// sql = "INSERT INTO teachers(name, last_name) VALUES ?" 
// values = [
//     ['ALEX', 'MANZANARES'],
//     ['PABLO', 'HERNANDEZ'],
//     ['ELENA', 'WING'],
//     ['MIRIAM', 'SAM'],
//     ['JUAN', 'SMITH'],
//     ['TERESA', 'PERL'],
//     ['MANUELA', 'POKOYO'],
//     ['FRANCISCO', 'PORK'],
//     ['PEPE', 'MENNY'],
//     ['SONIA', 'MUSTANG']
// ]
// con.query(sql, [values], function (err, result) {
//     if (err) throw err;
//     console.log("Table created");
//     console.log(result);
// });
// // // INSERTAR GRUPO
// sql = "INSERT INTO groups (name) VALUES ?";
// values = [
//     ["SPRING18"],
//     ["WINTER18"],
//     ["SPRING19"],
//     ["WINTER19"],
//     ["SPRING20"],
//     ["WINTER20"],
//     ["SPRING21"],
//     ["WINTER21"],
//     ["SPRING22"],
//     ["WINTER22"],
//     ["SPRING23"],
//     ["WINTER23"]
// ]
// con.query(sql, [values], function (err, result) {
//     if (err) throw err;
//     console.log("Table created");
//     console.log(result);
// });
// // // INSERTAR ASIGNATURA
//     sql = "INSERT INTO subjects (title) VALUES ?";
//     values = [
//         ["MODULO_2"],
//         ["MODULO_3"],
//         ["MODULO_4"],
//         ["MODULO_5"],
//         ["MODULO_6"],
//         ["MODULO_7"],
//         ["MODULO_8"],
//         ["MODULO_9"],
//         ["MODULO_10"]
//     ]
// con.query(sql, [values], function (err, result) {
//     if (err) throw err;
//     console.log("Table created");
//     console.log(result);
// });
// // INSERTAR NOTA
//     sql = "INSERT INTO marks (student_id, subject_id, date, mark) VALUES ?";
//     values = [
//         ['1', '1', '2008-06-02', '8'],
//         ['2', '3', '2008-06-02', '5'],
//         ['4', '4', '2008-06-02', '5'],
//         ['5', '1', '2018-06-02', '3'],
//         ['6', '6', '2018-06-02', '8'],
//         ['7', '1', '2018-06-02', '3'],
//         ['8', '8', '2018-06-02', '2'],
//         ['9', '1', '2018-06-02', '6'],
//         ['10', '10', '2018-06-02', '9'],
//         ['3', '3', '2018-06-02', '5'],
//         ['2', '6', '2015-06-02', '1'],
//         ['5', '7', '2015-06-02', '5'],
//         ['8', '9', '2015-06-02', '9'],
//         ['5', '6', '2020-06-02', '7'],
//         ['3', '5', '2020-06-02', '4'],
//         ['1', '5', '2020-06-02', '2'],
//     ]
// con.query(sql, [values], function (err, result) {
//     if (err) throw err;
//     console.log("------Insertar nota ------");
//     console.log(result);
// });

// // //INSERT SUBJETCT-TEACHER
//     sql = "INSERT INTO `subject_teacher` (teacher_id, group_id) VALUES ?"
//     values = [
//         ['2', '1'],
//         ['3', '1'],
//         ['4', '1'],
//         ['5', '1'],
//         ['6', '1'],
//         ['7', '1'],
//         ['8', '1'],
//         ['9', '1'],
//         ['10', '1'],
//         ['2', '3'],
//         ['2', '4'],
//         ['3', '2'],
//         ['4', '2'],
//         ['5', '2'],
//         ['6', '3'],
//         ['7', '3'],
//         ['8', '4'],
//         ['9', '4'],
//         ['10', '5']
//     ]
// con.query(sql, [values], function (err, result) {
//     if (err) throw err;
//     console.log("Table created");
//     console.log(result);
// });

// //INSERTAR ALUMNOS
// sql = "INSERT INTO students (name, last_name, group_id) VALUES ?"
// values = [
//     ['ALEX', 'MANZANARES', '1'],
//     ['PABLO', 'HEBENSTREIT', '1'],
//     ['MARTA', 'HERNANDEZ', '1'],
//     ['CESAR', 'ANTONIO', '1'],
//     ['JIAEN', 'PAN', '1'],
//     ['JOAN', 'CASALS', '1'],
//     ['MANUEL', 'ESTRADA', '1'],
//     ['MARIA', 'AGUILAR', '1'],
//     ['PABLO', 'CAÑELLAS', '1'],
//     ['CRISTINA', 'PEREZ', '1']
// ];

// con.query(sql, [values], function (err, result) {
//     if (err) throw err;
//     console.log("Table created");
//     console.log(result);
// });

// //Update notas a 0
//UPDATE `marks` SET `mark` = '0' WHERE `marks`.`mark_id` = 1
// sql = "UPDATE marks SET mark = 0";
// con.query(sql, function (err, result) {
//     if (err) throw err;
//     console.log("Table created");
//     console.log(result);
// });



//Seleccionar nombre y apellidos de todos los alumnos

// sql = "SELECT name, last_name FROM students"
// con.query(sql, function (err, result) {
//     if (err) throw err;
//     console.log("Seleccionar nombre y apellidos de todos los alumnos");
//     console.log(result);
// });

// // EN PHPMYADMIN = SELECT `name`,`last_name` FROM `students` WHERE 1

// //SELECCIONAR LOS DATOS DE LOS PROFESORES
// // // EN PHPMYADMIN = SELECT * FROM `teachers` WHERE 1

// sql = "SELECT * FROM teachers"
// con.query(sql, function (err, result) {
//     if (err) throw err;
//     console.log("------SELECCIONAR LOS DATOS DE LOS PROFESORES-----");
//     console.log(result);
// });

// //borrar todo de una tabla
// console.log("BORRAR TODOS LOS DATOS DE LAS TABLAS")

// sql = "DELETE FROM groups";
// con.query(sql, function (err, result) {
//     if (err) throw err;
//     console.log("Table created");
//     console.log(result);
// })
// sql = "DELETE FROM marks";
// con.query(sql, function (err, result) {
//     if (err) throw err;
//     console.log("Table created");
//     console.log(result);
// })
// sql = "DELETE FROM students";
// con.query(sql, function (err, result) {
//     if (err) throw err;
//     console.log("Table created");
//     console.log(result);
// })
// sql = "DELETE FROM subjects";
// con.query(sql, function (err, result) {
//     if (err) throw err;
//     console.log("Table created");
//     console.log(result);
// })
// sql = "DELETE FROM subject_teacher";
// con.query(sql, function (err, result) {
//     if (err) throw err;
//     console.log("Table created");
//     console.log(result);
// })
// sql = "DELETE FROM teachers";
// con.query(sql, function (err, result) {
//     if (err) throw err;
//     console.log("Table created");
//     console.log(result);
// })

//ELIMINAR LAS NOTAS CUYA FECHA TENGA MAS DE 10 AÑOS
// sql = "DELETE FROM marks WHERE date < '2010-06-02'"
// con.query(sql, function (err, result) {
//     if (err) throw err;
//     console.log("ELIMINAR LAS NOTAS CUYA FECHA TENGA MAS DE 10 AÑOS");
//     console.log(result);
// })

//APROBAR A LOS ALUMNOS DE LA ASIGNATURA 1
//phpMyadmin = SELECT * FROM `marks` WHERE `subject_id` = 1 AND `mark` < 5;
// UPDATE `marks` SET `mark` = '5' WHERE `marks`.`mark_id` = 1
// sql = "UPDATE marks SET mark = 5 WHERE subject_id = 1 AND mark < 5 "
// con.query(sql, function (err, result) {
//     if (err) throw err;
//     console.log("APROBAR A LOS ALUMNOS DE LA ASIGNATURA 1");
//     console.log(result);
// })


//Obtener el nombre de un alumno y las asignaturas que cursa
// sql = "SELECT students.name AS student, subject_teacher.subject_id AS subject FROM students JOIN subject_teacher ON students.group_id = subject_teacher.group_id";


sql = "SELECT students.name, subject_teacher.subject_id FROM students JOIN subject_teacher ON students.group_id = subject_teacher.group_id ORDER BY students.name"
con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("consulta el nombre de un alumno y las asignaturas");
    console.log(result);
})

sql = "SELECT students.name, subject_teacher.subject_id FROM subject_teacher JOIN students ON students.group_id = subject_teacher.group_id WHERE students.name = 'ALEX' ORDER BY subject_teacher.subject_id"

con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("consulta Alex y las asignaturas ");
    console.log(result);
})

sql = "SELECT students.name, subjects.title FROM subject_teacher JOIN students ON students.group_id = subject_teacher.group_id JOIN subjects ON subject_teacher.subject_id = subjects.subject_id WHERE students.name = 'ALEX' ORDER BY subject_teacher.subject_id"
con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("consulta Alex y las asignaturas con su nombre ");
    console.log(result);
})









