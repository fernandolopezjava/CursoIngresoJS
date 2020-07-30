/*
Al presionar el botón pedir  números  hasta que el USUARIO QUIERA 
e informar la suma acumulada y el promedio.
*/
function mostrar()
{
	let seguir = 'si';
	let numero;
	let i=0
	let contador =0
	
	while(seguir =='si'){
		numero = prompt("ingrese un numero aqui");
		numero = parseInt(numero)
		contador= contador + numero
		seguir= prompt("quiere ingresar otro numero");
		i++
	}
	 alert("se cierra la operacion")

	 document.getElementById("txtIdSuma").value = contador
	 document.getElementById("txtIdPromedio").value = contador/i
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