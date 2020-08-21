//Realizar un procedimiento que reciba un array de nombres y te devuelva verdadero si y solo si todos los nombres empiezan por M.    

let names = (array: string[]): boolean => {
    let a: boolean = true;
    let i: number = 0;
    let result: boolean = true;
    while (i < array.length && (a = true)) {
        if (array[i][0] === "M") {
            result = true;
        } else {
            a = false;
            result = false;
        }
        i++;
    }
    return result;
}

let array1: string[] = ["Maria", "Maula", "Mristina"]
let array2: string[] = ["Pablo", "Marta", "Cristina"]


console.log(names(array1));
console.log(names(array2))



