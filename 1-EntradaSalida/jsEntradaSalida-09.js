/*
Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{//declarar la variable
  let sueldo;
  let aumento;
  let total;
  // buscar datos en el html
  sueldo = document.getElementById("txtIdSueldo").value ;
  //convertir el dato string en float
  sueldo= parseFloat(sueldo);
  // hacer aumento
  aumento = sueldo * 10 / 100
  // sacar el importe con el aumento incorporado
  total = sueldo + aumento
  //mostrarlo
  document.getElementById("txtIdResultado").value = total

  
}
