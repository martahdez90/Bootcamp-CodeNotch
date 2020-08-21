/*var ranking = function (x) {
  switch (true) {
    case (x > 120):
      console.log("Tu equipo es el campeón de liga");
      break;
    case (x >= 100):
      console.log("Tu equipo va a la Champions");
      break;
    case (x < 100 && x > 80):
      console.log("Tu equipo va a la UEFA");
      break;
    case (x <= 80 && x > 30):
      console.log("Tu equipo permanece");
      break;
    case (x <= 30 && x >= 0):
      console.log("Tu equipo desciende a segunda");
      break;
    default:
      console.log("Revisa los datos");
  }
}

console.log(ranking(122));
console.log(ranking(110));
console.log(ranking(90));
console.log(ranking(50));
console.log(ranking(20));
console.log(ranking("chachipiruli"));*/

// Aquí la primera versión sin agrupar en intervalos 

var ranking = function (position) {

  switch (position) {
    case 100:
      console.log("Tu equipo es el campeón de liga");
      break;
    case 90:
      console.log("Tu equipo va a la Champions");
      break;
    case 80:
      console.log("Tu equipo va a la UEFA");
      break;
    case 70:
      console.log("Tu equipo permanece");
      break;
    case 20:
      console.log("Tu equipo desciende a segunda");
      break;
    default:
      console.log("Revisa los datos");
  }
}

console.log(ranking(100));
console.log(ranking(90));
console.log(ranking(80));
console.log(ranking(70));
console.log(ranking(20));
console.log(ranking("chachipiruli"));