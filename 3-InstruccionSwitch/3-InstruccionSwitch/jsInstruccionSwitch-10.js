function mostrar()
{
	let estacion;
	let destino;

	estacion = document.getElementById("txtIdEstacion").value
	destino = document.getElementById("txtIdDestino").value

	switch(estacion){
        case "Invierno":
			if(destino=="Bariloche"){
				alert("se viaja")
				break;
			}
			else{
				alert("no se viaja")
				break;
			}
	    case "Verano":
			if(destino=="Mar del plata"|| destino=="Cataratas"){
				alert("se viaja")
				break;
			}
	        else{
				alert("no se viaja")
				break;
			}
	    case "Primavera":
			if(destino=="Bariloche"){
				alert("no se viaja")
				break;
			}
	        else{
				alert("se viaja")
				break;
			}
		default:
				alert("se viaja")
				break;
	}





}