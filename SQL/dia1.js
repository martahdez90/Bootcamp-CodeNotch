let mysql = require("mysql")
let connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: null,
    //database: "codenotchMysql"
    database: "codenotch"
});

connection.connect(function (err) {
    if (err) {
        console.log(err);
    } else {
        console.log("Conexión correcta");
    }
});

/* let sql = "CREATE TABLE Asignatura(id INT AUTO_INCREMENT PRIMARY KEY, nombre VARCHAR(200), curso INT)"
connection.query(sql, function (err, result) {
    if (err)
        console.log(err);
    else {
        console.log("Tabla creada");
        console.log(result);
    }
}) */


/* let sql = "ALTER TABLE `alumno` ADD `prueba` VARCHAR(100) AFTER `id_profesores`";
connection.query(sql, function (err, result) {
    if (err)
        console.log(err);
    else {
        console.log("valor creado");
        console.log(result);
    }
}) */

/* let sql = "ALTER TABLE `alumno` DROP `prueba`;"
connection.query(sql, function (err, result) {
    if (err)
        console.log(err);
    else {
        console.log("Columna borrada");
        console.log(result);
    }
}) */

/* //crear tablas
CREATE TABLE`codenotch`.`students`(`student_id` INT(5) NOT NULL AUTO_INCREMENT, `name` VARCHAR(50) NOT NULL, `last_name` VARCHAR(50) NOT NULL, `group_id` INT(1) NOT NULL, PRIMARY KEY(`student_id`)) ENGINE = InnoDB;

CREATE TABLE `codenotch`.`groups` ( `group_id` INT(1) NOT NULL AUTO_INCREMENT , `name` VARCHAR(50) NOT NULL , PRIMARY KEY (`group_id`)) ENGINE = InnoDB;

CREATE TABLE`codenotch`.`marks`(`mark_id` INT(5) NOT NULL AUTO_INCREMENT, `student_id` INT(5) NOT NULL, `subject_id` INT(5) NOT NULL, `date` DATE NOT NULL, `mark` INT(5) NOT NULL, PRIMARY KEY(`mark_id`)) ENGINE = InnoDB;

CREATE TABLE`codenotch`.`subjects`(`subject_id` INT(5) NOT NULL AUTO_INCREMENT, `title` VARCHAR(50) NOT NULL, PRIMARY KEY(`subject_id`)) ENGINE = InnoDB;

CREATE TABLE`codenotch`.`subject_teacher`(`subject_id` INT(5) NOT NULL AUTO_INCREMENT, `teacher_id` INT(5) NOT NULL, `group_id` INT(1) NOT NULL, `borrrar` INT(5) NOT NULL, PRIMARY KEY(`subject_id`)) ENGINE = InnoDB;

CREATE TABLE`codenotch`.`teachers`(`teacher_id` INT(5) NOT NULL AUTO_INCREMENT, `name` VARCHAR(50) NOT NULL, `last_name` VARCHAR(50) NOT NULL) ENGINE = InnoDB;

//insertar profesor
INSERT INTO`teachers`(`teacher_id`, `first_name`, `last_name`) VALUES(NULL, 'Jose', 'Codenotch') 

//INSERTAR GRUPO
INSERT INTO `groups` (`group_id`, `name`) VALUES (NULL, '1EP');

//INSERTAR NOTA
INSERT INTO `marks` (`mark_id`, `student_id`, `subject_id`, `date`, `mark`) VALUES (NULL, '1', '1', CURRENT_DATE(), '4');

*/

//INSERTAR ALUMNO
let sql = "INSERT INTO students (student_id, name, last_name, group_id) VALUES ?";
let values = [
    [NULL, 'ALEX', 'MANZANARES', '1'],
    [NULL, 'CESAR', 'ANTONIO', '1'],
    [NULL, 'JIAEN', 'PAN', '1'],
    [NULL, 'JOAN', 'CASALS', '1'],
    [NULL, 'MANUEL', 'ESTRADA', '1'],
    [NULL, 'MARIA', 'AGUILAR', '1'],
    [NULL, 'PABLO', 'CAÑELLAS', '1'],
    [NULL, 'CRISTINA', 'PEREZ', '1']
];

connection.query(sql, [values], function (err, result) {
    if (err)
        console.log(err);
    else {
        console.log("alumno agregado");
        console.log(result);
    }
})


