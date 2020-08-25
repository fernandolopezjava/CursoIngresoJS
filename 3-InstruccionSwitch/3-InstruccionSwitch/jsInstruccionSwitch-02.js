function mostrar()
{
	let mes;

	mes=document.getElementById("txtIdMes").value ;

	switch(mes){
		case "Enero":
		case "Febrero":	
		case "Marzo":
		case "Abril":
		case "Mayo"	:
		case "Junio":
			alert("aun no llego el invierno")
			break;
		case "Julio":
		case "Agosto":
			alert("abrigate que hace frio")
			break;
		case "Septiembre":
		case "Octubre":	
		case "Noviembre":
		case "Diciembre":
			alert("ya pasamos el frio, ahora calor")
			break;
	

}


}