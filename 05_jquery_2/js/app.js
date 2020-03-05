// definicion de constantes para el calculo
// gravedad de cada planeta
const GTIE = 9.8;
const GMER = 3.7;
const GVEN = 8.87;
const GMAR = 3.71;

// guardar la referencia de los componentes
let botoncito = $('#btn');
let txtPeso = $('#peso');
let sPlanetas = $('#planetas');
let seleccion = $('#seleccion');
let resultado = $('#resultado');


// Asignacion de evento click al botón
botoncito.click(calcular);


/**
 * Calcula el peso de una persona
 * según el planeta seleccionado
 */
function calcular(){

	let peso = parseInt( txtPeso.val() );
	let opcion = sPlanetas.val();
	let res = 0;

	// comprueba que el valor de la va variable peso sea válida
	// si se cumple la condición se emite un mensaje y se para 
	// la ejecucion de la funcion
	if( isNaN(peso) ) {
		alert("Ingrese su peso");
		return;
	}

	switch(opcion){
		case 'MER':
			res = (peso * GMER) / GTIE;
			seleccion.text("mercurio");
			resultado.text( Math.round(res) );
		break
		case 'VEN':
			res = (peso * GVEN) / GTIE;
			seleccion.text("venus");
			resultado.text(res);
		break
		case 'MAR':
			res = (peso * GMAR) / GTIE;
			seleccion.text("marte");
			resultado.text(res);
		break
		default:
			alert("Seleccione una opción");
		break
	}
}