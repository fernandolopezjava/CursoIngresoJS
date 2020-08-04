/*
Al presionar el botón pedir  números  
hasta que el usuario quiera, mostrar:
1-Suma de los negativos.
2-Suma de los positivos.
3-Cantidad de positivos.
4-Cantidad de negativos.
5-Cantidad de ceros.
6-Cantidad de números pares.
7-Promedio de positivos.
8-Promedios de negativos.
9-Diferencia entre positivos y negativos, (positvos-negativos). */
function mostrar()
{
	let numero;
	let positivos=0
	let negativos=0
	let seguir;
	let flag;
	let diferencia;
	let acumuladorpositivos=0;
	let acumuladadornegativos=0;
	let acumuladadorceros=0;
	let acumuladordepares=0
	let promediopositivo;
	let promedionegativo;

	do{
		numero=prompt("introdusca su numero aqui")
		numero= parseInt(numero);
		
		if(numero>0){
			positivos= positivos + numero;
			flag = 0
			acumuladorpositivos++
		}
		else if(numero==0){
             acumuladadorceros++
		}
		else{
			flag=1
			negativos= negativos+ numero
			acumuladadornegativos++
		}
         seguir= prompt("quiere seguir introduciendo numeros")
        if(numero%2 == 0){
		 acumuladordepares++
		}

	}while(seguir=="si")
	 
	 diferencia = positivos - negativos
	 promediopositivo = positivos / acumuladorpositivos
	 promedionegativo = negativos / acumuladadornegativos

	 console.log("la suma de negativos es: " + negativos)

	 console.log("la suma de positivos es: " + positivos)

	 console.log("la diferencia entre negativos y positivos es: " + diferencia)

	 console.log("la cantidad de numero positivos es: " + acumuladorpositivos)

	 console.log("la cantidad de numeros ceros es: " + acumuladadorceros)

	 console.log("la cantidad de numeros pares es: " + acumuladordepares)

	 console.log("la cantidad de numero negativos es: " + acumuladadornegativos)

	 console.log("el promedio de positivos es: " + promediopositivo)
	 
	 console.log("el promedio de negativos es: " + promedionegativo)



	 

     




}
