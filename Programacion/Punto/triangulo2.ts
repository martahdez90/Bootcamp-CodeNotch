/* 13.	Crea la clase Triangulo cuyo constructor reciba tres objetos de la clase Punto que son sus vértices.
14.	Tiene que tener como atributos privados los tres vertices
15.	Programa el método calcularLongitudLados() : number[] que debe devolver un array de tres posiciones, cada una de las cuales debe ser la longitud de uno de los lados del triángulo. 
16.	Modificar el fichero main para crear un objeto de la clase triangulo e invocar al método calcularLongitudLados.
17.	Actualizar el GIT con los nuevos desarrollos */

//Importo la clase punto
import {Punto} from "./punto"

//creo la clase triangulo
export class Triangulo{
    // creo los atributos privados
    private punto1:Punto
    private punto2:Punto
    private punto3:Punto
    //creo el constructor que reciba tres objetos de la clase Punto que son sus vértices.
    constructor (punto1: Punto, punto2:Punto , punto3:Punto) {//(-1,2), (3,2) y (3,-2).
        this.punto1 = punto1 //(-1,2)
        this.punto2 = punto2 //(3,2)
        this.punto3 = punto3 //(3,-2)
    }
        // Programo el método calcular LongitudLados() : number[] que debe devolver un array de tres posiciones, cada una de las cuales debe ser la longitud de uno de los lados del triángulo.
        public calcularLongitudLados() : number[]{
            let valores:number[]=[]
            let val1=this.punto1.calcularDistancia(this.punto2)
            let val2=this.punto1.calcularDistancia(this.punto3)
            let val3=this.punto3.calcularDistancia(this.punto2)
            valores.push(val1,val2,val3) 
            
            return valores
        }
    }



let vertice1:Punto = new Punto(-1,2)
let vertice2:Punto = new Punto(3,2)
let vertice3:Punto = new Punto(3,-2)
let largoLados:Triangulo = new Triangulo(vertice1, vertice2, vertice3)
console.log(largoLados.calcularLongitudLados())

console.log(vertice1.getX())
console.log(vertice1.getY())
console.log(vertice2.getX())
console.log(vertice2.getY())
console.log(vertice3.getX())
console.log(vertice3.getY())