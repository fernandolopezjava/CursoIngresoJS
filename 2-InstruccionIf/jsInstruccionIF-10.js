function mostrar()
{
	let nota;
	let maximo = 10;
	let minimo = 1;

	nota = Math.round(Math.random()* (maximo-minimo)+ minimo);
	if(nota>=9)
	alert(nota + " excelente")
	else if(nota >=4 && nota < 9)
	alert(nota + "aprobo")
	else if(nota < 4)
	alert(nota + " vamos, la proxima se puede")



}