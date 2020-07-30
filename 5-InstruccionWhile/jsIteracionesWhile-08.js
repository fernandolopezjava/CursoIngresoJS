/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
sumar los que son positivos y multiplicar los negativos.*/
function mostrar()
{
	let numero
	let positivos = 0
	let negativos = 1
	let seguir
	let flag

	do{

       numero = parseInt(prompt("introduce su nombre aqui"))
		if(numero>=0) {
			//alert("es positivo")
			flag=0
			positivos = positivos + numero
		}
	   else{
		   //alert("es negativo")
		   flag=1
		   negativos = negativos * numero
	   }
	   seguir = prompt("quiere ingresar otro numero")

	}while(seguir=='s')
    if(flag == 0){
		negativos==0
	}

	document.getElementById("txtIdSuma").value = positivos
	document.getElementById("txtIdProducto").value = negativos


}