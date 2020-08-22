import {VideoGame} from "./videoGame"
import { Person } from "./person"
import { Platform } from "./platform";

enum Score {
    cero = 0,
    uno = 1,
    dos = 2,
    tres = 3,
    cuatro = 4,
    cinco = 5,
    seis = 6,
    siete = 7,
    ocho = 8,
    nueve = 9,
    diez = 10
}
enum profesiones {
    developer = "developer",
    tester = "tester",
    manager = "manager",
    director = "director"
}
enum storageD {
    cartucho = "cartucho",
    tarjeta = "tarjeta",
    cd = "CD",
    dvd = "DVD",
    bluray = "Bluray"
}


//Persondas
let persona1: Person = new Person("Marcos", "Spanish", profesiones.developer, 8)
let persona3: Person = new Person("Ana", "Spanish", profesiones.developer, 6)
let persona2: Person = new Person("Paula", "French", profesiones.director, 2)
let persona4: Person = new Person("Susana", "Argentina", profesiones.developer, 2)

//Plataformas
let ps2: Platform = new Platform("PS2", 2005, "Play Station", 500, 2, false, 300, false, storageD.cartucho, "black")
let ps3: Platform = new Platform("PS3", 2005, "Play Station", 10000, 2, true, 300, true, storageD.cd, "white")
let xbox1: Platform = new Platform("Xbox One", 2005, "Microsoft", 500, 2, false, 300, false, storageD.cartucho, "black")
let xbox360: Platform = new Platform("Xbox 360", 2000, "Microsoft", 300, 1, false, 200, false, storageD.cd, "red")


//Videojuegos
let videogame1: VideoGame = new VideoGame("GTA-7", 2015, [persona1, persona3], "british", persona2, ["english", "spanish", "french"], [ps2, ps3, xbox1], 300, Score.cuatro)
let videogame2: VideoGame = new VideoGame("Pokemon", 2015, [persona1, persona4], "british", persona2, ["english", "spanish", "german"], [ps2, ps3, xbox1], 200, Score.ocho)


console.log(videogame1.platformYes(ps3));
console.log(videogame1.platformYes(xbox360));
console.log(videogame1.developerYes(persona2));
console.log(videogame1.developerYes(persona3));
console.log(videogame1.languageYes("spanish"));
console.log(videogame1.languageYes("german"));


videogame1.setPrice(800)

console.log(videogame1.getPrice());

console.log(videogame2.getDirector().printstring())

videogame1.printGame()

console.log(videogame2.printString())

