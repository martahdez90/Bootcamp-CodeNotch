/* 9.	Realizar una función que te imprima por consola el siguiente mensaje:
o	“El numero es par”, si el numero introducido como parámetro de entrada es par
o	“El numero es impar”, si el numero introducido como parámetro de entrada es impar
 */


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