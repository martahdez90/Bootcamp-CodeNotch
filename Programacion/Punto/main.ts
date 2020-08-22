import { Punto } from "./punto"
import { Triangulo } from "./triangulo2"

let punto1: Punto = new Punto(4, 8)

console.log(punto1)
console.log(punto1.toString())
// distancia al origen
let verticeDist:Punto= new Punto(5,2)
console.log(verticeDist.distanciaAlOrigen())
//Calcular distancia
let verticeA:Punto = new Punto(3,4)
let verticeB:Punto = new Punto(-3,-4)
console.log(verticeA.calcularDistancia(verticeB))
//Calcular cuadrante
let v1:Punto = new Punto(4,0)
let v2:Punto = new Punto(2,3)
let v3:Punto = new Punto(-4,1)
let v4:Punto = new Punto(-6,-2)
let v5:Punto = new Punto(2,-2)
console.log(v1.calcularCuadrante())
console.log(v2.calcularCuadrante())
console.log(v3.calcularCuadrante())
console.log(v4.calcularCuadrante())
console.log(v5.calcularCuadrante())
//Calcular mas cercano
let vCer1:Punto = new Punto(4,0)
let vCer2:Punto = new Punto(2,3)
let vCer3:Punto = new Punto(-4,1)
let arrayPuntos:Punto[] = new Array(vCer1,vCer2,vCer3)
let vCer4:Punto = new Punto(1,1)
console.log(vCer4.calcularMasCercano(arrayPuntos))
console.log((vCer4.calcularMasCercano(arrayPuntos)).toString())
//Calcular distancia lado Triangulo
let vertice1:Punto = new Punto(4,-1)
let vertice2:Punto = new Punto(2,3)
let vertice3:Punto = new Punto(6,-2)
let largoLados:Triangulo = new Triangulo(vertice1, vertice2, vertice3)
console.log(largoLados.calcularLongitudLados())
