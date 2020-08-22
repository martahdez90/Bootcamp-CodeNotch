
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

export class VideoGame {
    private title: string;
    private releaseYear: number;
    private developers: Person[]
    private nationality: string;
    private director: Person;
    private languages: string[];
    private platforms: Platform[];
    private price: number;
    private score: Score;

    constructor(title: string, releaseYear: number, developers: Person[], nationality: string, director: Person, languages: string[], platforms: Platform[], price: number, score: Score) {
        this.title = title
        this.releaseYear = releaseYear;
        this.developers = developers;
        this.nationality = nationality;
        this.director = director;
        this.languages = languages;
        this.platforms = platforms;
        this.price = price;
        this.score = score;
    }
    public getTitle(): string {
        return this.title
    }
    public getReleaseYear(): number {
        return this.releaseYear
    }
    public getDevelopers(): Person[] {
        return this.developers
    }
    public getNationality(): string {
        return this.nationality
    }
    public getDirector(): Person {
        return this.director
    }
    public getLanguages(): string[] {
        return this.languages
    }
    public getPlatforms(): Platform[] {
        return this.platforms
    }
    public getPrice(): number {
        return this.price
    }
    public getScore(): Score {
        return this.score
    }
    public setTitle(newVar) {
        this.title = newVar
    }
    public setReleaseYear(newVar) {
        this.releaseYear = newVar
    }
    public setDevelopers(newVar) {
        this.developers = newVar
    }
    public setNationality(newVar) {
        this.nationality = newVar
    }
    public setDirector(newVar) {
        this.director = newVar
    }
    public setLanguages(newVar) {
        this.languages = newVar
    }
    public setPlatforms(newVar) {
        this.platforms = newVar
    }
    public setPrice(newVar) {
        this.price = newVar
    }
    public setScore(newVar) {
        this.score = newVar
    }
    public platformYes(platform): boolean {
        let i = 0;
        let uno = true
        let result = false
        while (i < this.platforms.length) {
            if (this.platforms[i].esIgual(platform) && uno == true) {
                uno = false
                result = true
            }
            i++
        }
        return result
    }
    public developerYes(person): boolean {
        let i = 0;
        let uno = 5
        let result = false
        while (i < this.developers.length && uno === 5) {
            if (this.developers[i].esIgual(person)) {
                uno = 3
                result = true
            }
            i++
        }
        return result
    }
    public languageYes(language): boolean {
        let i = 0;
        let uno = 5
        let result = false
        while (i < this.languages.length && uno === 5) {
            if (this.languages[i] === language) {
                uno = 3
                result = true
            }
            i++
        }
        return result
    }
    public printGame() {
        function developerPrint(developers: Person[]): string {
            let result = ""
            for (let i = 0; i < developers.length; i++) {
                result += `${developers[i].printstring()} \n`
            }
            return result;
        }
        function platformPrint(developers: Platform[]): string {
            let result = ""
            for (let i = 0; i < developers.length; i++) {
                result += `${developers[i].printString()} \n`
            }
            return result;
        }
        console.log(`title: ${this.title}, \n releaseYear:  ${this.releaseYear}, \n developers:  ${developerPrint(this.developers)}, \n nationality:  ${this.nationality}, \n director: \n ${this.director.printstring()}, \n  languages:  ${this.languages} \n platforms:  ${platformPrint(this.platforms)}, \n price:  ${this.price}, \n score:  ${this.score} \n`);

    }
    public printString() {
        function developerPrint(developers: Person[]): string {
            let result = ""
            for (let i = 0; i < developers.length; i++) {
                result += `${developers[i].printstring()} \n`
            }
            return result;
        }
        function platformPrint(developers: Platform[]): string {
            let result = ""
            for (let i = 0; i < developers.length; i++) {
                result += `${developers[i].printString()} \n`
            }
            return result;
        }
        return (`title: ${this.title}, \n releaseYear:  ${this.releaseYear}, \n developers:  ${developerPrint(this.developers)}, \n nationality:  ${this.nationality}, \n director: \n ${this.director.printstring()}, \n  languages:  ${this.languages} \n platforms:  ${platformPrint(this.platforms)}, \n price:  ${this.price}, \n score:  ${this.score} \n`);
    }
}




