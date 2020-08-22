console.clear();
import { Vector } from "./vector";
import { Matrix } from "./matrix";

let matrix1: Matrix = new Matrix(5, 4, 10);
let matrix2: Matrix = new Matrix(5, 4, 10);
let matrix3: Matrix = matrix1.add(matrix2);
let matrix4: Matrix = matrix1.multNumber(10);
let matrix5: Matrix = matrix1.multSpecial(2);


matrix1.print();
matrix2.print();
matrix3.print();
matrix4.print();
matrix5.print()