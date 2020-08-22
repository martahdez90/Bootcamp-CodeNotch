
import {Mobile} from "./mprivate"

export class MobileLibrary {
    //declaro los atributos como privados
    private name: string;
    private location: string;
    private mobiles: Mobile[]
    private totalPrice: number;
    //Creo el constructor y le asigno a los atributos los valores pasados por parametro
    constructor(name: string, location: string, mobiles: Mobile[]) {
        this.name = name
        this.location = location
        this.mobiles = mobiles
        this.totalPrice = this.totalPriceCalculation()
    }
   //Declaro los Getters y los Setters
    public getName(): string {
        return this.name
    }
    public getLocation(): string {
        return this.location
    }
    public getMobiles(): Mobile[] {
        return this.mobiles
    }
    public getTotalPrice(): number {
        return this.totalPrice
    }  
    public setName(newName){
        this.name = newName;
    }
    public setLocation(newLocation) {
        this.location = newLocation;
    }
    public setMobile(newMobile) {
        this.mobiles = newMobile
    }
    public setTotalPrice(newTotalPrice){
        this.totalPrice = newTotalPrice;
    }
    //Creo la funcion totalPriceCalculation
    private totalPriceCalculation():number{
        let total:number=0
        for (let i in this.mobiles){
            total+=this.mobiles[i].getPrice()
        }
        return total
    }
    public printLibrary(): string {
        let result: string = (`This is all my mobiles: \n`)
        let resultfinal: string = ""
        for (let i = 0; i < this.mobiles.length; i++) {
            result += (`${this.mobiles[i].print()} \n`)
        }
        resultfinal = `${result} Price Overall: ${this.totalPrice}`
        return resultfinal;
    }
}





