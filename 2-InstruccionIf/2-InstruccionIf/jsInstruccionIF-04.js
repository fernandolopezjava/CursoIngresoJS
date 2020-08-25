function mostrar()
{
    let edad;
	edad=parseInt(document.getElementById("txtIdEdad").value)

	if(edad >=13 && edad<=17){
		alert("usted es adolescente")

	}
//si no estoy fuera del rango
/*if(!(edad <13 || edad > 17))
{
	alert("es adolescente")
}*/
}