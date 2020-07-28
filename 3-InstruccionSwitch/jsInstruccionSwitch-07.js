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
	   /* if(destino== "bariloche"){
		   alert("esta al oeste")
	   }
		  
		else if (destino=="Ushuaia"){
			alert("esta al sur")
		}
		else if (destino=="Cataratas"){
			alert("esta al norte")
		} 
        else if (destino=="Mar del plata "){
			alert("esta al este")
		}
		*/
} 