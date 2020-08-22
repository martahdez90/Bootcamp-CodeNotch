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

//AÑADIR RELACIONES
// ALTER TABLE `groups` ADD FOREIGN KEY (`group_id`) REFERENCES `groups`(`group_id`) ON DELETE RESTRICT ON UPDATE RESTRICT;


//RETO 1
// calcular la nota media de los alumnos de la asignatura 1.
// sql = "SELECT AVG(mark) FROM marks WHERE subject_id = 1"
// con.query(sql, function (err, result) {
//         if (err) throw err;
//         console.log("---nota media de los alumnos de la asignatura 1---");
//         console.log(result);
// });


// //Contar los alumnos del bootcamp 2020
// sql = "SELECT COUNT(*) FROM students"
// con.query(sql, [values], function (err, result) {
//     if (err) throw err;
//     console.log("---nº alumnos del bootcamp 2020---");
//     console.log(result);
// });

// // // listar todos los campos de la tabla groups
// sql = "SELECT * FROM groups"
// con.query(sql, function (err, result) {
//     if (err) throw err;
//     console.log("---listar todos los campos de la tabla groups---");
//     console.log(result);
// });

// //Elimina todas las notas de la base de datos que estén por encima de 5 y que sean del año pasado
// // sql = "DELETE FROM marks WHERE mark > 5 AND date LIKE '2019%'"
// // con.query(sql, function (err, result) {
// //     if (err) throw err;
// //     console.log("---DELETE FROM `marks` WHERE mark > 5 AND date LIKE '2019%---");
// //     console.log(result);
// // });

// //Obtén los datos de todos los estudiantes que estén en el bootcamp este año.
// sql = "SELECT * FROM students WHERE year = 2020"
// con.query(sql, function (err, result) {
//     if (err) throw err;
//     console.log("---datos de todos los estudiantes que estén en el bootcamp este año---");
//     console.log(result);
// });

//Calcular el numero de profesores que hay por cada asignatura.
// sql = "SELECT * FROM subject_teacher"
// con.query(sql, function (err, result) {
//     if (err) throw err;
//     console.log("hecho");
//     console.log(result);
// })

// sql = "SELECT subject_id, COUNT(*) AS num_teachers FROM subject_teacher GROUP BY subject_id"
// con.query(sql, function (err, result) {
//     if (err) throw err;
//     console.log("Calcular el numero de profesores que hay por cada asignatura.");
//     console.log(result);
// })

//Obtén el id y la nota de los alumnos que tengan un id entre 1 y 20, o que tenga una nota mayor de 8 y la nota tenga fecha del año pasado.

// sql = "SELECT student_id, mark FROM marks WHERE (student_id BETWEEN 1 AND 20) OR date LIKE '2019%'"
// con.query(sql, function (err, result) {
//     if (err) throw err;
//     console.log("SELECT student_id, mark FROM marks WHERE (student_id BETWEEN 1 AND 20) OR date LIKE '2019%");
//     console.log(result);
// })


//Obtén la media aritmética de las notas que se han dado en el último año por asignatura.
// sql = "SELECT subject_id, AVG(mark) AS media_marks FROM marks WHERE date LIKE '2020%' GROUP BY subject_id"
// con.query(sql, function (err, result) {
//     if (err) throw err;
//     console.log("Obtén la media de las notas que se han dado en el último año por asignatura");
//     console.log(result);
// })

// //Obtén la media de las notas que se han dado en el último año por aalumno.
// sql = "SELECT student_id, AVG(mark) as media_marks FROM marks WHERE date LIKE '2020%' GROUP BY student_id"
// con.query(sql, function (err, result) {
//     if (err) throw err;
//     console.log("Obtén la media de las notas que se han dado en el último año por asignatura");
//     console.log(result);
// })

//Obtén los nombres de los alumnos y la cantidad total de asignaturas por alumno que sean HTML o TypeScript y cuyo profesor sea Alex (id54)
//1º - Creo tabla alumno con asignatua 
//SELECT students.name, subject_teacher.subject_id FROM students JOIN subject_teacher ON students.group_id = subject_teacher.group_id

//2º - Filtro
sql = "SELECT students.name, COUNT(subject_teacher.subject_id) AS cuenta FROM students JOIN subject_teacher ON students.group_id = subject_teacher.group_id WHERE ( subject_teacher.subject_id = 49 OR subject_teacher.subject_id = 50 ) AND (subject_teacher.teacher_id = 54 OR subject_teacher.teacher_id = 56) GROUP BY name"
con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("nombres de los alumnos y la cantidad total de asignaturas por alumno que sean HTML o TypeScript y cuyo profesor sea Alex");
    console.log(result);
})

// //Reto 3 
sql = "SELECT students.name, COUNT(subject_teacher.subject_id) AS cuenta FROM subject_teacher JOIN students ON subject_teacher.group_id = students.group_id JOIN subjects ON subject_teacher.subject_id = subjects.subject_id JOIN teachers ON subject_teacher.teacher_id = teachers.teacher_id WHERE (subjects.title = 'HTML' OR subjects.title = 'typescript') AND (teachers.name = 'ALEX' OR teachers.name = 'ELENA') GROUP BY NAME"
con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("nombres de los alumnos y la cantidad total de asignaturas por alumno que sean HTML o TypeScript y cuyo profesor sea Alex");
    console.log(result);
})

////INSERTAR profesor
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
// // // INSERTAR NOTA
//     sql = "INSERT INTO marks (student_id, subject_id, date, mark) VALUES ?";
//     values = [
//         ['61', '49', '2008-06-02', '8'],
//         ['62', '50', '2008-06-02', '5'],
//         ['64', '51', '2008-06-02', '5'],
//         ['65', '52', '2018-06-02', '3'],
//         ['66', '49', '2018-06-02', '8'],
//         ['67', '49', '2018-06-02', '3'],
//         ['68', '49', '2018-06-02', '2'],
//         ['62', '50', '2018-06-02', '6'],
//         ['63', '49', '2018-06-02', '9'],
//         ['63', '49', '2018-06-02', '5'],
//         ['62', '50', '2015-06-02', '1'],
//         ['65', '49', '2015-06-02', '5'],
//         ['68', '50', '2015-06-02', '9'],
//         ['65', '49', '2020-06-02', '7'],
//         ['63', '49', '2020-06-02', '4'],
//         ['61', '50', '2020-06-02', '2'],
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

//INSERTAR ALUMNOS
// sql = "INSERT INTO students (name, last_name, group_id, year) VALUES ?"
// values = [
//     ['ALEX', 'MANZANARES', '77', '2019'],
//     ['PABLO', 'HEBENSTREIT', '80', '20809'],
//     ['MARTA', 'HERNANDEZ', '80', '2020'],
//     ['CESAR', 'ANTONIO', '80', '2020'],
//     ['JIAEN', 'PAN', '80', '2020'],
//     ['JOAN', 'CASALS', '80', '2020'],
//     ['MANUEL', 'ESTRADA', '80', '2020'],
//     ['MARIA', 'AGUILAR', '80', '2020'],
//     ['PABLO', 'CAÑELLAS', '80', '2020'],
//     ['CRISTINA', 'PEREZ', '80', '2020']
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

// // //borrar todo de una tabla
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

// //ELIMINAR LAS NOTAS CUYA FECHA TENGA MAS DE 10 AÑOS
// sql = "DELETE FROM marks WHERE date < '2010-06-02'"
// con.query(sql, function (err, result) {
//     if (err) throw err;
//     console.log("ELIMINAR LAS NOTAS CUYA FECHA TENGA MAS DE 10 AÑOS");
//     console.log(result);
// })

// // APROBAR A LOS ALUMNOS DE LA ASIGNATURA 1
// phpMyadmin = SELECT * FROM `marks` WHERE `subject_id` = 1 AND `mark` < 5;
// UPDATE `marks` SET `mark` = '5' WHERE `marks`.`mark_id` = 1
// sql = "UPDATE marks SET mark = 5 WHERE subject_id = 1 AND mark < 5 "
// con.query(sql, function (err, result) {
//     if (err) throw err;
//     console.log("APROBAR A LOS ALUMNOS DE LA ASIGNATURA 1");
//     console.log(result);
// })








