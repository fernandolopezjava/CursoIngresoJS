/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
mostrar el número máximo y el número mínimo ingresado.*/
function mostrar()
{	
	let numero
	let maximos
	let minimos                              
	let seguir
	let flag = 0

	do{
       numero = parseInt(prompt("introduce su nombre aqui"))
	   if(flag==0){
	   maximos = numero
	   minimos = numero 
	   flag=1
	   }
	   else if(numero > maximos) {
		  maximos = numero
	  }
	   else if (numero < minimos)  {
		  minimos = numero
	  }
	 seguir = prompt("quiere ingresar otro numero")
    
	}while(seguir=='s')

	document.getElementById("txtIdMaximo").value = maximos
	document.getElementById("txtIdMinimo").value = minimos

}