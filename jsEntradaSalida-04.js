/* 
Debemos lograr tomar un dato por 'PROMPT' 
y lo muestro por 'ID' al presionar el botón 'mostrar'
*/
function mostrar()
{
	//reservo espacio en memoria para guardar el nombre
     let nombre;

    //guardo en la variable nombre el texto que escribe el usuario
	 nombre=prompt("introdusca su dato aqui señor")

	//copio en nombre que tengo guardado en la variable nombre dentro de la caja de texto
	 document.getElementById("txtIdNombre").value = nombre
}

