function mostrar()
{
	let edad;
	edad=parseInt(document.getElementById("txtIdEdad").value)

	if(edad >=13 && edad<=17){
		alert("usted es adolescente")
    }
	else if (edad > 17){
		alert("usted es mayor de edad")
	}
    else{
		alert("usted es menor de edad")
	}
	
	}

