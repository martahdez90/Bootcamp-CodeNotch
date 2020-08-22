
    enum profesiones {
        developer = "developer",
        tester = "tester",
        manager = "manager",
        director = "director"
    }
   
export class Person {
    private name: string;
    private nationality: string;
    private profession: profesiones;
    private experienceYears: number;

    constructor(name: string, nationality: string, profession: profesiones, experienceYears: number) {
        this.name = name;
        this.nationality = nationality;
        this.profession = profession;
        this.experienceYears = experienceYears;
    }

    public getName(): string {
        return this.name
    }
    public getNationality(): string {
        return this.nationality
    }
    public getProfession(): profesiones {
        return this.profession
    }
    public getExperience() {
        return this.experienceYears
    }
    public setName(newName) {
        this.name = newName
    }
    public setNationality(newNationality) {
        this.name = newNationality
    }
    public setProfession(newProfession) {
        this.name = newProfession
    }
    public setExperienceYears(newExperienceYears) {
        this.name = newExperienceYears
    }
    public esIgual(persona): boolean {
        return (this.name === persona.name && this.nationality === persona.nationality && this.profession === persona.profession && this.experienceYears === persona.experienceYears)
    }
    public printValor() {
        console.log(`name: ${this.name} \n nationality: ${this.nationality} \n profession: ${this.profession} \n experiencia: ${this.experienceYears}`)
    }
    public printstring() {
        return (`name: ${this.name} \n nationality: ${this.nationality} \n profession: ${this.profession} \n experiencia: ${this.experienceYears}`)
    }
}



