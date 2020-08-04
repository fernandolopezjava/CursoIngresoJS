function mostrar(){
	let numero;
	let i=0;
	let promedio;
	let acumulador=0;
	
	while(i<5){
		
		numero=prompt("introdusca su numero aqui")
		numero=parseInt(numero);
        acumulador = acumulador + numero
		i++
        
	}
         promedio= acumulador/5
	   document.getElementById("txtIdSuma").value = acumulador;
	   document.getElementById("txtIdPromedio").value = promedio;
}