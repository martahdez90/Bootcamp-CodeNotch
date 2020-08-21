
class Persona {
    constructor(nombre, peso, altura, anyoNacimiento, array1) {
        this.nombre = nombre;
        this.peso = peso;
        this.altura = altura;
        this.anyoNacimiento = anyoNacimiento;
        this.aficiones = array1;
    }
    //Getter
    getNombre() {
        return this.nombre;
    }
    getPeso() {
        return this.peso;
    }
    getAltura() {
        return this.altura;
    }
    getAnyonacimiento() {
        return this.anyoNacimiento;
    }
    getAficiones() {
        return this.aficiones;
    }
    getmostrarAficiones(persona) {
        return this.motrarAficiones(persona);
    }
    //setter
    setNombre(nuevonombre) {
        this.nombre = nuevonombre;
    }
    setPeso(nuevopeso) {
        this.peso = nuevopeso;
    }
    setaltura(nuevaAltura) {
        this.peso = nuevaAltura;
    }
    setAnacimiento(nuevoanyo) {
        this.anyoNacimiento = nuevoanyo;
    }
    setAficiones(nuevaAficion) {
        this.aficiones = nuevaAficion;
    }
    //Método IMC
    calcIMC() {
        var resultado = (this.peso / (this.altura * this.altura) * 10000);
        var miresultado = resultado.toFixed(2);
        var final = parseFloat(miresultado)
        return final;
    }
    //Método edad
    calcEdad(date) {
        return date - this.anyoNacimiento;
    }
    //Metodo mostrarTodos
    mostrarTodos() {
        console.log("Nombre : " + this.nombre + "\n" + "Peso: " + this.peso + "\n" + "Altura: " + this.altura + "\n" + "anyoNacimiento: " + this.anyoNacimiento + "\n" + "aficiones: " + this.aficiones);
    }
    //Metodo mostrar aficiones
    mostrarAficiones() {
        console.log(this.aficiones);
    }
}

//matriz.js
module.exports = Persona;


