function mostrar()
{
	let numero;
	let contadordepares=0;

	numero=parseInt(prompt("introdusca un numero"));
	for(let i=1;i<=numero;i++){
		if(i%2 ==0){
			contadordepares++
			console.log(i)
		}
	}

console.log("cantidad de pares " + contadordepares)

}//FIN DE LA FUNCIÓN