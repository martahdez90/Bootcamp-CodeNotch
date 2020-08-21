/* Realizar una función que imprima los números impares existentes hasta el número indicado como parámetro de entrada.  */ 
let numero:number
let i:number
let numeroImpar = (numero) => {
    for (i=1 ;i<=numero;i+=2){
        console.log(i)
    }
}
console.log(numeroImpar(10))