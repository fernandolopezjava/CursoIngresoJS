/*
al presionar el botón 
pedir un número entre 0 y 9 inclusive.*/
function mostrar()
{
	
	let numeroIngresado;
	numeroIngresado = parseInt(prompt("ingrese un número entre 0 y 10."));

	while(numeroIngresado <0 || numeroIngresado>9 || isNaN(numeroIngresado)){
		numeroIngresado = parseInt(prompt("el numero es incorrecto"));	
	}
	alert("el numero es correcto")
	document.getElementById("txtIdNumero").value=numeroIngresado

}

/* 

let numeroIngresado;
	numeroIngresado = parseInt(prompt("ingrese un número entre 0 y 10."));
while(!(numeroIngresado >0 && numeroIngresado<9)){
		numeroIngresado = parseInt(prompt("el numero es incorrecto"));	
	}
	alert("el numero es correcto")
	document.getElementById("txtIdNumero").value=numeroIngresado	


*/