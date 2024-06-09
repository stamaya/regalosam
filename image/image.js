var images = [
	"../screen/cap00.jpg",
	"../screen/cap01.jpg",
	"../screen/cap02.jpg",
	"../screen/cap03.jpg",
	"../screen/cap04.jpg",
	"../screen/cap05.jpg",
	"../screen/cap06.jpg",
	"../screen/cap07.jpg",
	"../screen/cap08.jpg",
	"../screen/cap09.jpg",
	"../screen/cap10.jpg",
	"../screen/cap11.jpg",
	"../screen/cap12.jpg",
	"../screen/cap13.jpg",
	"../screen/cap14.jpg",
	"../screen/cap15.jpg",
	"../screen/cap16.jpg",
	"../screen/cap17.jpg",
	"../screen/cap18.jpg",
	"../screen/cap19.jpg",
]

var reponses = [
	"Rouge",
	"Bleu",
	"Vert",
	"Jaune",
	"Violet",
	"Baseball",
	"Bowling",
	"Equitation",
	"Cricket",
	"Triple saut",
	"Monopoly",
	"Cluedo",
	"Bonne paye",
	"Tarot",
	"Seven wonders",
	"London",
	"Sydney",
	"Philadelphie",
	"Atlanta",
	"Villeneuve d'Ascq"
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