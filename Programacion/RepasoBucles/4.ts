// 4.	Realizar una función que como parámetro de entrada reciba un array y como salida devuelva el array revertido.

let reverse = (array: number[]): number[] => {
    let salida: number[];
    salida = []
    for (let i = array.length - 1; i >= 0; i--) {
        salida.push(array[i]);

    }
    return salida
}

console.log(reverse([2, 4, 56, 23]));