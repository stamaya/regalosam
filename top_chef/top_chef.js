images  = [
	"img/jean_imbert.png", //0
	"img/adrien_cachot.png", //1
	"img/arnaud_baptiste.jpeg", //2
	"img/clotaire_poirier.png", //3
	"img/arnaud_munster.jpeg", //4
	"img/jorick_dorignac.png", //5
	"img/helene_darroze.jpeg", //6
	"img/pavel_hug.png", //7
]

reponses = [
	"Adrien Cachot", // 0
	"Helene Darroze", // 1
	"Clotaire Poirier", // 2 
	"Arnaud Baptiste", // 3
	"Pavel Hug", // 4
	"Jorick Dorignac", // 5
	"Jean Imbert", // 6
	"Arnaud Munster", //7

]

bonnes_reponses = [
	"Jean Imbert",
	"Adrien Cachot",
	"Arnaud Baptiste",
	"Clotaire Poirier",
	"Arnaud Munster",
	"Jorick Dorignac",
	"Helene Darroze",
	"Pavel Hug"
]

score  = [
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

function setFunctionsAndCurves(){
	var curvesArea = document.getElementById("curves");
	var functionsArea = document.getElementById("functions");
	for (let i = 0 ; i < reponses.length ; i++)
	{
		var curveArea = document.createElement("div");
		var curveImg = document.createElement("img");
		curveImg.classList.add("image");
		curveImg.setAttribute("src", images[i]);
		curveImg.addEventListener("click", function() {
			if (this.requestFullscreen) {
			  this.requestFullscreen();
			} else if (this.msRequestFullscreen) {
			  this.msRequestFullscreen();
			} else if (this.mozRequestFullScreen) {
			  this.mozRequestFullScreen();
			} else if (this.webkitRequestFullscreen) {
			  this.webkitRequestFullscreen();
			}
		  });
		curveArea.setAttribute("id", "prop"+i);
		curveArea.setAttribute("ondrop", "dragDrop(event)");
		curveArea.setAttribute("ondragover", "allowDrop(event)");
		curveArea.classList.add("curve");
		curveArea.appendChild(curveImg);

		curvesArea.appendChild(curveArea);

		var functionArea = document.createElement("div");
		functionArea.innerText = reponses[i];
		functionArea.setAttribute("id","drag"+i);
		functionArea.setAttribute("ondrop","dragDrop(event)");
		functionArea.setAttribute("ondragover","allowDrop(event)");
		functionArea.setAttribute("draggable","true");
		functionArea.setAttribute("ondragstart","dragStart(event)");
		functionArea.classList.add("function");
		functionArea.classList.add("draggable");

		functionsArea.appendChild(functionArea);
	}
}

setFunctionsAndCurves();

var reponse_select = ""
var image_selectionne = 10
var indice = 0

function allowDrop(ev) {
	ev.preventDefault();
}
function dragStart(ev) {
	ev.dataTransfer.setData("text", ev.target.id);
}

function dragDrop(ev) {
	ev.preventDefault();

	reponse_select = ev.target.id
	indice = reponse_select.substr(-1)

	if(reponse_select)
	{
		var data = ev.dataTransfer.getData("text");
		ev.target.appendChild(document.getElementById(data));
		ev.target.style.paddingBottom = "5px";
	}

	function_selected = document.getElementById(data).innerText;
	score[indice] = function_selected
	
}


function resultat_final()
{
	var carreau = ""
	for (let i = 0 ; i < reponses.length ; i++) 
	{
		if (bonnes_reponses[i] == score[i]) 
		{
			carreau = "prop" + i.toString()
			document.getElementById(carreau).style.backgroundColor = "#C6E5BA"
		}

		else 
		{
			carreau = "prop" + i.toString()
			document.getElementById(carreau).style.backgroundColor = "#FF6961"

			var goodAnswer = document.createElement("div");
			goodAnswer.innerText = bonnes_reponses[i];
			goodAnswer.classList.add("function");
			goodAnswer.style.color="white";
			document.getElementById(carreau).appendChild(goodAnswer);
		}
		
	}
}