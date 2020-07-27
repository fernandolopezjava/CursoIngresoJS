function mostrar()
{
	//definir variable
	var mesDelAño 
	// buscar dato en el html
	mesDelAño=document.getElementById("txtIdMes").value;
    //switch
	switch(mesDelAño){
		
		case "Febrero":
			alert("tiene 28 dias")
			break;
		default:
			alert("tiene 30 dias o mas")
			
	}
	


}//FIN DE LA FUNCIÓN