numMunecas=14;
numpayasos=27;
pesoMuneca=75;
pesoPayaso=112;
totalPesoMunecas = numMunecas * pesoMuneca;
totalPesoPayaso= numpayasos * pesoPayaso;
totalPedido= totalPesoMunecas + totalPesoPayaso;

console.log(totalPedido);




//muñecas y payasos venta
let numMuñecas = prompt("Ingrese número de muñecas");
let numPayasos = prompt("Ingrese número de payasos");
const pesoMuñeca = 75;
const pesoPayaso = 112;

function calcularPeso (){
    const totalPesoMuñecas = numMuñecas * pesoMuñeca;
    const totalPesoPayasos = numPayasos * pesoPayaso;
    let totalPedido = totalPesoMuñecas + totalPesoPayasos;
    return totalPedido;
} 
      
alert("El peso total es " + calcularPeso() + " g.")  
    