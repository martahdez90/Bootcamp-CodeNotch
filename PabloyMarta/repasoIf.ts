//repaso if

let tuSigno = (dia: number, mesI: string, anyo: number) => {
    let mes = mesI.toLowerCase();
    if (mes === "diciembre" && dia >= 22 || mes === "enero" && dia <= 20) {
        return ("Eres Capricornio");
    } else if (mes === "enero" && dia >= 21 || mes === "febrero" && dia <= 19) {
        return ("Eres Acuario");
    } else if (mes === "febrero" && dia >= 20 || mes === "marzo" && dia <= 20) {
        return ("Eres Piscis");
    } else if (mes === "marzo" && dia >= 21 || mes === "abril" && dia <= 20) {
        return ("Eres Aries");
    } else if (mes === "abril" && dia >= 21 || mes === "mayo" && dia <= 21) {
        return ("Eres Tauro");
    } else if (mes === "mayo" && dia >= 22 || mes === "junio" && dia <= 21) {
        return ("Eres Geminis");
    } else if (mes === "junio" && dia >= 22 || mes === "julio" && dia <= 23) {
        return ("Eres Cancer");
    } else if (mes === "julio" && dia >= 24 || mes === "agosto" && dia <= 23) {
        return ("Eres Leo");
    } else if (mes === "agosto" && dia >= 24 || mes === "septiembre" && dia <= 23) {
        return ("Eres Virgo");
    } else if (mes === "septiembre" && dia >= 24 || mes === "octubre" && dia <= 23) {
        return ("Eres Libra");
    } else if (mes === "octubre" && dia >= 24 || mes === "noviembre" && dia <= 22) {
        return ("Eres Escorpio");
    } else if (mes === "noviembre" && dia >= 23 || mes === "diciembre" && dia <= 21) {
        return ("Eres Sagitario");
    }
}
tuSigno(28, "Junio", 1969)

let continents = (country: string) => {

    if (country === "China" || country === "Japan" || country === "India") {
        console.log("Asia");
    } else if (country === "UK" || country === "France" || country === "Italy" || country === "Spain" || country === "Ireland") {
        console.log("Europe");
    } else if (country === "USA" || country === "Canada" || country === "Argentina" || country === "Mexico") {
        console.log("America");
    } else if (country === "Moroco" || country === "Egypt" || country === "South Africa" || country === "Madagascar") {
        console.log("Africa");
    } else if (country === "Australia" || country === "New Zeland") {
        console.log("Oceania");
    } else if (country === "Antarctica") {
        console.log("Antarctica");
    } else {
        console.log("Write another country");
    }
};
continents("India");
continents("Italy")
continents("Mexico");
continents("Egypt");
continents("New Zeland");
continents("Culululu")


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

let parImpar = (numero: number): string => {
    if (numero % 2 === 0) {
      return ("par");
    } else {
      return ("impar");
    }
  }
  console.log(parImpar(8));
console.log(parImpar(9))
  
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

let parImpar = (array: number[]) => {
    let condi = true;
    let i = 0;
    while (i < array.length) {
        if (array[i] % 2 == 0 && (condi == true)) {
            console.log("su array tiene un numero par")
            condi = false;
        }
        i++
    }
}

parImpar([3, 4, 6]);

let array1: string[] = ["Casa", "Coche", "Ciudad", "Cesta"];
let array2: string[] = ["Barco", "Baca", "Bicicleta", "Balon", "Bisiesto", "Brasil"];
let array3: string[] = ["Venezuela", "Veneno", "Voltaje"]

let sumaArray = (array: string[]): string => {
    let result: number = 0;
    for (let i = 0; i < array.length; i++) {
        result += array[i].length
    }
    if (result % 2 === 0) {
        return ("par");
    } else {
        return ("impar");
    }
}

console.log(sumaArray(array1));
console.log(sumaArray(array2));
console.log(sumaArray(array3));