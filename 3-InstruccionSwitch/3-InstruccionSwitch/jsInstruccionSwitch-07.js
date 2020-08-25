function mostrar()
{
	let destino;

	destino= document.getElementById("txtIdDestino").value
	
	switch(destino){
		case "Bariloche":
			alert("este destino se encuentra al oeste")
			break;
		case "Mar del plata":
			alert("este destino se encuentra al este")
			break;
		case "Ushuaia":
			alert("este destino se encuentra al sur")
			break;
        case "Cataratas":
			alert("este destino se encuentra al norte")
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