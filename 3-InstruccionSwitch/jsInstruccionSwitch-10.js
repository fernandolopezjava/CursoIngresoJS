function mostrar()
{
	let estacion;
	let destino;

	estacion = document.getElementById("txtIdEstacion").value
	destino = document.getElementById("txtIdDestino").value

	switch(estacion){
        case "Invierno":
			if( destino == "Bariloche"){
				alert("se viaja")
				break;
		}
			else{
				alert("no se viaja")
				break;
		}
		 case "Verano":
			if( destino == "Mar del plata") {
				 alert("se viaja")
				 break;
		}
			else if(destino == "Cataratas") {
				alert("se viaja")
				break;
		}
			else{
				alert("no se viaja")
				break;
		}
		
		 case "Verano":
		    if ( destino == "Cordoba"){
				alert("se viaja")
			    break;
		}
			else if ( destino == "Cataratas"){
				alert("se viaja")
				break;
		}
			else{
				alert("no se viaja")
				break;
		}
		 case "Primavera":
			if( destino == "Bariloche"){
				alert("no se viaja")
				break;
		}
			else{
				alert("se viaja")
				break;
		}
		case "Otoño":
				alert("se viaja")
				break;
	}

}