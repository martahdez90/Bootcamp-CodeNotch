var text = "";
var i;
for (i = 1; i < 11; i++) {
    text += i + "\n";
}
console.log(text);

var text = "";
var i = 1;
while (i < 11) {
    text += + i + ",";
    i++;
}
console.log(text);

var text = "";
var i = 1;
do {
    text += + i + ",";
    i++;
} while (i < 11);
console.log(text);

