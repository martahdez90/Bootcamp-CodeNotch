"use strict";
exports.__esModule = true;
exports.Imdb = void 0;
var fs = require('fs');
var Imdb = /** @class */ (function () {
    //creo el constructor
    function Imdb(arrayMovie) {
        this.peliculas = arrayMovie;
    }
    Imdb.prototype.escribirEnFicheroJSON = function (nombreFichero) {
        var result = "";
        result = JSON.stringify(this.peliculas);
        return fs.writeFileSync(nombreFichero, result);
    };
    Imdb.prototype.obtenerInstanciaIMDB = function (nombreFichero) {
        var lectura = fs.readFileSync(nombreFichero, 'utf8');
        var final = new Imdb(JSON.parse(lectura));
        return final;
    };
    return Imdb;
}());
exports.Imdb = Imdb;
