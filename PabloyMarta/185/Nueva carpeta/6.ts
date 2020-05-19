// 6.	Realizar una función que te devuelva si existe un numero par en el array de números que introduces como parámetro de entrada.
let parImpar = (numero: number): string => {
  if (numero % 2 === 0) {
    return ("par");
  } else {
    return ("impar");
  }
}
console.log(parImpar(8));
console.log(parImpar(9))