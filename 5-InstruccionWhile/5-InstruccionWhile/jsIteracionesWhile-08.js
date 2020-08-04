/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
sumar los que son positivos y multiplicar los negativos.*/
function mostrar()
{
	let numero;
	let positivos=0
	let negativos=1
	let seguir;
	let flag;

	do{
		numero=prompt("introdusca su numero aqui")
		numero= parseInt(numero);
        if(numero>=0){
			positivos= positivos+ numero;
			flag = 0
		}
		else{
			flag=1
			negativos= negativos*numero
			
		}
         
         seguir= prompt("quiere seguir introduciendo numeros")


	}while(seguir=="si")
	 if(flag==0)
	 negativos=0

}