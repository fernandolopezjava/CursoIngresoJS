function mostrar()
{
	let numero;
	let contadordedivisores=0;

	numero=parseInt(prompt("introdusca un numero"));
	for(let i=1;i<=numero;i++){
		if(numero%i ==0){
			contadordedivisores++
			console.log(i)
		}
	}

console.log("cantidad de divisores" + contadordedivisores)



}//FIN DE LA FUNCIÓN