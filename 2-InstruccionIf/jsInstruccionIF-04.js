function mostrar()
{
	let edad;

	edad = document.getElementById("txtIdEdad").value;
	edad = parseInt(edad);
//si estoy dentro del rango
	if(edad >=13 && edad <=17)
	{
		alert("es adolescente")
	}
//si no estoy fuera del rango
/*if(!(edad <13 || edad > 17))
{
	alert("es adolescente")
}*/
}