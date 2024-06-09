var images = [
	"img/rules.png",
	"img/q0.png",
	"img/r0.png",
	"img/q1.png",
	"img/r1.png",
	"img/q2.png",
	"img/r2.png",
	"img/q3.png",
	"img/r3.png",
	"img/q4.png",
	"img/r4.png",
	"img/q5.png",
	"img/r5.png",
	"img/q6.png",
	"img/r6.png",
	"img/q7.png",
	"img/r7.png",
	"img/q8.png",
	"img/r8.png",
	"img/q9.png",
	"img/r9.png",
	"img/q10.png",
	"img/r10.png",
	"img/q11.png",
	"img/r11.png",
	"img/q12.png",
	"img/r12.png",
	"img/q13.png",
	"img/r13.png",
	"img/q14.png",
	"img/r14.png",
	"img/q15.png",
	"img/r15.png",
	"img/q16.png",
	"img/r16.png",
	"img/q17.png",
	"img/r17.png",
]

var reponses = [
	"",
	"",
	"Arménie",
	"",
	"République centrafricaine",
	"",
	"Colombie",
	"",
	"Trinité-et-Tobago",
	"",
	"Honduras",
	"",
	"Oman",
	"",
	"Jordanie",
	"",
	"Sénégal",
	"",
	"Iraq",
	"",
	"Irlande",
	"",
	"Mongolie",
	"",
	"Estonie",
	"",
	"Inde",
	"",
	"Suriname",
	"",
	"Dominique",
	"",
	"Chypre",
	"",
	"Ukraine",
	"",
	"Île Maurice"
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