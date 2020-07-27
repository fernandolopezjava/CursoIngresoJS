function mostrar()
{
	let destino;

	destino= document.getElementById("txtIdDestino").value
	
	switch(destino){
        case "Bariloche":
		case "Ushuaia":
			alert("hace frio")
			break;
		case "Cataratas":
		case "Mar del plata":
			alert("hace calor")
			break;
	}

}