/*RISING BTL. Empresa dedicada a la toma de datos para realizar estadísticas y censos nos pide realizar una carga de datos validada e ingresada por ventanas emergentes solamente (para evitar hacking y cargas maliciosas) y luego asignarla a cuadros de textos. 
12.   Los datos requeridos son los siguientes:
A.	Edad, entre 18 y 90 años inclusive.
B.	Sexo, “M” para masculino y “F” para femenino
C.	Estado civil, 1-para soltero, 2-para casados, 3-para divorciados y 4-para viudos
D.	Sueldo bruto, no menor a 8000.
E.	Número de legajo, numérico de 4 cifras, sin ceros a la izquierda.
F.	Nacionalidad, “A” para argentinos, “E” para extranjeros, “N” para nacionalizados.
 */
function ComenzarIngreso () 
{
 	//definicion de variables
	let edad;
	let sexo;
 	let estadocivil;
	let legajo;
	let sueldo;
	let nacionalidad;

	edad= parseInt(prompt("introdusca su edad aqui"))
	sexo= prompt("introdusca su sexo aqui")
	estadocivil= parseInt(prompt("introdusca su estado civil aqui"))
	sueldo= parseInt(prompt("introdusca su sueldo bruto aqui"))
	legajo= parseInt(prompt("introdusca su numero de legajo aqui"))
	nacionalidad= prompt("introdusca su nacionalidad aqui")

    while(edad<18 || edad >90 ||isNaN(edad)){
		edad= parseInt(prompt("edad incorrecta, escriba de nuevo"))
		
	}
	alert("edad correcta")
	document.getElementById("txtIdEdad").value=edad;
	
	while(sexo!='m' && sexo!='f'){
		sexo= prompt("sexo incorrecto, escriba de nuevo")
		
	}
	alert("sexo correcto")
	document.getElementById("txtIdSexo").value=sexo;

	while(edad<1 || edad >4 || isNaN(estadocivil)){
		estadocivil= parseInt(prompt("estado civil incorrecto. vuelvalo a escribir"))
	}
	alert("estadocivil correcto")
	document.getElementById("txtIdEstadoCivil").value=estadocivil;
	
	while(sueldo<8000 || isNaN(sueldo)){
		sueldo= parseInt(prompt("sueldo incorrecto, introduscalo de nuevo"))
	}
    alert("sueldo correcto")
	document.getElementById("txtIdSueldo").value=sueldo;
	
	while(legajo< 1000 || legajo > 9999 || isNaN(legajo)){
		legajo= parseInt(prompt("introdusca su numero de legajo aqui"))
	}
	alert("legajo correcto")
	document.getElementById("txtIdLegajo").value=legajo;

	while(nacionalidad!='a'&& nacionalidad!='n'&& nacionalidad!='e'){
		nacionalidad= prompt("introdusca su nacionalidad aqui")
	}
	alert("nacionalidad correcta")
	document.getElementById("txtIdNacionalidad").value=nacionalidad;
}
