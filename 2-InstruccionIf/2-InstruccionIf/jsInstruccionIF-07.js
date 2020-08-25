function mostrar()
{
	let edad;
	let estado;

	edad=parseInt(document.getElementById("txtIdEdad").value)
	estado = document.getElementById("estadoCivil").value
	 
	if(edad<18 && estado=="Casado"){
		alert("usted es muy pequeño para no ser soltero")
	}
    else if(edad<18 && estado=="divorciado"){
		alert("usted es muy pequeño para no ser soltero")
	}

	
}