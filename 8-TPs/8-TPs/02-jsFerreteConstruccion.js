/*2.	Para el departamento de Construcción:
A.	mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
    let ancho
    let largo
    let perimetro
    let resultado

    ancho=parseFloat(document.getElementById("txtIdLargo").value)
    largo=parseFloat(document.getElementById("txtIdAncho").value)

    perimetro = (ancho * largo)*2
    resultado= perimetro*3
    alert("se necesitara comprar : " + resultado + " de alambre")

}
function Circulo () 
{
    let perimetro
    let resultado
    let radio
    const PI = 3.14

    radio=parseFloat(document.getElementById("txtIdRadio").value)
    
    perimetro= 2*PI*radio
    resultado= perimetro *3
    alert("se necesitara comprar : " + resultado + " de alambre")
  
}
function Materiales () 
{
    let ancho
    let largo
    let cemento
    let cal
    let area

    ancho=parseFloat(document.getElementById("txtIdLargo").value)
    largo=parseFloat(document.getElementById("txtIdAncho").value)

    area= ancho * largo
    cemento= area*2
    cal= area*3
    alert("se necesitara comprar : " + cemento + " de cemento " + " y " + cal + " bolsas de cal ")
   
}