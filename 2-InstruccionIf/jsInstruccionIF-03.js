function mostrar()
{
	let edad;

	edad = document.getElementById("txtIdEdad").value;
	edad = parseInt(edad);

	if(edad >= 18)
	{
		alert("es mayor de edad")
	}
	else{
		alert("es menor de edad")
	}
	    
}//FIN DE LA FUNCIÓN