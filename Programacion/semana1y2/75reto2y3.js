var text = "";
var i;
for (i = 1; i < 11; i++) {
    if (i % 2 == 1)
        text += i + ",";
}
console.log(text);

var text = "";
var i;
for (i = 1; i < 11; i++) {
    if (i % 2 == 1 && (i % 3 == 0))
        text += i + ",";
}
console.log(text);

