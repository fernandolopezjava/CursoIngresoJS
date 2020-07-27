function mostrar()
{
	let destino;

	destino= document.getElementById("txtIdDestino").value
	
	switch(destino){
        case "Bariloche":
			alert("esta al oeste")
			break;
		case "Ushuaia":
			alert("esta al sur")
			break;
		case "Cataratas":
			alert("esta al norte")
			break;
		case "Mar del plata":
			alert("esta al este")
			break;


	}


}