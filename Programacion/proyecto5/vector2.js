console.clear();
exportclass;
Vector;
{
    elements: number[];
    //public nombre: string;
    //Implementación del método constructor
    constructor(n, number, k, number);
    {
        var i = void 0;
        this.elements = new Array;
        for (i = 0; i < n; i++) {
            this.elements[i] = Math.floor(Math.random() * (k - 0) + 1);
        }
        // this.nombre = nombre;  
    }
    getVector();
    number[];
    {
        return this.elements;
    }
    print();
    {
        console.log(this.elements);
    }
    add(v2, Vector);
    Vector;
    {
        var i = void 0;
        var elementv1 = this.getVector();
        var elementv2 = v2.getVector();
        var result = new Vector(this.elements.length, -1);
        var elementresult = result.getVector();
        for (i = 0; i < this.elements.length; i++) {
            elementresult[i] += elementv1[i] + elementv2[i];
        }
        return result;
    }
    subs(v2, Vector);
    Vector;
    {
        var i = void 0;
        var elementv1 = this.getVector();
        var elementv2 = v2.getVector();
        var result = new Vector(this.elements.length, -1);
        var elementresult = result.getVector();
        for (i = 0; i < this.elements.length; i++) {
            elementresult[i] += elementv1[i] - elementv2[i];
        }
        return result;
    }
    mult(v2, Vector);
    Vector;
    {
        var i = void 0;
        var elementv1 = this.getVector();
        var elementv2 = v2.getVector();
        var result = new Vector(this.elements.length, -1);
        var elementresult = result.getVector();
        for (i = 0; i < this.elements.length; i++) {
            elementresult[i] += elementv1[i] * elementv2[i];
        }
        return result;
    }
    mulNumber(n, number);
    Vector;
    {
        var i = void 0;
        var elementv1 = this.getVector();
        var result = new Vector(this.elements.length, -1);
        var elementresult = result.getVector();
        for (i = 0; i < this.elements.length; i++) {
            elementresult[i] += elementv1[i] * n;
        }
        return result;
    }
}
var vector1 = new Vector(5, 10);
var vector2 = new Vector(5, 10);
vector1.print();
vector2.print();
console.log((vector1.add(vector2)));
console.log((vector1.subs(vector2)));
console.log((vector1.mult(vector2)));
console.log((vector1.mulNumber(10)));
/* let arrayadd: number[] = (vector1.add(vector2)).getVector();
console.log(arrayadd);
let arraysubs: number[] = (vector1.add(vector2)).getVector();
console.log(arraysubs);
let arraymult: number[] = (vector1.add(vector2)).getVector();
console.log(arraymult); */
