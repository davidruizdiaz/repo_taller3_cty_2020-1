// definicion de variable
var miVariable = 0;

// asignacion de evento al botón
document.getElementById("botoncito").addEventListener("click", function(){
	
	// funcion alert
	alert("Hola javascript");

	// incremento en 1 de la variable
	miVariable++;

	// funcion console, muestra los datos que van entre paréntesis por la consola del navegador
	console.log("mi variable es: " + miVariable);

})