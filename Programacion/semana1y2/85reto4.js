/* Dada la siguiente lista de libros:
- Ready player one
- El nombre del viento
- El temor de un hombre sabio
- Cien años de soledad
- Origen
Imprímelos por pantalla y entre corchetes el número de
letras que contiene su nombre (ej.: Origen [6] ). Además,
debes poner el que sea más largo en negrita. */

var libros = ["Ready player one", "El nombre del viento", "El temor de un hombre sabio", "Cien años de soledad", "Origen"];

console.log(libros);

var ordenados = (libros.sort((a, b) => a.length - b.length));

console.log(ordenados);

var i;
var text = "";
var ultimo = ordenados.length - 1;

for (i = 0; i < ordenados.length - 1; i++) {
    text += (ordenados[i] + "[" + ordenados[i].length + "]" + "<br>");
}

document.write(text + "<strong>" + ordenados[ultimo] + "[" + ordenados[ultimo].length + "]" + "<strong>");