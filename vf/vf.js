var images = [
	"../photo/img00.png",
	"../photo/img01.png",
	"../photo/img02.png",
	"../photo/img03.png",
	"../photo/img04.png",
	"../photo/img05.png",
	"../photo/img06.png",
	"../photo/img07.png",
	"../photo/img08.png",
	"../photo/img09.png",
	"../photo/img10.png",
	"../photo/img11.png",
	"../photo/img12.png",
	"../photo/img13.png",
	"../photo/img14.png",
	"../photo/img15.png",
	"../photo/img16.png",
	"../photo/img17.png",
	"../photo/img18.png",
	"../photo/img19.png",
	"../photo/img20.png",
	"../photo/img21.png",
	"../photo/img22.png",
	"../photo/img23.png",
	"../photo/img24.png",
	
	]




/* Initialisation de la page*/
	var id = 0;
	document.getElementById("image").setAttribute("src", images[id]) ;

/* Fonctions de navigation */

	function raz() {
		document.getElementById("image").setAttribute("src", images[id]) ;
		console.log(images[id]);

	}
	function precedent() {
		id--;
		raz();
	}

	function suivant() {
		id++;
		raz();
	}

	