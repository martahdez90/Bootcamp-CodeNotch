let numero:number
let i:number
let numeroImpar = (numero) => {
    for (i=1 ;i<=numero;i+=2){
        console.log(i)
    }
}
console.log(numeroImpar(10))

let colores:string[]
let i:number
let esta = (colores) => {
    for (let i=0; i< colores.length;i++){
    if(colores[i] === "rojo" || colores[i] === "naranja" || colores[i] === "amarillo" 
    ||colores[i] === "verde" || colores[i] === "azul" || colores[i] ==="indigo" || colores[i] ==="violeta"){
        console.log("El color "+colores[i]+" está en el arcoiris")
    }else{
        console.log("El color "+colores[i]+" no está en el arcoiris")
    }
}
}
esta(["turquesa", "negro", "rojo", "verde"])

let nombres:string[]
let i:number
let emes:number
let esta = (nombre) => {
    emes=0
    let total=nombre.length
    for (let i=0;i<nombre.length; i++){
        if(nombre[i].indexOf("M")===0){
            emes++
        } 
    }
    if(emes===total){
        return(true)
    }
    return(false)
    
}
console.log(esta(["Maria", "Marcos", "Miguel"]))

let array1: string[] = ["Casa", "Coche", "Ciudad", "Cesta"]

let sumaArray = (array: string[]): number => {
    let result: number = 0;
    for (let i = 0; i < array.length; i++) {
        result += array[i].length
    }
    return result;
}

console.log(sumaArray(array1));