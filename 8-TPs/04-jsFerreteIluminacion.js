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
     const precio = 35
     let descuento;
     let iibb;
     let cantidadDeLamparas;
     let precioConDescuento;
     let marca;
     let importeTotal;

     cantidadDeLamparas= document.getElementById("txtIdCantidad").value
     marca= document.getElementById("Marca").value

     cantidadDeLamparas=parseInt(cantidadDeLamparas)

     switch(cantidadDeLamparas){
        case 1:
        case 2:
        case 3:
            if(marca=="ArgentinaLuz"){
               descuento = 0.15
            }
            else if(marca=="FelipieLamparas"){
                descuento = 0.10
            }
            else{
                descuento = 0.05
            }
        case 4:
                if(marca=="ArgentinaLuz"|| marca=="FelipieLamparas") {
                   descuento = 0.25
                }
                else{
                    descuento = 0.20
                }
            
         case 5:
                if(marca=="ArgentinaLuz") {
                   descuento = 0.40
                }
                else{
                    descuento = 0.30
                }
            
         default:
              descuento=0.50
         
        }
        precioConDescuento= precio - precio * descuento
        importeTotal = cantidadDeLamparas * precioConDescuento
        document.getElementById("txtIdprecioDescuento").value = importeTotal

        if(importeTotal>=120){
            iibb= importeTotal*0.10
          importeTotal = importeTotal+iibb
          alert("el importe total es: " + importeTotal + "y usted pago de iibb " + iibb )
        }
        else{
            alert("el importe total es: " + importeTotal)
        }
         
        }
