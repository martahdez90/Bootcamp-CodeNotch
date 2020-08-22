//Crear array de moviles
import {Mobile} from "./mprivate"
import { MobileLibrary } from "./mlPrivate"

let nokia3210: Mobile = new Mobile("Nokia", "Nokia 3210", "Si", 0, "Gris", "No", 0, 40);
let iPhone3G: Mobile = new Mobile("IPhone", "iPhone3G", "Si", 128, "Negro", "No", 1, 200);
let samsungGalaxy10: Mobile = new Mobile("Samsung", "Galaxy 10", "Si", 256, "Negro", "No", 4, 400);
let XiaomiMi7: Mobile = new Mobile("Xiaomi", "Mi 7", "Si", 180, "Blanco", "No", 2, 200);
let arrayMobil: Mobile[] = [nokia3210, iPhone3G, samsungGalaxy10, XiaomiMi7]
let arrayLibrary: MobileLibrary = new MobileLibrary("Moviles", "Madrid", arrayMobil)

console.log(arrayLibrary.getName());
console.log(arrayLibrary.getLocation());
console.log(arrayLibrary.getMobiles());
console.log(arrayLibrary.getTotalPrice());
