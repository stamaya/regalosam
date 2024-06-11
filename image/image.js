var images = [
	"../screen/cap00.jpg",
	"../screen/cap01.jpg",
	"../screen/a.jpg",
	"../screen/b.jpg",
	"../screen/cap02.jpg",
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
	"../screen/cap20.jpg",
	"../screen/cap21.jpg",
	"../screen/cap22.jpg",
	"../screen/cap23.jpg",
	"../screen/cap24.jpg",
	"../screen/cap25.jpg",
	"../screen/cap26.jpg",
	"../screen/the-end.jpeg",
]



/* Initialisation de la page*/
	var id = 0;
	document.getElementById("image").setAttribute("src", images[id]) ;

/* Fonctions de navigation */

	function raz() {
		document.getElementById("image").setAttribute("src", images[id]) ;
		
	}
	function precedent() {
		id--;
		raz();
	}

	function suivant() {
		id++;
		raz();
	}
