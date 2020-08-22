import { Platform } from "./platform";
enum storageD {
    cartucho = "cartucho",
    tarjeta = "tarjeta",
    cd = "CD",
    dvd = "DVD",
    bluray = "Bluray"
}

let platform1: Platform = new Platform("PS2", 2005, "Play Station", 500, 2, false, 300, false, storageD.cartucho, "black")
let platform2: Platform = new Platform("PS3", 2005, "Play Station", 10000, 2, true, 300, true, storageD.cd, "white")
let platform3: Platform = new Platform("PS2", 2005, "Play Station", 500, 2, false, 300, false, storageD.cartucho, "black")

console.log(platform1.esIgual(platform2));
console.log(platform1.esIgual(platform1));
console.log(platform3.getCompany(), platform3.getReleaseYear(), platform3.getStorage())

platform3.setStorageDevice(storageD.bluray)
console.log(platform3.getStorage());
console.log(platform2)
platform3.printValor();


