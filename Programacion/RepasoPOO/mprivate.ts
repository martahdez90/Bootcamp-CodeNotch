
export class Mobile {
    //Declaro los atributos como privados
    private name: string
    private model: string
    private trademark: string
    private sdSize: number
    private color: string
    private is5G: string
    private CameraNumber: number
    private price: number
    //Creo el constructor y le asigno a los atributos los valores pasados por parametro
    constructor(name: string, model: string, trademark: string, sdSize: number, color: string, is5G: string, CameraNumber: number, price: number) {
        this.name = name
        this.model = model
        this.trademark = trademark
        this.sdSize = sdSize
        this.color = color
        this.is5G = is5G
        this.CameraNumber = CameraNumber
        this.price = price
    }
    //Declaro el metodo print
    public print(): string {
        return (`The characteristics of the mobile ${this.name} are: \n Name: ${this.name} \n Model: ${this.model} \n Trademark: ${this.trademark} \n SD Size (GB): ${this.sdSize} \n Color: ${this.color} \n Is 5g?: ${this.is5G} \n Number of Cameras: ${this.CameraNumber} `)
    }
    //Declaro los getters y setters
    public getname(): string {
        return this.name;
    }
    public getmodel(): string {
        return this.model;
    }
    public gettrademark(): string {
        return this.trademark;
    }
    public getsdSize(): number {
        return this.sdSize;
    }
    public getcolor(): string {
        return this.color;
    }
    public getis5G(): string {
        return this.is5G;
    }
    public getCameraNumber(): number {
        return this.CameraNumber;
    }
    public getPrice(): number {
        return this.price;
    }
    public setName(newname) {
        this.name = newname;
    }
    public setModelnew(newmodel) {
        this.model = newmodel;
    }
    public setTrademark(newtrade) {
        this.trademark = newtrade;
    }
    public setsDSiz(newsize) {
        this.sdSize = newsize;
    }
    public setColornew(newColor) {
        this.color = newColor;
    }
    public setIs5G(new5g) {
        this.is5G = new5g;
    }
    public setPrice(newprice) {
        this.price = newprice;
    }
}
