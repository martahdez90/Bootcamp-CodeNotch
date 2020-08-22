import { VideoGame } from "./videoGame"
const fs = require('fs')

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


export class HobbyGame {
    private videogames: VideoGame[];
    constructor(videogames: VideoGame[]) {
        this.videogames = videogames;
    }
    public getVideogames(): VideoGame[] {
        return this.videogames
    }
    public setVideogames(newgame) {
        this.videogames = newgame;
    }
    public pricePlatform(platform): number {
        let result = 0;
        for (let i = 0; i < this.videogames.length; i++) {
            if (this.videogames[i].platformYes(platform) == true) {
                result += this.videogames[i].getPrice()
            }
        }
        return result;
    }
    public totalPrice(): number {
        let result = 0;
        for (let i = 0; i < this.videogames.length; i++) {
            result += this.videogames[i].getPrice()
        }
        return result;
    }
    public languagesYes(idioma): string {
        let result = "";
        for (let i = 0; i < this.videogames.length; i++) {
            if (this.videogames[i].languageYes(idioma)) {
                result += `${this.videogames[i].getTitle()}, `
            }
        }
        return result;
    }
    public developerMadeGames(person): string {
        let result = "";
        for (let i = 0; i < this.videogames.length; i++) {
            if (this.videogames[i].developerYes(person)) {
                result += `${this.videogames[i].getTitle()}, `
            }
        }
        return result;
    }
    public platformAndLanguage(platform, language): string {
        let result = "";
        for (let i = 0; i < this.videogames.length; i++) {
            if (this.videogames[i].platformYes(platform) && this.videogames[i].languageYes(language)) {
                result += `${this.videogames[i].getTitle()}, `
            }
        }
        return result;
    }
    public goodScore(): string {
        let result = ""
        for (let i = 0; i < this.videogames.length; i++) {
            if (this.videogames[i].getScore() >= Score.cinco) {
                result += `${this.videogames[i].getTitle()}, `
            }
        }
        return result;
    }
    public writeOnJSONFile(nombreFichero: string) {
        let result = ""
        result = JSON.stringify(this.videogames)
        return fs.writeFileSync(nombreFichero, result);
    }
    getInstanceIMDB(nombreFichero: string): HobbyGame {
        let lectura: string = fs.readFileSync(nombreFichero, 'utf8');
        let final: HobbyGame = new HobbyGame(JSON.parse(lectura));
        return final;
    }
}



