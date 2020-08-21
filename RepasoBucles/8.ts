// 8.	Realizar una función que te devuelva la suma del numero de caracteres de las palabras almacenadas en un array.
let array1: string[] = ["Casa", "Coche", "Ciudad", "Cesta"]

let sumaArray = (array: string[]): number => {
    let result: number = 0;
    for (let i = 0; i < array.length; i++) {
        result += array[i].length
    }
    return result;
}

console.log(sumaArray(array1));