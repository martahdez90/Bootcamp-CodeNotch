
export class Vector {
    //declaración de atributos
    private elements: number[]
    //public nombre: string;
    //Implementación del método constructor
    constructor(n: number, k: number) {
        let i: number;
        this.elements = new Array;
        for (i = 0; i < n; i++) {
            this.elements[i] = Math.floor(Math.random() * (k - 0) + 1);
        }
        // this.nombre = nombre;  
    }
    //Implementación de métodos propios
    //Imprime por consola el vector
    public print() {
        console.log(this.elements)
    }
    // suma de elements con v1
    public add(v2: Vector): Vector {
        let i;
        let elementv1 = this.elements;
        let elementv2 = v2.elements;
        let result: Vector = new Vector(this.elements.length, -1);
        let elementresult = result.elements;
        for (i = 0; i < this.elements.length; i++) {
            elementresult[i] += elementv1[i] + elementv2[i];
        }
        return result;
    }
    //resta de elements con v2
    public subs(v2: Vector): Vector {
        let i;
        let elementv1 = this.elements;
        let elementv2 = v2.elements
        let result: Vector = new Vector(this.elements.length, -1);
        let elementresult = result.elements;
        for (i = 0; i < this.elements.length; i++) {
            elementresult[i] += elementv1[i] - elementv2[i];
        }
        return result;
    }
    //multiplicacion de elements con v2
    public mult(v2: Vector): Vector {
        let i;
        let elementv1 = this.elements;
        let elementv2 = v2.elements
        let result: Vector = new Vector(this.elements.length, -1);
        let elementresult = result.elements;
        for (i = 0; i < this.elements.length; i++) {
            elementresult[i] += elementv1[i] * elementv2[i];
        }
        return result;
    }

    //multiplicación de elements por n
    public mulNumber(n: number): Vector {
        let i;
        let elementv1 = this.elements;
        let result: Vector = new Vector(this.elements.length, -1);
        let elementresult = result.elements;
        for (i = 0; i < this.elements.length; i++) {
            elementresult[i] += elementv1[i] * n;
        }
        return result;
    }
}
let vector1: Vector = new Vector(5, 10);
let vector2: Vector = new Vector(5, 10);


/* vector1.print();
vector2.print();
console.log((vector1.add(vector2)));
console.log((vector1.subs(vector2)));
console.log((vector1.mult(vector2)));
console.log((vector1.mulNumber(10))); */


/* let arrayadd: number[] = (vector1.add(vector2)).getVector();
console.log(arrayadd);
let arraysubs: number[] = (vector1.add(vector2)).getVector();
console.log(arraysubs);
let arraymult: number[] = (vector1.add(vector2)).getVector();
console.log(arraymult); */





