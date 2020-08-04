/*
Al presionar el botón pedir un sexo
'f' para femenino, 'm' para masculino.*/
function mostrar()
{
	let sexoIngresado;
	sexoIngresado = prompt("ingrese f ó m .");

	while(sexoIngresado!='f' && sexoIngresado!='m' && sexoIngresado!='M'&& sexoIngresado!='F'){
		sexoIngresado = prompt("reingrese f ó m .");
	}
     alert("el sexo es correcto")
	document.getElementById("txtIdSexo").value=sexoIngresado;
	
}
/*
let sexoIngresado;
	sexoIngresado = prompt("ingrese f ó m .");

	while(!(sexoIngresado=='f' && sexoIngresado=='m')){
		sexoIngresado = prompt("reingrese f ó m .");
	}
     alert("el sexo es correcto")
	document.getElementById("txtIdSexo").value=sexoIngresado;



*/