
// selecciona de todos los elementos que tengan la
// clase hot y les asigna un evento click
$(".hot").click(function(){
	//console.log("Funciona el clic");
	
	// selecciona el elemento al que se le hizo click
	// recupera su texto y lo asigna a la variable
	let texto = $(this).text();

	// selecciona el h3 y le asigna el texto que
	// fue guardado en la variable
	$('h3').text(texto);
	
});