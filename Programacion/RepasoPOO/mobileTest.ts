
import {Mobile} from "./mobile"

let nokia3210:Mobile = new Mobile("Nokia","Nokia 3210","Si",0,"Gris","No",0,40);
let iPhone3G:Mobile = new Mobile("IPhone","iPhone3G","Si",128,"Negro","No",1,200);
let samsungGalaxy10:Mobile = new Mobile("Samsung","Galaxy 10","Si",256,"Negro","No",4,400);
console.log(nokia3210)
console.log(iPhone3G)
console.log(samsungGalaxy10)
nokia3210.is5G="Si";
nokia3210.CameraNumber=4
console.log(nokia3210)
console.log(iPhone3G)
console.log(samsungGalaxy10)
