function mostrar()
{
	let estacion;
	let destino;
	const tarifa = 15000;
	let aumento;
	let descuento;
	let resultado;
	
	estacion = document.getElementById("txtIdEstacion").value
	destino = document.getElementById("txtIdDestino").value

	switch(estacion){
        case "Invierno":
			if( destino== "Bariloche"){
			     aumento = tarifa * 0.20
			     resultado = tarifa + aumento
				 alert("el precio total es " + resultado)
				 break;
		}
			else if (destino== "Cataratas"){
				descuento = tarifa * 0.10
				resultado = tarifa - descuento
				alert("el precio total es " + resultado)
				break;
		}
		    else if (destino== "Cordoba"){
			    descuento = tarifa * 0.10
			    resultado = tarifa - descuento
				alert("el precio total es " + resultado)
				break;
		}
			else if (destino== "Mar del plata"){
				descuento = tarifa * 0.20
				resultado = tarifa - descuento
				alert("el precio total es " + resultado)
				break;
		}
		case "Verano":
			if ( destino== "Bariloche"){
			     descuento = tarifa * 0.20
			     resultado = tarifa - descuento
				 alert("el precio total es " + resultado)
				 break;
		}
			else if (destino== "Cataratas"){
				aumento = tarifa * 0.10
				resultado = tarifa + aumento
				alert("el precio total es " + resultado)
				break;
		}
		    else if (destino== "Cordoba"){
			    aumento = tarifa * 0.10
			    resultado = tarifa + aumento
				alert("el precio total es " + resultado)
				break;
		}
			else if (destino== "Mar del plata"){
				aumento = tarifa * 0.20
				resultado = tarifa + aumento
				alert("el precio total es " + resultado)
				break;
		}

		case "Otoño":
			if ( destino== "Bariloche"){
			     aumento = tarifa * 0.10
			     resultado = tarifa + aumento
				 alert("el precio total es " + resultado)
				 break;
		}
			else if (destino== "Cataratas"){
				aumento = tarifa * 0.10
				resultado = tarifa + aumento
				alert("el precio total es " + resultado)
				break;
		}
		    else if (destino== "Cordoba"){
			    resultado = tarifa
				alert("el precio total es " + resultado)
				break;
		}
			else if (destino== "Mar del plata"){
				aumento = tarifa * 0.10
				resultado = tarifa + aumento
				alert("el precio total es " + resultado)
				break;
		}

		case "Primavera":
			if ( destino== "Bariloche"){
			     aumento = tarifa * 0.10
			     resultado = tarifa + aumento
				 alert("el precio total es " + resultado)
				 break;
		}
			else if (destino== "Cataratas"){
				aumento = tarifa * 0.10
				resultado = tarifa + aumento
				alert("el precio total es " + resultado)
				break;
		}
		    else if (destino== "Cordoba"){
			    resultado = tarifa
				alert("el precio total es " + resultado)
				break;
		}
			else if (destino== "Mar del plata"){
				aumento = tarifa * 0.10
				resultado = tarifa + aumento
				alert("el precio total es " + resultado)
				break;
		}


	}
	

}