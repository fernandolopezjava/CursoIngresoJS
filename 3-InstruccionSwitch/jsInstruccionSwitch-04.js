function mostrar()
{   //definir variable
	let mesDelAño;
	//buscar dato html
	mesDelAño=document.getElementById("txtIdMes").value;
    // switch
	switch(mesDelAño){
      
		case "Febrero":
			alert("tiene 28 dias")
			break;
		case "Abril":
			alert("tiene 30 dias")
			break;
		case "Junio":
			alert("tiene 30 dias")
			break;
		case "Septiembre":
			alert("tiene 30 dias")
			break;
		case "Noviembre":
			alert("tiene 30 dias")
			break;	
		default:
			alert("tiene 31 dias")
	}

}