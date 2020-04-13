
let plantilla = $('.row').html();

$('.row').html('');

$.get('https://davidruizdiaz.github.io/playlist/')
	.done( function(d){
		 carga(d);
	} )
	.fail( function(e){
		console.log(e.statusText);	
	} );


function carga (d) {
	for (let i = 0; i < d.length; i++) {
		let plnt = $(plantilla);

		plnt.find('.titulo').text(d[i].musica);
		plnt.find('.artista').text(d[i].artista);
		plnt.find('.genero').text(d[i].genero);
		plnt.find('.anho').text(d[i].anho);
		
		plnt.find('.portada').attr('src', d[i].portada);
		plnt.find('.audio').attr('src', d[i].audio);

		$('.row').append(plnt);
	}
}