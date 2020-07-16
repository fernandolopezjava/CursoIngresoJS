/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
    let x ;
    let y ;
    let z ;
    let total;
  
    x = document.getElementById("txtIdPrecioUno").value ;
    x = parseInt(x)

    y = document.getElementById("txtIdPrecioDos").value ;
    y = parseInt(y)

    z = document.getElementById("txtIdPrecioTres").value ;
    z = parseInt(z)

    total = x + y + z
    alert("el total es"+ total);

}
function Promedio () 
{
	let precio1 ;
    let precio2 ;
    let precio3 ;
    let total;
  
    precio1 = document.getElementById("txtIdPrecioUno").value ;
    precio1 = parseInt(precio1)

    precio2 = document.getElementById("txtIdPrecioDos").value ;
    precio2 = parseInt(precio2)

    precio3 = document.getElementById("txtIdPrecioTres").value ;
    precio3 = parseInt(precio3)

    suma = precio1 + precio2 + precio3 

    promedio = suma / 3

    alert(promedio);

}

function PrecioFinal () 
{
	let precio1 ;
    let precio2 ;
    let precio3 ;
    let iva;
    let total;
    let importeFinal;
  
    precio1 = document.getElementById("txtIdPrecioUno").value ;
    precio1 = parseInt(precio1)

    precio2 = document.getElementById("txtIdPrecioDos").value ;
    precio2 = parseInt(precio2)

    precio3 = document.getElementById("txtIdPrecioTres").value ;
    precio3 = parseInt(precio3)

    total = precio1 + precio2 + precio3

    iva = suma * 21 / 100
    
    importeFinal = suma + iva

    alert(importeFinal);

}
