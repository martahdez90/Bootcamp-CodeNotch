/* RETO 2: Realizar un sistema condicional que dado un
importe neto de un producto calcule su importe bruto.
Para ello hay que tener en cuenta lo siguiente:
- Si el producto ha sido comprado en España:
- Si el precio es mayor o igual a 2000 € se le aplica
un 16%.
- Si el precio es menor se le aplica el 10%.
- Si el producto se ha traído de fuera:
- A los impuestos arriba descritos hay que añadirle
un 10% de aduanas.
 */

var producto1 = {
    "origen": true,
    "precio": 2050,
}
var producto2 = {
    "origen": true,
    "precio": 1050,
}
var producto3 = {
    "origen": false,
    "precio": 2050,
}
var producto4 = {
    "origen": false,
    "precio": 1050,
}

var array_pr = [producto1, producto2, producto3, producto4];

console.log(array_pr);

var i;
for (i = 0; i < array_pr.length; i++) {
    if (array_pr[i].origen == true && (array_pr[i].precio >= 2000)) {
        iva = (0.16 * array_pr[i].precio)
        console.log(array_pr[i].precio + iva);
    } else if (array_pr[i].origen == true && (array_pr[i].precio < 2000)) {
        let iva = (0.10 * array_pr[i].precio)
        console.log(array_pr[i].precio + iva);
    } else if (array_pr[i].origen == false && (array_pr[i].precio >= 2000)) {
        let iva = (0.26 * array_pr[i].precio)
        console.log(array_pr[i].precio + iva);
    } else if (array_pr[i].origen == false && (array_pr[i].precio < 2000)) {
        let iva = (0.20 * array_pr[i].precio)
        console.log(array_pr[i].precio + iva);
    }
}