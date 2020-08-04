/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
mostrar el número máximo y el número mínimo ingresado.*/
function mostrar()
{	
	let numero;
	let maximo;
	let minimo;
	let flag;
	let seguir;

	do{

	   numero=prompt("introdusca su numero aqui")
	   numero= parseInt(numero);
	   if(flag==0){
	   maximo=numero
	   minimo= numero
	   flag=1
	   }
	   else if(numero> maximo){
		   
		   maximo= numero
		}
		else if(nunero< minimo){
			
			minimo= numero
		}
			
		seguir=prompt("quiere seguir introduciendo numeros")
		   
	}while(seguir=="si")
    
	document.getElementById("txtIdMaximo").value = maximos
	document.getElementById("txtIdMinimo").value = minimos
}
