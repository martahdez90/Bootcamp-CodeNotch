
import {Mobile} from "./mprivate"

let nokia3210:Mobile = new Mobile("Nokia","Nokia 3210","Si",0,"Gris","No",0,40);
let iPhone3G:Mobile = new Mobile("IPhone","iPhone3G","Si",128,"Negro","No",1,200);
let samsungGalaxy10:Mobile = new Mobile("Samsung","Galaxy 10","Si",256,"Negro","No",4,400);
let telefonos:Mobile[]=[nokia3210,iPhone3G,samsungGalaxy10]
console.log(telefonos)
console.log(nokia3210)
console.log(iPhone3G)
console.log(samsungGalaxy10)
console.log(nokia3210.print())
console.log(iPhone3G.print())
console.log(samsungGalaxy10.print())





