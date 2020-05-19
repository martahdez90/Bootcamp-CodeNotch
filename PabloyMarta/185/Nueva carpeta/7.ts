/* Realizar un procedimiento que reciba un array de nombres y te devuelva verdadero si y solo si todos los nombres empiezan por M.    */ 
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
console.log(esta(["Maria","Marcos","Miguel"]))