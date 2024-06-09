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
	
	if (bonneslettres.includes(lettre)) {
		var LETTRE = lettre.toUpperCase();
		for (let p = 0; p < document.getElementsByClassName(lettre).length; p ++)
		{
			document.getElementsByClassName(lettre)[p].textContent = LETTRE;
			console.log(document.getElementsByClassName(lettre)[p].textContent)
			compteur++
		}

	}

		
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
	"Qui parlent ? (3 personnes)",
	"En quelle année ? (1 seule réponse)",
	"Quels instruments ? (4 instruments)",
	"Qui suis-je ? (en 1 coup)",
	"La suite ?",
	"Quelle série ? (Rapidité)",
	"Qui parle ?",
	"Dans l'ordre - 6 accents espagnols",
	"Qui est dans cet ascenseur ?",
	"Quel est le nom de l'actrice ?",
	"Qui parle ?",
	"Quel est le nom du film ?",
	"Quelle année ?",
	"Quelle série ?",
	"Question pour maman",
	"Question pour Yaëlle",
	"Qui parlent ? (4 personnes)",
	"Question pour Sam",
	"Question pour Maxime",
	"Question pour aita",
	"Nom de la série",
	"Question pour Aitor",
	"Qui parle ? (dans l'ordre)",
	"Qui chante ?",
	"En quelle année ?",
	"En quelle année ?",

]

var reponses = [
	"Jokic - Brel - Natoo",
	"2005",
	"Tuba - Clarinette - Hautbois - Violoncelle",
	"Julia Roberts",
	"Love me",
	"Monk",
	"Caroline Hériaud",
	"Euskadi - Navarra - Cataluña - Madrid - Andalucía - Canarias",
	"Meredith - Addison - Rose - Derek - Sloan",
	"Zazou",
	"Sergio Ramos",
	"Glass Onion: A Knives Out Mystery (2022)",
	"1981",
	"Casa de papel",
	"Venus & Serena",
	"Football américain", 
	"Amelia Shepard - Meredith Grey - April Kepner - Cristina Young",
	"BSC Young Boys",
	"Porical",
	"Endika",
	"Fais pas ci, fais pas !a",
	"Liste trop longue ahah",
	"Monica - Rachel - Chandler - Joey - Ross",
	"Britney",
	"2021",
	"1988",
]