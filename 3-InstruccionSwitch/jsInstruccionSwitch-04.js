function mostrar()
{
	let mesDelAño;
	mesDelAño=document.getElementById("txtIdMes").value;

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
		case "Agosto":
			alert("tiene 30 dias")
			break;
		case "Noviembre":
			alert("tiene 30 dias")
			break;
		default:
			alert("este mes tiene 31 dias")
			
	}

}