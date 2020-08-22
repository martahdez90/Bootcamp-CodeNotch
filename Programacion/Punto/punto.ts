export class Punto {
    //declaración de atributos
    private x: number;
    private y: number;
    //Implementación del método constructor
    constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
    }
    //getter y setter
    public getX(): number {
        return this.x;
    }
    public getY(): number {
        return this.y;
    }
    public setX(newX) {
        this.x = newX;
    }
    public setY(newY) {
        this.y = newY;
    }
    //Implementación de métodos propios
    public toString() {
        return `(${this.x}, ${this.y})`
    }
    public distanciaAlOrigen = () => {
        return parseFloat((Math.sqrt((Math.pow(this.x, 2)) + (Math.pow(this.y, 2)))).toFixed(2));
    }
    public calcularDistancia=(otroPunto:Punto) => {
        let xdif:number=this.x-otroPunto.getX()
        let ydif:number=this.y-otroPunto.getY() 
        return parseFloat((Math.sqrt((Math.pow(xdif, 2)) + (Math.pow(ydif, 2)))).toFixed(2));
    }
    public calcularCuadrante():number {
        let val:number=0
        if(this.x===0 || this.y===0){
            val=0
        }else if(this.x>0 && this.y>0){
            val=1
        }else if(this.x<0 && this.y>0 ){
            val=2
        }else if(this.x<0 && this.y<0 ){
            val=3
        }else{
            val=4
        }
        return val
    }
    /*10.	Programa un método denominado calcularMasCercano(puntos : Punto[]) : Punto 
    que reciba como parámetro un array de objetos de la clase Punto y devuelva una 
    referencia al objeto de dicho array que esté más cercano al punto actual.*/
    public calcularMasCercano(puntos : Punto[]) : Punto {
        //let arrayNumeros:number[]=[]
        let result: Punto;
        let distancia: number = this.calcularDistancia(puntos[0])
        for (let i in puntos) {
            if (this.calcularDistancia(puntos[i]) <= distancia) {
                distancia = this.calcularDistancia(puntos[i])
                result = puntos[i]
            }
 
        }
        return result;
        }
    
}




