/*
//Author:@ppollo07
//Ariel Porporatto
*/

$(document).ready(function() {
	frases = new Frases("frase_1","frase_2","frase_3");
	frases.extencion = ".png";
	frases.path = "imagenes/bg/";
	frases.alt = "";
	frases.tipo = ""; /* default Orden  -  1 Aleatorio */
	frases.dato = "img" /* img Imagen  -  text Texto */
	frases.MostrarFrases();
	setInterval("frases.MostrarFrases()",7000);
});

var xcont = 0;
var Frases = function(primera,segunda,tercera) {
	this[1] = primera;
	this[2] = segunda;
	this[3] = tercera;

	this.MostrarFrases = function () {
		if (!frases.tipo){
			if (xcont < Frases.length) {
				xcont ++;
				if (frases.dato === "img"){
					etiqueta = '<img src="' + frases.path + this[xcont] + frases.extencion + '" alt="'+frases.alt+'" />';
				}
				if (frases.dato === "text"){
					etiqueta = '<h1>' + this[xcont] + '</h1>';
				}
				$('#frases').fadeOut('1000', function() {
						$('#frases').html(etiqueta);
					}).fadeIn(3000, function() {
						$('#frases').html(etiqueta);
					});
				if (xcont >= Frases.length){
					xcont = 0;
				};
			};
		} else {
			aleatorio = Math.floor((Math.random()*(Frases.length))+1);
			if (frases.dato === "img"){
				etiqueta = '<img src="' + frases.path + this[xcont] + frases.extencion + '" alt="'+frases.alt+'" />';
			};
			if (frases.dato === "text"){
				etiqueta = '<h1>' + this[xcont] + '</h1>';
			};
			$('#frases').fadeOut('1000', function() {
					$('#frases').html(etiqueta);
				}).fadeIn(3000, function() {
					$('#frases').html(etiqueta);
				});
		};
	};
}