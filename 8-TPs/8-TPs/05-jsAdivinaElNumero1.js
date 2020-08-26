/*Al comenzar el juego generamos un número 
secreto del 1 al 100, en la pantalla del juego
 dispondremos de un cuadro de texto para ingresar
  un número y un botón “Verificar”, si el número 
  ingresado es el mismo que el número secreto se dará 
  por terminado el juego con un mensaje similar a este: 
“Usted es un ganador!!! y en solo X intentos”.
de no ser igual se debe informar si “falta…”  para llegar al número secreto  o si “se pasó…”  del número secreto.
*/
var numeroSecreto; 
let maximo = 100;
let minimo = 1;
var contadorIntentos;

function comenzar()
{
	
	numeroSecreto=Math.round(Math.random()* (maximo - minimo) - minimo)
	contadorIntentos=0
	parseInt(document.getElementById("txtIdIntentos")).value = contadorIntentos
	
}

function verificar()
{
	let numeroingresado
	numeroingresado=parseInt(document.getElementById("txtIdNumero").value)
	parseInt(document.getElementById("txtIdIntentos")).value = contadorIntentos
	contadorIntentos++
	if(numeroSecreto==numeroingresado){
		
		alert("eres un genio y lo hiciste en tan solo " + contadorIntentos)
	}
	else if(numeroSecreto>numeroingresado){
		
		alert("se paso")
	}
	else if(numeroSecreto<numeroingresado){
		
		alert("falta")
	}
    

}




