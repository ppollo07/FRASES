/*
//Author:@ppollo07
//Ariel Porporatto
*/

var App = function(primera,segunda,tercera) {
	this.tipo = "";
	this.timer = "5000";
	var xcont = 0;
	this[1] = primera;
	this[2] = segunda;
	this[3] = tercera;

	this.init = function () {
		div = document.getElementById(this.contenedor);
		setInterval("frases.MostrarFrases()",this.timer);
		this.MostrarFrases();
	},
	this.MostrarFrases = function () {
		if(this.contenedor != ""){
			if (!this.tipo){
				if (xcont < App.length) {
					xcont ++;
					if (this.dato === "img"){
						etiqueta = '<img src="' + this.path + this[xcont] + this.extencion + '" alt="'+this.alt+'" />';
					}
					if (this.dato === "text"){
						console.log(this[xcont])
						etiqueta = '<h1>' + this[xcont] + '</h1>';
					}
					$(div).fadeOut('1000', function() {
							$(div).html(etiqueta);
						}).fadeIn(3000, function() {
							$(div).html(etiqueta);
						});
				};
			} else {
				aleatorio = Math.floor((Math.random()*(App.length))+1);
				if (this.dato === "img"){
					etiqueta = '<img src="' + this.path + this[xcont] + this.extencion + '" alt="'+this.alt+'" />';
				};
				if (this.dato === "text"){
					etiqueta = '<h1>' + this[xcont] + '</h1>';
				};
				$(div).fadeOut('1000', function() {
						$(div).html(etiqueta);
					}).fadeIn(3000, function() {
						$(div).html(etiqueta);
					});
			};
			if (xcont >= App.length){
				xcont = 0;
			};
		}else{
			alert("Faltan datos. / Tipo de dato para mostrar img o text")
		}
	};
}