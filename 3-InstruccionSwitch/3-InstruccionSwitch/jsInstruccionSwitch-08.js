function mostrar()
{
	let destino;

	destino= document.getElementById("txtIdDestino").value
	
	switch(destino){
		case "Bariloche":
		case "Ushuaia":
			alert("hace frio")
			break;
		case "Mar del plata":
        case "Cataratas":
			alert("hace calor")
			break;

	}
   /* if(destino== "Bariloche" || destino ==Ushuaia){
        alert("hace frio")
   }
      if(destino== "Mar del plata" || destino ==Cataratas){
		alert("hace calor")
    } */
}