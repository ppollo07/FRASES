/*
//Author:@ppollo07
//Ariel Porporatto
*/

$(document).ready(function() {
	frases = new Frases("Hola","Como","Estas"); /* nombre de las imagenes o frases separadas por , */
	frases.extencion = ""; /* tipo de imagen .png .jpg */
	frases.path = ""; /* ruta de las imagenes */
	frases.alt = ""; /* alt de la imagen */
	frases.tipo = ""; /* default Orden  -  1 Aleatorio */
	frases.dato = "text"; /* img Imagen  -  text Texto */
	frases.timer = "7000"; /* tiempo en milisegundos */
	frases.contenedor = "textos"; /* id div contenedor */
	frases.init();
});