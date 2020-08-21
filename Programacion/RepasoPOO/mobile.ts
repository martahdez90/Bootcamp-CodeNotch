
export class Mobile{
    //Declaro los atributos como privados
    public name: string
    public model: string
    public trademark: string
    public sdSize: number
    public color: string
    public is5G: string
    public CameraNumber: number
    public price: number
    //Creo el constructor y le asigno a los atributos los valores pasados por parametro
    constructor(name: string, model: string, trademark: string, sdSize: number, color: string, is5G: string, CameraNumber: number, price: number ){
    this.name=name
    this.model=model
    this.trademark=trademark
    this.sdSize=sdSize
    this.color=color
    this.is5G=is5G
    this.CameraNumber=CameraNumber
    this.price=price
    }

}

