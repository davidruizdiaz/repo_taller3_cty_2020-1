

// comentario de linea
/* comentario
de 
bloque */

// ESTRUCTURA CONDICIONAL ( if else )
// Determinar si un valor es par o no
let numero = parseInt(prompt("Ingrese el número cabron"));
if( numero%2 === 0 ){
	alert("El numero: " + numero + " es par");	
} else {
	alert("El numero: " + numero + " NO es par");
}

// ejercicio 1 - el mayo
// 1. pedir 2 numeros
// 2. asignar los numeros a variables
// 3. comparar cual es mayor
// 4. mostrar el mayor


// Bucle for 

for(let x = 0 ; x<=100 ; x++){
	console.log("x = " + x);
}

// funciones
// 
function promedio(a, b, c){
	return (a+b+c)/3
}


console.log( promedio(2,5,10));