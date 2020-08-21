
import { Vector } from "./vector"

var vector1 = new Vector(5, 10);
var vector2 = new Vector(5, 10);

vector1.print();
vector2.print();
console.log((vector1.add(vector2)));
console.log((vector1.subs(vector2)));
console.log((vector1.mult(vector2)));
console.log((vector1.mulNumber(10)));