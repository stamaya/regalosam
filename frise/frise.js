var images = [
	"../screen/img00.png",
	"../screen/img01.png",
	"../screen/img02.png",
	"../screen/img03.png",
	"../screen/img04.png",
	"../screen/img05.png",
	"../screen/img06.png",
	"../screen/img07.png",
	"../screen/img08.png",
	"../screen/img09.png",
	"../screen/img10.png",
	"../screen/img11.png",
	"../screen/img12.png",
	"../screen/img13.png",
	"../screen/img14.png",
	"../screen/img15.png",
	"../screen/img16.png",
	"../screen/img17.png",
	"../screen/img18.png",
	"../screen/img19.png",
	"../screen/img20.png",
	"../screen/the-end.jpeg",

	]

var reponses = [
	"",
	"Danemark",
	"Pérou",
	"Palestine",
	"Saint Marin",
	"Vénézuela",
	"Mali",
	"Estonie",
	"Tunisie",
	"Zambie",
	"Arménie",
	"Monaco",
	"Népal",
	"Serbie",
	"Bulgarie",
	"Corée du Sud",
	"Moldavie",
	"Uruguay",
	"Ghana",
	"Kenya",
	"Somalie",
	"",






	
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