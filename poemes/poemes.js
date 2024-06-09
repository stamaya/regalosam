mots = [
	"",
	"Marseillais",
	"Marteau",
	"Liège",
	"Ministre",
	"Café",
	"",
	"Poubelle",
	"Albert Camus",
	"Trottoir",
	"Pythagore",
	"Balai",
	"",
	"Burger",
	"Jaune",
	"Tesla",
	"Van Gogh",
	"As",
	"",
	"Bière",
	"Basque",
	"Clavier",
	"Ronaldo",
	"Greta",
	"",
	"Nadal",
	"Roue",
	"Carreau",
	"Pénalité",
	"Madrid",
	"",
	"Chanson",
	"Salopette",
	"Risotto",
	"Argentine",
	"Soleil",

]

/* Initialisation de la page*/
	var id = 0;
	var constante = "non"
	// document.getElementById("image").setAttribute("src", images[id]) ;

/* Fonctions de navigation */

let imgVide;
let txtMot;

	function raz() {
		if (mots[id] == "") {
			document.getElementById("image").setAttribute("src", "../photo/changement.png") ;
			document.getElementById("image-text").textContent="";
		}

		else {
			document.getElementById("image").setAttribute("src", "../photo/vide.png") ;
			document.getElementById("image-text").textContent=mots[id];
		}
		// document.getElementById("image").setAttribute("src", images[id]) ;
		// console.log(images[id]);
		// document.getElementById("solution").textContent = "Réponse";
		// document.getElementById("solution").style.fontFamily = "Police1" ;
		// document.getElementById("solution").style.fontSize = "30px" ;
		// document.getElementById("solution").style.paddingBottom = "10px" ;
		// document.getElementById("solution").style.paddingTop = "10px" ;
	}
	function precedent() {
		id--;
		raz();
	}

	function suivant() {
		id++;
		raz();
	}
