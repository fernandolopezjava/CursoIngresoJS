/*
Al presionar el botón pedir  números  hasta que el USUARIO QUIERA 
e informar la suma acumulada y el promedio.
*/
function mostrar()
{
	let seguir = 'si';
	let numero;
	let cont=0
	let acumulador=0
	
	while(seguir =='si'){
		numero = prompt("ingrese un numero aqui");
		numero = parseInt(numero)
		acumulador = acumulador + numero
		seguir= prompt("quiere ingresar otro numero");
		cont++
	}
	 alert("se cierra la operacion")

	 document.getElementById("txtIdSuma").value = acumulador
	 document.getElementById("txtIdPromedio").value = acumulador/cont
}
/*
  do{
       numero = prompt("ingrese un numero aqui");
		numero = parseInt(numero)
		acumulador = acumulador + numero
		seguir= prompt("quiere ingresar otro numero");
		cont++
  }while(seguir =='si')


*/