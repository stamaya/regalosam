var i = 100;
var bonneslettres = 'guitarefolkbsdpnq';
var compteur = 0


function Lancer_musique(id) {
	i = id
	document.getElementById("reponse").textContent="RÉPONSE";
	document.getElementById("enonce").textContent=regles[id];
	lettre = document.getElementById(i).textContent.toLowerCase();
	document.getElementById("audio").setAttribute("src",sons[i])
}


function bonne_reponse()
{
	document.getElementById(i).style.color = "white";
	document.getElementById(i).style.backgroundColor = "#C1E1C1";
	

		
}

function reponse () {
	document.getElementById("reponse").textContent=reponses[i];
}


function mauvaise_reponse(){

	
	document.getElementById(i).style.color = "white";
	document.getElementById(i).style.backgroundColor = "#FF5733";

}


var sons = [
	"son/son0.mp3",
	"son/son1.mp3",
	"son/son2.mp3",
	"son/son3.mp3",
	"son/son4.mp3",
	"son/son5.mp3",
	"son/son6.mp3",
	"son/son7.mp3",
	"son/son8.mp3",
	"son/son9.mp3",
	"son/son10.mp3",
	"son/son11.mp3",
	"son/son12.mp3",
	"son/son13.mp3",
	"son/son14.mp3",
	"son/son15.mp3",
	"son/son16.mp3",
	"son/son17.mp3",
	"son/son18.mp3",
	"son/son19.mp3",
	"son/son20.mp3",
	"son/son21.mp3",
	"son/son22.mp3",
	"son/son23.mp3",
	"son/son24.mp3",
	"son/son25.mp3",

]

var regles = [
	"Qui parle ?",
	"Quel groupe peut-on entendre chanter ?",
	"De quelle région viennent ces chanteurs ?",
	"Quelle série ?",
	"Qui fait partie de ce groupe ?",
	"A qui pose la question le journaliste ?",
	"Qui chante ?",
	"Qui sont les trois personnes qui parlent ?",
	"Qui chante ? (2 duo + 2 chanteurs)",
	"Qui parle ?",
	"Complétez les paroles !",
	"",
	"",
	"",
	"",
	"",
	"",
	"",
	"",
	"",
	"",
	"",
	"",
	"",
	"",
	"",
]

var reponses = [
	"Peso Pluma",
	"La sélection masculine espagnole de basket championne d'Europe en 2022.",
	"Normandie - Orelsan, Médine, Keen V et Petit Biscuit",
	"Les Sopranos",
	"Mikel",
	"Iñaki Williams",
	"Muniain et Grizou",
	"Bernalicis, Guiraud et Ruffin",
	"Pidi, Michou, Squeezie & Joyca, Mcfly & Carlito ",
	"Rudy Gobert",
	"Et pour un monde meilleur ! & Pour l'amour du maillot que vous portez sur le dos.",
	"",
	"",
	"",
	"",
	"",
	"",
	"",
	"",
	"",
	"",
	"",
	"",
	"",
	"",
	"",
]