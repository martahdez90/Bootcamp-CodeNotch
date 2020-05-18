console.clear();

//RETO 1: Crea una función que imprima siempre lo que se le pasa por parámetro, y si no se le pasa ningún parámetro, informe de esta situación

printer_arrow = (elem) => {
    if (elem == undefined) {
        console.log("No has escrito ningun valor")
    } else { console.log(elem) }
}

printer_arrow("hola");
printer_arrow(1);
printer_arrow(0);
printer_arrow();

//RETO 2: Reescribe la siguiente función basándote en ECMASCRIPT
multiply = (x, y) => { return x * y }
console.log(multiply(3, 5));

//RETO 3: Crea una función que tenga de parámetro de entrada un array y devuelva la suma de los elementos del array en una variable suma.

let array = [1, 4, 8]

sumaArray = (entry = []) => {
    let suma = 0;
    if (Array.isArray(entry)) {
        for (let i = 0; i < entry.length; i++) {
            suma += entry[i]
        }
    } else {
        suma = "No has introducido un array como parámetro de entrada"
    }
    return suma;
}

console.log(sumaArray([10, 10, 10]));
console.log(sumaArray());
console.log(sumaArray(2));


//RETO DE FUNCIONES: texto a ASCII
let string = "Codenotch and Javascript are awesome!"

ascii_cipher = (string) => {
    let cifrado = "";
    for (i = 0; i < string.length; i++) {
        cifrado = `${cifrado} ${string.charCodeAt(i)}`;
    }
    return cifrado;
}

console.log(ascii_cipher(string));

//RETO DE OBJETOS: Crea una clase llamada “Password” que tenga los atributos de “length” y “password”. Por defecto el atributo “length” tendrá un valor de 8.
class Password {
    constructor(password, length = 8) {
        this.password = password;
        this.length = length;
    }
    //Getter
    getPassword() {
        return this.password;
    }
    getLength() {
        return this.length;
    }
    //Métodos
    isStrong() {
        let result = ""
        if (this.password.length > 8) {
            result = "Tu contraseña es segura";
        } else {
            result = "Tu contraseña no es segura";
        }
        return result;
    }
    generatePass() {
        let newPassword = "";
        for (i = 0; i < 8; i++) {
            newPassword += String.fromCharCode(Math.floor(Math.random() * (122 - 33) + 33))
        }
        return newPassword
    }
}

let pasword1 = new Password("cuhipuchi", 9);
console.log(pasword1.getLength(), pasword1.getPassword());
console.log(pasword1.isStrong());
console.log("su contraseña es: " + pasword1.generatePass())






