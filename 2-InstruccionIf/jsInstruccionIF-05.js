function mostrar()
{
	let edad;

	edad = document.getElementById("txtIdEdad").value;
	edad = parseInt(edad);

	if(edad <13 || edad > 17)
	{
		alert("no es adolescente")
	}
	//si no estoy fuera del rango
/*if(!(edad >=13 || edad <= 17))
{
	alert("no es adolescente")
}*/
}