/*

Feito pelo Everson Souza
contato: eversonsa2014@gmail.com
Funcao addBola -> criar uma div, e as propriedades
Funcao estourar -> remover as bolas que irá aparecer no navegador
Funcao playGame() -> inicia o jogo na funcap onload no body

*/

function addBola(){
	var bola = document.createElement("div");
	bola.setAttribute("class", "bola");
	var cor = '#'+Math.floor(Math.random() * 16777215).toString(16);
	var p1 = Math.floor(Math.random() * 500);
	var p2 = Math.floor(Math.random() * 400);
	bola.setAttribute("style", "left:"+p1+"px;top:"+p2+"px;background-color:"+cor+";");
	bola.setAttribute("onclick", "estourar(this)");

	document.body.appendChild(bola);
}
function estourar(obj){
	document.body.removeChild(obj);
}
function playGame(){
	setInterval(addBola, 1000);
}