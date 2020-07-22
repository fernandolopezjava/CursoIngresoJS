function mostrar()
{
	let edad;
	let estado;

	edad = document.getElementById("txtIdEdad").value;
	edad = parseInt(edad);
	estado = document.getElementById("estadoCivil").value;
	
	if(edad<18 && estado == "Casado"){
		alert(" es muy pequeño para no ser soltero")
	}
	else if(edad<18 && estado == "Divorciado"){
	    alert(" es muy pequeño para no ser soltero")

	}
}