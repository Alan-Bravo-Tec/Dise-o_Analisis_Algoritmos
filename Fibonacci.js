var n,a,b,c;
var n = prompt("Introduce hasta que posicion quieres saber: ");
a=1;
b=1;
    for (var i = 1; i < n ; i++) {
        console.log(""+a);
        c=a+b;
        a=b;
        b=c;
    }
