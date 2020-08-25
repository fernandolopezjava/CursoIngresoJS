function mostrar()
{   
	let estacion;
	let destino;
	let descuento;
	let aumento;
	const tarifa = 15000;
	let resultado;

	estacion = document.getElementById("txtIdEstacion").value 
	destino = document.getElementById("txtIdDestino").value

     switch(estacion){
		 case "Invierno":
			 if(destino == "Bariloche"){
				aumento= tarifa * 0.20
			    resultado= tarifa + aumento
			    
			 }
			 else if(destino == "Cataratas"){
				descuento= tarifa * 0.10
			    resultado= tarifa - descuento
			    
			 }
             else if(destino == "Cordoba"){
				descuento= tarifa * 0.10
			    resultado= tarifa - descuento
			    
			 }
			else if(destino == "Mar del plata"){
				descuento = tarifa * 0.20
				resultado= tarifa - descuento
				
			}

		case "Verano":
			 if(destino == "Bariloche"){
				   descuento= tarifa * 0.20
				   resultado= tarifa - descuento
				  
				}
			else if(destino == "Cataratas"){
				   aumento = tarifa * 0.10
				   resultado= tarifa + aumento
				   
				}
			else if(destino == "Cordoba"){
				   aumento = tarifa * 0.10
				   resultado= tarifa + aumento
				   
				}
			else if(destino == "Mar del plata"){
					aumento= tarifa * 0.20
					resultado= tarifa + aumento
					
			   }
		case "Otoño" || "Primavera":
			if(destino == "Bariloche"){
					aumento= tarifa * 0.10
					resultado= tarifa + aumento
					
				   }
			else if(destino == "Cataratas"){
					aumento = tarifa * 0.10
					resultado= tarifa + aumento
					
				   }
			else if(destino == "Mar del plata"){
					aumento = tarifa * 0.10
					resultado= tarifa + aumento
					
				   }
			else if(destino == "Cordoba"){
					resultado= tarifa 
				 }	
	 }
	    alert("mostrar el resultado " + resultado)
}