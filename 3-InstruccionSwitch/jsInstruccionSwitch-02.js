function mostrar()
{
	//definir variable
	let mesDelAño 
	//buscar dato html
	mesDelAño=document.getElementById("txtIdMes").value;
	//switch

	switch(mesDelAño){
		case "Enero":
		case "Febrero":
		case "Marzo":
		case "Abril":
		case "Mayo":
		case "Junio":
			alert("aun no es invierno")
			break;
		case "Julio":
		case "Agosto":
			alert("abrigate, es invierno")
			break;
		case "Septiembre":	
		case "Octubre":
		case "Noviembre":
		case "Diciembre":
			alert("ya pasamos el invierno, hace calor")
			break;
		
		

	}
	




}