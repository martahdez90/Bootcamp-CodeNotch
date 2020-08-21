/* Realizar una función que reciba como parámetro un array de strings que contenga colores
 y te imprima en cada caso si el color está en el arcoíris o no.   */ 
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
esta(["turquesa","negro", "rojo", "verde" ])