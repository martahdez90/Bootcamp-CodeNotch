enum storageD {
    cartucho = "cartucho",
    tarjeta = "tarjeta",
    cd = "CD",
    dvd = "DVD",
    bluray = "Bluray"
}


export class Platform {
    private name: string;
    private releaseYear: number;
    private company: string;
    private nBits: number;
    private generation: number;
    private hasHD: boolean;
    private hdSize: number;
    private hasInternetConnection: boolean;
    private storageDevice: storageD;
    private color: string;

    constructor(name: string, releaseYear: number, company: string, nBits: number, generation: number, hasHD: boolean, hdSize: number, internet: boolean, storage: storageD, color: string) {
        this.name = name;
        this.releaseYear = releaseYear;
        this.company = company;
        this.nBits = nBits;
        this.generation = generation;
        this.hasHD = hasHD;
        this.hdSize = hdSize;
        this.hasInternetConnection = internet;
        this.storageDevice = storage;
        this.color = color;
    }
    public getName(): string {
        return this.name
    }
    public getReleaseYear(): number {
        return this.releaseYear
    }
    public getCompany(): string {
        return this.company
    }
    public getnBits(): number {
        return this.nBits
    }
    public getGeneration(): number {
        return this.generation
    }
    public getHasHD(): boolean {
        return this.hasHD
    }
    public getHdSize(): number {
        return this.hdSize
    }
    public getInternet(): boolean {
        return this.hasInternetConnection
    }
    public getStorage(): storageD {
        return this.storageDevice
    }
    public getcolor(): string {
        return this.color
    }
    public setName(newName) {
        this.name = newName
    }
    public setReleaseYear(newYear) {
        this.releaseYear = newYear
    }
    public setCompany(newCompany) {
        this.company = newCompany
    }
    public setNbits(newNbits) {
        this.nBits = newNbits
    }
    public setGeneration(newGeneration) {
        this.generation = newGeneration
    }
    public setHasHD(newHasHD) {
        this.hasHD = newHasHD
    }
    public setHdSize(newSize) {
        this.hdSize = newSize
    }
    public setHasinternetConnection(newInternetc) {
        this.hasInternetConnection = newInternetc
    }
    public setStorageDevice(newDevice) {
        this.storageDevice = newDevice
    }
    public setColor(newcolor) {
        this.color = newcolor
    }
    public esIgual(plataforma): boolean {
        return (this.name === plataforma.name && this.releaseYear === plataforma.releaseYear && this.company === plataforma.company && this.nBits === plataforma.nBits && this.generation === plataforma.generation && this.hasHD === plataforma.hasHD && this.hdSize === plataforma.hdSize && this.hasInternetConnection === plataforma.hasInternetConnection && this.storageDevice === plataforma.storageDevice && this.color === plataforma.color)
    }
    public printValor() {
        console.log(`name: ${this.name} \n release year: ${this.releaseYear} \n company: ${this.company} \n nbits: ${this.nBits} \n generation: ${this.generation} \n nBits: ${this.hasHD} \n hd size: ${this.hdSize} \n internet connection: ${this.hasInternetConnection}\n storage device: ${this.storageDevice} \n color: ${this.color}`)
    }
    public printString() {
        return (`name: ${this.name} \n release year: ${this.releaseYear} \n company: ${this.company} \n nbits: ${this.nBits} \n generation: ${this.generation} \n nBits: ${this.hasHD} \n hd size: ${this.hdSize} \n internet connection: ${this.hasInternetConnection}\n storage device: ${this.storageDevice} \n color: ${this.color}`)
    }
}