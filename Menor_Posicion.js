let numeros = [];
var pos=0;
var min=0;
var n = prompt("Introduce el tamaño del arreglo: ");
    for (var i = 0; i < n-1 ; i++) {
        numeros[i] = prompt("Introduce un numero: ");
    }
min=0;

    for(i=1;i<numeros.length;i++){  
    if(numeros[i]<min){   
       (min=numeros[i])  
    }
    pos++;
    }
console.log("El numero más pequeño es: "+min+" Su posicion es: "+pos);