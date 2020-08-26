/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */
function CalcularPrecio () 
{    
     const lamparas = 35
     let descuento
     let precioConDescuento
     let marca
     let IIBB
     let cantidadDeLamparas
     let importetotal

     marca = document.getElementById("Marca").value 
     cantidadDeLamparas=parseInt(document.getElementById("txtIdCantidad").value)

     switch(cantidadDeLamparas){
         case 1:
         case 2:
         case 3:
             if(marca== "ArgentinaLuz"){
                descuento= 15
                
             }
             else if(marca == "FelipeLamparas"){
                 descuento= 10
             }
             else{
                 descuento= 5
             }
             break;
         case 4:
            if(marca== "ArgentinaLuz"|| marca=="FelipeLamparas"){
                descuento= 25
             }
             else{
                 descuento=20
             }  
             break;
         case 5:
            if(marca== "ArgentinaLuz"){
                descuento= 40
             }
             else{
                 descuento=30
             } 
             break;
         default: 
             descuento=50  
     }

     precioConDescuento = lamparas - (lamparas*descuento/100)
     importetotal= precioConDescuento * cantidadDeLamparas
     document.getElementById("txtIdprecioDescuento").value = precioConDescuento

     if(importetotal>120){
         IIBB= importetotal * 0.10
         importetotal= importetotal+IIBB
         alert("el importe total es: " + importetotal + " y usted pago de " + IIBB + " pesos")
     }
     else{
         alert("el importe es : " + importetotal)
     }













}

