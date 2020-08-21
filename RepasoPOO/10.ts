//10.	Utilizando las dos funciones anteriores indicar si es par o impar la suma de los caracteres de cada uno de los siguientes arrays:

let array1: string[] = ["Casa", "Coche", "Ciudad", "Cesta"];
let array2: string[] = ["Barco", "Baca", "Bicicleta", "Balon", "Bisiesto", "Brasil"];
let array3: string[] = ["Venezuela", "Veneno", "Voltaje"]


var haypar = function (numero) {
    return (numero % 2 === 0);
};


let sumaArray = (array: string[]): number => {
    let result: number = 0;
    for (let i = 0; i < array.length; i++) {
        result += array[i].length
    }
    return result;
}


let sumaArrayPar = (array: string[]): boolean => {
    let numero = sumaArray(array);
    return haypar(numero)
}

console.log(sumaArrayPar(array1));
console.log(sumaArrayPar(array2));
console.log(sumaArrayPar(array3));