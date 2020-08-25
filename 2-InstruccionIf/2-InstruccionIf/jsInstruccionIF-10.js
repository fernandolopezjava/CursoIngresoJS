function mostrar()
{
	let nota;
	let maximo = 10;
	let minimo = 1;

	nota = Math.round(Math.random()* (maximo-minimo)+ minimo);
	if(nota==9 || nota==10){
		alert(nota + " excelente")
	}
	else if(nota>=4 && nota < 9){
		alert(nota + " aprobo")
	}
    else{
		alert(nota + " la proxima se puede")
	}

}