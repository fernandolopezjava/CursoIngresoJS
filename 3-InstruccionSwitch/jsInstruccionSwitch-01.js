function mostrar()
{
	//definir variable
	let mesDelAño;
	// buscar dato en el html
	mesDelAño=document.getElementById("txtIdMes").value
	// switch
	switch(mesDelAño){
		case "Enero":
			alert("que comienzes bien el año")
			break;
		case "Marzo":
		   alert("empiezan las clases")
		   break;
		case "Julio":
			alert("empieza el invierno")
			break;
		case "Diciembre":
			alert("felices, fiestas")
			break;
	}

	 
}