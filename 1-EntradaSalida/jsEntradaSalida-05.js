/*
Debemos lograr tomar nombre y edad por ID y mostrarlos concatenados 
ej.: "Usted se llama José y tiene 66 años" 	*/
function mostrar()
{	//defino variable
	let nombre;
	let edad;
    //conseguir los datos en la caja de texto
	nombre= document.getElementById("txtIdNombre").value;
	edad= document.getElementById("txtIdEdad").value;
	//mostrar datos 
	alert("usted se llama" + nombre + " y tiene una edad de "+ edad +" años");
	
}

