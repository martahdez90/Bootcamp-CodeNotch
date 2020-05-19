let parImpar = (array: number[]) => {
    let condi = true;
    let i = 0;
    while (i < array.length) {
        if (array[i] % 2 == 0 && (condi == true)) {
            console.log("su array tiene un numero par")
            condi = false;
        }
        i++
    }
}

parImpar([3, 4, 6]);

let array1: string[] = ["Casa", "Coche", "Ciudad", "Cesta"];
let array2: string[] = ["Barco", "Baca", "Bicicleta", "Balon", "Bisiesto", "Brasil"];
let array3: string[] = ["Venezuela", "Veneno", "Voltaje"]

let sumaArray = (array: string[]): string => {
    let result: number = 0;
    for (let i = 0; i < array.length; i++) {
        result += array[i].length
    }
    if (result % 2 === 0) {
        return ("par");
    } else {
        return ("impar");
    }
}

console.log(sumaArray(array1));
console.log(sumaArray(array2));
console.log(sumaArray(array3));