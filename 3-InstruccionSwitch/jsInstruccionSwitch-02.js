function mostrar()
{
	
	var mesDelAño 
	mesDelAño=document.getElementById("txtIdMes").value;

	switch(mesDelAño){
        case "Enero":	
		case "Febrero":	
		case "Marzo":	
		case "Abril":	
		case "Mayo":	
		case "Junio":
			alert("no llego el invierno")
			break;
		case "Julio":
		case "Agosto":
			alert("abrigate que hace frio")
			break;
		case "Septiembre":
		case "Octubre":
		case "Noviembre":
		case "Diciembre":
			alert("Ya pasamos el frio, ahora calor!!!.")
			break;

	}
	




}