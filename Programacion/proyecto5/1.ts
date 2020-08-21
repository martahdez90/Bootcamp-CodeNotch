console.clear();
import { Vector } from "./vector";
import { Matrix } from "./matrix"


function multSpecial(m1:Matrix, n: number) {
    let result: Matrix = new Matrix(0, 0, -1);
    for (let i = 0; i < m1.getMatrix().length; i++) {
        if (m1.getMatrix()[0].getVector()[0] % 2 == 0) {
            result.getMatrix()[i] = m1.getMatrix()[i].mulNumber(n);
        } else {
            result.getMatrix()[i] = m1.getMatrix()[i].mulNumber(n - 1); 
        }
}
    return result;
}


let matrix1: Matrix = new Matrix(5, 4, 10);
let matrix2: Matrix = new Matrix(5, 4, 10);

console.log(matrix1.getMatrix())
console.log(matrix2.getMatrix());

/* console.log("Ahora la suma de indices")
console.log(matrix1.getMatrix()[0].getVector()[0] + matrix2.getMatrix()[0].getVector()[0]); */

let matrix3: Matrix = multSpecial(matrix1, 2);
console.log(matrix3.getMatrix())


