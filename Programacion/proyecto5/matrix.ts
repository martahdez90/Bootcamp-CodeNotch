import { Vector } from "./vector";

export class Matrix {
    //declaración de atributos
    private elements: Vector[]
    //Implementación del método constructor
    constructor(n: number, m: number, k: number) {
        this.elements = new Array;
        for (let i = 0; i < m; i++) {
            this.elements.push(new Vector(n, k));
        }
    }
    //Implementación de getter y setter
    public getMatrix(): Vector[] {
        return this.elements;
    }
    //Implementación de métodos propios. Imprimir por consola la matriz
    public print() {
        console.log(this.elements)
    }
    //Suma de elementos con m1
    public add(m1: Matrix): Matrix {
        let result: Matrix = new Matrix(0, 0, -1);
        for (let i = 0; i < m1.getMatrix().length; i++) {
            result.elements[i] = this.elements[i].add(m1.elements[i]);
        }
        return result;
    }
    public multNumber(n: number): Matrix {
        let result: Matrix = new Matrix(0, 0, -1);
        for (let i = 0; i < this.getMatrix().length; i++) {
            result.elements[i] = this.elements[i].mulNumber(n);
    }
        return result;  
    }
    public multSpecial(n: number): Matrix {
        let result: Matrix = new Matrix(0, 0, -1);
        for (let i = 0; i < this.elements.length; i++) {
            if (this.elements[0].getVector()[0] % 2 == 0) {
                result.elements[i] = this.elements[i].mulNumber(n);
            } else {
                result.elements[i] = this.elements[i].mulNumber(n - 1); 
            }
    }
        return result;
    }
}


/* let matrix1: Matrix = new Matrix(5, 4, 10);
let matrix2: Matrix = new Matrix(5, 4, 10);
let matrix3: Matrix;
console.log(matrix1.getMatrix());
console.log(matrix2.getMatrix());
matrix3 = matrix1.add(matrix2);
console.log(matrix3.getMatrix());
let matrix4: Matrix = matrix1.multNumber(10);
console.log(matrix4.getMatrix());
let matrix5: Matrix = matrix1.multSpecial(2);
console.log(matrix5.getMatrix()) */