var semaforo = function (light) {
  if (light == "red") {
    console.log("You can't cross now. Please wait.")
  } else if (light == "orange") {
    console.log("You may cross but be careful.")
  } else if (light == "green") {
    console.log("You may cross now")
  } else if (light == "black") {
    console.log("The light is broken. Watch out for cars.")
  }
}

console.log(semaforo("green"))
console.log(semaforo("orange"))
console.log(semaforo("red"))
console.log(semaforo("black"))