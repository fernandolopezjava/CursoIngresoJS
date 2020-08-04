/*
Al presionar el botón pedir  números  hasta que el USUARIO QUIERA 
e informar la suma acumulada y el promedio.
*/
function mostrar()
{
   let numero;
   let acumulador=0;
   let i=0;
   let promedio;
   let seguir;

   do{
	   numero= prompt("introdusca su nombre aqui");
	   numero=parseInt(numero);
	   acumulador= acumulador + numero
	   seguir= prompt("quiere introducir otro numero");
       i++
   }while(seguir=="si")

	  promedio= acumulador/i
	  document.getElementById("txtIdSuma").value = acumulador;
	  document.getElementById("txtIdPromedio").value = promedio;





/*
  do{
       numero = prompt("ingrese un numero aqui");
		numero = parseInt(numero)
		acumulador = acumulador + numero
		seguir= prompt("quiere ingresar otro numero");
		cont++
  }while(seguir =='si')


*/
}