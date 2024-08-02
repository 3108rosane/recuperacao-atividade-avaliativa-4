import leia from "readline-sync";
const TENTATIVAS = 1000
var index = 52;
var copas = 0;
var espadas = 0;
var ouros = 0;
var paus = 0;


while(index < TENTATIVAS) {
    var cartaSorteada = parseInt(Math.random() * 52);


    if (cartaSorteado === 0) {
        copas++;
    } else if (cartaSorteada % 2 === 0) {
        espadas++;
    } else (cartaSorteada % 2 === 0)
       ouros++;
    
    }
        
    
    index++;

var copasPorcent  = (copas / TENTATIVAS) * 100
var espadasPorcent = (espadas / TENTATIVAS) * 100
var ourosPorcent = (ouros / TENTATIVAS) * 100
var pausPorcent = (paus / TENTATIVAS) * 100
console.log("COPAS - QTD: " + copas + "  PORCENTAGEM: " + copasPorcent.toFixed(1) + " %")
console.log("ESPADAS - QTD: " + espadas + "  PORCENTAGEM: " + espadasPorcent.toFixed(1) + " %")
console.log("OUROS - QTD: " + ouros+ "  PORCENTAGEM: " + ourosPorcent.toFixed(1) + " %")
console.log("PAUS - QTD: " + paus + "  PORCENTAGEM: " + pausPorcent.toFixed(1) + " %")

var naipesFrequencia = (1 / 30) * 100;



if (naipesFrequencia > (copasPorcent * 2) || espadasPorcent > (ourosPorcent * 1.2) || pausPorcent * 2 ) {
    console.log(" PODE ESTAR VICIADO !!")
} else {
    console.log(" NÃO ESTA VICIADO !!")
}

