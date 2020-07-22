function mostrar()
{
	let edad;
	let estado;

	edad = document.getElementById("txtIdEdad").value;
	edad = parseInt(edad);
	estado = document.getElementById("estadoCivil").value;

	 if(edad>=18 && estado =="soltero"){
		alert("es soltero y no es menor")
	
	}
	    


}