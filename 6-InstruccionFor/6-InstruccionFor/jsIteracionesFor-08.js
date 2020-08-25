function mostrar()
{
	let numero;
	contador=0
	
	numero=parseInt(prompt("introdusca un numero"));
	for(let i=1;i<=numero;i++){
		if(numero%i ==0){
			contador++
		}	
	}
    if(contador==2){
		alert(numero + "el numero es primo")
	}
	else{
		alert(numero + "el numero no es primo")
	}
}



 
