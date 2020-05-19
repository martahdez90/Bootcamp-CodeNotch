var parImpar = function (array) {
    var condi = true;
    var i = 0;
    while (i < array.length) {
        if (array[i] % 2 == 0 && (condi == true)) {
            console.log("su array tiene un numero par");
            condi = false;
        }
        i++;
    }
};
parImpar([3, 4, 6]);
