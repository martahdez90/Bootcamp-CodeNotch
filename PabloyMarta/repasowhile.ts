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

