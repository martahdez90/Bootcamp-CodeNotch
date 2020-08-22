import { Professional } from "./professional"

//Crear una clase que se llame Movie con los siguientes atributos públicos
export class Movie {
    public title: string
    public releaseYear: number
    public actors: Professional[]
    public nacionality: string
    public director: Professional
    public writer: Professional
    public language: string
    public plataform: string
    public isMCU: string
    public mainCharacterName: string
    public producer: string
    public distributor: string
    public genre: string
    //creo el constructor
    constructor(title: string, releaseYear: number, nacionality: string, genre: string) {
        this.title = title
        this.releaseYear = releaseYear
        this.nacionality = nacionality
        this.genre = genre
    }
}


