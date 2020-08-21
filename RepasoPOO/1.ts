/* Realizar una función que dada una fecha de nacimiento te devuelva el signo zodiacal */ 
//Creo la función y le paso los parametros
let dia:number
let mesI:string
let mes:string
let anyo:number
let tuSigno = (dia, mesI, anyo)=>{
    let mes=mesI.toLowerCase();
    if (mes==="diciembre" && dia>=22 || mes==="enero" && dia<=20) {
        console.log("Eres Capricornio");
    }else if (mes==="enero" && dia>=21 || mes==="febrero" && dia<=19){
        console.log("Eres Acuario");
    }else if (mes==="febrero" && dia>=20 || mes==="marzo" && dia<=20){
        console.log("Eres Piscis");
    }else if (mes==="marzo" && dia>=21 || mes==="abril" && dia<=20){
        console.log("Eres Aries");
    }else if(mes==="abril" && dia>=21 || mes==="mayo" && dia<=21){
        console.log("Eres Tauro");
    }else if(mes==="mayo" && dia>=22 || mes==="junio" && dia<=21){
        console.log("Eres Geminis");
    }else if(mes==="junio" && dia>=22 || mes==="julio" && dia<=23){
        console.log("Eres Cancer");
    }else if(mes==="julio" && dia>=24 || mes==="agosto" && dia<=23){
        console.log("Eres Leo");
    }else if(mes==="agosto" && dia>=24 || mes==="septiembre" && dia<=23){
        console.log("Eres Virgo");
    }else if(mes==="septiembre" && dia>=24 || mes==="octubre" && dia<=23){
        console.log("Eres Libra");
    }else if(mes==="octubre" && dia>=24 || mes==="noviembre" && dia<=22){
        console.log("Eres Escorpio");
    }else if(mes==="noviembre" && dia>=23 || mes==="diciembre" && dia<=21){
        console.log("Eres Sagitario");
    }
}
tuSigno(28, "Junio", 1969)