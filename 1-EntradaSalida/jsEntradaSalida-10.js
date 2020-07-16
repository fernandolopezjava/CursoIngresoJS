/*
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{//declarar la variable
  let importe;
  let descuento;
  let total;
  // buscar datos en el html
  importe = document.getElementById("txtIdImporte").value ;
  //convertir el dato string en float
  importe= parseFloat(importe);
  // hacer descuento
  descuento = importe * 25 / 100
  // sacar el importe con el descuento incorporado
  total = importe - descuento
  //mostrarlo
  document.getElementById("txtIdResultado").value = total
}
