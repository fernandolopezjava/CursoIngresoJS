/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
function FahrenheitCentigrados () 
{
    let temperatura
    let resultado

    temperatura= parseInt(document.getElementById("txtIdTemperatura").value)

    resultado = (temperatura - 32) * 5/9 

    alert(temperatura + " grados fahrenhiet" + " equivale a " + resultado + " grados celcius")

}
function CentigradosFahrenheit () 
{
	let temperatura
    let resultado

    temperatura= parseInt(document.getElementById("txtIdTemperatura").value)

    resultado = (temperatura * 9/5) + 32

    alert(temperatura + " grados celcius" + " equivale a " + resultado + " grados fahrenheit")
}
