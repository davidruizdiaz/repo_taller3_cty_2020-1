
// selecciona de todos los elementos li
// y les asigna un evento click
$("li").click( function(){
	
	// selecciona el elemento al que se le hizo click
	// recupera su texto y lo asigna a la variable
	let texto = $(this).text();

	// selecciona el h3 y le asigna el texto que
	// fue guardado en la variable
	$('h3').text(texto);
	
} );