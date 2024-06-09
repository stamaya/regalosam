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
	"../photo/img25.png",
	"../photo/img26.png",
	"../photo/img27.png",
	"../photo/img28.png",
	"../photo/img29.png",
	"../photo/img30.png",
	"../photo/img31.png",
	"../photo/img32.png",
	"../photo/img33.png",
	"../photo/img34.png",
	"../photo/img35.png",
	"../photo/img36.png",
	]

var reponses = [
	"",
	"",
	"Dario Šarić",
	"Oihan Sancet",
	"Nicolas Batum",
	"Fianso",
	"Anuel AA",
	"",
	"Sefyu",
	"Brock James",
	"Pierre Perret",
	"Donte Di Vincenzo",
	"Rory Kockott",
	"",
	"Roi Baudoin Ier",
	"Beethoven",
	"George Moustaki",
	"Barbara",
	"Mobutu Sese Seko",
	"",
	"Bloom",
	"Ousmane Dembelé",
	"Benoît Magimel",
	"Fred Van Long",
	"Ed Helms",
	"",
	"Sébastien Chabal",
	"Fizz",
	"Iop",
	"Jo Wilson",
	"T.R. Knight",
	"",
	"Raymond Poulidor",
	"Iñaki Urdangarin",
	"Asier Villalibre",
	"Clemente",
	"Juana La Loca"
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