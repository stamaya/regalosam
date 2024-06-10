var images = [
	"img/play.jpg",
	"img/hamon.jpg",
	"img/maxildan.png",
	"img/inoxtag.png",
	"img/jdg.png",
	"img/poissonfecond.png",
	"img/poutou.jpg",
	"img/inoxtag2.png",
	"img/enthoven.png",
	"img/hanouna.png",
	"img/youngthug.png",
	"img/patricebite.png",
	"img/inoxtag3.png"
]

var reponses = [
	"",
	"Benoit Hamon",
	"Maxildan",
	"Inoxtag",
	"Joueur du Grenier",
	"Poisson fécond",
	"Philippe Poutou",
	"Inoxtag",
	"Enthoven le prout",
	"Hanouna",
	"Young thug",
	"patricebite",
	"Inoxtag",
]


/* Initialisation de la page*/
	var id = 0;
	document.getElementById("image").setAttribute("src", images[id]) ;

/* Fonctions de navigation */

	function raz() {
		document.getElementById("image").setAttribute("src", images[id]) ;
		console.log(images[id]);
		document.getElementById("solution").textContent = "Réponse";
		document.getElementById("solution").style.fontFamily = "Police1" ;
		document.getElementById("solution").style.fontSize = "30px" ;
		document.getElementById("solution").style.paddingBottom = "10px" ;
		document.getElementById("solution").style.paddingTop = "10px" ;
	}
	function precedent() {
		id--;
		raz();
	}

	function suivant() {
		id++;
		raz();
	}

	function reponse() {
		document.getElementById("solution").textContent = reponses[id] ;
		document.getElementById("solution").style.fontFamily = "Police1" ;
		document.getElementById("solution").style.paddingBottom = "10px" ;
		document.getElementById("solution").style.paddingTop = "10px" ;

	}